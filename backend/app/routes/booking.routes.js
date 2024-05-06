var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const flightBooking             = require("../controllers/booking.controller");
const { BookingValidation }        = require("../validations");


// Domestic flight Search 
router.post("/review",[AuthJwt.verifyJwtToken],flightBooking.previewFlight);
router.post("/addPassenger",[AuthJwt.verifyJwtToken,BookingValidation.addPassenger],flightBooking.addPassenger);
router.post("/seatMap",[AuthJwt.verifyJwtToken],flightBooking.seatMap);
router.post("/bookingDetails",[AuthJwt.verifyJwtToken],flightBooking.bookingReview);
router.post("/checkValidationOfBookingId",[AuthJwt.verifyJwtToken,BookingValidation.checkBookingId],flightBooking.checkValidationOfBookingId);
router.post("/confirmBooking",[AuthJwt.verifyJwtToken,BookingValidation.confirmBooking],flightBooking.confirmbooking);
router.post("/holdBooking",[AuthJwt.verifyJwtToken,BookingValidation.holdBooking],flightBooking.holdBooking);
router.post("/changeBookingStatus",[AuthJwt.verifyJwtToken,BookingValidation.bookingStatus],flightBooking.changeBookingStatus);
router.post("/getTicketDetails",[AuthJwt.verifyJwtToken,BookingValidation.bookingDetails],flightBooking.bookingDetails);
router.post("/ConfirmholdBooking",[AuthJwt.verifyJwtToken,BookingValidation.ConfirmHoldBooking],flightBooking.ConfirmholdBooking);


// Domestic cacellation and refunds
router.post("/cancellation",[AuthJwt.verifyJwtToken,BookingValidation.Cancellation],flightBooking.domesticCancellation);
router.post("/dateChange",[AuthJwt.verifyJwtToken,BookingValidation.DateChange],flightBooking.domesticDateChange);
router.post("/getAmendments",[AuthJwt.verifyJwtToken],flightBooking.getAmendments);

//Domestic Round Trip 
router.post("/reviewReturn",[AuthJwt.verifyJwtToken],flightBooking.previewFlightReturn);
module.exports = router;
