const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { query } = require("express");
const { GLOBAL_OBJ, returnGpsEnvObject } = require('../utils/bin/global');
const { NumericQueryResponse, stringQueryResponse, getSplitStrDash, genereateRouteInfo, getSplitWithString, calculateFareDetails, calculateFareDetailsRound, getLogo, calculateFareDetails2, calculateFlightLayover, calculateFareDetailsReview } = require("../../common/common");
const { GET, POST, PUT, DELETE, PATCH } = require("../../services/http");
const States = db.State
const User = db.User;
const Op = db.Sequelize.Op;


//=================== Domestic flight  ============================

async function OneWayTripList(req, res) {   
        
    try {                
        let fromCitydestination = await getSplitStrDash(req.body.fromCityDestination.trim());
        let toCityOrAirport = await getSplitStrDash(req.body.toCityDestination.trim()); 
        let searchData;   

        let flightSearchDetails = []
              
        let routeInfo = [
            {
              "fromCityOrAirport": {"code": fromCitydestination[0]},
              "toCityOrAirport": {"code": toCityOrAirport[0]},
              "travelDate": req.body.journeyDateOne
            },            
          ];
                            
        if(req.body.previllageForTicket){
            searchData = {   
                searchQuery:{                     
                    paxInfo:{
                        ADULT  : req.body?.ADULT,
                        CHILD  : req.body?.CHILD,
                        INFANT : req.body?.INFANT               
                    },
                    preferredAirline: req?.body?.preferredAirline || [],
                    routeInfos : routeInfo,                
                    searchModifiers : {
                        "isDirectFlight": req.body.isDirectFlight,
                        "isConnectingFlight": req.body.isConnectingFlight,
                        "pft" : req?.body?.previllageForTicket || ""
                    }     
                }
            }  
        }else{
            searchData = {   
                searchQuery:{                     
                    paxInfo:{
                        ADULT  : req.body?.ADULT,
                        CHILD  : req.body?.CHILD,
                        INFANT : req.body?.INFANT               
                    },
                    preferredAirline: req?.body?.preferredAirline || [],
                    routeInfos : routeInfo,                
                    searchModifiers : {
                        "isDirectFlight": req.body.isDirectFlight,
                        "isConnectingFlight": req.body.isConnectingFlight,
                       
                    }     
                }
            }              
        }

         
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
         
        const { data } = await POST(body, { headers });  

         
        if(Object.keys(data.searchResult).length === 0){
            return "";
        }
        
        let paxInfo = searchData?.searchQuery?.paxInfo;
        let flightInfo =  data?.searchResult?.tripInfos?.ONWARD;  
        let flightSearch = []  
        let flightSearchData;
              
            
        for (const flights of flightInfo) {      
            let flightDatails = {}; 
            let fareDetail;         
            
            let count = 0;
            for (const segmentInformation of flights.sI) {                
                let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
                let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");
                let departureDate           = departureDateAndTime[0]
                let departureTime           = departureDateAndTime[1]
                let arrivalDate             = arivalDateAndTime[0]   
                let arrivalTime             = arivalDateAndTime[1]                 
                let hours = Math.floor(segmentInformation.duration / 60);          
                let minutes = segmentInformation.duration % 60;
                let duration;
                if(minutes<10){
                    duration = hours+"h - "+"0"+minutes+"m";
                }else{
                    duration = hours+"h - "+minutes+"m";
                }
                let arivalInfo;
                if(count == segmentInformation.length-1){    
                    arivalInfo = segmentInformation.aa;                                    
                }else{
                    arivalInfo = segmentInformation.aa
                }

                let FlightCode = segmentInformation?.fD?.aI?.code;                                               
                let logo = await getLogo(FlightCode);
                flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightLogo                  : logo,
                    flightStops                 : flights?.sI?.length || 1,
                    flightDuration              : duration,
                    departureAirportInformation : segmentInformation.da,
                    arrivalAirportInformation   : arivalInfo,                    
                    departureDate               : departureDate,
                    departureTime               : departureTime,
                    arrivalDate                 : arrivalDate,
                    arrivalTime                 : arrivalTime
                }                  
                count++;                      
            }          

                                                    
            fareDetail =  await calculateFareDetails(flights.totalPriceList,paxInfo)                                                        
            flightSearchDetails.push({flightDatails,fareDetail})                                 
        }        
        return flightSearchDetails;  
            
    } catch (error) {     
        
        let errData = error?.response?.data?.errors[0]
        if(!errData){            
            throw error
        }                    
        throw errData
    } 
}

async function RoundTripList(req, res) {    
    try {   
         let fromcitydesti = await getSplitStrDash(req.body.fromCityDestination.trim());
         let toCityOrAirport = await getSplitStrDash(req.body.toCityDestination.trim());  
         let flightSearchDetails = {};           
         let flightSearchReturnDetails = [];  
         let flightSearchOnwardDetails = [];
         let routeInfo = [
            {
              "fromCityOrAirport": {"code": fromcitydesti[0]},
              "toCityOrAirport": {"code": toCityOrAirport[0]},
              "travelDate": req.body.journeyDateOne
            },
            {
              "fromCityOrAirport": {"code": toCityOrAirport[0]},
              "toCityOrAirport": {"code": fromcitydesti[0]},
              "travelDate": req.body.journeyDateRound
            }
          ];
                            
        let searchData = {   
            searchQuery:{                     
                paxInfo:{
                    ADULT  : req.body?.ADULT,
                    CHILD  : req.body?.CHILD,
                    INFANT : req.body?.INFANT               
                },
                preferredAirline: req?.body?.preferredAirline || [],
                routeInfos : routeInfo,
                searchModifiers : {
                    "isDirectFlight"     : req.body.isDirectFlight,
                    "isConnectingFlight" : req.body.isConnectingFlight,
                    "pft"                : req?.body?.previllageForTicket || ""
                }     
            }
        }        


        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                         
         const body = {
            searchData,
            url
         };
        const { data } = await POST(body, { headers });

        let paxInfo = searchData?.searchQuery?.paxInfo;
        let flightInfoReturn =  data?.searchResult?.tripInfos?.RETURN;            
        let flightInfoOnward =  data?.searchResult?.tripInfos?.ONWARD;  
        
        if(!flightInfoOnward){
            return ApiHelper.successError(res, 458 , "Record not found");   
        }
                
        for (const flightsOnward of flightInfoOnward) {            
            for (const segmentInformation of flightsOnward.sI) {
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
                let logo = await getLogo(FlightCode);           

                let flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightStops                 : flightsOnward?.sI?.length || 1,
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
                
                fareDetail =  await calculateFareDetails2(flightsOnward.totalPriceList,paxInfo)                                                                   
                flightSearchOnwardDetails.push({flightDatails,fareDetail})                             
            }                           
            
        }
                
        
        for (const flightsReturn of flightInfoReturn) {            
            for (const segmentInformation of flightsReturn.sI) {
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
                
                fareDetail =  await calculateFareDetails2(flightsReturn.totalPriceList,paxInfo)                                                                                  
                flightSearchReturnDetails.push({flightDatails,fareDetail})                             
            }                           
            
        }                   
        return  {Onward:flightSearchOnwardDetails,Return:flightSearchReturnDetails};    
            
    } catch (error) {  
        console.log(error);
        let errData = error?.response?.data?.errors[0]
        if(!errData){
            throw error
        }            
        throw errData
        
    } 
}

async function multiCityList(req, res) {    
    try {        
        let routeInfo =  await genereateRouteInfo(req.body);     
        let flightSearchDetails = [];                                        
        let searchData = {   
            searchQuery:{                     
                paxInfo:{
                    ADULT  : req.body?.ADULT,
                    CHILD  : req.body?.CHILD,
                    INFANT : req.body?.INFANT               
                },
                routeInfos : routeInfo,
                searchModifiers : {
                    "isDirectFlight": req.body.isDirectFlight,
                    "isConnectingFlight": req.body.isConnectingFlight
                }     
            }
        }        

        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                         
         const body = {
            searchData,
            url
         };
        const { data } = await POST(body, { headers });
        let flightInfo =  data?.searchResult?.tripInfos;  
        
        let length = Object.keys(flightInfo).length;
        
        for(let i=0; i<= length; i++){
             for (const flights of flightInfo[i]) {     
                
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
                                  
                    let flightDatails = {
                        flightId                    : segmentInformation.id,
                        flightNumber                : segmentInformation.fD.fN,
                        flightDescription           : segmentInformation.fD.aI,
                        flightStops                 : segmentInformation.stops,
                        flightDuration              : duration,
                        departureAirportInformation : segmentInformation.da,
                        arrivalAirportInformation   : segmentInformation.aa,                    
                        departureDate               : departureDate,
                        departureTime               : departureTime,
                        arrivalDate                 : arrivalDate,
                        arrivalTime                 : arrivalTime
                    }   

                    fareDetail =  await calculateFareDetailsRound(flights.totalPriceList)  
                                                                                                             
                    flightSearchDetails.push({flightDatails,fareDetail})     
                                
                }                           
            
        }
        return flightSearchDetails;                      
    }
    } catch (error) {  
        let errData = error?.response?.data?.errors[0]
        if(!errData){
            throw error
        }            
        throw errData
        
    } 
}


//=================== Inter National flight Search  ============================

async function InternationalOneWayTripList(req, res) {    
    try {                

        let fromcitydesti = await getSplitStrDash(req.body.fromcitydesti.trim());
         let toCityOrAirport = await getSplitStrDash(req.body.tocitydesti.trim());    
              
         let routeInfo = [
            {
              "fromCityOrAirport": {"code": fromcitydesti[0]},
              "toCityOrAirport": {"code": toCityOrAirport[0]},
              "travelDate": req.body.journeyDateOne
            },            
          ];
                            
        let searchData = {   
            searchQuery:{                     
                paxInfo:{
                    ADULT  : req.body?.ADULT,
                    CHILD  : req.body?.CHILD,
                    INFANT : req.body?.INFANT               
                },
                routeInfos : routeInfo,
                searchModifiers : {
                    "isDirectFlight": req.body.isDirectFlight,
                    "isConnectingFlight": req.body.isConnectingFlight
                }     
            }
        }  



        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
        const { data } = await POST(body, { headers });
        return data                    
    } catch (error) {   
        let errData = error?.response?.data?.errors[0]
        if(!errData){
            throw error
        }            
        throw errData
    } 
}

async function InternationalRoundTripList(req, res) {    
    try {   

         let fromcitydesti = await getSplitStrDash(req.body.fromcitydesti.trim());
         let toCityOrAirport = await getSplitStrDash(req.body.tocitydesti.trim());    
              
         let routeInfo = [
            {
              "fromCityOrAirport": {"code": fromcitydesti[0]},
              "toCityOrAirport": {"code": toCityOrAirport[0]},
              "travelDate": req.body.journeyDateOne
            },
            {
              "fromCityOrAirport": {"code": toCityOrAirport[0]},
              "toCityOrAirport": {"code": fromcitydesti[0]},
              "travelDate": req.body.journeyDateRound
            }
          ];
                            
        let searchData = {   
            searchQuery:{                     
                paxInfo:{
                    ADULT  : req.body?.ADULT,
                    CHILD  : req.body?.CHILD,
                    INFANT : req.body?.INFANT               
                },
                routeInfos : routeInfo,
                searchModifiers : {
                    "isDirectFlight": req.body.isDirectFlight,
                    "isConnectingFlight": req.body.isConnectingFlight
                }     
            }
        }        


        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                         
         const body = {
            searchData,
            url
         };
        const { data } = await POST(body, { headers });
        return data                    
    } catch (error) {  
        let errData = error?.response?.data?.errors[0]
        if(!errData){
            throw error
        }            
        throw errData
        
    } 
}

async function InternationalmultiCityList(req, res) {    
    try {        
        let routeInfo =  await genereateRouteInfo(req.body);                                           
        let searchData = {   
            searchQuery:{                     
                paxInfo:{
                    ADULT  : req.body?.ADULT,
                    CHILD  : req.body?.CHILD,
                    INFANT : req.body?.INFANT               
                },
                routeInfos : routeInfo,
                searchModifiers : {
                    "isDirectFlight": req.body.isDirectFlight,
                    "isConnectingFlight": req.body.isConnectingFlight
                }     
            }
        }        

        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                         
         const body = {
            searchData,
            url
         };
        const { data } = await POST(body, { headers });
        return data                    
    } catch (error) {  
        let errData = error?.response?.data?.errors[0]
        if(!errData){
            throw error
        }            
        throw errData
        
    } 
}

async function oneWaySearchList(req, res) {   
        
    try {     
        let fromCitydestination = await getSplitStrDash(req.body.fromCityDestination.trim());
        let toCityOrAirport = await getSplitStrDash(req.body.toCityDestination.trim()); 
        let searchData;   

        let flightSearchDetails = []
              
        let routeInfo = [
            {
              "fromCityOrAirport": {"code": fromCitydestination[0]},
              "toCityOrAirport": {"code": toCityOrAirport[0]},
              "travelDate": req.body.journeyDateOne
            },            
          ];
                            
        if(req.body.previllageForTicket){
            searchData = {   
                searchQuery:{                     
                    paxInfo:{
                        ADULT  : req.body?.ADULT,
                        CHILD  : req.body?.CHILD,
                        INFANT : req.body?.INFANT               
                    },
                    preferredAirline: req?.body?.preferredAirline || [],
                    routeInfos : routeInfo,                
                    searchModifiers : {
                        "isDirectFlight": req.body.isDirectFlight,
                        "isConnectingFlight": req.body.isConnectingFlight,
                        "pft" : req?.body?.previllageForTicket || ""
                    }     
                }
            }  
        }else{
            searchData = {   
                searchQuery:{                     
                    paxInfo:{
                        ADULT  : req.body?.ADULT,
                        CHILD  : req.body?.CHILD,
                        INFANT : req.body?.INFANT               
                    },
                    preferredAirline: req?.body?.preferredAirline || [],
                    routeInfos : routeInfo,                
                    searchModifiers : {
                        "isDirectFlight": req.body.isDirectFlight,
                        "isConnectingFlight": req.body.isConnectingFlight,
                       
                    }     
                }
            }              
        }

         
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };
         
        const { data } = await POST(body, { headers });  

         
        if(Object.keys(data.searchResult).length === 0){
            return "";
        }
        
        let flightInfo =  data?.searchResult?.tripInfos?.ONWARD;  
        let flightDatail = []; 
        let flightDatails;
        let fareDetail; 
        let paxInfo =  searchData.searchQuery.paxInfo;
        

    for(let flightInfoData of flightInfo){    
        let flightLayover = [];        
            let count = 0 ;
            let flightSegmentData = [];
            for(let segmentInformation of flightInfoData.sI){
                let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
                let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");
                let departureDate           = departureDateAndTime[0]
                let departureTime           = departureDateAndTime[1]
                let arrivalDate             = arivalDateAndTime[0]   
                let arrivalTime             = arivalDateAndTime[1]                 
                let hours = Math.floor(segmentInformation.duration / 60);          
                let minutes = segmentInformation.duration % 60;
                let duration;
                if(minutes<10){
                    duration = hours+"h - "+"0"+minutes+"m";
                }else{
                    duration = hours+"h - "+minutes+"m";
                }
                let arivalInfo;
                if(count == segmentInformation.length-1){    
                    arivalInfo = segmentInformation.aa;                                    
                }else{
                    arivalInfo = segmentInformation.aa
                }

                let FlightCode = segmentInformation?.fD?.aI?.code;                                               
                let logo = await getLogo(FlightCode);
                flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightLogo                  : logo,
                    flightDuration              : duration,
                    departureAirportInformation : segmentInformation.da,
                    arrivalAirportInformation   : arivalInfo,                    
                    departureDate               : departureDate,
                    departureTime               : departureTime,
                    arrivalDate                 : arrivalDate,
                    arrivalTime                 : arrivalTime
                }                  
                count++;   
                flightSegmentData.push(flightDatails);
                
            }       
            
            let totalData = flightSegmentData.length;
            let sourceflight = flightSegmentData[0];
            let destination = flightSegmentData[totalData - 1 ];
            let stopCount = 0;

            if(totalData >=2){
                stopCount ++;
            }              

            let duration = await calculateFlightLayover([{departureDate:sourceflight.departureDate, departure:sourceflight.departureTime ,arrivalDate:destination.arrivalDate,arrival:destination.arrivalTime}]);

            let searchData = {
                "fromCityDestination"       : sourceflight.departureAirportInformation.code,                
                "fromDestinationAirport"    : sourceflight.departureAirportInformation.name,
                "formFlightId"              : sourceflight.flightId,               
                "formFlightNumber"          : sourceflight.flightNumber,
                "fromFightDetail"           : sourceflight.flightDescription,
                "fromflightUrl"             : sourceflight.flightLogo || "",
                "departureDate"             : sourceflight.departureDate,
                "departureTime"             : sourceflight.departureTime,
                "toCityDestination"         : destination.arrivalAirportInformation.code,
                "toDestinationAirport"      : destination.arrivalAirportInformation.name,
                "toFlightId"                : destination.flightId,               
                "toFlightNumber"            : destination.flightNumber,
                "toFightDetail"             : destination.flightDescription,
                "todepartureDate"           : destination.arrivalDate,
                "todpartureTime"            : destination.arrivalTime,
                "toflightUrl"               : destination.flightLogo || "",
                "stop"                      : stopCount,
                "duration"                  : duration                                
            }
            for(let flightList of flightSegmentData){
                 flightLayover.push({flightId:flightList.id,departureDate:flightList.departureDate,departure:flightList.departureTime,arrivalDate:flightList.arrivalDate,arrival:flightList.arrivalTime})
            }

            let lay =  await calculateFlightLayover(flightLayover)

            fareDetail =  await calculateFareDetails(flightInfoData.totalPriceList,paxInfo)      
            flightDatail.push({SearchData:searchData ,flightDetails:flightSegmentData,fareDetail:fareDetail,flightLayover:lay});   
        }      
        

        return flightDatail;
    
        } catch (error) {     
            
            let errData = error?.response?.data?.errors[0]
            if(!errData){            
                throw error
            }                    
            throw errData
        } 
}

async function roundTripSearch(req, res) {    
    try {   
         let fromcitydesti = await getSplitStrDash(req.body.fromCityDestination.trim());
         let toCityOrAirport = await getSplitStrDash(req.body.toCityDestination.trim());  
         let flightSearchDetails = {};           
         let flightSearchReturnDetails = [];  
         let flightSearchOnwardDetails = [];
         let routeInfo = [
            {
              "fromCityOrAirport": {"code": fromcitydesti[0]},
              "toCityOrAirport": {"code": toCityOrAirport[0]},
              "travelDate": req.body.journeyDateOne
            },
            {
              "fromCityOrAirport": {"code": toCityOrAirport[0]},
              "toCityOrAirport": {"code": fromcitydesti[0]},
              "travelDate": req.body.journeyDateRound
            }
          ];
                            
        let searchData = {   
            searchQuery:{                     
                paxInfo:{
                    ADULT  : req.body?.ADULT,
                    CHILD  : req.body?.CHILD,
                    INFANT : req.body?.INFANT               
                },
                preferredAirline: req?.body?.preferredAirline || [],
                routeInfos : routeInfo,
                searchModifiers : {
                    "isDirectFlight"     : req.body.isDirectFlight,
                    "isConnectingFlight" : req.body.isConnectingFlight,
                    "pft"                : req?.body?.previllageForTicket || ""
                }     
            }
        }        


        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_ALL_FLIGHT;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                         
         const body = {
            searchData,
            url
         };
        const { data } = await POST(body, { headers });

        let paxInfo = searchData?.searchQuery?.paxInfo;
        let flightInfoOnward =  data?.searchResult?.tripInfos?.ONWARD;  
        let flightInfoReturn =  data?.searchResult?.tripInfos?.RETURN;            
        
        if(!flightInfoOnward){
            return ApiHelper.successError(res, 458 , "Record not found");   
        }
                        
        for(let flightInfoData of flightInfoOnward){  
            let flightLayover = [];                    
            let count = 0 ;
            
            let totalPriceInfo = flightInfoData;                    

            let flightSegmentData = [];
            for(let segmentInformation of flightInfoData.sI){
                let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
                let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");
                let departureDate           = departureDateAndTime[0]
                let departureTime           = departureDateAndTime[1]
                let arrivalDate             = arivalDateAndTime[0]   
                let arrivalTime             = arivalDateAndTime[1]                 
                let hours = Math.floor(segmentInformation.duration / 60);          
                let minutes = segmentInformation.duration % 60;
                let duration;
                if(minutes<10){
                    duration = hours+"h - "+"0"+minutes+"m";
                }else{
                    duration = hours+"h - "+minutes+"m";
                }
                let arivalInfo;
                if(count == segmentInformation.length-1){    
                    arivalInfo = segmentInformation.aa;                                    
                }else{
                    arivalInfo = segmentInformation.aa
                }

                let FlightCode = segmentInformation?.fD?.aI?.code;                                               
                let logo = await getLogo(FlightCode);
                flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightLogo                  : logo,
                    flightDuration              : duration,
                    departureAirportInformation : segmentInformation.da,
                    arrivalAirportInformation   : arivalInfo,                    
                    departureDate               : departureDate,
                    departureTime               : departureTime,
                    arrivalDate                 : arrivalDate,
                    arrivalTime                 : arrivalTime
                }                  
                count++;   
                flightSegmentData.push(flightDatails);
                
            }       
            
            let totalData = flightSegmentData.length;
            let sourceflight = flightSegmentData[0];
            let destination = flightSegmentData[totalData - 1 ];
            let stopCount = 0;

            if(totalData >=2){
                stopCount ++;
            }              

            let duration = await calculateFlightLayover([{departureDate:sourceflight.departureDate, departure:sourceflight.departureTime ,arrivalDate:destination.arrivalDate,arrival:destination.arrivalTime}]);

            let searchData = {
                "fromCityDestination"       : sourceflight.departureAirportInformation.code,                
                "fromDestinationAirport"    : sourceflight.departureAirportInformation.name,
                "formFlightId"              : sourceflight.flightId,               
                "formFlightNumber"          : sourceflight.flightNumber,
                "fromFightDetail"           : sourceflight.flightDescription,
                "fromflightUrl"             : sourceflight.flightLogo || "",
                "departureDate"             : sourceflight.departureDate,
                "departureTime"             : sourceflight.departureTime,
                "toCityDestination"         : destination.arrivalAirportInformation.code,
                "toDestinationAirport"      : destination.arrivalAirportInformation.name,
                "toFlightId"                : destination.flightId,               
                "toFlightNumber"            : destination.flightNumber,
                "toFightDetail"             : destination.flightDescription,
                "todepartureDate"           : destination.arrivalDate,
                "todpartureTime"            : destination.arrivalTime,
                "toflightUrl"               : destination.flightLogo || "",
                "stop"                      : stopCount,
                "duration"                  : duration                                
            }

            for(let flightList of flightSegmentData){
                flightLayover.push({flightId:flightList.id,departureDate:flightList.departureDate,departure:flightList.departureTime,arrivalDate:flightList.arrivalDate,arrival:flightList.arrivalTime})
            }

            let lay =  await calculateFlightLayover(flightLayover)    
            fareDetail =  await calculateFareDetailsReview(flightInfoData.totalPriceList,paxInfo);   
            
            flightSearchOnwardDetails.push({SearchData:searchData ,flightDetails:flightSegmentData,fareDetail:fareDetail,flightLayover:lay});                                                                                       
        }  
                               
        for (const flightsReturn of flightInfoReturn) {            
            let count = 0 ;
            let flightLayover =[];
            let flightSegmentData = [];
            let totalPriceInfo = flightsReturn; 
    
            
            for(let segmentInformation of flightsReturn.sI){
                let departureDateAndTime    = await getSplitWithString(segmentInformation.dt,key="T");
                let arivalDateAndTime       = await getSplitWithString(segmentInformation.at,key="T");
                let departureDate           = departureDateAndTime[0]
                let departureTime           = departureDateAndTime[1]
                let arrivalDate             = arivalDateAndTime[0]   
                let arrivalTime             = arivalDateAndTime[1]                 
                let hours                   = Math.floor(segmentInformation.duration / 60);          
                let minutes                 = segmentInformation.duration % 60;
                let duration;
                if(minutes<10){
                    duration                = hours+"h - "+"0"+minutes+"m";
                }else{
                    duration                = hours+"h - "+minutes+"m";
                }
                let arivalInfo;
                if(count == segmentInformation.length-1){    
                    arivalInfo = segmentInformation.aa;                                    
                }else{
                    arivalInfo = segmentInformation.aa
                }

                let FlightCode = segmentInformation?.fD?.aI?.code;                                               
                let logo = await getLogo(FlightCode);
                flightDatails = {
                    flightId                    : segmentInformation.id,
                    flightNumber                : segmentInformation.fD.fN,
                    flightDescription           : segmentInformation.fD.aI,
                    flightCode                  : segmentInformation?.fD?.aI?.code,
                    flightLogo                  : logo,
                    flightDuration              : duration,
                    departureAirportInformation : segmentInformation.da,
                    arrivalAirportInformation   : arivalInfo,                    
                    departureDate               : departureDate,
                    departureTime               : departureTime,
                    arrivalDate                 : arrivalDate,
                    arrivalTime                 : arrivalTime
                }                  
                count++;   
                flightSegmentData.push(flightDatails);
                
            }       
            
            let totalData = flightSegmentData.length;
            let sourceflight = flightSegmentData[0];
            let destination = flightSegmentData[totalData - 1 ];
            let stopCount = 0;

            if(totalData >= 2){
                stopCount ++;
            }              

            let duration = await calculateFlightLayover([{departureDate:sourceflight.departureDate, departure:sourceflight.departureTime ,arrivalDate:destination.arrivalDate,arrival:destination.arrivalTime}]);

            let searchData = {
                "fromCityDestination"       : sourceflight.departureAirportInformation.code,                
                "fromDestinationAirport"    : sourceflight.departureAirportInformation.name,
                "formFlightId"              : sourceflight.flightId,               
                "formFlightNumber"          : sourceflight.flightNumber,
                "fromFightDetail"           : sourceflight.flightDescription,
                "fromflightUrl"             : sourceflight.flightLogo || "",
                "departureDate"             : sourceflight.departureDate,
                "departureTime"             : sourceflight.departureTime,
                "toCityDestination"         : destination.arrivalAirportInformation.code,
                "toDestinationAirport"      : destination.arrivalAirportInformation.name,
                "toFlightId"                : destination.flightId,               
                "toFlightNumber"            : destination.flightNumber,
                "toFightDetail"             : destination.flightDescription,
                "todepartureDate"           : destination.arrivalDate,
                "todpartureTime"            : destination.arrivalTime,
                "toflightUrl"               : destination.flightLogo || "",
                "stop"                      : stopCount,
                "duration"                  : duration                                
            }

            fareDetail =  await calculateFareDetailsReview(flightsReturn.totalPriceList,paxInfo);
        
            for(let flightList of flightSegmentData){
                flightLayover.push({flightId:flightList.id,departureDate:flightList.departureDate,departure:flightList.departureTime,arrivalDate:flightList.arrivalDate,arrival:flightList.arrivalTime})
            }

            let lay =  await calculateFlightLayover(flightLayover)      
            flightSearchReturnDetails.push({SearchData:searchData ,flightDetails:flightSegmentData,fareDetail:fareDetail,flightLayover:lay});                                                                           
        }       
        
         return  {Onward:flightSearchOnwardDetails,Return:flightSearchReturnDetails};    
            
    } catch (error) {  
        
        let errData = error?.response?.data?.errors[0];
        if(!errData){
            throw error
        }           
        throw errData            
    } 
}


FlightProvider = {
    OneWayTripList : OneWayTripList ,  
    RoundTripList  : RoundTripList ,
    MultiCityList  : multiCityList,

    InternationalOneWayTripList : InternationalOneWayTripList ,  
    InternationalRoundTripList  : InternationalRoundTripList ,
    InternationalMultiCityList  : InternationalmultiCityList,
    oneWaySearchList            : oneWaySearchList, 
    roundTripSearch             : roundTripSearch     
}
module.exports = FlightProvider;