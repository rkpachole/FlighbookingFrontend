const { Op } = require("sequelize");
const { GLOBAL_OBJ, returnGpsEnvObject } = require("../app/utils/bin/global");
const { GET } = require("../services/http");
var moment = require('moment');
const { FlightDetails } = require("../app/models");

const stringQueryResponse = async (body,columnName) => {
    
    let query = ``;
    const Data = await getSplitStr(body);     
    
    if (Data[0] === "isequal") {
      query = {        
            [Op.like]: Data[1]        
      }
    }
    if (Data[0] === "isnotequal") {
        query = {            
                [Op.notLike]: Data[1]              
          }
    }
    if (Data[0] === "contains") {
        query = {            
                [Op.substring]: Data[1]              
             }
    }
    if (Data[0] === "startswith") {
        query = {            
                [Op.startsWith]: Data[1]              
          }
    }        
    return query;
  };

  const NumericQueryResponse = async(body,columnName="") => {    
    let  colname =  columnName;
    let query = ``;    
    const Data = await getSplitStr(body);          
    if (Data[0] === "isequal") {
      query = 
          {
            [Op.eq]: parseInt(Data[1])
          }      
    }
    if (Data[0] === "isnotequal") {
        query = {            
                [Op.ne]: parseInt(Data[1])              
          }
    }
    if (Data[0] === "contains") {
        query = {            
                [Op.like]: parseInt(Data[1])              
          }
    }
    if (Data[0] === "startswith") {
        query = {            
                [Op.startsWith]: parseInt(Data[1])              
          }
    }
    
    return query;
  };

const NumericWithAndQueryResponse = async(body,columnName="",And="",andColumnName="") => {                            
      let query   = ``;    
      const Data  = await getSplitStr(body); 
      
      let condition = {}
      if(andColumnName){
            condition[andColumnName] = And;      
      }else{
            condition["agentRef"] = And; 
      }

      if (Data[0] === "isequal") {
            if(And){
                  condition[columnName] = { [Op.eq]:Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]
                        }  
            }else{
                  query = {
                        [Op.eq]: parseInt(Data[1])  
                  }
            }
      
      }
      if (Data[0] === "isnotequal") {
            if(And){
                  condition[columnName] = { [Op.ne]:Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]
                        }  
            }else{
                  query = {
                        [Op.ne]: parseInt(Data[1])  
                  }
            }         
      }
      if (Data[0] === "contains") {
            if(And){
                  condition[columnName] = { [Op.like]:Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]
                        }  
            }else{
                  query = {
                        [Op.like]: parseInt(Data[1])  
                  }
            }          
      }
      if (Data[0] === "startswith") {
            if(And){
                  condition[columnName] = { [Op.startsWith]:Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]
                        }  
            }else{
                  query = {
                        [Op.startsWith]: parseInt(Data[1])  
                  }
            }             
      }   
      
      return query;
    };


const StringWithAndQueryResponse = async (body,columnName="",And="",andColumnName="") => {    
      let query   = ``;    
      const Data  = await getSplitStr(body);       
      let condition = {}

      if(andColumnName){            
            condition[andColumnName] = And;       
      }else{
            condition["agentRef"] = And; 
      }

      if (Data[0] === "isequal") {
            if(And){                                 
                  condition[columnName] = { [Op.eq]:Data[1]} 
                  query = 
                        { 
                          [Op.and]: [condition]
                        }  
            }else{      
                  query = {
                        [Op.eq]: Data[1]
                  }
            }            
      }
      if (Data[0] === "isnotequal") {
            if(And){
                  condition[columnName] = { [Op.ne]:Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]
                        }  
            }else{
                  query = {
                        [Op.ne]: parseInt(Data[1])  
                  }
            }         
      }
      if (Data[0] === "contains") {
            if(And){
                  condition[columnName] = { [Op.substring]: Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]                       
                    }  
            }else{
                  query = {
                        [Op.substring]: parseInt(Data[1])  
                  }
            }          
      }
      if (Data[0] === "startswith") {
            if(And){
                  condition[columnName] = { [Op.startsWith]:Data[1]} 
                  query = 
                        { 
                        [Op.and]: [condition]
                        }  
            }else{
                  query = {
                        [Op.startsWith]: parseInt(Data[1])  
                  }
            }             
      }                  

      return query;
    };

const dateWithAndQueryResponse = async (body,columnName="",And="",andColumnName="") => {    
     let query   = ``;    
     let condition = {}
      if(And){
            condition[andColumnName] = And;
            condition.createdAt = { [Op.between]: body}
            query = { 
                  [Op.and]: [condition]
                  }                                                 
      }                
      return query;
    };

const nestedAndQueryResponse = async (body, And="") => {   

      let condition ={} ;
      let AND = [];
      let startDate;
      let endDate;
      // ittrate object at the from of key and value to create dynamic query;

      for (const [key, value] of Object.entries(body)) {                  
                  let con;                   
                  if(key == "startDate" ){
                        startDate = value;
                        continue;
                  }
                  if(key == "endDate" ){
                        endDate = value;
                        continue;
                  }            
                  if(value){      
                              con = {
                                    [key] : {[Op.substring]:value},                  
                              }
                        AND.push(con);
                  }
            }          
                        
            if(startDate && endDate ){                  
                  let con = {
                        createdAt : {[Op.between]:[startDate,endDate]},   
                  }
                  AND.push(con)
            }else if(startDate && !endDate){
                  let con = {
                        createdAt : {[Op.gt]:startDate},   
                  }
                  AND.push(con)
            }else if(endDate && !startDate){
                  let con = {
                        createdAt : {[Op.lt]:endDate},   
                  }
                  AND.push(con)
            }
                  
            condition = { include:[{
                  model: FlightDetails,
                  as   : "flightInfo"
            }], where: {[Op.and]: AND },
            order: [
                  ['createdAt', 'DESC'],
              ],
                  
      }        

            return condition;
      
}





// common function 
async function getSplitStr (string){    
      return string.split(':');  
}

async function getSplitStrDash (string){ 
      
      let data =[];
       string.split('-').map(function(item) {
            data.push(item.trim());
          });  
      return data;
}

async function getSplitWithString (string,key){          
      return string.split(key);  
}

async function genereateRouteInfo(body){        

    let roundInfo = body.routeInfos;    
    let data = roundInfo.map( async function(item) {
            let fromcitydesti = await getSplitStrDash(item.fromCityDestination.trim());
            let toCityOrAirport = await getSplitStrDash(item.toCityDestination.trim());
            return    {
                         "fromCityOrAirport": {"code": fromcitydesti[0]},
                         "toCityOrAirport"  : {"code": toCityOrAirport[0]},
                         "travelDate"       : item.journeyDateOne
                        }                                                                   
          });             
          return Promise.all(data)
  }

  async function calculateFareDetailsReview(body,data){
      let Padult  = parseInt(data.ADULT);
      let Pchild  = parseInt(data.CHILD);
      let Pinfant = parseInt(data.INFANT);    
      let fareDetails = [];        
      
      for (const priceList of body) {              
            let adult = priceList?.fd?.ADULT
            let passengerClass = priceList.fd.ADULT.cc
            let child = priceList?.fd?.CHILD     
            let infant = priceList?.fd?.INFANT
            let fareId = priceList?.id               
            let fareIdentifier = priceList?.fareIdentifier  
            let fareRuleInformation = priceList?.fareRuleInformation  


            if(Padult > 0 && Pchild == 0  && Pinfant == 0 ){    
                  let fare = {
                              baseFare: Padult * adult.fC.BF, 
                              taxesAndFees: Padult * adult.fC.TAF,
                              payAmount: Padult * adult.fC.TF,
                              seatRemains : adult.sR,
                              baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                              fareRuleId : fareId,
                              RefundType : adult.rT,
                              CabinClass   : passengerClass,
                              flowType   : "SEARCH",                                    
                              fareIdentifier : fareIdentifier
                        }
          
            fareDetails.push(fare)   
      
       }
         else if(Padult > 0 && Pchild == 0  && Pinfant > 0 ){     
                        let fare = {
                                    baseFare: Padult * adult.fC.BF, 
                                    taxesAndFees: Padult * adult.fC.TAF,
                                    payAmount: Padult * adult.fC.TF,
                                    seatRemains : adult.sR,
                                    baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                                    fareRuleId : fareId,
                                    RefundType : adult.rT,
                                    cabinClass : passengerClass,
                                    flowType   : "SEARCH",
                                    fareIdentifier : fareIdentifier,                              
                                    fareRuleInformation : fareRuleInformation || [],
                              }

                              fareDetails.push(fare)
            
             }else if(Padult == 0 && Pchild > 0){
                        let fare = {
                              baseFare: Pchild * child.fC.BF, 
                              taxesAndFees: Pchild * child.fC.TAF,
                              payAmount: Pchild * child.fC.TF,
                              seatRemains : child.sR,
                              baggageInformation: { checkInBaggage:child.bI.iB,cabinBaggage: child.bI.cB},
                              fareRuleId : fareId,
                              RefundType : child.rT,
                              cabinClass : passengerClass,
                              flowType   : "SEARCH",
                              fareIdentifier : fareIdentifier,
                              fareRuleInformation : fareRuleInformation || [],
                        }
                        fareDetails.push(fare)

             }
            else if(Padult > 0 && Pchild > 0  && Pinfant == 0 ){

                  let adultBaseFare = Padult * adult.fC.BF;
                  let childBaseFare = Pchild * child.fC.BF;
                  let adultTaxesAndFees = Padult * adult.fC.TAF;
                  let childTaxesAndFees = Pchild * child.fC.TAF;
                  let addultPayAmount = Padult * adult.fC.TF;
                  let childPayAmount = Pchild * child.fC.TF;

                  let baseFare = (adultBaseFare + childBaseFare);
                  let taxesAndFees = (adultTaxesAndFees + childTaxesAndFees);
                  let payAmount = (addultPayAmount + childPayAmount);

                  let fare = {
                        baseFare     : baseFare, 
                        taxesAndFees : taxesAndFees,
                        payAmount    : payAmount,
                        seatRemains  : adult.sR,                        
                        baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                        fareRuleId : fareId,
                        RefundType : adult.rT,
                        cabinClass : passengerClass,
                        flowType : "SEARCH",
                        fareIdentifier : fareIdentifier,
                        fareRuleInformation : fareRuleInformation || [],
                  }
                  fareDetails.push(fare)
            }
            else if(Padult > 0 && Pchild > 0  && Pinfant > 0){

                  let adultBaseFare = Padult * adult.fC.BF;
                  let childBaseFare = Pchild * child.fC.BF;
                  let infantBaseFare = Pinfant * infant.fC.BF;

                  let adultTaxesAndFees = Padult * adult.fC.TAF;
                  let childTaxesAndFees = Pchild * child.fC.TAF;
                  let infantTaxesAndFees = Pinfant * infant.fC.TAF

                  let addultPayAmount = Padult * adult.fC.TF;
                  let childPayAmount = Pchild * child.fC.TF;
                  let infantPayAmount = Pchild * infant.fC.TF;

                  let baseFare = (adultBaseFare + childBaseFare + infantBaseFare);
                  let taxesAndFees = (adultTaxesAndFees + childTaxesAndFees + infantTaxesAndFees);
                  let payAmount = (addultPayAmount + childPayAmount + infantPayAmount);      
                                   
                  let fare = {
                        baseFare     : baseFare, 
                        taxesAndFees : taxesAndFees,
                        payAmount    : payAmount,
                        seatRemains  : adult.sR,
                        RefundType   : adult.rT,
                        cabinClass : passengerClass,
                        baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                        fareRuleId : fareId,                        
                        flowType :"SEARCH",
                        fareIdentifier : fareIdentifier,
                        fareRuleInformation : fareRuleInformation || [],
                  }
                  fareDetails.push(fare)
            }  

                           
        }
        for (const priceList of body) {  
            let adult = priceList?.fd?.ADULT
            let child = priceList?.fd?.CHILD 
            
            seatRemain = adult?.sR || child?.sR || 0;

        }         
        return {seatRemains:seatRemain,fareDetails: fareDetails};  
  }

  async function calculateFareDetails(body,data){

      // console.log(body)
      // console.log(data)

      // for (const priceList of body) {  
             
                                                     
      //       let adult = priceList?.fd?.ADULT
      //       let child = priceList?.fd?.CHILD     
      //       let infant = priceList?.fd?.INFANT
      //       let fareDetails;
      //       let fareId = priceList?.id               
      //       let fareIdentifier = priceList?.fareIdentifier  

      //       if(adult){
      //            return fareDetails = {
      //                   baseFare: adult.fC.BF, 
      //                   taxesAndFees: adult.fC.TAF,
      //                   payAmount: adult.fC.TF,
      //                   seatRemains : adult.sR,
      //                   baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
      //                   fareRuleId : fareId,
      //                   flowType :"SEARCH",
      //                   fareIdentifier : fareIdentifier
      //             }
      //       }else if(adult && child){
      //             return fareDetails = {
      //                   baseFare     : (adult.fC.BF  + child.fC.BF), 
      //                   taxesAndFees : (adult.fC.TAF + child.fC.BF),
      //                   payAmount    : (adult.fC.TF + child.fC.TF),
      //                   seatRemains : adult.sR,
      //                   baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
      //                   fareRuleId : fareId,
      //                   flowType :"SEARCH",
      //                   fareIdentifier : fareIdentifier
      //             }
      //       }else if(adult && child && infant){
      //             return fareDetails = {
      //                   baseFare     : (adult.fC.BF  + child.fC.BF  + infant.fC.BF), 
      //                   taxesAndFees : (adult.fC.TAF + child.fC.BF + infant.fC.BF),
      //                   payAmount    : (adult.fC.TF  + child.fC.TF + infant.fC.TF),
      //                   seatRemains : adult.sR,
      //                   baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
      //                   fareRuleId : fareId,
      //                   flowType :"SEARCH",
      //                   fareIdentifier : fareIdentifier
      //             }
      //       }                                                                                                                  
                           
      //   }
      let Padult  = parseInt(data.ADULT);
      let Pchild  = parseInt(data.CHILD);
      let Pinfant = parseInt(data.INFANT);  
      let fareDetails = []; 
      let seatRemain ;     
      let fareDetais ={}    
      
      for (const priceList of body) {   
            let adult = priceList?.fd?.ADULT
            let passengerClass = priceList.fd.ADULT.cc
            let child = priceList?.fd?.CHILD     
            let infant = priceList?.fd?.INFANT            
            let fareId = priceList?.id               
            let fareIdentifier = priceList?.fareIdentifier  


            if(Padult > 0 && Pchild == 0  && Pinfant == 0 ){    
                  let fare = {
                              baseFare: Padult * adult.fC.BF, 
                              taxesAndFees: Padult * adult.fC.TAF,
                              payAmount: Padult * adult.fC.TF,
                              seatRemains : adult.sR,
                              baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                              fareRuleId : fareId,
                              RefundType : adult.rT,
                              CabinClass   : passengerClass,
                              flowType   : "SEARCH",                                    
                              fareIdentifier : fareIdentifier
                        }
          
            fareDetails.push(fare)   
      
       }

           else if(Padult > 0 && Pchild == 0  && Pinfant > 0 ){    
                        let fare = {
                                    baseFare: Padult * adult.fC.BF, 
                                    taxesAndFees: Padult * adult.fC.TAF,
                                    payAmount: Padult * adult.fC.TF,
                                    seatRemains : adult.sR,
                                    baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                                    fareRuleId : fareId,
                                    RefundType : adult.rT,
                                    CabinClass   : passengerClass,
                                    flowType   : "SEARCH",                                    
                                    fareIdentifier : fareIdentifier
                              }
                
                  fareDetails.push(fare)   
            
             }
             else if(Padult == 0 && Pchild > 0){
                  let fare = {
                              baseFare: Pchild * child.fC.BF, 
                              taxesAndFees: Pchild * child.fC.TAF,
                              payAmount: Pchild * child.fC.TF,
                              seatRemains : child.sR,
                              baggageInformation: { checkInBaggage:child.bI.iB,cabinBaggage: child.bI.cB},
                              fareRuleId : fareId,
                              RefundType : child.rT,
                              CabinClass   : passengerClass,
                              flowType   : "SEARCH",
                              fareIdentifier : fareIdentifier
                        }
                        fareDetails.push(fare)

             }
            else if(Padult > 0 && Pchild > 0  && Pinfant == 0 ){

                  let adultBaseFare = Padult * adult.fC.BF;
                  let childBaseFare = Pchild * child.fC.BF;
                  let adultTaxesAndFees = Padult * adult.fC.TAF;
                  let childTaxesAndFees = Pchild * child.fC.TAF;
                  let addultPayAmount = Padult * adult.fC.TF;
                  let childPayAmount = Pchild * child.fC.TF;

                  let baseFare = (adultBaseFare + childBaseFare);
                  let taxesAndFees = (adultTaxesAndFees + childTaxesAndFees);
                  let payAmount = (addultPayAmount + childPayAmount);

                  let fare = {
                        baseFare     : baseFare, 
                        taxesAndFees : taxesAndFees,
                        payAmount    : payAmount,
                        seatRemains  : adult.sR,                        
                        baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                        fareRuleId : fareId,
                        RefundType : adult.rT,
                        CabinClass   : passengerClass,
                        flowType : "SEARCH",
                        fareIdentifier : fareIdentifier
                  }
                  fareDetails.push(fare)
            }
            else if(Padult > 0 && Pchild > 0  && Pinfant > 0){

                  let adultBaseFare = Padult * adult.fC.BF;
                  let childBaseFare = Pchild * child.fC.BF;
                  let infantBaseFare = Pinfant * infant.fC.BF;

                  let adultTaxesAndFees = Padult * adult.fC.TAF;
                  let childTaxesAndFees = Pchild * child.fC.TAF;
                  let infantTaxesAndFees = Pinfant * infant.fC.TAF

                  let addultPayAmount = Padult * adult.fC.TF;
                  let childPayAmount = Pchild * child.fC.TF;
                  let infantPayAmount = Pchild * infant.fC.TF;

                  let baseFare = (adultBaseFare + childBaseFare + infantBaseFare);
                  let taxesAndFees = (adultTaxesAndFees + childTaxesAndFees + infantTaxesAndFees);
                  let payAmount = (addultPayAmount + childPayAmount + infantPayAmount);      
                                   
                  let fare = {
                        baseFare     : baseFare, 
                        taxesAndFees : taxesAndFees,
                        payAmount    : payAmount,
                        seatRemains  : adult.sR,
                        RefundType   : adult.rT,
                        cabinClass   : passengerClass,
                        baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                        fareRuleId : fareId,                        
                        flowType :"SEARCH",
                        fareIdentifier : fareIdentifier,                        
                  }

                  fareDetails.push(fare)
            }                                                                                                                  
                           
        }
        for (const priceList of body) {  
            let adult = priceList?.fd?.ADULT
            let child = priceList?.fd?.CHILD             
            seatRemain = adult?.sR || child?.sR || 0;

        }         
        return {seatRemains:seatRemain,fareDetails: fareDetails};
  }


async function calculateFareDetails2(body,fareTotal){
try{
      let baseFare     = fareTotal?.totalFareDetail?.fC?.BF;
      let taxesAndFees = fareTotal?.totalFareDetail?.fC?.TAF
      let payAmount    = fareTotal?.totalFareDetail?.fC?.TF

      let adult = body[0].fd.ADULT;      
      let fare = {
            baseFare     : baseFare, 
            taxesAndFees : taxesAndFees,
            payAmount    : payAmount,
            seatRemains  : adult.sR,                        
            baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
            fareRuleId : body[0].id,
            RefundType : adult.rT,
            cabinClass : adult.cc,
            flowType : "SEARCH",
            fareIdentifier : body[0].fareIdentifier,
            fareRuleInformation : body[0].fareRuleInformation || [],
      }

        for (const priceList of body) {  
            let adult = priceList?.fd?.ADULT
            let child = priceList?.fd?.CHILD 
            
            seatRemain = adult?.sR || child?.sR || 0;

        }         
        return {seatRemains:seatRemain,fareDetails: fare};  
}catch(error){
  console.log(error)
}
  }


async function calculateFareDetailsRound(priceData){
                                                                         
                  // return fareDetails = {
                  //       baseFare: priceData?.totalFareDetail?.fC?.BF, 
                  //       taxesAndFees:  priceData?.totalFareDetail?.fC?.TAF,
                  //       payAmount: priceData?.totalFareDetail?.fC?.TF,
                  //       seatRemains  : adult.sR,
                  //       RefundType   : adult.rT,
                  //       baggageInformation: { checkInBaggage:adult.bI.iB,cabinBaggage: adult.bI.cB},
                  //       fareRuleId : fareId,                        
                  //       flowType :"SEARCH",
                  //       fareIdentifier : fareIdentifier,
                  //       fareRuleInformation : fareRuleInformation || [],
                  // }         
                  
                  return fareDetails = {
                        baseFare: priceData?.totalFareDetail?.fC?.BF, 
                        taxesAndFees:  priceData?.totalFareDetail?.fC?.TAF,
                        payAmount: priceData?.totalFareDetail?.fC?.TF,
                  }     
           
  }


  async function getLogo(code){

      const { flightAPI } = GLOBAL_OBJ['3rdPartyConfig'];      
            
      const gpsEnv = returnGpsEnvObject(is_test=1, flightAPI);        
      const endpoint = gpsEnv.endpoints.FLIGHT_LOGO;            

      const url = `${gpsEnv.host}${endpoint}${code}.png`;    
      const headers = {
          apikey: gpsEnv.apiKey
      };                 
             
      //const { data } = await GET(url, { headers }); 
       
      return url

  }

  async function calculateFlightLayover(body){

            let layover = [];
            let timeTable = [];
            let layoverTime = [];
            body.forEach((element)=>{              
                  layover.push(element.departureDate+' '+element.departure+":00")
                  layover.push(element.arrivalDate+" "+element.arrival+":00")
            })           
            
            let end = layover.length;
            if(end == 2){
                  timeTable = [layover];
            }

            let totalTravellTime = [layover[0],layover[end-1]]  
            
            let tt =  await calculateTotalTravellTime(totalTravellTime);          
            
            if(layover.length > 2){
                  for(let i=0; i<layover.length-1; i++){
                        if(i===0){
                              continue;
                        }
                        if(i%2 != 0){
                              timeTable.push([layover[i],layover[i+1]])
                        }
                  }
             }    
             
             timeTable.forEach(async(element) =>{    
                   
                  var startDate = new Date(element[0]);      
                  var endDate   = new Date(element[1]);
                  var seconds   = (endDate.getTime() - startDate.getTime()) / 1000;
                  let minutes   = Math.floor(seconds / 60);

                              let hours = Math.floor(minutes / 60);          
                              minutes = minutes % 60;
                              let duration;
                              if(minutes<10){
                                    duration = hours+"h - "+"0"+minutes+"m";
                              }else{
                                    duration = hours+"h - "+minutes+"m";
                              }     

                  layoverTime.push({layover: duration,totalTravellTime:tt});
             })

             return layoverTime || []
  }

  async function generateKeyforSSRInfo(body){
      try{            
            let key = body?.id;
            let ssrInfo = body?.ssrInfo;
            let ssrData = {};    
                  if(ssrInfo.MEAL){
                        ssrData.MEAL = await addKeyInSSR(key,ssrInfo.MEAL);                                             
                  }else if(ssrInfo.BAGGAGE){
                        ssrData.BAGGAGE = await addKeyInSSR(key,ssrInfo.BAGGAGE);                           
                  }                
            return ssrData;
      }catch(error){

      }
  }
   

  async function addKeyInSSR (key, data){
      let out = [];
      for (const dd of data) {
            let ss = {
                  "key" : key,
                  "code": dd?.code,
                  "amount": dd?.amount || 0,
                  "desc": dd?.desc || ""
              }
            
            out.push(ss)

      }
       
      return out;

  }

  async function ArrNoDupe(a) {
      var temp = {};
      for (var i = 0; i < a.length; i++)
          temp[a[i]] = true;
      var r = [];
      var priceColor = [];
      var colour = ['#E4C8C8','#806A7D','#E69C77','#E9C352','#B589D7','#81F5DC','#4AB8ED','#163020', '#161A30', '#F4CE14', '#FAEF9B', '#720455','#BFD8AF','#280274','#7D7C7C','#191919','#191919','#191919','#191919','#191919','#191919','#191919','#191919'];   

      for (var k in temp)
          r.push(k);

     for(let i=0; i<r.length; i++){
      let t = r[i];
      priceColor.push({price:t,color:colour[i]})
     }          
      return priceColor;   
  }

  function  gaphours (star,end){
      return  Math.abs(end - star);
  }
  
  function  gapminute (star,end){
      
      return  Math.abs(end - star);
  }

  async function parseMillisecondsIntoReadableTime(milliseconds){
      //Get hours from milliseconds
      var hours = milliseconds / (1000*60*60);
      var absoluteHours = Math.ceil(hours);
      var h = absoluteHours > 9 ? absoluteHours : absoluteHours;
    
      //Get remainder from hours and convert to minutes
      var minutes = (hours - absoluteHours) * 60;
      var absoluteMinutes = Math.ceil(minutes);
      var m = absoluteMinutes > 9 ? absoluteMinutes : absoluteMinutes;
    
      //Get remainder from minutes and convert to seconds
      var seconds = (minutes - absoluteMinutes) * 60;
      var absoluteSeconds = Math.floor(seconds);
      var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
    
      return Math.abs(h) +"h"+ ':' + Math.abs(m)+"m";
    }

    async function calculateTotalTravellTime(dates){
      //Get hours from milliseconds
      var startDate = new Date(dates[0]);
                    
      var endDate   = new Date(dates[1]);
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

      let minutes = Math.floor(seconds / 60);

                  let hours = Math.floor(minutes / 60);          
                  minutes = minutes % 60;
                  let duration;
                  if(minutes<10){
                        duration = hours+"h - "+"0"+minutes+"m";
                  }else{
                        duration = hours+"h - "+minutes+"m";
                  }

                  return duration;
    }
    

module.exports = {
    stringQueryResponse,
    NumericQueryResponse,
    NumericWithAndQueryResponse,
    StringWithAndQueryResponse,   
    getSplitStr,
    getSplitStrDash,
    genereateRouteInfo,
    getSplitWithString,
    calculateFareDetails,
    calculateFareDetailsRound,
    getLogo,
    calculateFareDetails2,
    ArrNoDupe,
    dateWithAndQueryResponse,
    nestedAndQueryResponse,
    calculateFlightLayover,
    generateKeyforSSRInfo,
    calculateFareDetailsReview

  }