const ApiHelper = require("../helpers/apiHelper");
const bookingProvider = require("../providers/booking.provider");


//===================  Domestic trip   ============================

exports.previewFlight = async (req, res) => {
    try{
    rulelist = await bookingProvider.previewFlight(req, res);
    if (rulelist.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", rulelist);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){  
        
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.addPassenger = async (req, res) => {
    try{
    rulelist = await bookingProvider.addPassenger(req, res);
    if (rulelist) {
        return ApiHelper.successError(res, 200, "Passenger add Sucessfully", rulelist);
    }else{
        return ApiHelper.successError(res, 405, "BookingId already Exists!");
    }
}catch(error){  
    if(error && !error?.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};



exports.bookingReview = async (req, res) => {
    try{
    rulelist = await bookingProvider.bookingreview(req, res);
    if (rulelist) {
        return ApiHelper.successError(res, 200, "Booking Review Data", rulelist);
    }else{
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){  
    if(error && !error.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.confirmbooking = async (req, res) => {
    try{
    rulelist = await bookingProvider.confirmbooking(req, res);
    if (rulelist) {
        return ApiHelper.successError(res, 200, "Booking data", rulelist);
    }else{
        return ApiHelper.successError(res, 404, 'Something went wrong. Unable to process your request right now. Please try again after some time');
    }
}catch(error){  
    if(error && !error.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.holdBooking = async (req, res) => {
    try{
    rulelist = await bookingProvider.holdBooking(req, res);
    if (rulelist) {
        return ApiHelper.successError(res, 200, "Hold Booking Success", rulelist);
    }else{
        return ApiHelper.successError(res, 404, 'Something went wrong. Unable to process your request right now. Please try again after some time');
    }
}catch(error){  
    if(error && !error.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }                
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};


exports.checkValidationOfBookingId = async (req, res) => {
    try{
    rulelist = await bookingProvider.checkValidationOfBookingId(req, res);
    if (rulelist) {
        return ApiHelper.successError(res, 200, "Success", rulelist);
    }else{
        return ApiHelper.successError(res, 404, 'Something went wrong. Unable to process your request right now. Please try again after some time');
    }
}catch(error){  
    if(error && !error.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

exports.seatMap = async (req, res) => {
try{
    rulelist = await bookingProvider.seatMap(req, res);    
    if (rulelist.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", rulelist);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){       
    
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};


exports.changeBookingStatus = async (req, res) => {
    try{
    rulelist = await bookingProvider.changeBookingStatus(req, res);
    if (rulelist) {
        return ApiHelper.successError(res, 200, "Booking status updated Successfully", rulelist);
    }else{
        return ApiHelper.successError(res, 469, 'Some thing went wrong', []);
    }
}catch(error){  
    if(error && !error.errCode){
        return ApiHelper.successError(res, 500 , "Something went wrong. for more Information Please contact admin!");   
    }           
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};

// Domestic Round Trip 

exports.previewFlightReturn = async (req, res) => {
    try{
    rulelist = await bookingProvider.previewFlightReturn(req, res);
    if (rulelist.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", rulelist);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){             
    return ApiHelper.successError(res, error.errCode , error);   
  }  
};


exports.bookingDetails = async (req, res) => {

     
    try{
     bookingData = await bookingProvider.bookingDetails(req, res);
    if (bookingData) {
        return ApiHelper.successError(res, 200, "Booking Details", bookingData);
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

exports.ConfirmholdBooking = async (req, res) => {     
    try{
     bookingData = await bookingProvider.ConfirmholdBooking(req, res);
    if (bookingData) {
        return ApiHelper.successError(res, 200, "Booking Details", bookingData);
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




exports.domesticCancellation = async (req, res) => {     
    try{
     cancellationData = await bookingProvider.domesticCancellation(req, res);
    if (cancellationData) {
        return ApiHelper.successError(res, 200, "Booking Details", cancellationData);
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


exports.domesticDateChange = async (req, res) => {     
    try{
     reissueData = await bookingProvider.domesticDateChange(req, res);
    if (reissueData) {
        return ApiHelper.successError(res, 200, "Booking Details", reissueData);
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


exports.getAmendments = async (req, res) => {     
    try{
        amendmentsData = await bookingProvider.getAmendments(req, res);
    if (amendmentsData) {
        return ApiHelper.successError(res, 200, "Amendments Data", amendmentsData);
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
