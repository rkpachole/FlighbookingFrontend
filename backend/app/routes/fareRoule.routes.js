var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const FlightRulesController            = require("../controllers/fareRules.controller");
const { CustomerValidation }        = require("../validations");


// Domestic flight Search 
router.post("/serchRules",[AuthJwt.verifyJwtToken],FlightRulesController.serchRules);


module.exports = router;
