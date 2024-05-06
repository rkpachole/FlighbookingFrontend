const { GLOBAL_OBJ, returnGpsEnvObject } = require('../utils/bin/global');
const ApiHelper = require("../helpers/apiHelper");
const Razorpay = require('razorpay');
const RAZOR_PAY = {};
                       

RAZOR_PAY.instance = async (payload) => {
    try {

        const { keys } = GLOBAL_OBJ['razorPayConfig'];
        const Env = returnGpsEnvObject(payload.is_test, keys);
       
        const instance = new Razorpay({            
            key_id      : Env.RAZORPAY_API_KEY,
            key_secret  : Env.RAZORPAY_APT_SECRET,
          });
            
        return instance;
    } catch (error) {                          
        throw { errorCode : 408, message:"Payment method secrete key Not Found"};
    }
}

RAZOR_PAY.apikey = async (payload) => {
    try {
        const { keys } = GLOBAL_OBJ['razorPayConfig'];
        const Env = returnGpsEnvObject(payload.is_test, keys);                
        return Env;
    } catch (error) {                          
        throw { errorCode : 408, message:"Payment method secrete key Not Found"};
    }
}


module.exports = RAZOR_PAY;  


