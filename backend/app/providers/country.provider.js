const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { NumericQueryResponse, stringQueryResponse } = require("../../common/common");
const Country = db.Country;
const User = db.User;
const Op = db.Sequelize.Op;


//=================== create Country ============================

async function createCountry(req, res) {

    const DublicateData = await Country.findOne({
        where: {
            name  : req.body.name,
        },
    });
    if (DublicateData) {
        return 1;
    } else {
        Data = await Country.create(req.body)
        return Data;
    }
}





//     const countryObj = {
//         Country_Name_Eng   :  req.body.Country_Name_Eng,
//         Country_Name_Ar    :  req.body.Country_Name_Ar,
//         Currency_Id        :  req.body.Currency_Id,
//         Maps_IP            :  req.body.Maps_IP,
//     };
//     countryData = await Country.create(countryObj)
//     if (countryData) {
//         return countryData;
//     } else {
//         return [];
//     }
// }

//=================== get All Country ============================

async function getAll (req, res) {        
    let id = req.query.id || "";
    let code = req.query.code || "";
    let name = req.query.name || "";
    let sortName = req.query.sortName || "";               
    let condition;   
    let  response;    
    let Pagination = req.query.pagination;

    const { page, size, search, sortOrder,sortBy } = req.query;       
    const { limit, offset } = ApiHelper.getPagination(page, size);                
    if(id){
        id =  await NumericQueryResponse(id, columnName="id")
        condition = {where :{id},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }               
    else if(sortName){
        sortName =  await stringQueryResponse(sortName,columnName="sortName")
        condition = {where :{sortName},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }else if(name){        
        name = await stringQueryResponse(name,columnName="name")
        condition = {where :{name},order: [[sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC']],limit:limit,offset:offset}
    }                         
                
    response = await Country.findAndCountAll(condition);    

    if(Pagination==='true'){
        response = ApiHelper.getPagingData(response, page, limit);

    }    
    return response;            
}

//=================== show Country ============================

async function showCountry(req, res) {
    const id = req.params.id;
    countryData = await Country.findByPk(id);
    if (countryData) {
        return countryData;
    }
}

//=================== update Country ============================

async function updateCountry(req, res) {
    const Id = req.params.id;
    const country = {
        Country_Name_Eng   : req.body.Country_Name_Eng,
        Country_Name_Ar    : req.body.Country_Name_Ar,
        Currency_Id        : req.body.Currency_Id,
        Maps_IP            : req.body.Maps_IP,
    };
    countryData = await Country.update(country, {
        where: { Country_Id : Id },
    })
    if (countryData) {
        countrydata = await Country.findOne(
            { where: { Country_Id : Id },
        });
        return countrydata;
        
    } else {
        return [];
    }
}

//=================== delete Country ============================

async function deleteCountry(req, res) {
    const Id = req.params.id;
    result = await Country.destroy({
        where: { Country_Id : Id }
    })
    return result;
}



CountryProvider = {
    createCountry   : createCountry,
    showCountry     : showCountry,
    updateCountry   : updateCountry,
    deleteCountry   : deleteCountry,
    getAllCountries : getAll
}
module.exports = CountryProvider;