const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
var bcrypt = require("bcryptjs");
var fs = require('fs');
const User = db.User;
const Country = db.Country;
const Booking = db.Booking
const adminRole = db.AdminRoles
const adminRolePermission = db.AdminRolePermission
const adminPage = db.AdminPages
const adminPagePermission = db.AdminPagePermission
const Op = db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');
const {sign, verify} = require('jsonwebtoken');
const { InvalidConnectionError, and } = require("sequelize");
const { NumericWithAndQueryResponse, StringWithAndQueryResponse, dateWithAndQueryResponse, nestedAndQueryResponse } = require("../../common/common");


//Here get all users
async function getAll(req, res) {
    const { page, size, search, role } = req.query;
    const { limit, offset } = ApiHelper.getPagination(page, size);
    var searchValue = search ? search : '';
    var roleValue = role ? role : '3';
    const Users = await User.findAndCountAll({
        where: {            
            [Op.or]: [
                { firstName: { [Op.like]: `%${searchValue}%` } },
                { lastName: { [Op.like]: `%${searchValue}%` } },
                { email: { [Op.like]: `%${searchValue}%` } },
                { mobileNumber: { [Op.like]: `%${searchValue}%` } }
            ]            

        },
        order: [
            ['id', 'DESC'],
        ],
        limit,
        offset
    });
    //console.warn(Users.rows);
    // Users.rows.forEach(UserData => {
    //     if (UserData.status == '1') {
    //         UserData.status = "Activate"
    //     } else if (UserData.status == '2') {
    //         UserData.status = "Deactivate"
    //     }
    // });
    const response = ApiHelper.getPagingData(Users, page, limit);
    return response;
}


//Here create/update user
async function createUpdate(req, res) {
    const sequelize = ApiHelper.getSequelize();
    const transaction = await sequelize.transaction();
    try {
        // Here prepare store data
        const user = {
            roleId       :  '3',
            firstName    :  req.body.firstName,
            lastName     :  req.body.lastName,
            mobileNumber :  req.body.mobileNumber,
            email        :  req.body.email,
            password     :  bcrypt.hashSync(req.body.password, 8),
            address      :  req.body.address,
            countryId    :  req.body.countryId,
            stateId      :  req.body.stateId,
            cityId       :  req.body.cityId,
            companyName  :  req.body.companyName,
            panNumber    :  req.body.panNumber,
            businessType :  req.body.businessType,
            gstNumber    :  req.body.gstNumber,
            website      :  req.body.website,
            status       :  req.body.status ? req.body.status : 1,
            
        };
        
        if(req.params && req.params.id){
            const id = req.params.id;
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            }
            updateUser = await User.update(user, {
                where: { id: id }
            })
            await transaction.commit();
            return updateUser;
        }else{
            const createUser = User.create(user)
            await transaction.commit();
            return createUser;
        }
    } catch (error) {
        await transaction.rollback();
        return [];
    }
}


//Get user using id
async function get(req, res) {
    const id = req.params.id;
    user = await User.findByPk(id);
    if (user) {
        return user;
    } else {
        return [];
    }
}

//Here destory user using id
async function destroy(req, res) {
    const id = req.params.id;
    result = await User.destroy({
        where: { id : id }
    })
    return result;
}

//Here activate/deactivate user using id
async function activateUser(req, res) {
    try {
        const userId = req.body.userId;
        const userData = await User.findOne({
            where: {
                userId : userId,
            },
        });
        if (userData) {
            const user = {
                status: req.body.status,
            };
            updateUserData = await User.update(user, {
                where: { userId: userId }
            })
            return updateUserData;
        } else {
            return []
        }
    } catch (error) {
        return []
    }
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

//Here change password using id
async function changePassword(req, res) {
    //try{
    var status = ''
    const userId = req.userId;
    const userData = await User.findOne({
        where: {
            userId: userId,
        },
    });
    var passwordIsValid = bcrypt.compareSync(
        req.body.old_password,
        userData.password
    );
    if (passwordIsValid) {
        const updateData = {
            password: bcrypt.hashSync(req.body.new_password, 8)
        }
        updateUserData = await User.update(updateData, {
            where: { userId: userId }
        })
        return passwordIsValid
    } else {
        return passwordIsValid
    }
}


//Here change password using id
async function registerAgent(req, res) {   
    try{      
    const email = req.body.email;
    const emailData = await User.findOne({
        where: {
            email: email,
        },
    });

    if(emailData){
        return false;
    }else{
        req.body.roleId = '4';
        req.body.password = bcrypt.hashSync(req.body.password);      
        return  await User.create(req.body); 
    }
}catch(error){
        let errData = error?.response?.data?.errors[0]
        if(!errData){
            throw error
        }            
        throw errData
    }
}


//Here agent login 
async function loginAgent(req, res) {            
    try{                                                             
            let email = req.body.email;
            const data = await User.findOne({                            
                 where: {
                    [Op.and]: [
                        {email: email},
                        { roleId: 4}
                      ]                            
                 },
            });   
        if(data){        
            
            let currency = await Country.findOne({
                where:{
                    id: data.countryId
                }
            });
                let userData = {
                    id:data.id,
                    email: data.email,
                    roleId: data.roleId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    mobileNumber: data.mobileNumber,                        
                    address: data.address,            
                    companyName: data.companyName,
                    panNumber: data.panNumber,
                    businessType: data.businessType,
                    gstNumber:data.gstNumber,
                    website: data.website,
                    currency : currency?.currency || ""
                }             
             let validPassword =  await bcrypt.compare(req.body.password, data.password); 
        if(validPassword){
            userData.token = token({id: data.id,email: data.email, roleId: data.roleId, session_id: uuidv4()});          
            return userData; 
        }else{
            return false;
        }         
    }else{
        return false;
    }                    
    }catch(error){
        throw error
    }       
}


// Here booking list 

async function bookingList(req, res) {            
    try{                     
        
        let userId          = parseInt(req?.body?.currentUser?.id) || ""        
        let bookingId       = req.body.bookingId || "";    
        let PNR             = req.body.PNR || "";
        let isDomestic      = req.body.isDomestic || "";
        let bookingType     = req.body.bookingType || "";        
        let bookingStatus   = req.body.status || "";                                    
        let startDate       = req.body.startDate || "";
        let endDate         = req.body.endDate || "";

        let condition;   
        let response;    
        let Pagination = req?.body?.pagination;
    
        const { page, size, sortOrder,sortBy } = req.body;                                    
        const { limit, offset } = ApiHelper.getPagination(page, size);                                                                                 
        
        condition =  await nestedAndQueryResponse(body={id :`${bookingId}`,PNR:`${PNR}`,isDomestic:`${isDomestic}`,bookingType: `${bookingType}`,bookingStatus: `${bookingStatus}`, startDate:startDate,endDate:endDate,agentId :`${req.body.currentUser.id}`});

        if(!condition){
            condition = {
                where:{
                    agentId : userId
            }}   
        }        
        response = await Booking.findAndCountAll(condition);             

        if(Pagination==='true'){
            response = ApiHelper.getPagingData(response, page, limit);    
        }    
    
        return response;                       
    }catch(error){
        throw error
    }       
}


async function bookingDetailsById(req, res) {            
    try{                     
        
        let userId       = parseInt(req?.body?.currentUser?.id) || ""        
        let bookingId    = req.query.bookingId || "";    
        let PNR          = req.query.PNR || "";
        let isDomestic   = req.query.isDomestic || "";
        let bookingType  = req.query.bookingType || "";        
        let status       = req.query.status || ""; 

        let condition;   
        let response;    
        let Pagination = req?.query?.pagination;
    
        const { page, size, sortOrder,sortBy } = req.query;       
        const { limit, offset } = ApiHelper.getPagination(page, size); 

        if(bookingId){
            bookingId =  await NumericWithAndQueryResponse(bookingId, columnName="bookingId",AndData=parseInt(`${req.body.currentUser.id}`),andColumnName="agentId")
            condition = {where :bookingId, order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}            
        }                      
        if(PNR){
            PNR =  await StringWithAndQueryResponse(PNR, columnName="PNR",AndData=parseInt(`${req.body.currentUser.id}`),andColumnName="agentId")
            condition = {where :PNR, order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
        }           
        else if(isDomestic){
            isDomestic =  await StringWithAndQueryResponse(isDomestic,columnName="isDomestic",AndData= parseInt(`${req.body.currentUser.id}`),andColumnName="agentId")
            condition = {where :isDomestic,order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
        }
        else if(bookingType){        
            bookingType = await StringWithAndQueryResponse(bookingType,columnName="bookingType",AndData=parseInt(`${req.body.currentUser.id}`),andColumnName="agentId")
            condition = {where :bookingType,order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
        }       
        else if(status){        
            status = await StringWithAndQueryResponse(status,columnName="status",AndData=parseInt(`${req.body.currentUser.id}`),andColumnName="agentId")
            condition = {where :status,order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
        }

        if(!condition){
            condition = {
                where:{
                    agentId : userId
            }}            
            response = await Booking.findAndCountAll(condition);  
        }    
            response = await Booking.findAndCountAll(condition);  

        if(Pagination==='true'){
            response = ApiHelper.getPagingData(response, page, limit);    
        }        
        return response;                       
    }catch(error){
        throw error
    }       
}


async function getUserPermission(req, res) {       
        let userId  = req.body.currentUser.id;
        //  const adminRole = db.AdminPages
        //  const adminRolePermission = db.AdminRolePermission
        //  const adminPage = db.AdminPages

        let condition = {
                    include:[{
                                model: adminPagePermission,
                                as   : "permission",
                                attributes: ['id', 'name']
                             }
                            ],                                
                    where:  {
                                role_id: 1
                            }       
        }               
        let adminPermissions =  await adminRolePermission.findAll(condition,{attributes: ['id', 'name']});  
        for (const iterator of adminPermissions) {

            let adminPages = [];
             for (const dd of iterator.permission) {
                
                let condition = {  
                    attributes: ['id', 'name','url'],                                                
                    where:  {
                                id: dd.id
                            }       
                     }               
                  //adminPages.push(await adminPage.findAll(condition,{attributes: ['id', 'name']})) || [];    
                   let dataa = await adminPage.findAll(condition,{attributes: ['id', 'name']})     
                   
                    for (const pages of dataa) {                        
                        adminPages.push({pageName: pages.name,pageUrl:pages.url,pagePermissions:dd.name})
                    }

                  delete dd.dataValues.id;
                  delete dd.dataValues.name;

                  dd.dataValues.pages = adminPages;
             }             
        }
        return adminPermissions
 }


const token = (data, expiresIn) => {        
    const payload = {...data};
    return sign(payload, process.env.ACCESS_TOKEN, {expiresIn: expiresIn || "15h"});
}


UserProvider = {
    getAll              :  getAll,
    createUpdate        :  createUpdate,
    get                 :  get,
    destroy             :  destroy,
    activateUser        :  activateUser,
    updateProfile       :  updateProfile,
    changePassword      :  changePassword,
    registerAgent       :  registerAgent,
    loginAgent          :  loginAgent,
    bookingList         :  bookingList,
    getUserPermission   : getUserPermission
}
module.exports = UserProvider;