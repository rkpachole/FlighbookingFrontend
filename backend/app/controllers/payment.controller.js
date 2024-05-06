const ApiHelper = require("../helpers/apiHelper");
const paymentProvider = require("../providers/payment.provider");


//===================  Create Or Insert New City  ============================

exports.checkout = async (req, res) => {
    try{
         rulelist = await paymentProvider.checkout(req, res);
    if (rulelist.length != 0) {
            return ApiHelper.successError2(res, 200, "Record Found", rulelist);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){             
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.getApiKey = async (req, res) => {
    try{
         rulelist = await paymentProvider.getApiKey(req, res);
    if (rulelist.length != 0) {
            return ApiHelper.successError(res, 200, "Record Found", rulelist);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){             
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};


exports.paymentVerification = async (req, res) => {
    try{
         rulelist = await paymentProvider.paymentVerification(req, res);   
}catch(error){             
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};


exports.createTransaction = async (req, res) => {
  try{
       payment = await paymentProvider.createTransaction(req, res);   
       if (payment == 1) {
        return ApiHelper.successError(res, 203, "booking id already exist !", []);
      }else{
        return ApiHelper.successError(res, 200, "Update Sucessfully!", payment);
      }
  }catch(error){             
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};
