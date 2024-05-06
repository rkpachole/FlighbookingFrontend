var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const airPortController            = require("../controllers/airport.controller");
const { BookingValidation }        = require("../validations");

router.post("/",[AuthJwt.verifyJwtToken],airPortController.airportList);
module.exports = router;
