const db = require("../models");
const Passenger = db.PassengerInfo

async function PassengerSeeder() {
    await Passenger.create({
        bookingId           : "TJS106100821837",
        PNR                 : "",
        requestId           : "2225244766",
        firstName           : "John",
        lastName            : "Doe",
        dob                 : "1978-12-15",
        type                : "adult",
        seatNo              : "A1",
  });
}
module.exports = PassengerSeeder;  
