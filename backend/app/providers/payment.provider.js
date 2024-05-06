const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const RAZOR_PAY = require("../config/razorPay.config");
const crypto  = require("crypto");

const Payment = db.payment;


async function checkout(req, res) {    
    try {                        
        const instance = await RAZOR_PAY.instance({is_test:true});   
  
        let amount = req.body.amount; 
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
          };         
        return  await instance.orders.create(options);
                
    } catch (error) {                    
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    } 
}

async function getApiKey(req, res) {    
    try {                        
        const keys = await RAZOR_PAY.apikey({is_test:true});              
        return keys
                
    } catch (error) {                   
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    } 
}

async function paymentVerification(req, res){
  
    const { booking_id, razorpay_order_id, razorpay_payment_id, razorpay_signature  } = req.body;

    const keys = await RAZOR_PAY.apikey({is_test:true});          
    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
      .createHmac("sha256", keys.RAZORPAY_APT_SECRET)
      .update(body.toString())
      .digest("hex");
      
    const isAuthentic = expectedSignature === razorpay_signature;  
    if (isAuthentic) {
      // Database comes here
      let data = {
        bookingId : booking_id,
        orderId :razorpay_order_id ,
        paymentId: razorpay_payment_id,
        signature : razorpay_signature,
        status    : true
      }        
      await Payment.create(data);
  
      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    }else{
  
      let data = {
        bookingId : booking_id,
        orderId :razorpay_order_id ,
        paymentId: razorpay_payment_id,
        signature : razorpay_signature, 
        status    : 1                 
      }  
        res.redirect(
            `http://localhost:3000/paymentcancel?reference=${razorpay_payment_id}`
          );
    } 
  };


  async function createTransaction(req,res){

    let bookingId = req.body.bookingId;
    let orderId   = req.body?.orderId || "";
     
    const DublicateData = await Payment.findOne({
      where: {
          bookingId  : bookingId,          
      },
  });
  if (DublicateData) {
          return 1;
      } else {
        let Data;
        if(orderId){
          Data = await Payment.update(req.body,{
            where: { orderId : orderId },
            
        });
        return req?.body?.paymentId;
        }else{
          Data = await Payment.create(req.body)
          return Data;
        }
      }

       
  }


paymentProvider = {
    checkout            : checkout, 
    paymentVerification : paymentVerification,
    getApiKey           : getApiKey,
    createTransaction   : createTransaction
}

module.exports = paymentProvider;
  