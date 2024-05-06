const db = require("../models");
const Booking = db.Booking

async function BookingSeader() {
    await Booking.create({
        id                  : "TJS106100821837",
        PNR                 : "",
        fareRuleId          : "15-2-10-0320073114_89BOMBLRUK507BLRDELUK808~15205523786728",
        requestId           : "2225244766",
        preferredFareType   : "REGULAR",
        adult               : 2,
        child               : 1,
        infant              : 0,
        refundType          : "1",   
        routeInfo           : "",                         
        flightid            : "699",
        basefare            : "2997",
        taxesAndFees        : "3844.5",
        payAmount           : "6841.5",
        fareIdentifier      : "SALE",  
        agentId             : 1,      
        bookingStatus       : "0", 
        bookingType         : "1"
  });
}
module.exports = BookingSeader;  
