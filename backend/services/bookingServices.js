const db = require("../app/models");
const Booking = db.Booking;
const Flight = db.FlightDetails;
const Passenger = db.PassengerInfo;
const FlightContact = db.FlightContactDetails;


const saveBookingDetails = async (data) => {
    try {        
        let id = data?.bookingId;
        let fareRuleId =data?.fareDetail[0]?.fareRuleId
        let bookingType = data?.tripType;
        let requestId = data?.requestId;
        let isDomestic = data?.isDomestic;
        let paxInfo = data?.paxInfo;
        let routeInfo = data?.routeInfo || []
        let preferredFareType = data?.preferredFareType;        
        let agentId = data.currentUser.id;                
        let RefundType = data.fareDetail[0].RefundType;                      
        let basefare = data.fareDetail[0].baseFare;
        let taxesAndFees = data.fareDetail[0].taxesAndFees
        let payAmount = data.fareDetail[0].payAmount
        let fareIdentifier = data.fareDetail[0].fareIdentifier                
        
        let bookingData = {            
            id                  : id,
            requestId           : requestId,
            fareRuleId          : fareRuleId,
            preferredFareType   : preferredFareType,
            adult               : paxInfo.ADULT,
            child               : paxInfo.CHILD,
            infant              : paxInfo.INFANT,
            refundType          : RefundType,                        
            basefare            : basefare,
            taxesAndFees        : taxesAndFees,
            payAmount           : payAmount,
            routeInfo           : JSON.stringify(routeInfo),
            fareIdentifier      : fareIdentifier,
            agentId             : agentId,
            isDomestic          : isDomestic,
            bookingType         : bookingType || ""
        }      

         let DublicateData = await Booking.findOne( { where: { id : id }})
         if (DublicateData) {
           return false;
        } else {                       
            return await Booking.create(bookingData);
        }

        
    } catch (error) {    
        console.log(error);
        throw ApiHelper.successError(res, 408, "SomeThing went wrong");
    }
}

const savePassengerDetails = async (data) => {
    try {                      
        let passengerDetails = data.travellerInfo;
        let bookingId = data?.bookingId;   
       for(let pdata of passengerDetails){
        if(pdata.isSave === true){
            let info = {
                bookingId      : bookingId || "",
                title          : pdata.title || "",
                firstName      : pdata.firstName || "",
                lastName       : pdata.lastName || "",
                dob            : pdata.dob || "",
                type           : pdata.passengerType|| "",
                passportNumber : pdata.passportNumber|| "",
                passportNation : pdata.passportNation|| "",
                passportExp    : JSON.stringify(pdata.ssrPassportNumber)|| "",
                baggageInfo    : JSON.stringify(pdata.ssrBaggageInfos)|| "",
                mealInfo       : JSON.stringify(pdata.ssrMealInfos)|| "",
                seatInfo       : JSON.stringify(pdata.ssrSeatInfos) || "",
            }    
            await Passenger.create(info);    
        }
       }
       
       return true;

    } catch (error) {
        
        throw error;
    }
}

const saveFlightDetails = async (data) => {
    try {

        let flightData = data.listOfFlight;

        for(const flight of flightData ){        
        let bookingId = data?.bookingId;               
        let flightStop = data?.flightStops;        
        let flightId = flight.flightId;
        let flightNumber = flight.flightNumber;
        let flightName = flight.flightDescription.name;
        let flightCode = flight.flightDescription.code;
        let flightLogo = flight.flightLogo;    
        let flightDuration = flight.flightDuration;
        let departureAirportInformation = JSON.stringify(flight.departureAirportInformation);
        let arrivalAirportInformation = JSON.stringify(flight.arrivalAirportInformation);
        let departureDate = flight.departureDate;
        let departureTime = flight.departureTime;
        let arrivalDate = flight.arrivalDate;
        let arrivalTime = flight.arrivalTime;
                               
        let flightData = {
            bookingId                       : bookingId, 
            flightId                        : flightId, 
            flightNumber                    : flightNumber, 
            flightName                      : flightName, 
            flightCode                      : flightCode, 
            flightLogo                      : flightLogo, 
            flightStop                      : flightStop, 
            flightDuration                  : flightDuration, 
            departureAirportInformation     : departureAirportInformation, 
            arrivalAirportInformation       : arrivalAirportInformation, 
            departureDate                   : departureDate, 
            departureTime                   : departureTime, 
            arrivalDate                     : arrivalDate, 
            arrivalTime                     : arrivalTime,                    
        }
         await Flight.create(flightData);
    }

    return true;

    } catch (error) {        
        throw error;
    }
}

const savePassengerContactDetails = async (data) => {
    try {                           
         let bookingId       = data?.bookingId;
         let gstNumber       = data?.gstNumber ;
         let email           = data?.gstEmail;
         let registeredName  = data?.registeredName;
         let mobile          = data?.mobile;
         let address         = data?.address;
         let personalEmail   = data?.personalEmail;

         let contactData = {                        
                bookingId       : bookingId,
                gstNumber       : gstNumber,
                email           : email,
                registeredName  : registeredName,
                mobile          : mobile,
                address         : address,
                personalEmail   : personalEmail,
         }

       return await FlightContact.create(contactData)

    } catch (error) {
        
        throw error;
    }
}


module.exports = {   
    saveBookingDetails,    
    savePassengerDetails,
    saveFlightDetails,
    savePassengerContactDetails
}