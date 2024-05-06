var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const hotelBooking              = require("../controllers/hotelBooking.controller");

router.post("/citySearch",[AuthJwt.verifyJwtToken],hotelBooking.citySearch);
router.post("/search",[AuthJwt.verifyJwtToken],hotelBooking.search);
router.post("/hotelDetails",[AuthJwt.verifyJwtToken],hotelBooking.hotelDetails);
router.post("/roomReview",[AuthJwt.verifyJwtToken],hotelBooking.roomReview);
router.post("/confirmBooking",[AuthJwt.verifyJwtToken],hotelBooking.confirmBooking);




//Domestic Round Trip 
//router.post("/reviewReturn",[AuthJwt.verifyJwtToken],flightBooking.previewFlightReturn);

module.exports = router;