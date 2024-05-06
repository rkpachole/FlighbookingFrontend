const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper");

Search =  [  
    body('tripType')
        .optional()
        .isAlphanumeric().withMessage('Type should be string')        
        .trim(),

    body('fromCityDestination')
    .exists().withMessage("fromCityDestination is required")
    .isString().withMessage('fromCity should be String')
    .isLength({min: 1 , max: 50}).withMessage('fromCity should not be empty!')
    .trim(),

    body('toCityDestination')
        .exists().withMessage("toCityDestination is required")
        .isString().withMessage('Destination should be String')
        .isLength({min: 2 , max: 50}).withMessage('Destination should not be empty!')
        .trim(),

    body('journeyDateOne')
        .exists()
        .isString().withMessage('JourneyDate number should be String')
        .notEmpty().withMessage("JourneyDateOne should not be empty, should be YYYY-MM-DD format")
        .trim(),

    body('travellersShow')
    .optional()
    .isString().withMessage('travellersShow number should be String')
    .notEmpty().withMessage("travellersShow should not be empty")
    .trim(),
    body('ADULT')
            .exists().withMessage("Adult is required")
            .isString().withMessage('Adult should be string')
            .isLength({min: 1, max: 1}).withMessage('Adult should not be empty')            
            .trim(),

            body('CHILD')
            .exists().withMessage("child is required")
            .isString().withMessage('child should be string')                                     
            .isLength({min: 1, max: 1}).withMessage('Child should not be empty')            
            .trim(),

            body('INFANT')
            .exists().withMessage("Infant is required")
            .isString().withMessage('Infant should be string')
            .isLength({min: 1, max: 1}).withMessage('Infant should not be empty')            
            .trim(),

    body('PC')
        .exists()
        .isString().withMessage('Passenger class should be String')
        .notEmpty().withMessage('Passenger class should not be empty.')   
        .trim(), 

    body('isDirectFlight')
        .exists()
        .isBoolean().withMessage('isDirectFlight should be boolean ex true or false')
        .notEmpty().withMessage('isDirectFlight should not be empty.')   
        .trim(), 

    body('isConnectingFlight')
        .exists()
        .isBoolean().withMessage('isConnectingFlight should be boolean ex true or false')
        .notEmpty().withMessage('isConnectingFlight should not be empty.')   
        .trim(),     
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];


searchRound = [
    
            body('tripType')
                .exists()
                .isString().withMessage('Type should be string')
                .isLength({min: 1 , max: 2}).withMessage('Type should not be empty')
                .trim(),

            body('fromCityDestination')
            .exists()
            .isString().withMessage('fromCity should be alpanumeric')
            .isLength({min: 1 , max: 50}).withMessage('fromCity should not be empty')
            .trim(),

            body('toCityDestination')
                .exists()
                .isString().withMessage('Destination should be String')
                .isLength({min: 2 , max: 50}).withMessage('Destination should not be empty')
                .trim(),

            body('journeyDateOne')
                .exists().withMessage('JourneyDateOne should not be empty, should be YYYY-MM-DD format')
                .isString().withMessage('JourneyDate number should be numeric')                
                .trim(),

            body('travellersShow')
            .exists()
            .isString().withMessage('travellersShow number should be string')            
            .trim(),

            body('preferredAirline')
            .optional()        
            .isArray().withMessage('preferredAirline number should be array')           
            .trim(),   
                        
            body('ADULT')
            .exists()
            .isString().withMessage('travellersShow number should be string')
            .isLength({min: 1, max: 1}).withMessage('Adult should not be empty')            
            .trim(),

            body('CHILD')
            .exists()
            .isString().withMessage('child should be string')
            .isLength({min: 1, max: 1}).withMessage('Child should not be empty')            
            .trim(),

            body('INFANT')
            .exists()
            .isString().withMessage('Infant should be string')
            .isLength({min: 1, max: 1}).withMessage('Infant should not be empty')            
            .trim(),

            body('PC')
                .exists()
                .isString().withMessage('Passenger class should be String')
                .isLength({min: 0, max:100}).withMessage('Passenger class should not be empty.')   
                .trim(), 

            body('isDirectFlight')
                .exists()
                .isBoolean().withMessage('isDirectFlight should be boolean ex true or false')               
                .trim(), 

            body('isConnectingFlight')
                .exists()
                .isBoolean().withMessage('isConnectingFlight should be boolean ex true or false')
                .trim(),    

            body('previllageForTicket')
                .optional()
                .isString().withMessage('previllageForTicket should be string')
                .trim(),  


    function(req,res,next) {
                var errorValidation = validationResult(req);
                if ( errorValidation.errors[0] ) {
                    return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
                }
                next()
    }

]





const flightValidation = {
    flightSearch: Search,  
    searchRound : searchRound 
};
  module.exports = flightValidation;