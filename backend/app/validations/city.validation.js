const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper")

cityCheck =  [
    body('city_name')
        .exists().withMessage('City name is required')
        .isAlphanumeric().withMessage('City name should be alpanumeric')
        .isLength({min: 1}).withMessage('City name should not be empty')
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
};
  module.exports = validation;