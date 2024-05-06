const { body, validationResult, check } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper");

checkBookingId =  [
    body('bookingId')
        .exists().withMessage('Booking Id is required')
        .isAlphanumeric().withMessage('Booking Id should be alpanumeric')
        .isLength({min: 1}).withMessage('Booking Id should not be empty')
        .trim(),

    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

holdBooking = [    
    body('bookingId')
    .exists().withMessage('Booking Id is required')
    .isLength({min: 1}).withMessage('Booking Id should not be empty')
    .isAlphanumeric().withMessage('Booking Id should be alpanumeric')
    .trim(),    
    body('personalPhone').exists().withMessage('personalPhone is required').isNumeric().withMessage('personalPhone should be numeric').isLength({max:10}).withMessage('personal Phone should not be empty').trim(),
    body('personalEmail').exists().withMessage('pesrsonal Email is required').isEmail().withMessage('Please Enter valid Email address'),
    body('gstNumber').optional({nullable: true}).isString().withMessage('gstNumber should be string').optional({nullable: true}),
    body('registeredName').optional({nullable: true}).isString().withMessage('registered Name should be string').trim(),
    body('mobile').optional({nullable: true}).isString().withMessage('mobile should be numeric').isLength({max:10}).withMessage('Please Enter valid phone number').trim(),
    body('address').optional({nullable: true}).isString().withMessage('address should be numeric').isLength({min: 1}).withMessage('address should not be empty').trim(),


    body('travellerInfo').isArray().withMessage('travellerInfo should be array').exists().withMessage('travellerInfo  is required'),
    body('travellerInfo.*.title').isString().withMessage('Title should be alpanumeric').exists().withMessage('title is required').isLength({min: 1}).withMessage('Title should not be empty').trim(),
    body('travellerInfo.*.firstName').isString().withMessage('firstName should be alpanumeric').exists().withMessage('first Name is required').isLength({min: 1}).withMessage('firstName should not be empty').trim(),
    body('travellerInfo.*.lastName').isString().withMessage('lastName should be alpanumeric').exists().withMessage('last Name is required').isLength({min: 1}).withMessage('lastName should not be empty').trim(),
    body('travellerInfo.*.passengerType').isAlphanumeric().withMessage('passengerType should be alpanumeric').isLength({min: 1}).withMessage('passengerType should not be empty').trim(),
    body('travellerInfo.*.dob').optional({nullable: true}).isString().withMessage('Date of birth should be String').trim(),
    body('travellerInfo.*.passportNation').optional({nullable: true}).isString().withMessage('passportNation should be alpanumeric').trim(),
    body('travellerInfo.*.passportNumber').optional({nullable: true}).isString().withMessage('passportNumber should be alpanumeric').trim(),
    body('travellerInfo.*.passportExpiryDate').optional({nullable: true}).isString().withMessage('passportExpiryDate should be alpanumeric').trim(),
    body('travellerInfo.*.ssrBaggageInfos').isArray().withMessage('ssrBaggageInfos should be array'),
    body('travellerInfo.*.ssrMealInfos').isArray().withMessage('ssrMealInfos should be array'),
    body('travellerInfo.*.ssrSeatInfos').isArray().withMessage('ssrSeatInfos should be array'),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

confirmBooking = [
    body('bookingId')
    .exists().withMessage('Booking Id is required')
    .isLength({min: 1}).withMessage('Booking Id should not be empty')
    .isString().withMessage('Booking Id should be String')
    .trim(),

    body('amount')
    .exists().withMessage('Amount is required')
    .isNumeric().withMessage('amount should be numeric')
    .isLength({min: 1}).withMessage('amount should not be empty')
    .trim(),
    body('personalPhone').exists().withMessage('personalPhone is required').isString().withMessage('personalPhone should be String').trim(),
    body('personalEmail').exists().withMessage('pesrsonal Email is required').isEmail().withMessage('Please Enter valid Email address'),
    body('gstNumber').optional({nullable: true}).isString().withMessage('gstNumber should be string').optional({nullable: true}),
    body('registeredName').optional({nullable: true}).isString().withMessage('registered Name should be string').trim(),
    body('mobile').optional().isString().withMessage('mobile should be String').isLength({max:10}).withMessage('Please Enter valid phone number').trim(),
    body('address').optional({nullable: true}).isString().withMessage('address should be string'),

    body('travellerInfo').isArray().withMessage('travellerInfo should be array').exists().withMessage('travellerInfo  is required'),
    body('travellerInfo.*.title').isString().withMessage('Title should be alpanumeric').exists().withMessage('title is required').isLength({min: 1}).withMessage('Title should not be empty').trim(),
    body('travellerInfo.*.firstName').isString().withMessage('firstName should be alpanumeric').exists().withMessage('first Name is required').isLength({min: 1}).withMessage('firstName should not be empty').trim(),
    body('travellerInfo.*.lastName').isString().withMessage('lastName should be alpanumeric').exists().withMessage('last Name is required').isLength({min: 1}).withMessage('lastName should not be empty').trim(),
    body('travellerInfo.*.passengerType').isString().withMessage('passengerType should be String').isLength({min: 1}).withMessage('passengerType should not be empty').trim().trim(),
    body('travellerInfo.*.dob').optional({nullable: true}).isString().withMessage('Date of birth should be String').trim(),
    body('travellerInfo.*.passportNation').optional({nullable: true}).isString().withMessage('passportNation should be String').trim(),
    body('travellerInfo.*.passportNumber').optional({nullable: true}).isString().withMessage('passportNumber should be String').trim(),
    body('travellerInfo.*.passportExpiryDate').optional({nullable: true}).isString().withMessage('passportExpiryDate should be String').trim(),
    body('travellerInfo.*.ssrBaggageInfos').optional({nullable: true}).isArray().withMessage('ssrBaggageInfos should be array'),
    body('travellerInfo.*.ssrMealInfos').optional({nullable: true}).isArray().withMessage('ssrMealInfos should be array'),
    body('travellerInfo.*.ssrSeatInfos').optional({nullable: true}).isArray().withMessage('ssrSeatInfos should be array'),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

addPassenger = [

    body('bookingId').exists().withMessage('bookingId is required').isString().withMessage('booking should be type of string').trim(),    
    body('requestId').exists().withMessage('requestId is required').isString().withMessage('requestId should be type of string').trim(),  
    body('personalPhone').exists().withMessage('personalPhone is required').isInt().withMessage('personalPhone should be type of string').isLength({min:9,max:10}).withMessage('Please Enter valid phone number').trim(),         
    body('personalEmail').exists().withMessage('pesrsonal Email is required').isEmail().withMessage('Please Enter valid Email address'),
    body('gstNumber').optional({nullable: true}).isString().withMessage('gstNumber should be string').optional({nullable: true}),
    body('registeredName').optional({nullable: true}).isString().withMessage('registered Name should be string').trim(),
    body('mobile').optional().isString().withMessage('mobile should be String').isLength({max:10}).withMessage('Please Enter valid phone number').trim(),
    body('address').optional().isString().withMessage('address should be string').trim(),
    body('paxInfo').exists().withMessage('paxInfo is required').isObject().withMessage('paxInfo should be object'),
    body('preferredFareType').optional({nullable: true}).isString().withMessage('preferredFareType should be String').isLength({min: 1}).withMessage('preferredFareType should not be empty').trim(),
    //body('flightStops').exists().withMessage('flightStops is required').isInt().withMessage('Flight should be Integer'),    
    
    body('routeInfo').isArray().withMessage('routeInfo should be array').exists().withMessage('routeInfo  is required'),
    body('listOfFlight').isArray().withMessage('listOfFlight should be array').exists().withMessage('listOfFlight  is required'),

    body('fareDetail').isArray().withMessage('fareDetail should be array').exists().withMessage('fareDetail  is required'),
    
    body('travellerInfo').exists().withMessage('travellerInfo  is required').isArray().withMessage('travellerInfo should be array'),
    body('travellerInfo.*.title').isString().withMessage('Title should be string').exists().withMessage('title is required').isLength({min: 1}).withMessage('Title should not be empty').trim(),
    body('travellerInfo.*.firstName').isString().withMessage('firstName should be String').exists().withMessage('first Name is required').isLength({min: 1}).withMessage('firstName should not be empty').trim(),
    body('travellerInfo.*.lastName').isString().withMessage('lastName should be String').exists().withMessage('last Name is required').isLength({min: 1}).withMessage('lastName should not be empty').trim(),
    body('travellerInfo.*.passengerType').isString().withMessage('passengerType should be String').isLength({min: 1}).withMessage('passengerType should not be empty').trim(),
    body('travellerInfo.*.dob').exists().withMessage('DOB  is required').isString().withMessage('Date of birth should be String').trim(),
    body('travellerInfo.*.passportNation').optional({nullable: true}).trim(),
    body('travellerInfo.*.passportNumber').optional({nullable: true}).trim(),
    body('travellerInfo.*.passportExpiryDate').optional({nullable: true}).isString().withMessage('passportExpiryDate should be String').trim(),
    body('travellerInfo.*.ssrBaggageInfos').optional({nullable: true}).isArray().withMessage('ssrBaggageInfos should be array'),
    body('travellerInfo.*.ssrMealInfos').optional({nullable: true}).isArray().withMessage('ssrMealInfos should be array'),
    body('travellerInfo.*.ssrSeatInfos').optional({nullable: true}).isArray().withMessage('ssrSeatInfos should be array'),
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]


changeBookingStatus = [
    body('bookingId').exists().withMessage('bookingId is required').isString().withMessage('booking should be type of string').trim(),    
    body('status').exists().withMessage('status is required').isString().withMessage('status should be type of string').trim(), 
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

bookingDetails = [
    body('bookingId').exists().withMessage('bookingId is required').isString().withMessage('booking should be type of string').trim(),    
    body('passengerPricing').optional().isBoolean().withMessage("requirePaxPricing should be boolean ex  true or false"), 
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

ConfirmHoldBooking = [
    body('bookingId').exists().withMessage('bookingId is required').isString().withMessage('booking should be type of string').trim(),    
    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

bookingCancellation = [
    body('bookingId').exists().withMessage('bookingId is required').isString().withMessage('booking should be type of string').trim(),    
    body('remarks').exists().withMessage('Remarks is required').isString().withMessage('remarks should be type of string').trim(),

    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

dateChange = [
    body('bookingId').exists().withMessage('bookingId is required').isString().withMessage('booking should be type of string').trim(),    
    body('remarks').exists().withMessage('Remarks is required').isString().withMessage('remarks should be type of string').trim(),

    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
]

const validation = {
    checkBookingId          : checkBookingId,
    holdBooking             : holdBooking,
    confirmBooking          : confirmBooking,
    addPassenger            : addPassenger,
    bookingStatus           : changeBookingStatus,
    bookingDetails          : bookingDetails,
    ConfirmHoldBooking      : ConfirmHoldBooking,
    Cancellation            : bookingCancellation,
    DateChange              : dateChange
};

module.exports = validation;