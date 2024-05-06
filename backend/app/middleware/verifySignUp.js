const db = require("../models");
const ApiHelper = require("../helpers/apiHelper")
const ROLES = db.ROLES;
const User = db.User;

checkEmailMobileNumber = (req, res, next) => {
  // Here check email
  User.findOne({
    where: {
        email: req.body.email
    }
  }).then(user => {
    if (user) {
      return ApiHelper.successError(res,400,"Failed! Email is already in use!",[]);
    }
    // Here check mobile number
    User.findOne({
      where: {
        mobileNumber: req.body.mobileNumber
      }
    }).then(user => {
      if (user) {
        return ApiHelper.successError(res,401,"Failed! Mobile Number is already in use!",[]);
      }
      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};
const VerifySignUp = {
  checkEmailMobileNumber: checkEmailMobileNumber,
  checkRolesExisted: checkRolesExisted
};
module.exports = VerifySignUp;