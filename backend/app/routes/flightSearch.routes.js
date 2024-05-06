var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const FlightController            = require("../controllers/flightController");
const { searchRound, flightSearch } = require('../validations/flightSearch.validation');


// Domestic flight Search 
router.post("/oneWay",[AuthJwt.verifyJwtToken,flightSearch],FlightController.oneWayTripList);
router.post("/roundTrip",[AuthJwt.verifyJwtToken,searchRound],FlightController.roundTripList);
router.post("/multiCity",[AuthJwt.verifyJwtToken],FlightController.multiCityList);

router.post("/OneWaySearch",[AuthJwt.verifyJwtToken],FlightController.oneWaySearchList);

// International flight Search 
router.post("/interNational/oneWay",[AuthJwt.verifyJwtToken],FlightController.InternationlOneWayTripList);
router.post("/interNational/roundTrip",[AuthJwt.verifyJwtToken],FlightController.InternationlRoundTripList);    
router.post("/interNational/multiCity",[AuthJwt.verifyJwtToken],FlightController.InternationlMultiCityList);


router.post("/OneWaySearch",[AuthJwt.verifyJwtToken],FlightController.oneWaySearchList);
router.post("/roundTripSearch",[AuthJwt.verifyJwtToken],FlightController.roundTripSearch);





module.exports = router;
