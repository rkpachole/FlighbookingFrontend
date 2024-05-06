const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { query } = require("express");
const { GLOBAL_OBJ, returnGpsEnvObject } = require('../utils/bin/global');
const {getSplitWithString,getLogo, calculateFareDetails, calculateFareDetails2, ArrNoDupe, calculateFareDetailsRound, calculateFlightLayover, generateKeyforSSRInfo} = require("../../common/common");
const { GET, POST, PUT, DELETE, PATCH } = require("../../services/http");





async function search(req,res){
    try{

        let checkinDate  = req.body.checkinDate;
        let checkoutDate = req.body.checkoutDate;
        let paxInfo      = req?.body?.roomInfo || [];
        let city         = req.body.city;
        let nationality  = req.body.nationality;
        let currency     = req.body.currency;
        let ratings      = req.body.ratings;
        let fsc          = req.body.fsc;
        let sync         = req.body.sync;


        let searchPreferences = {
            "ratings": ratings,
            "fsc": fsc
        };

        let roomInfo = [];

        for(let room of paxInfo){
            let data = {
                "numberOfAdults": room.adults,
                "numberOfChild":room.childs,
                "childAge":room.childAge
            }
            roomInfo.push(data);
        }

        let searchCriteria = {
            "city": city,
            "nationality":nationality,
            "currency": currency
        }

        let searchData = { 
           "searchQuery":{
                "checkinDate"         : checkinDate,
                "checkoutDate"        : checkoutDate,
                "roomInfo"            : roomInfo,
                "searchCriteria"      : searchCriteria ,
                "searchPreferences"   : searchPreferences,                
        },
        "sync": sync, 
    }
    
    const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
    const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
    const endpoint = gpsEnv.endpoints.SEARCH_ALL_HOTEL;      

    const url = `${gpsEnv.host}${endpoint}`;    
    const headers = {
        apikey: gpsEnv.apiKey
    };                 
    const body = {
        searchData,
        url
     };

             
    const { data } = await POST(body, { headers });  
    
    let hotelData = data.searchResult?.his || [] ; 

    let response = {}; 
    let hotelDetail = [];   
    response.searchIds     = data.searchIds;
    response.searchQuery   = data.searchQuery;
        
    for(let hotelDetails of hotelData){
    
        let location = {
            "longitude" :hotelDetails?.gl?.ln,
            "latitude"  :hotelDetails?.gl?.lt
        }
    
        let hotelPricingAndServices = {};
        for(let fC of hotelDetails.pops){
            hotelPricingAndServices.Services = fC.fc;
            hotelPricingAndServices.Pricing = fC.tpc;
            
        }
        
    
        let details = {
            "id" : hotelDetails.id,
            "name" : hotelDetails.name,
            "image" : hotelDetails.img,
            "ratings" :   hotelDetails.rt,
            "location" :  location,
            "address"  : hotelDetails.ad,
            "PropertyType": hotelDetails.pt,
            "hotelServicesAndPricing" : hotelPricingAndServices,
            "uid" : hotelDetails.uid,
            "lhc" : hotelDetails.lhc,
            "ifca" : hotelDetails.ifca            
        }            
         hotelDetail.push(details);    
}
        response.hotelList  = hotelDetail;
    
    return response;

    }catch(error){        

        console.log(error);
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }

}

async function hotelDetails(req,res){
    try{

    let id  = req.body.id;   
    
    let searchData = {
        id  : id
    }

    const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
    const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
    const endpoint = gpsEnv.endpoints.HOTEL_DETAILS;      

    const url = `${gpsEnv.host}${endpoint}`;    
    const headers = {
        apikey: gpsEnv.apiKey
    };                 
    const body = {
        searchData,
        url
     };

             
    const { data } = await POST(body, { headers }); 
        
    let hotelDetails = {};
    let hotelPricingAndServices = {};
   
    let hotelLocation = {
            "longitude" :data.hotel?.gl?.ln,
            "latitude"  :data.hotel?.gl?.lt
        }
  
    
    for(let fC of data.hotel.pops){
            hotelPricingAndServices.Services = fC.fc;
            hotelPricingAndServices.Pricing  = fC.tpc;
    }
    
    let roomInformation = [];
    for(let roomInfo of data.hotel.ops){
         let tfcs = {
         BaseFare     : roomInfo.ris[0]?.tfcs?.BF,
         TaxesAndFare : roomInfo.ris[0]?.tfcs?.TAF,
         TotalFare    : roomInfo.ris[0]?.tfcs?.TF,
     }
    
    let PNPInfo = [];
    for(let perNighPrice of roomInfo.ris[0].pis){
        PNPInfo.push({day:perNighPrice.day,prices:{BaseFare:perNighPrice.fc.BF,texes:perNighPrice.fc.TAF,TotalPrice:perNighPrice.fc.TF }});
    }

    let roomDetails = {
                id                       : roomInfo.ris[0]?.id,
                RoomCategory             : roomInfo.ris[0]?.rc,
                RoomType                 : roomInfo.ris[0]?.rt,
                RoomType                 : roomInfo.ris[0]?.rt,
                adult                    : roomInfo.ris[0]?.adt,
                child                    : roomInfo.ris[0]?.chd,
                description              : roomInfo.ris[0]?.des,
                MealBasis                : roomInfo.ris[0]?.mb,
                totalPrice               : roomInfo.ris[0]?.tp,
                PricesInDetails          : tfcs,
                pricesWithTaxes          : roomInfo.ris[0]?.tafcs.TAF,
                perNightPriceInformation : PNPInfo,
                roomAmenities            : roomInfo.ris[0]?.fcs,
                roomImages               : roomInfo.ris[0]?.imgs,
                Benefits                 : roomInfo.ris[0].rexb.BENEFIT
            }
        
        roomInformation.push(roomDetails);        
    }
    
    hotelDetails.id= data.hotel.id,
    hotelDetails.name= data.hotel.name,
    hotelDetails.images= data.hotel.img,
    hotelDetails.descriptions = data.hotel.des,
    hotelDetails.rating = data.hotel.rt,
    hotelDetails.hotelLocation= hotelLocation,
    hotelDetails.listOfFacilities= data.hotel.fl,
    hotelDetails.propertyType= data.hotel.pt,
    hotelDetails.contactDetails = data.hotel?.cnt?.ph,
    hotelDetails.hotelPricingAndServices = hotelPricingAndServices,
    hotelDetails.ListOfRoomRelatedInformations = roomInformation,
    hotelDetails.hotelPolycies = data.hotel.inst

    return hotelDetails;

    }catch(error){        
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }

}


async function roomReview(req,res){
    try{
        let hotelId        = req.body.hotelId;   
        let optionId       = req.body.roomId;   
        
        let searchData = {
            hotelId     : hotelId,
            optionId    : optionId
        }

    const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
    const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
    const endpoint = gpsEnv.endpoints.ROOM_REVIEW;      

    const url = `${gpsEnv.host}${endpoint}`;    
    const headers = {
        apikey: gpsEnv.apiKey
    };                 
    const body = {
        searchData,
        url
     };
             
    const { data } = await POST(body, { headers }); 

if(data.hInfo){        
    let hotelDetails = {};
    let hotelPricingAndServices = {};
   
    let hotelLocation = {
            "longitude" :data.hInfo?.gl?.ln,
            "latitude"  :data.hInfo?.gl?.lt
        }

    for(let fC of data?.hInfo?.pops){
            hotelPricingAndServices.Services = fC.fc;
            hotelPricingAndServices.Pricing = fC.tpc;
    }
    
    let roomInformation = [];
    for(let roomInfo of data.hInfo.ops){
         let tfcs = {
         BaseFare     : roomInfo.ris[0]?.tfcs?.BF,
         TaxesAndFare : roomInfo.ris[0]?.tfcs?.TAF,
         TotalFare    : roomInfo.ris[0]?.tfcs?.TF,
     }
    
    let PNPInfo = [];
    for(let perNighPrice of roomInfo.ris[0].pis){
        PNPInfo.push({day:perNighPrice.day,prices:{BaseFare:perNighPrice.fc.BF,texes:perNighPrice.fc.TAF,TotalPrice:perNighPrice.fc.TF }});
    }

    let roomDetails = {
                id                       : roomInfo.ris[0]?.id,
                RoomCategory             : roomInfo.ris[0]?.rc,
                RoomType                 : roomInfo.ris[0]?.rt,
                RoomType                 : roomInfo.ris[0]?.rt,
                adult                    : roomInfo.ris[0]?.adt,
                child                    : roomInfo.ris[0]?.chd,
                description              : roomInfo.ris[0]?.des,
                MealBasis                : roomInfo.ris[0]?.mb,
                totalPrice               : roomInfo.ris[0]?.tp,
                PricesInDetails          : tfcs,
                pricesWithTaxes          : roomInfo.ris[0]?.tafcs.TAF,
                perNightPriceInformation : PNPInfo,
                roomAmenities            : roomInfo.ris[0]?.fcs,
                roomImages               : roomInfo.ris[0]?.imgs,
                Benefits                 : roomInfo.ris[0].rexb.BENEFIT
            }        
        roomInformation.push(roomDetails);        
    }
    
    hotelDetails.bookingId= data.bookingId,
    hotelDetails.alert= data.alerts,

    hotelDetails.id= data.hInfo.id,
    hotelDetails.name= data.hInfo.name,
    hotelDetails.images= data.hInfo.img,
    hotelDetails.descriptions = data.hInfo.des,
    hotelDetails.rating = data.hInfo.rt,
    hotelDetails.hotelLocation= hotelLocation,
    hotelDetails.listOfFacilities= data.hInfo.fl,
    hotelDetails.propertyType= data.hInfo.pt,
    hotelDetails.contactDetails = data.hInfo?.cnt?.ph,
    hotelDetails.hotelPricingAndServices = hotelPricingAndServices,
    hotelDetails.ListOfRoomRelatedInformations = roomInformation,
    hotelDetails.hotelPolycies = data.hInfo.inst

    return hotelDetails;
}
  return 0;

    }catch(error){        

        console.log(error);
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }

}



async function confirmBooking(req,res){
    try{

    let bookingId         = req.body.bookingId || "";   
    let email             = req.body.email || "" ;   
    let secondryEmail     = req.body.secondryEmail || "" ;
    let mobileNumber      = req.body.mobileNumber || "" ;
    let alternateNumber   = req.body.alternateNumber || "" ;
    let countryCode       = req.body.countryCode || "" ;
    let amount            = req.body.amount || "" ;
    let roomGestsInfo     = req.body.roomGestsInfo || "" ;

    let roomTravellerInfo = [roomGestsInfo];

    let emails            = [email,secondryEmail];
    let contacts          = [mobileNumber,alternateNumber]
    let code              = [countryCode]
    let deliveryInfo      = {emails:emails,contacts:contacts,code:code};
    let paymentInfos      = [{amount:amount}]

   

    let searchData = {
        bookingId         : bookingId,
        roomTravellerInfo : roomTravellerInfo,
        deliveryInfo      : deliveryInfo,
        type              : "HOTEL",
        paymentInfos      : paymentInfos,


    }

    const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
    const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
    const endpoint = gpsEnv.endpoints.CONFIRM_HOTEL_BOOKING;      

    const url = `${gpsEnv.host}${endpoint}`;    
    const headers = {
        apikey: gpsEnv.apiKey
    };                 
    const body = {
        searchData,
        url
     };
             
    const { data } = await POST(body, { headers }); 
        
    let hotelDetails = {};
    let hotelPricingAndServices = {};
   
    let hotelLocation = {
            "longitude" :data.hInfo?.gl?.ln,
            "latitude"  :data.hInfo?.gl?.lt
        }
  
    
    for(let fC of data.hInfo.pops){
            hotelPricingAndServices.Services = fC.fc;
            hotelPricingAndServices.Pricing = fC.tpc;
    }
    
    let roomInformation = [];
    for(let roomInfo of data.hInfo.ops){
         let tfcs = {
         BaseFare     : roomInfo.ris[0]?.tfcs?.BF,
         TaxesAndFare : roomInfo.ris[0]?.tfcs?.TAF,
         TotalFare    : roomInfo.ris[0]?.tfcs?.TF,
     }
    
    let PNPInfo = [];
    for(let perNighPrice of roomInfo.ris[0].pis){
        PNPInfo.push({day:perNighPrice.day,prices:{BaseFare:perNighPrice.fc.BF,texes:perNighPrice.fc.TAF,TotalPrice:perNighPrice.fc.TF }});
    }


    let roomDetails = {
                id                       : roomInfo.ris[0]?.id,
                RoomCategory             : roomInfo.ris[0]?.rc,
                RoomType                 : roomInfo.ris[0]?.rt,
                RoomType                 : roomInfo.ris[0]?.rt,
                adult                    : roomInfo.ris[0]?.adt,
                child                    : roomInfo.ris[0]?.chd,
                description              : roomInfo.ris[0]?.des,
                MealBasis                : roomInfo.ris[0]?.mb,
                totalPrice               : roomInfo.ris[0]?.tp,
                PricesInDetails          : tfcs,
                pricesWithTaxes          : roomInfo.ris[0]?.tafcs.TAF,
                perNightPriceInformation : PNPInfo,
                roomAmenities            : roomInfo.ris[0]?.fcs,
                roomImages               : roomInfo.ris[0]?.imgs,
                Benefits                 : roomInfo.ris[0].rexb.BENEFIT
            }
        
        roomInformation.push(roomDetails);        
    }
    
    hotelDetails.bookingId= data.bookingId,
    hotelDetails.alert= data.alerts,

    hotelDetails.id= data.hInfo.id,
    hotelDetails.name= data.hInfo.name,
    hotelDetails.images= data.hInfo.img,
    hotelDetails.descriptions = data.hInfo.des,
    hotelDetails.rating = data.hInfo.rt,
    hotelDetails.hotelLocation= hotelLocation,
    hotelDetails.listOfFacilities= data.hInfo.fl,
    hotelDetails.propertyType= data.hInfo.pt,
    hotelDetails.contactDetails = data.hInfo?.cnt?.ph,
    hotelDetails.hotelPricingAndServices = hotelPricingAndServices,
    hotelDetails.ListOfRoomRelatedInformations = roomInformation,
    hotelDetails.hotelPolycies = data.hInfo.inst


    return hotelDetails;

    }catch(error){     
        
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }

}

async function citySearch(req,res){
    try{       
            const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
            const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
            const endpoint = gpsEnv.endpoints.HOTEL_CITY_LIST;      

            const url = `${gpsEnv.host}${endpoint}`;    
            const headers = {
                apikey: gpsEnv.apiKey
            };                 
  

    const { data } = await GET(url, { headers });  

    let response = data?.response?.cil || [];
    return response;

    }catch(error){        

        console.log(error);
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }

}



hotelBookingProvider = {
    search              : search ,
    hotelDetails        : hotelDetails,
    roomReview          : roomReview,
    confirmBooking      : confirmBooking,
    citySearch          : citySearch
}

module.exports = hotelBookingProvider;