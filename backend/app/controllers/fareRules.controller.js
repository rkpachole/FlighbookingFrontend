const ApiHelper = require("../helpers/apiHelper");
const FareRuleProvider = require("../providers/fareRules.provider");


//===================  Create Or Insert New City  ============================

exports.serchRules = async (req, res) => {
    try{
        rulelist = await FareRuleProvider.searchFareRules(req, res);        
            if (rulelist.length != 0) {
                return ApiHelper.successError(res, 200, "Record Found", rulelist);
            } else {
                return ApiHelper.successError(res, 404, 'Record not found', []);
            }
    }catch(error){             
        return ApiHelper.successError(res, error.errCode , error);   
    }  
};

