const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { query } = require("express");
const { NumericQueryResponse, stringQueryResponse } = require("../../common/common");
const States = db.State
const User = db.User;
const Op = db.Sequelize.Op;


//=================== create State ============================

async function createState(req, res) {    
       
    const DublicateData = await States.findOne({
        where: {
            code     : req.body.code,
            name     : req.body.name,
        },
    });
    if (DublicateData) {
        return 1;
    } else {
        Data = await States.create(req.body)
        return Data;
    }
}


//=================== get All State ============================    

async function getAllState (req, res) {        
            let id = req.query.id || "";
            let code = req.query.code || "";
            let name = req.query.name || "";
            let sortName = req.query.sortName || "";
            let countryId = req.query.countryId || "";            
            let condition;  
            let  response;   

            let Pagination = req.query.pagination;        
            const { page, size, search, sortOrder,sortBy } = req.query;       
            const { limit, offset } = ApiHelper.getPagination(page, size);                
            if(id){
                id =  await NumericQueryResponse(id, columnName="id")
                condition = {where :{id},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
            }
            else if(code){
                code =  await stringQueryResponse(code,columnName="code")
                condition = {where :{code},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
            }             
            else if(sortName){
                sortName =  await stringQueryResponse(sortName,columnName="sortName")
                condition = {where :{sortName},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
            }else if(name){        
                name = await stringQueryResponse(name,columnName="name")
                condition = {where :{name},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
            } else if(countryId){
                countryId = await NumericQueryResponse(countryId,columnName="countryId")
                condition = {where :{countryId},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
            }                          
                        

            response = await States.findAndCountAll(condition);    
            
            if(Pagination==='true'){
                response = ApiHelper.getPagingData(response, page, limit);
            }                      
            return response;            
}

// async function getAllState(req, res) {
//     const { page, size, search, sortOrder,sortBy } = req.query;       
//     const { limit, offset } = ApiHelper.getPagination(page, size);
//     var searchValue = search ? search : '';    
//     const states = await States.findAndCountAll({
//         where: {
//             [Op.or]: [                                                
//                 { code: { [Op.like]: `%${searchValue}%` } },                
//                 { name: { [Op.like]: `%${searchValue}%` } },
//                 { sortName: { [Op.like]: `%${searchValue}%` } },
//                 { countryId: { [Op.eq]: parseInt(searchValue) } },                
//             ],
//         },
//         order: [
//             [sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC'],
//         ],
//         limit,
//         offset
//     });
//     const response = ApiHelper.getPagingData(states, page, limit);
//     return response;
// } 

async function updateState(req, res) {
   
    const Id = req.query.id;       
    StateData = await State.update(req.body, {
        where: { id : Id },
    })
    if (StateData) {
        Statedata = await State.findOne(
            { where: { id : Id },
        });
        return Statedata;
        
    } else {
        return [];
    }
}

//=================== delete State ============================

async function deleteState(req, res) {
    const Id = req.query.id;
    result = await States.destroy({
        where: { id: Id }
    })
    return result;
}


StateProvider = {
    createState : createState,    
    updateState : updateState,
    deleteState : deleteState,
    getAllState : getAllState,      
}
module.exports = StateProvider;