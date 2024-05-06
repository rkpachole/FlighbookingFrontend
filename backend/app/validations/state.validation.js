const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper")


cityCheck =  [
    body('code')
        .exists().withMessage('code is required')
        .isAlphanumeric().withMessage('code  should be alpanumeric')
        .isLength({min: 1}).withMessage('code  should not be empty')
        .trim(),

    body('name')
        .exists().withMessage('name is required')
        .isAlphanumeric().withMessage('name  should be numeric')
        .isLength({min: 1}).withMessage('name  should not be empty')
        .trim(),
    body('country_code')
        .exists().withMessage('country_code is required')
        .isAlphanumeric().withMessage('country_code should be numeric')
        .isLength({min: 1}).withMessage('country_code should not be empty')
        .trim(),


    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

createState =  [
   body('code')
        .exists().withMessage('code is required')
        .isAlphanumeric().withMessage('code  should be alpanumeric')
        .isLength({min: 1}).withMessage('code  should not be empty')
        .trim(),
        
    body('name')
        .exists().withMessage('name is required')
        .isString().withMessage('name should be alpha numeric')
        .isLength({min: 1}).withMessage('name  should not be empty')
        .trim(),
    body('country_code')
        .exists().withMessage('country_code is required')
        .isString().withMessage('country_code should be String')
        .isLength({min: 1}).withMessage('country_code should not be empty')
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
    cityCheck: cityCheck,
    createState:createState,
};
  module.exports = validation;