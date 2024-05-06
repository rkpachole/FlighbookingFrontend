const db = require("../models");
const FlightContactDetail = db.FlightContactDetails

async function FlightContactDetails() {
    await FlightContactDetail.create({
    flightid                        : "699",        
    flightNumber                    : "8103",
    bookingId                       : "TJS106100821837",
    companyName                     : "Info",
    gstNumber                       : "29GGGGG1314R9Z6",
    email                           : "info@gmail.com",
    mobile                          : "9568568548",
    address                         : "Delhi",
    personalEmail                   : "agent@gmail.com",
  });
}
module.exports = FlightContactDetails;  
