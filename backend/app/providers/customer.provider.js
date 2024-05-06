const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
var bcrypt = require("bcryptjs");
var fs = require('fs');
const Customer = db.Customer;
const { InvalidConnectionError } = require("sequelize");
const { NumericQueryResponse, stringQueryResponse, NumericWithAndQueryResponse, StringWithAndQueryResponse } = require("../../common/common");


//Here get all Customer
async function getAll (req, res) {            

    let id           = req.query.id || "";    
    let firstName    = req.query.firstName || "";
    let lastName     = req.query.lastName || "";
    let mobileNumber = req.query.mobileNumber || ""; 
    let passport     = req.query.passport || ""; 
    let email        = req.query.email || "";    
    let status       = req.query.status || ""; 
        
    let condition;   
    let response;    
    let Pagination = req.query.pagination;

    const { page, size, sortOrder,sortBy } = req.query;       
    const { limit, offset } = ApiHelper.getPagination(page, size);                
    if(id){
        id =  await NumericWithAndQueryResponse(id, columnName="id",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :id, order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }                      
    if(firstName){
        firstName =  await StringWithAndQueryResponse(firstName, columnName="firstName",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :firstName, order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }   
    
    else if(lastName){
        lastName =  await StringWithAndQueryResponse(lastName,columnName="lastName",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :{lastName},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }
    else if(email){        
        email = await StringWithAndQueryResponse(email,columnName="email",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :{email},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }
    else if(mobileNumber){        
        mobileNumber = await StringWithAndQueryResponse(mobileNumber,columnName="mobileNumber",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :{mobileNumber},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }
    else if(passport){        
        passport = await StringWithAndQueryResponse(passport,columnName="passport",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :{passport},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }   
    else if(status){        
        status = await NumericWithAndQueryResponse(status, columnName="status",AndData=parseInt(`${req.body.currentUser.id}`))
        condition = {where :{status},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }        

    if(!condition){
        condition = {
            where:{
            agentRef : req.body.currentUser.id
        }}
        response = await Customer.findAndCountAll(condition);  
    }    
         response = await Customer.findAndCountAll(condition);  


    if(Pagination==='true'){
        response = ApiHelper.getPagingData(response, page, limit);

    }    

    return response;            
}


//Here create/update Customer
async function createUpdate(req, res) {
    const sequelize = ApiHelper.getSequelize();
    const transaction = await sequelize.transaction();
    try {
        // Here prepare store data        
        const customer = {
            title: req.body.title,
            roleId       :  '3',
            firstName    :  req.body.firstName,
            lastName     :  req.body.lastName,
            gender       :  req.body.gender, 
            mobileNumber :  req.body.mobileNumber,
            email        :  req.body.email,                       
            passport     :  req.body.passport,       
            DOB          :  req.body.dob,
            status       :  true,
            passportExp  :  req.body.passportExp,
            agentRef     :  req.body.currentUser.id            
        };           
                        
        if(req.params && req.params.id){
            const id = req.params.id;           
            updateUser = await Customer.update(customer, {
                where: { id: id }
            })
            await transaction.commit();
            return updateUser;
        }else{
            const createCustomer = Customer.create(customer)
            await transaction.commit();
            return createCustomer;
        }
    } catch (error) {
        await transaction.rollback();
        return [];
    }
}


//Get user using id
async function get(req, res) {
    const id = req.params.id;
    user = await Customer.findByPk(id);
    if (user) {
        return user;
    } else {
        return [];
    }
}

//Here destory user using id
async function destroy(req, res) {
    const id = req.params.id;
    result = await Customer.destroy({
        where: { id : id }
    })
    return result;
}


//Here update profile using id
async function updateProfile(req, res) {
    const userId = req.userId;
    const sendUserData = {
        firstName   : req.body.firstName,
        lastName    : req.body.lastName,
        email       : req.body.email,
        phone       : req.body.phone,
    }
    var name = req.body.fileName;
    var img  = req.body.base64Image;
    if(img){
        var realFile = Buffer.from(img,"base64");
        fs.writeFile('public/'+name, realFile, function(err) {
        if(err)
            console.log("err"+err)
        }); 
    }
    if(name){
        sendUserData.profileImage = 'http://ec2-3-216-80-17.compute-1.amazonaws.com:3000/public/'+name;
    }
    
    updateUserData = await User.update(sendUserData, {
        where: { userId : userId }
    });

    if (updateUserData == 1) {
        getUserData = await User.findOne({
            where: { userId : userId }
        })
        return getUserData
    } else {
        return false;
    }
}



UserProvider = {
    getAll          :  getAll,
    createUpdate    :  createUpdate,
    get             :  get,
    destroy         :  destroy,    
    updateProfile   :  updateProfile,    
}
module.exports = UserProvider;