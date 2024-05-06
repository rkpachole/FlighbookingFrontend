const db = require("../models");
const FlightDetail = db.FlightDetails

async function FlightDetailsSeeder() {
    await FlightDetail.create({
        bookingId                       : "TJS106100821837",
        flightId                        : "699",
        flightNumber                    : "8103",
        flightName                      : "SpiceJet",
        flightCode                      : "SG",
        flightLogo                      : "https://apitest.tripjack.com/img/airlineLogo/v1/SG.png",
        flightStops                     : "0",
        flightDuration                  : "2h - 35m",
        departureAirportInformation     : "",
        arrivalAirportInformation       : "",
        departureDate                   : "2024-01-08",
        departureTime                   : "18:15",
        arrivalDate                     : "2024-01-08",
        arrivalTime                     : "20:50",
        fareDetail                      : "",
  });
}
module.exports = FlightDetailsSeeder;  
