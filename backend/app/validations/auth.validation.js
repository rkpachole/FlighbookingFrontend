const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper")

signupCheck =  [
    body('firstName')
        .exists()
        .isAlphanumeric().withMessage('firstName should be alpanumeric')
        .isLength({min: 1 , max: 50}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('lastName')
        .exists()
        .isAlphanumeric().withMessage('lastName should be alpanumeric')
        .isLength({min: 2 , max: 50}).withMessage('lastName should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('email')
        .exists()
        .isEmail().withMessage('Email is not valid')
        //.isLength({min: 2 , max: 50}).withMessage('Email should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('mobileNumber')
        .exists()
        .isNumeric().withMessage('mobile number should be numeric')
        .isLength({min: 8 , max: 12}).withMessage('phone should not be empty, should be more than 8 and less than 12 character')
        .trim(),
        
    body('password')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('password should not be empty, should be more than 8 and less than 16 character')
        .trim(),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

login =  [
    // body('email')
    //     .exists()
    //     .isEmail().withMessage('Email is not valid')
    //     //.isLength({min: 2 , max: 50}).withMessage('lastName should not be empty, should be more than one and less than 50 character')
    //     .trim(),
         
    body('password')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('password should not be empty, should be more than 8 and less than 16 character')
        .trim(),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

forgotPassword =  [
    body('email')
        .exists()
        .isEmail().withMessage('Email is not valid')
        //.isLength({min: 2 , max: 50}).withMessage('lastName should not be empty, should be more than one and less than 50 character')
        .trim(),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];



const validation = {
    signupCheck: signupCheck,
    login: login,
    forgotPassword:forgotPassword,
};
  module.exports = validation;