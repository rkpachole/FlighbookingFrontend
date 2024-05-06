const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper")

countryCheck =  [
    body('country_name')
        .exists().withMessage('Country name is required')
        .isAlphanumeric().withMessage('Country name should be alpanumeric')
        .isLength({min: 1}).withMessage('Country name should not be empty')
        .trim(),

    body('short_name')
        .exists().withMessage('Short name is required')
        .isAlphanumeric().withMessage('Short name should be alpanumeric')
        .isLength({min: 2 , max: 50}).withMessage('Short name should not be empty')
        .trim(),

    body('code')
        .exists().withMessage('Code is required')
        .isNumeric().withMessage('Code is not valid')
        .isLength({min: 2 , max: 50}).withMessage('Code should not be empty, should be more than one and less than 50 character')
        .trim(),

    body('currency_name')
        .exists().withMessage('Currency name is required'),
        // .isNumeric().withMessage('phone should be numeric')
        // .isLength({min: 8 , max: 12}).withMessage('phone should not be empty, should be more than 8 and less than 12 character')
        // .trim(),
        
    body('currency_symbol')
        .exists().withMessage('Currency symbol is required'),
        // .isLength({min: 8 , max: 16}).withMessage('password should not be empty, should be more than 8 and less than 16 character')
        // .trim(),

    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

const validation = {
    countryCheck: countryCheck,
};
  module.exports = validation;