const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper");

create =  [
    body('title')
        .exists()
        .isAlphanumeric().withMessage('title should be alpanumeric')
        .isLength({min: 1 , max: 50}).withMessage('title should not be empty, should be Mr ot Mrs')
        .trim(),
    body('firstName')
        .exists()
        .isAlphanumeric().withMessage('First name should be alpanumeric')
        .isLength({min: 1 , max: 50}).withMessage('First Name should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('lastName')
        .exists()
        .isAlphanumeric().withMessage('Last name should be alpanumeric')
        .isLength({min: 2 , max: 50}).withMessage('Last name should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('email')
        .exists()
        .isEmail().withMessage('Email is not valid')
        //.isLength({min: 2 , max: 50}).withMessage('lastName should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('mobileNumber')
        .exists()
        .isNumeric().withMessage('Mobile number should be numeric')
        .isLength({min: 8 , max: 12}).withMessage('Mobile number should not be empty, should be more than 8 and less than 12 character')
        .trim(),

    body('passport')
        .exists()
        .isLength({min: 6 , max: 16}).withMessage('passport should not be empty, should be more than 6 and less than 16 character')        
        .trim(),

    body('DOB')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('DOB should not be empty, should be in date format like YYYY-MM-DD')        
        .trim(),
    
    body('passportExp')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('passportExp should not be empty, should be in date format like YYYY-MM-DD')        
        .trim(),    
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

update =  [
    body('firstName')
        .exists()
        .isAlphanumeric().withMessage('First name should be alpanumeric')
        .isLength({min: 1 , max: 50}).withMessage('First name should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('lastName')
        .exists()
        .isAlphanumeric().withMessage('Last name should be alpanumeric')
        .isLength({min: 2 , max: 50}).withMessage('Last name should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('email')
        .exists()
        .isEmail().withMessage('Email is not valid')
        //.isLength({min: 2 , max: 50}).withMessage('lastName should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('mobileNumber')
        .exists()
        .isNumeric().withMessage('Mobile number should be numeric')
        .isLength({min: 8 , max: 12}).withMessage('Mobile number should not be empty, should be more than 8 and less than 12 character')
        .trim(),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

changePassword =  [ 
    body('old_password')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('old_password should not be empty, should be more than 8 and less than 16 character')
        .trim(),

    body('new_password')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('new_password should not be empty, should be more than 8 and less than 16 character')
        .trim(),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,500,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

loginAgent =  [ 
    body('email')
        .exists()
        .isEmail().withMessage('Email is not valid')        
        .trim(),
        body('password')
        .exists()
        .isLength({min: 8 , max: 16}).withMessage('password should not be empty, should be more than 8 and less than 16 character')
        .trim(),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,500,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];



const userValidation = {
    create: create,
    update: update,
    changePassword:changePassword,
    loginAgent : loginAgent,
};
  module.exports = userValidation;