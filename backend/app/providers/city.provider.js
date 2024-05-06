const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { NumericQueryResponse, stringQueryResponse } = require("../../common/common");
const City = db.City;
const User = db.User;
const Op = db.Sequelize.Op;


//=================== create City ============================

async function createCity(req, res) {       
    const DublicateData = await City.findOne({
        where: {
            code     : req.body.code,
            name     : req.body.name,
        },
    });
    if (DublicateData) {
        return 1;
    } else {
        Data = await City.create(req.body)
        return Data;
    }
}


//=================== get All City ============================

async function getAllCity (req, res) {      
           
    let id = req.query.id || "";
    let code = req.query.code || "";
    let name = req.query.name || "";
    let stateId = req.query.stateId|| "";        
    let Pagination = req.query.pagination;

    let condition;     
    let  response;    

    const { page, size, sortOrder,sortBy } = req.query;       
    const { limit, offset } = ApiHelper.getPagination(page, size); 

    if(id){
        id =  await NumericQueryResponse(id, columnName="id")
        condition = {where :{id},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }
    else if(code){
        code =  await stringQueryResponse(code,columnName="code")
        condition = {where :{code},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }                 
    else if(name){        
        name = await stringQueryResponse(name,columnName="name")
        condition = {where :{name},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    } else if(stateId){
        stateId = await NumericQueryResponse(stateId,columnName="stateId")
        condition = {where :{stateId},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }                          
                        
    response = await City.findAndCountAll(condition);    
            
    if(Pagination==='true'){
        response = ApiHelper.getPagingData(response, page, limit);

    }                      
    return response; 
}



async function getCities(req, res) {
    var Country_Id = req.query.Country_Id;
    // var Country_Id                         =  req.query.Country_Id;
    // userId                                 = req.countryId;
    // const { page, size, allowanceName }    = req.query;
    // const { limit, offset }                = ApiHelper.getPagination(page, size);
    // var condition                          = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
    const result = await City.findAndCountAll(
        {
            where: { Country_Id : Country_Id }
        }
        // {
        // where: { Country_Id : Country_Id }
        // where: condition,
        // limit,
        // offset
        // }
    );
    // const response = ApiHelper.getPagingData(AllowanceTypes, page, limit);
    return result;
}

//=================== show City ============================

async function showCity(req, res) {
    const id = req.params.id;
    cityData = await City.findByPk(id);
    if (cityData) {
        return cityData;
    }
}

//=================== update City ============================

async function updateCity(req, res) {
    const Id = req.query.id;       
    cityData = await City.update(req.body, {
        where: { id : Id },
    })
    if (cityData) {
        citydata = await City.findOne(
            { where: { id : Id },
        });
        return citydata;
        
    } else {
        return [];
    }
}

//=================== delete City ============================
async function deleteCity(req, res) {
    const Id = req.query.id;
    result = await City.destroy({
        where: { id: Id }
    })
    return result;
}



CityProvider = {
    createCity : createCity,
    showCity   : showCity,
    updateCity : updateCity,
    deleteCity : deleteCity,
    getAllCity : getAllCity,
    getCities  : getCities 
}
module.exports = CityProvider;