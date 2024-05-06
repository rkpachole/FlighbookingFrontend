const ApiHelper = require("../helpers/apiHelper");
const airportProvider = require("../providers/airport.provider");


//===================  Get Air port list ============================

exports.airportList = async (req, res) => {
    try{
        
    airPortlist = await airportProvider.getAirPortList(req, res);
    if (airPortlist.length != 0) {
        return ApiHelper.successError(res, 200, "AIRPORT_LIST_SUCCESS", airPortlist);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){  
           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};