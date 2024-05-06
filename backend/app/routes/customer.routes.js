var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const CustomerController            = require("../controllers/customer.controller");
const { CustomerValidation }        = require("../validations");

router.get("/get-all-customer",[AuthJwt.verifyJwtToken],CustomerController.getAll);
router.post("",[AuthJwt.verifyJwtToken],CustomerController.create);
router.put("/:id",[AuthJwt.verifyJwtToken],CustomerController.update);
router.get("/:id", [AuthJwt.verifyJwtToken],CustomerController.get);
router.delete("/:id",[AuthJwt.verifyJwtToken],CustomerController.destroy);




module.exports = router;
