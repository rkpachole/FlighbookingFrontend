var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const PaymentController            = require("../controllers/payment.controller");

router.get("/getkey",PaymentController.getApiKey),
router.post("/checkout",PaymentController.checkout);
router.post("/paymentVerification",PaymentController.paymentVerification),
router.post("/updateTransactions",PaymentController.createTransaction),
module.exports = router;