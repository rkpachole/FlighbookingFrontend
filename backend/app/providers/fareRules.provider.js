const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const { query } = require("express");
const { GLOBAL_OBJ, returnGpsEnvObject } = require('../utils/bin/global');
const { NumericQueryResponse, stringQueryResponse, getSplitStrDash, genereateRouteInfo, getSplitWithString, calculateFareDetails, calculateFareDetailsRound } = require("../../common/common");
const { GET, POST, PUT, DELETE, PATCH } = require("../../services/http");
const { error } = require("../utils/logger");
const States = db.State
const User = db.User;
const Op = db.Sequelize.Op;


//=================== Domestic flight  ============================

async function searchFareRules(req, res) {    
    
    try {                
        let id = req.body.id
        let flowType = req.body.flowType
        let searchData;                         
       
        searchData ={
            id:id,
            flowType:flowType
        }
    
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_FARE_RULES;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            searchData,
            url
         };                 
         
        const { data } = await POST(body, { headers });
                              
        //return data.fareRule;
         let fareRuleData = [];

          let fdata = data?.fareRule     
          let out ;
          let fareRule;       
                  
         
          Object.keys(fdata).forEach(function(key){
                out = fdata[key]
          })       
                               
    if(Object.keys(out.fr).length > 0){        
        return fareRule = {
                        DATECHANGE :{
                            DEFAULT:{
                                amount:out?.fr?.DATECHANGE.DEFAULT?.amount,
                                plicyInfo:out?.fr?.DATECHANGE?.DEFAULT?.policyInfo,
                                fareComponentsRelated:{
                                    airlineRescheduleFeeTax: out?.fr?.DATECHANGE?.DEFAULT?.fcs?.ARFT, 
                                    airlineRescheduleFee: out?.fr?.DATECHANGE?.DEFAULT?.fcs?.ARFT
                                }
                            }},
                        CANCELLATION :{
                            DEFAULT:{
                                amount: out?.fr?.CANCELLATION?.DEFAULT?.amount,
                                plicyInfo: out?.fr?.CANCELLATION?.DEFAULT?.policyInfo,
                                fareComponentsRelated:{
                                    airlineCancellationFeeTax: out?.fr?.CANCELLATION?.DEFAULT?.fcs?.ACFT,
                                    airlineCancellationFee:  out?.fr?.CANCELLATION?.DEFAULT?.fcs?.ACF
                                }
                            }}                
                 }
        }else{
            throw {errCode:404,message:"No record found"}
        }               
    } catch (error) {          
        let errData = error?.response?.data?.errors[0];                
        if(!errData){
            throw error
        }            
        throw errData;
    } 
}


async function getFareRules(body) {    
    try {                        
        let id = body.id
        let flowType = body.flowType
        let serchData;                         
       
        serchData ={
            id:id,
            flowType:flowType
        }
    
        const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];                
        const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
        const endpoint = gpsEnv.endpoints.SEARCH_FARE_RULES;      

        const url = `${gpsEnv.host}${endpoint}`;    
        const headers = {
            apikey: gpsEnv.apiKey
        };                 
        const body = {
            serchData,
            url
         };
         
        const { data } = await POST(body, { headers });                          
                
        return data;
        
    } catch (error) {                   
        let errData = error?.response?.data?.errors[0]        
        if(!errData){
            throw error
        }            
        return errData
    } 
}
fareRuleProvider = {
    searchFareRules : searchFareRules , 
    getFareRules : getFareRules     
}
module.exports = fareRuleProvider;