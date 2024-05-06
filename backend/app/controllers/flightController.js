const ApiHelper = require("../helpers/apiHelper")
const  FlightProvider  = require("../providers/flight.provider")
// Get all users
exports.oneWayTripList = async (req, res) => { 
        try{
              const Flight = await FlightProvider.OneWayTripList(req, res);              
              if (Flight.length != 0) {
                return ApiHelper.successError(res, 200, "Record Found", Flight);
              } else {
                return ApiHelper.successError(res, 404, 'Record not found', []);
              }
        }catch(error){      
          if(error.code){           
          return ApiHelper.successError(res, error.errCode , error);   
          }else{
            return ApiHelper.successError(res, 504 , "Something went wrong.please contact admin for more details!");  
          }
        }  
};

exports.roundTripList = async (req, res) => { 
      try{  
          const Flight = await FlightProvider.RoundTripList(req, res);
          
          if (Flight.length != 0) {
            return ApiHelper.successError(res, 200, "Record Found", Flight);
          } else {
            return ApiHelper.successError(res, 404, 'Record not found', []);
          }
      }catch(error){             
        if(error.code){           
          return ApiHelper.successError(res, error.errCode , error);   
          }else{
            return (res, 504 , "Something went wrong.please contact admin for more details!");  
          }  

      }       
};

exports.multiCityList = async (req, res) => { 
  try{  
      const Flight = await FlightProvider.MultiCityList(req, res);
      
      if (Flight.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", Flight);
      } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
      }
  }catch(error){             
    if(error.code){           
      return ApiHelper.successError(res, error.errCode , error);   
      }else{
        return ApiHelper.successError(res, 504 , "Something went wrong.please contact admin for more details!");  
      }
  }       
};

// International Search 

exports.InternationlOneWayTripList = async (req, res) => { 
  try{
        const Flight = await FlightProvider.InternationalOneWayTripList(req, res);
        
        if (Flight.length != 0) {
          return ApiHelper.successError(res, 200, "Record Found", Flight);
        } else {
          return ApiHelper.successError(res, 404, 'Record not found', []);
        }
  }catch(error){             
    if(error.code){           
      return ApiHelper.successError(res, error.errCode , error);   
      }else{
        return ApiHelper.successError(res, 504 , "Something went wrong.please contact admin for more details!");  
      }

  }  
};

exports.InternationlRoundTripList = async (req, res) => { 
try{  
    const Flight = await FlightProvider.InternationalRoundTripList(req, res);
    
    if (Flight.length != 0) {
      return ApiHelper.successError(res, 200, "Record Found", Flight);
    } else {
      return ApiHelper.successError(res, 404, 'Record not found', []);
    }
}catch(error){             
  return ApiHelper.successError(res, error.errCode , error);   

}       
};

exports.InternationlMultiCityList = async (req, res) => { 
try{  
const Flight = await FlightProvider.InternationalMultiCityList(req, res);

if (Flight.length != 0) {
  return ApiHelper.successError(res, 200, "Record Found", Flight);
} else {
  return ApiHelper.successError(res, 404, 'Record not found', []);
}
}catch(error){             
return ApiHelper.successError(res, error.errCode , error);   

}       
};


exports.oneWaySearchList = async (req, res) => { 
  try{
        const Flight = await FlightProvider.oneWaySearchList(req, res);              
        if (Flight.length != 0) {
          return ApiHelper.successError(res, 200, "Record Found", Flight);
        } else {
          return ApiHelper.successError(res, 404, 'Record not found', []);
        }
  }catch(error){      
    if(error.code){           
    return ApiHelper.successError(res, error.errCode , error);   
    }else{
      return ApiHelper.successError(res, 504 , "Something went wrong.please contact admin for more details!");  
    }
  }  
};


exports.roundTripSearch = async (req, res) => { 
  try{
        const Flight = await FlightProvider.roundTripSearch(req, res);              
        if (Flight.length != 0) {
          return ApiHelper.successError(res, 200, "Record Found", Flight);
        } else {
          return ApiHelper.successError(res, 404, 'Record not found', []);
        }
  }catch(error){      
    if(error.code){           
    return ApiHelper.successError(res, error.errCode , error);   
    }else{
      return ApiHelper.successError(res, 504 , "Something went wrong.please contact admin for more details!");  
    }
  }  
};











 