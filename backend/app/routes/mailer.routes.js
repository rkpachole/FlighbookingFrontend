var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const mailerController            = require("../controllers/mailer.controller");

router.post("/sendTicketByEmail",[AuthJwt.verifyJwtToken],mailerController.sendTicketMail);
module.exports = router;
