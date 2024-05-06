const jwt = require("jsonwebtoken");
const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const EnvConfig = require("../config/env.config");
const User = db.user;
const {sign, verify} = require('jsonwebtoken');

verifyToken = (req, res, next) => {
  
  let token = req.headers["x-access-token"];
  if (!token) {
    return ApiHelper.successError(res,403,"No token provided!",[]);
  }
  jwt.verify(token, EnvConfig.JwtSecretKey, (err, decoded) => {
    if (err) {
      return ApiHelper.successError(res,401,"Unauthorized",[]);
    }
    req.userId = decoded.id;
    next();
  });
};




isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};
isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};
isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};



verifyJwtToken = (req, res, next)=>{
  let token = req.get('authorization');         
        if(token){
            token = token.slice(7);
            verify(token, process.env.ACCESS_TOKEN, async(err, decoded)=> {
                if(err){

                    res.json({"status":false,statusCode:403,"message":"invalid token"});
                }else {                  
                    let email = decoded.email;   
                    let userId = decoded.id;                    
                    req.body.currentUser = {
                      id          : userId,
                      email       : email,
                      roleId      : decoded.roleId,
                      sessionId   : decoded.session_id
                    }                    
                    next()
                }
            })
        }else {
           // res.status('401').json({"sucess":false, "message":"Unauthorized user"});
            return ApiHelper.successError(res,401,"Unauthorized",[]);
        }
}
const AuthJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin,
  verifyJwtToken :verifyJwtToken
};
module.exports = AuthJwt;