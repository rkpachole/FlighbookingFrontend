const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const StateProvider = require("../providers/state.provider");


//===================  Create Or Insert New StateProvider  ============================

exports.create = async (req, res) => {
    
    createState = await StateProvider.createState(req, res);
    if (createState) {
        if (createState == 1) {
            return ApiHelper.successError(res, 203, "State name already exist !", []);
          }
        return ApiHelper.successError(res, 200, 'State Added Successfully', createState);
    } else {
        return ApiHelper.successError(res, 500, 'State Added Failed Please Try Again', []);
    }
};


//===================  Retrieve Or Get all State  ============================

exports.findAll = async (req, res) => {    
   let getAllState = await StateProvider.getAllState(req, res);    
    if (getAllState.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", getAllState);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
};






exports.cities = async (req, res) => {
    getCities = await StateProvider.getCities(req, res);
    if (getCities.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", getCities);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
};

//===================  Update State by the id in the request  ============================

exports.update = async (req, res) => {
    result = await StateProvider.updateState(req, res);
    if (result) {
        return ApiHelper.successError(res, 200, "State updated successfully", result);
    } else {
        return ApiHelper.successError(res, 200, "State updated failed please try again", []);
    }
};


//===================  Delete a State with the specified id in the request  ============================

exports.delete = async (req, res) => {
    result = await StateProvider.deleteState(req, res);
    if (result) {
        if (result == 1) {
            return ApiHelper.successError(res, 200, "State deleted successfully!", result);
        } else {
            return ApiHelper.successError(res, 201, "State deleted failed,Please try again!", result);
        }
    } else {
        return ApiHelper.successError(res, 500, "State deleted failed,Please try again!", []);
    }
};
