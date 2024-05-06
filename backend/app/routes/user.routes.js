var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp,verifyJwtToken }  = require("../middleware");
const UserController            = require("../controllers/user.controller");
const { UserValidation }        = require("../validations");

//router.get("", [AuthJwt.verifyToken], UserController.findAll);
router.get("",UserController.getAll);
//router.post("", [AuthJwt.verifyToken, userValidation.createUser, verifySignUp.checkDuplicateUsernameOrEmail], UserController.create);
router.post("", [UserValidation.create, VerifySignUp.checkEmailMobileNumber], UserController.create);
router.get("/:id", UserController.get);
router.put("/:id", [UserValidation.update], UserController.update);
router.delete("/:id", UserController.destroy);

router.post("/update-profile", [AuthJwt.verifyToken, UserValidation.update], UserController.updateProfile);
router.post("/activate-user", [AuthJwt.verifyToken], UserController.activateUser);
router.post("/change-password",[AuthJwt.verifyToken], UserController.changePassword);

/* register user*/
router.post("/agent-register",[UserValidation.create], UserController.registerAgent);
router.post("/agent-login",[loginAgent],UserController.loginAgent);
router.post("/bookTicket",AuthJwt.verifyJwtToken,UserController.bookingList);
router.post("/bookTicket",AuthJwt.verifyJwtToken,UserController.bookingList);

/** Admin Role Permission  */


router.get("/admin/userPermission",AuthJwt.verifyJwtToken,UserController.getUserPermission);






module.exports = router;
