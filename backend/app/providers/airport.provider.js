const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { NumericQueryResponse, stringQueryResponse } = require("../../common/common");
const { HasMany, Sequelize } = require("sequelize");
const Airport = db.Airports;
const User = db.User;
const Country = db.Country
const CountryFlag = db.CountryFlag
const Op = db.Sequelize.Op;


//=================== create City ============================

async function getAirPortList (req, res) {                           
    let airportList= {};
    let condition;
    let currentUserId = req.body.currentUser.id

    let countryData  = await getCuntryCode(currentUserId);

    let countryName = countryData[0]?.sortName || "";
    /**let countryName = "";*/
  
    const { page, size, search, role } = req.body;
    const { limit, offset } = ApiHelper.getPagination(page, size);
    var searchValue = search ? search : '';    

    if(countryName){
        condition =  {
            where: {                     
                [Op.or]: [
                    { code: { [Op.like]: `%${searchValue}%` } },
                    { countrycode: { [Op.like]: `%${searchValue}%` } },
                    { name: { [Op.like]: `%${searchValue}%` } },                                
                    { country: { [Op.like]: `%${searchValue}%` } }
                ], 
                [Op.and] : [{countrycode:countryName}]           
            },
            order: [
                ['id', 'DESC'],
            ]            
        }
    }
        
    if(searchValue){
        condition = {
            where: {                     
                [Op.or]: [
                    { code: { [Op.like]: `%${searchValue}%` } },
                    { countrycode: { [Op.like]: `%${searchValue}%` } },
                    { name: { [Op.like]: `%${searchValue}%` } },                                
                    { country: { [Op.like]: `%${searchValue}%` } }
                ]                 
            },
            order: [
                ['id', 'DESC'],
            ]           
        }
    }
    
    const response = await Airport.findAndCountAll(condition);    
    let data = [];
    let countryFlag;
    for(const list of response.rows){
        let countryCode = list.countrycode;
        
        countryFlag =  await CountryFlag.findOne(
            {
                where:{[Op.or]:[{fullCode:countryCode},{code:countryCode}]}
            }
        );   

       data.push({code:list.code,city:list.code+" - "+list.city,airportName: list.name, destinationFlight:list.code+" - "+list.country,countrycode:list.countrycode,flagUrl:countryFlag?.url || ""})
    }
   
     airportList.count = response?.count || 0 ;
     airportList.rows  = data;
      
     return airportList; 
}

async function getCuntryCode(body){
    try{
    let id  =  body    
    const result = await db.sequelize.query(`SELECT C.code, C.sortName, U.* FROM users as U left join countries as C on C.id = U.countryId where U.id=${id}`);
    
    return result[0] || "";
    }catch(error){
        console.log(error)
    }
}



AirportProvider = {
    getAirPortList : getAirPortList,
   
}
module.exports = AirportProvider;