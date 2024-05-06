const ApiHelper = require("../helpers/apiHelper");
const bookingProvider = require("../providers/email.provider");


//===================  Domestic trip   ============================

exports.sendTicketMail = async (req, res) => {
    try{

    let emailData = await emailProvider.sendTicketMail(req, res);
    
    if (emailData.length != 0) {
        return ApiHelper.successError(res, 200, "Email Send Successfully", emailData);
    } else {
        return ApiHelper.successError(res, 404, 'Email fail to send', []);
    }
}catch(error){             
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

