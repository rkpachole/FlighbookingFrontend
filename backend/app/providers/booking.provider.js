const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { query } = require("express");
const { GLOBAL_OBJ, returnGpsEnvObject } = require('../utils/bin/global');
const {getSplitWithString,getLogo, calculateFareDetails, calculateFareDetails2, ArrNoDupe, calculateFareDetailsRound, calculateFlightLayover, generateKeyforSSRInfo} = require("../../common/common");
const { GET, POST, PUT, DELETE, PATCH } = require("../../services/http");
const { saveBookingDetails, saveFlightDetails, savePassengerDetails, savePassengerContactDetails } = require("../../services/bookingServices");


const Booking = db.Booking;
const Flight = db.FlightDetails;
const Passenger = db.PassengerInfo;
const FlightContact = db.FlightContactDetails;
const Amendments   = db.Amendments;
const Op = db.Sequelize.Op;


//=================== Domestic flight  ============================

async function previewFlight(req, res) {    
    try {                        
        let priceIds = req.body.priceIds    
        let flightSearchDetails ={};      
        searchData = {
            priceIds:priceIds        
        }    
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEAECHED_FLIGHT_REVIEW;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers }); 
        
        //return data;
    
        let flightInfo =  data?.tripInfos || [];  
        let paxInfo = data?.searchQuery?.paxInfo || ""; 
        let routeInfo = data?.searchQuery?.routeInfos;
        let alerts   = data?.alerts || []  
        let flightLayover = [];
        let layover =[];
        let totalPriceInfo = data?.totalPriceInfo;

        flightSearchDetails.seasionDetail = {isDomestic:data?.searchQuery?.isDomestic,
                 searchType:data?.searchQuery?.searchType,
                 bookingId:data?.bookingId,
                 requestId:data?.searchQuery?.requestId,paxInfo:paxInfo,
                 preferredFareType:data?.searchQuery?.searchModifiers?.pft
        } 
              
        
        flightSearchDetails.routeInfo = routeInfo;
        for (const flights of flightInfo) {               
            let flightList = [];
            for (const segmentInformation of flights.sI) {
                
                let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
                let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");              
                let departureDate           = departureDateAndTime[0]
                let departureTime           = departureDateAndTime[1]
                let arrivalDate             = arivalDateAndTime[0]   
                let arrivalTime             = arivalDateAndTime[1] 
                let fareDetail;

                let hours = Math.floor(segmentInformation.duration / 60);          
                let minutes = segmentInformation.duration % 60;
                let duration;
                if(minutes<10){
                    duration = hours+"h - "+"0"+minutes+"m";
                }else{
                    duration = hours+"h - "+minutes+"m";
                }

                let FlightCode = segmentInformation?.fD?.aI?.code;

                let ssrINFO = await generateKeyforSSRInfo(segmentInformation)
                
                
                let logo = await getLogo(FlightCode);            
                let flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightLogo                  : logo,
                    flightStops                 : segmentInformation.stops,
                    flightDuration              : duration,
                    departureAirportInformation : segmentInformation.da,
                    arrivalAirportInformation   : segmentInformation.aa,                    
                    departureDate               : departureDate,
                    departureTime               : departureTime,
                    arrivalDate                 : arrivalDate,
                    arrivalTime                 : arrivalTime,
                    ssrInfo                     : ssrINFO || segmentInformation.ssrInfo,
                    ac                          : segmentInformation.ac
                }                                            
                flightList.push(flightDatails);   
                flightLayover.push({flightId:segmentInformation.id,departureDate:departureDate,departure:departureTime,arrivalDate:arrivalDate,arrival:arrivalTime})                                       
            }                           
              
            let lay =  await calculateFlightLayover(flightLayover) ; 
            fareDetail =  await calculateFareDetails2(flights.totalPriceList,totalPriceInfo);      

            flightSearchDetails.listOfFlight     = flightList
            flightSearchDetails.fareDetail       = fareDetail
            flightSearchDetails.alerts           = alerts
            flightSearchDetails.layover          = lay
            
            
        }        
                
        return flightSearchDetails;           
    } catch (error) {   

        console.log(error)
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    } 
}

async function previewFlightReturn(req, res) {    
    try {                        
        let priceIds = req.body.priceIds   
        let flightSearchDetails ={};                 
        searchData = {
            priceIds:priceIds,
            "priceValidation": true,    
            "fT": "",
            "spids": [],
            "tripId": ""
        }
    
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEAECHED_FLIGHT_REVIEW;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers });   
   

        let listOfFlight = {};
        let flightInfo =  data?.tripInfos;  
        let paxInfo = data?.searchQuery?.paxInfo || "";     
        let  = data?.searchQuery?.paxInfo || ""; 
        let routeInfo = data?.searchQuery?.routeInfos;
        let totalPriceInfo = data?.totalPriceInfo;
        let alerts   = data?.alerts || []               
        flightSearchDetails.seasionDetail = {isDomestic:data?.searchQuery?.isDomestic,
                searchType:data?.searchQuery?.searchType,
                 bookingId:data?.bookingId,
                 requestId:data?.searchQuery?.requestId,paxInfo:paxInfo,
                 preferredFareType:data?.searchQuery?.searchModifiers?.pft
        }                         
        flightSearchDetails.routeInfo = routeInfo;
        let flightList = [];              
        let Onword = await  reviewReturnData(flightInfo[0],paxInfo);
        let ReturnFlight = await reviewReturnData(flightInfo[1],paxInfo)
        
        listOfFlight['Onword'] = Onword,
        listOfFlight['Return'] = ReturnFlight,

        flightSearchDetails.listOfFlight = listOfFlight;
        fareDetail =  await calculateFareDetailsRound(totalPriceInfo)   
    
        flightSearchDetails.fareDetail = fareDetail;

        return flightSearchDetails;   
        
    } catch (error) {     
            
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    } 
}

async function addPassenger(req,res){
    try{        
         let data = req.body
         let flight;
         let passenger;
         let contact ;

        let booking =  await saveBookingDetails(data);

        if(booking === false){
            return false;
        }

        if(booking){
           flight =  await saveFlightDetails(data);
        }
        if(flight){            
             passenger = await savePassengerDetails(data);
         }
        if(passenger){
            contact = await savePassengerContactDetails(data);                          
         }
         
      return {booking,flight,passenger,contact};
                
    }
    catch(error){   
        
        console.log("Addpassander",error)
        throw error
    }
}

async function bookingReview(req,res){
    try{
                
        let bookingId = req.body.bookingId            
        let seatPosition = [];
       
        searchData = {
            bookingId:bookingId        
        }
    
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.FLIGHT_SEAT_MAP;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers });    
    
            
        let seatMapData = data?.tripSeatMap?.tripSeat;
  
        const keys = Object.keys(seatMapData);
        let flightDetails;

            keys.forEach(_k => {
                flightDetails = seatMapData[_k]                
            });
        
        return flightDetails;
    }
    catch(error){
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }
}

async function seatMap(req,res){
    try{
        
        let bookingId = req.body.bookingId            
        let seatPosition = [];
       
        searchData = {
            bookingId:bookingId        
        }
    
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.FLIGHT_SEAT_MAP;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };         
        const { data } = await POST(body,{ headers });
        
        let seatMapData = data?.tripSeatMap?.tripSeat || [];   
        let key;
        const keys = Object.keys(seatMapData);

        
        let flightDetails = [];
        let finalFlightDetails = [];
        let priceData = [];     
            keys.forEach(_k => {
                key = _k
                let seatMap = seatMapData[_k]
                let sInfo =  seatMap?.sInfo  
                let sData = seatMap.sData  
                
                if(sInfo){
                    for(let seatPosition of sInfo){                        
                        priceData.push(seatPosition.amount)                                                        
                    }           
                }
                flightDetails.push({sData:sData,flightKey:key,sInfo:sInfo,prices:priceData})
            });            
            for(let dataa of flightDetails){
                let fData ;
                fData = await ArrNoDupe(dataa.prices);
                let seatPosition = [];

                if(dataa?.sInfo){
                for(const SC of dataa?.sInfo){ 
                    let priceColor;              
                    // to Set the color for seat behalf of price;
                    for(const color of fData ){  
                        key =  dataa?.flightKey;                     
                        if(color.price == SC.amount){                           
                            priceColor = color.color
                        }                    
                    }                    
                    seatPosition.push({seatNo:SC.seatNo,seatPosition:SC.seatPosition,isBooked:SC.isBooked,isAisle:SC.isAisle,key:key,code:SC.code,amount:SC.amount,color:priceColor,ctds:SC.ctds})                        
                }
            }
                finalFlightDetails.push({sData:dataa.sData,sInfo:seatPosition,prices:fData})
              
            }
        
        return finalFlightDetails;
    }    
    catch(error){

        console.log(error);
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }
}


async function holdBooking(req,res){
    try{                
        let bookingId       = req?.body?.bookingId       || ""              
        let personalEmail   = req?.body?.personalEmail   || "" 
        let personalPhone   = req?.body?.personalPhone   || ""  
        let gstNumber       = req?.body?.gstNumber       || "" 
        let gstemail        = req?.body?.gstEmail        || "" 
        let registeredName  = req?.body?.registeredName  || ""  
        let mobile          = req?.body?.mobile          || "" 
        let address         = req?.body?.address         || ""  
        let GST             = req?.body?.isGst           || ""  

        let emails = [];
        let contacts = [];        
        let deliveryInfo = {};
       
        let gstInfo = {
            gstNumber       : gstNumber,
            email           : gstemail,
            registeredName  : registeredName,
            mobile          : mobile,
            address         : address 
        };

         emails.push(personalEmail)
         contacts.push(personalPhone)
         deliveryInfo.emails = emails;
         deliveryInfo.contacts = contacts

        let travellerInfo = [];                               
        let passengerData = req.body.travellerInfo;
        for(let pData of passengerData){
            let data = {};
            let pNum = pData?.passportNumber
            let pNat = pData?.passportNation;
            let eD   = pData?.passportExpiryDate;
            delete pData.isSave;
            let ssrBaggageInfos= pData?.ssrBaggageInfos
            let ssrMealInfos = pData?.ssrMealInfos
            let ssrSeatInfos = pData?.ssrSeatInfos

            data.ti  = pData?.title;
            data.fN  = pData?.firstName;
            data.lN  = pData?.lastName;
            data.pt  = pData?.passengerType;
            data.dob = pData?.dob ||"";
            
            if(pNum && pNat && eD){              
                data.pNat = pNat;
                data.pNum = pNum;
                data.eD   = eD;                                       
            }
            // if(ssrBaggageInfos.length != 0){
            //     data.ssrBaggageInfos= ssrBaggageInfos                  
            // }
            // if(ssrMealInfos != 0){
            //     data.ssrMealInfos = ssrMealInfos                   
            // }
            // if(ssrSeatInfos != 0){
            //     data.ssrSeatInfos= ssrSeatInfos              
            // }                                    
            travellerInfo.push(data)

        }
        
        let searchData

        if(GST === true){
            searchData = {
                bookingId     : bookingId,            
                travellerInfo : travellerInfo,
                gstInfo       : gstInfo,
                deliveryInfo  : deliveryInfo,           
            }
        }else{
            searchData = {
                bookingId     : bookingId,            
                travellerInfo : travellerInfo,                
                deliveryInfo  : deliveryInfo,           
            }
        }            
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.CONFIRM_BOOKING;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };   
         
        const { data } = await POST(body, { headers });                 
         return data;
    }
    catch(error){    
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }
}

async function ConfirmholdBooking(req,res){
    try{          
                    
        let bookingId       = req?.body?.bookingId    || ""  
        let amount          = req?.body?.amount       || 0      
         searchData = {
                bookingId     : bookingId,            
                paymentInfos : [{amount: amount}],                                
            }
                   
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.CONFIRM_HOLD_BOOKING;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };             
        
        const { data } = await POST(body, { headers });                 
         return data;
    }
    catch(error){
    
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }
}

async function checkValidationOfBookingId(req,res){
    try{                
        let bookingId = req?.body?.bookingId    

        let searchData = {
            bookingId   : bookingId,           
        }
        
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.VALIDATE_REQUEST_BEFORE_BOOKING;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers });     
        
        let response = data?.bookingId;
        let status  = data?.status?.success

         return {bookinIdstatus:status,bookingId:response}
    }
    catch(error){
        
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }
}
async function confirmbooking(req,res){
    try{                
        let bookingId       = req.body.bookingId    || ""          
        let amount          = parseInt(req?.body?.amount)   || "" 
        let personalEmail   = req?.body?.personalEmail || "" 
        let personalPhone   = req?.body?.personalPhone    || ""  
        let gstNumber       = req?.body?.gstNumber  || "" 
        let gstemail        = req?.body?.gstEmail    || "" 
        let registeredName  = req?.body?.registeredName   || ""  
        let mobile          = req?.body?.mobile    || "" 
        let address         = req?.body?.address   || ""  
        let GST             = req?.body?.isGst   || ""  

        let emails = [];
        let contacts = [];        
        let deliveryInfo = {};
       
        let gstInfo = {
            gstNumber       : gstNumber,
            email           : gstemail,
            registeredName  : registeredName,
            mobile          : mobile,
            address         : address 
        };

         emails.push(personalEmail)
         contacts.push(personalPhone)
         deliveryInfo.emails = emails;
         deliveryInfo.contacts = contacts

        let travellerInfo = [];
        let paymentInfos = [{
            "amount": amount            
          }];
         
                
        let passengerData = req.body.travellerInfo;
        for(let pData of passengerData){
            let data = {};
            let pNum = pData?.passportNumber
            let pNat = pData?.passportNation;
            let eD   = pData?.passportExpiryDate;
            
            let ssrBaggageInfos= pData?.ssrBaggageInfos || []
            let ssrMealInfos = pData?.ssrMealInfos || []
            let ssrSeatInfos = pData?.ssrSeatInfos || []

            data.ti  = pData?.title;
            data.fN  = pData?.firstName;
            data.lN  = pData?.lastName;
            data.pt  = pData?.passengerType;
            data.dob = pData?.dob;

            if(pNum && pNat && eD){              
                data.pNat = pNat;
                data.pNum = pNum;
                data.eD   = eD;                                       
            }
            if(ssrBaggageInfos.length != 0){
                data.ssrBaggageInfos= ssrBaggageInfos                  
            }
            if(ssrMealInfos != 0){
                data.ssrMealInfos = ssrMealInfos                   
            }
            if(ssrSeatInfos != 0){
                data.ssrSeatInfos= ssrSeatInfos              
            }                                    
            travellerInfo.push(data)

        }
        
        let searchData

        if(GST === "true"){
            searchData = {
                bookingId     : bookingId,
                paymentInfos  : paymentInfos,
                travellerInfo : travellerInfo,
                gstInfo       : gstInfo,
                deliveryInfo  : deliveryInfo,           
            }
        }else{
            searchData = {
                bookingId     : bookingId,
                paymentInfos  : paymentInfos,
                travellerInfo : travellerInfo,                
                deliveryInfo  : deliveryInfo,           
            }
        }        
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.CONFIRM_BOOKING;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers });                     
         return data;
    }
    catch(error){    
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }         
}


async function changeBookingStatus(req,res){
try{
    let bookingId = req?.body?.bookingId || ""
    let status    = req?.body?.status || ""
    let pnr       = req?.body?.pnr || ""

    const bookingData = await Booking.findOne({
        where: {
            id     : bookingId,    
        },
    });
    
    if (bookingData) {
        let data = {        
            bookingStatus : status,
            pnr           : pnr 
        }
         await Booking.update(data, {
            where: {
                id    : bookingId,        
            },
        })        
        return true;
    } else {
        return false
    
    }
}catch(error){  
    console.log("DFDFDFDFDF",error);
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        throw errData
    }      

}

async function bookingDetails(req,res){
    try{                
        let bookingId           = req.body.bookingId    || ""  
        let requirePaxPricing   = req.body.passengerPricing || "";            
        
        let searchData = {
                bookingId         : bookingId,            
                requirePaxPricing : requirePaxPricing,                              
        }        
            
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.BOOKING_DETAILS;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers });   

        fareRuleDetails = await Booking.findOne({
            where: {
                id : data?.order?.bookingId
            }
        })
        let bookingDetails = {};

        bookingDetails.fareRuleId = fareRuleDetails?.fareRuleId || ""
        bookingDetails.bookingId = data?.order?.bookingId || ""
        bookingDetails.amount = data?.order?.amount || ""
        bookingDetails.status = data?.order?.status || ""
        bookingDetails.deliveryInfo = data?.order?.deliveryInfo || ""
        bookingDetails.bookingDate = data?.order?.createdOn || ""
        let flightInfo =  data?.itemInfos?.AIR?.tripInfos; ;  
        let paxInfo = data?.searchQuery?.paxInfo || ""; 
        let alerts   = data?.alerts || []  
        let flightSearchDetails ={}
        let flightLayover = [];
              
        for (const flights of flightInfo) {               
            let flightList = [];
            let passengerSSRDetails = {};
            for (const segmentInformation of flights.sI) {
                
                let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
                let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");              
                let departureDate           = departureDateAndTime[0]
                let departureTime           = departureDateAndTime[1]
                let arrivalDate             = arivalDateAndTime[0]   
                let arrivalTime             = arivalDateAndTime[1] 
                let fareDetail;

                let hours = Math.floor(segmentInformation.duration / 60);          
                let minutes = segmentInformation.duration % 60;
                let duration;
                if(minutes<10){
                    duration = hours+"h - "+"0"+minutes+"m";
                }else{
                    duration = hours+"h - "+minutes+"m";
                }

                let FlightCode = segmentInformation?.fD?.aI?.code;

                let baggageInformation = segmentInformation.bI.tI;
                
                passengerSSRDetails.title = baggageInformation[0].ti
                passengerSSRDetails.firstName = baggageInformation[0].fN
                passengerSSRDetails.lastName = baggageInformation[0].lN
                passengerSSRDetails.passengerType = baggageInformation[0].pt

                passengerSSRDetails.baggageInformation = baggageInformation[0].fd.bI
                passengerSSRDetails.cabinClass = baggageInformation[0].fd.cc
                passengerSSRDetails.returnType = baggageInformation[0].fd.rT               
                
                
                let logo = await getLogo(FlightCode);            
                let flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightLogo                  : logo,
                    flightStops                 : segmentInformation.stops,
                    flightDuration              : duration,
                    departureAirportInformation : segmentInformation.da,
                    arrivalAirportInformation   : segmentInformation.aa,                    
                    departureDate               : departureDate,
                    departureTime               : departureTime,
                    arrivalDate                 : arrivalDate,
                    arrivalTime                 : arrivalTime                   
                }      
                
                
                flightList.push({flightDetails:flightDatails,passengerSSRDetails:passengerSSRDetails});   
                flightLayover.push({flightId:segmentInformation.id,departureDate:departureDate,departure:departureTime,arrivalDate:arrivalDate,arrival:arrivalTime})                                       
            } 
             let lay =  await calculateFlightLayover(flightLayover) 

             let fareData =  data.itemInfos.AIR.totalPriceInfo.totalFareDetail;
             let tInfos = data.itemInfos.AIR.travellerInfos[0]

             let travellerInfos = {
                title : tInfos.ti,
                firstName : tInfos.fN,
                lastName : tInfos.lN,
                passengerType : tInfos.pt,
                pnrDetails : tInfos.pnrDetails,
                ssrMealInfos : tInfos.ssrMealInfos || [],
                ssrSeatInfos : tInfos.ssrSeatInfos || [],
                checkinStatusMap : tInfos.checkinStatusMap,                
             }
             
             let fareDetail = {
                baseFare  : fareData.fC.BF,
                texes     : fareData.fC.TAF,
                totalFare : fareData.fC.TF,
                SSRP      : fareData.fC.SSRP 
             } 
            
            flightSearchDetails.bookingDetails = bookingDetails
            flightSearchDetails.listOfFlight = flightList
            flightSearchDetails.travellerInfos = travellerInfos
            flightSearchDetails.fareDetail = fareDetail
            flightSearchDetails.alerts = alerts
            flightSearchDetails.layover = lay
        }
           
          return flightSearchDetails;  ;
        }
        catch(error){   
            let errData = error?.response?.data?.errors[0]        
            if(!errData){
                throw error
            }                      
            throw errData

            
        }
        

}


async function reviewReturnData(data,paxInfo){

    paxInfo = paxInfo
    let flightSearch={};
    let flightList = [];
    let flightData = data;    
    let flightLayover =[];
        for (const segmentInformation of flightData.sI) {
            
            let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
            let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");              
            let departureDate           = departureDateAndTime[0]
            let departureTime           = departureDateAndTime[1]
            let arrivalDate             = arivalDateAndTime[0]   
            let arrivalTime             = arivalDateAndTime[1] 
            let fareDetail = "";

            let hours = Math.floor(segmentInformation.duration / 60);          
            let minutes = segmentInformation.duration % 60;
            let duration;
            if(minutes<10){
                duration = hours+"h - "+"0"+minutes+"m";
            }else{
                duration = hours+"h - "+minutes+"m";
            }

            let FlightCode = segmentInformation?.fD?.aI?.code;
            let ssrINFO = await generateKeyforSSRInfo(segmentInformation)
            
            let logo = await getLogo(FlightCode);
                            
            let flightDatails = {
                flightId                    : segmentInformation.id,
                flightNumber                : segmentInformation.fD.fN,
                flightDescription           : segmentInformation.fD.aI,
                flightCode                  : segmentInformation?.fD?.aI?.code,
                flightLogo                  : logo,
                flightStops                 : segmentInformation.stops,
                flightDuration              : duration,
                departureAirportInformation : segmentInformation.da,
                arrivalAirportInformation   : segmentInformation.aa,                    
                departureDate               : departureDate,
                departureTime               : departureTime,
                arrivalDate                 : arrivalDate,
                arrivalTime                 : arrivalTime,
                ssrInfo                     : ssrINFO || segmentInformation.ssrInfo,
                ac                          : segmentInformation.ac
            }                                            
            flightList.push(flightDatails); 
            flightLayover.push({flightId:segmentInformation.id,departureDate:departureDate,departure:departureTime,arrivalDate:arrivalDate,arrival:arrivalTime})                                       
        }                         
        fareDetail =  await calculateFareDetails2(flightData.totalPriceList,paxInfo)  || ""
        let lay =  await calculateFlightLayover(flightLayover)                                     
        flightSearch.FlightList = flightList
        if(fareDetail){
            flightSearch.fareDetail = fareDetail
        }
        flightSearch.layover = lay 
        return flightSearch;

}


async function domesticCancellation(req,res){
   try{  
        let bookingId              = req.body.bookingId   || "" ; 
        let type                   = "CANCELLATION"; 
        let remarks                = req.body.remarks || ""; 
        let travellersInfo         = req.body.trips || [];
        let trips                  = [];
        let status                 = "processing"

        for(const travellerData of travellersInfo){     
            trips.push({    
                "src"               : travellerData?.fromCityDestination    || "",
                "dest"              : travellerData?.tofromCityDestination  || "",
                "departureDate"     : travellerData.departureDate           || "",
                "travellers"        : [{fn:travellerData.travellersInfo[0].firstName,ln:travellerData.travellersInfo[0].lastName}]
            });                 
        }

        let searchData = {
                bookingId     : bookingId,            
                type          : type,
                remarks       : remarks,
                trips         : trips,

        }   

        let amendmentData ={
            bookingId              : req.body.bookingId,
            type                   : type, 
            remarks                : req.body.remarks, 
            travellersInfo         : JSON.stringify(req.body.trips),
            status                 : status,
            agentId                : req?.body?.currentUser?.id
        }
        
        await Amendments.create(amendmentData);
                
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.AIR_CANCELLATION;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
                 
        const { data } = await POST(body, { headers });   
        return data;
        }
        catch(error){                
            let errData = error?.response?.data?.errors[0]        
            if(!errData){
                throw error
            }            
            throw errData
        }
}


async function domesticDateChange(req,res){
    try{  
         let bookingId              = req.body.bookingId   || "" ; 
         let type                   = "REISSUE"; 
         let remarks                = req.body.remarks || ""; 
         let nextTravelDate         = req.body.nextTravelDate || ""; 
         let travellersInfo         = req.body.trips || [];3
         let trips                  = [];
         let status                 = "processing"

         for(const travellerData of travellersInfo){     
            trips.push({    
                "src"               : travellerData?.fromCityDestination    || "",
                "dest"              : travellerData?.tofromCityDestination  || "",
                "departureDate"     : travellerData.departureDate           || "",
                "travellers"        : [{fn:travellerData.travellersInfo[0].firstName,ln:travellerData.travellersInfo[0].lastName}]
            });                 
        }

         let searchData = {
                 bookingId       : bookingId,            
                 type            : type,
                 remarks         : remarks,
                 nextTravelDate  : nextTravelDate,
                 trips           : trips
         }  
    
         let amendmentData ={
            bookingId              : req.body.bookingId,
            type                   : type, 
            remarks                : req.body.remarks, 
            travellersInfo         : JSON.stringify(req.body.trips),
            status                 : status,
            agentId                : req?.body?.currentUser?.id
        }
        await Amendments.create(amendmentData);

         const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
         const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
         const endpoint = gpsEnv.endpoints.AIR_CANCELLATION;      
 
         const url = `${gpsEnv.host}${endpoint}`;    
         const headers = {
             apikey: gpsEnv.apiKey
         };                 
         const body = {
             searchData,
             url
          };
 
                  
         const { data } = await POST(body, { headers });   
         return data;
 
         }
         catch(error){   
             let errData = error?.response?.data?.errors[0]        
             if(!errData){
                 throw error
             }            
             throw errData
         }
 }

 async function getAmendments(req,res){
    try{     

        let userId                 = parseInt(req?.body?.currentUser?.id) || "" ;       
        let bookingId              = req.body.bookingId   || "" ; 
        let type                   = req.body.type;       
        let amendmentstatus        = req.body.status

        let condition;   
        let response;    
        let Pagination = req?.body?.pagination;
    
        const { page, size, sortOrder,sortBy } = req.body;                                    
        const { limit, offset } = ApiHelper.getPagination(page, size);                                                                                 
        
        condition =  await nestedAndQueryResponse(body={id :`${bookingId}`,PNR:`${PNR}`,isDomestic:`${isDomestic}`,bookingType: `${bookingType}`,bookingStatus: `${bookingStatus}`, startDate:startDate,endDate:endDate,agentId :`${req.body.currentUser.id}`});


        if(!condition){
            condition = {
                where:{
                    agentId : userId
            }}   
        }        
         response = await Booking.findAndCountAll(condition);               

        if(Pagination==='true'){
            response = ApiHelper.getPagingData(response, page, limit);
    
        }    
    
        return response;                       
    }catch(error){   
             let errData = error?.response?.data?.errors[0]        
             if(!errData){
                 throw error
             }            
             throw errData
         }
 } 

bookingProvider = {
    previewFlight               : previewFlight,
    seatMap                     : seatMap,
    addPassenger                : addPassenger,
    bookingReview               : bookingReview,
    confirmbooking              : confirmbooking,
    previewFlightReturn         : previewFlightReturn,
    holdBooking                 : holdBooking,                  
    checkValidationOfBookingId  : checkValidationOfBookingId, 
    changeBookingStatus         : changeBookingStatus,
    bookingDetails              : bookingDetails,
    ConfirmholdBooking          : ConfirmholdBooking,
    domesticCancellation        : domesticCancellation,
    domesticDateChange          : domesticDateChange,
    getAmendments               : getAmendments
}

module.exports = bookingProvider;