const ApiHelper = require("../helpers/apiHelper");
const hotelBookingProvider = require("../providers/hotelBooking.Provider");


exports.search = async (req, res) => {     
    try{
     searchData = await hotelBookingProvider.search(req, res);
    if (searchData) {
        return ApiHelper.successError(res, 200, "Hotel Search Data", searchData);
    }else{
        return ApiHelper.successError(res, 405, "Record not found!");
    }
}catch(error){  
    if(error && !error?.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.citySearch = async (req, res) => {     
    try{
     searchData = await hotelBookingProvider.citySearch(req, res);
    if (searchData) {
        return ApiHelper.successError(res, 200, "City Search Data", searchData);
    }else{
        return ApiHelper.successError(res, 405, "Record not found!");
    }
}catch(error){  
    if(error && !error?.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};



exports.hotelDetails = async (req, res) => {     
    try{
     hotelData = await hotelBookingProvider.hotelDetails(req, res);
    if (hotelData) {
        return ApiHelper.successError(res, 200, "Hotel Details", hotelData);
    }else{
        return ApiHelper.successError(res, 405, "Record not found!");
    }
}catch(error){  
    if(error && !error?.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.roomReview = async (req, res) => {     
    try{
     roomData = await hotelBookingProvider.roomReview(req, res);
    if (roomData) {
        return ApiHelper.successError(res, 200, "Rooms review Data", roomData);
    }else{
        return ApiHelper.successError(res, 405, "Record not found!");
    }
}catch(error){  
    if(error && !error?.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.confirmBooking = async (req, res) => {     
    try{
     hotelBookingData = await hotelBookingProvider.confirmBooking(req, res);
    if (hotelBookingData) {
        return ApiHelper.successError(res, 200, "Booking Data", hotelBookingData);
    }else{
        return ApiHelper.successError(res, 405, "Record not found!");
    }
}catch(error){  
    if(error && !error?.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

