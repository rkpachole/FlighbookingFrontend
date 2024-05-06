const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const CityProvider = require("../providers/city.provider");


//===================  Create Or Insert New City  ============================

exports.create = async (req, res) => {
    createCity = await CityProvider.createCity(req, res);
    if (createCity) {
        if (createCity == 1) {
            return ApiHelper.successError(res, 203, "City name already exist !", []);
          }
        return ApiHelper.successError(res, 200, 'City Added Successfully', createCity);
    } else {
        return ApiHelper.successError(res, 500, 'City Added Failed Please Try Again', []);
    }
};


//===================  Retrieve Or Get all City  ============================

exports.findAll = async (req, res) => {
    getAllCity = await CityProvider.getAllCity(req, res);
    if (getAllCity.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", getAllCity);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
};


exports.cities = async (req, res) => {
    getCities = await CityProvider.getCities(req, res);
    if (getCities.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", getCities);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
};

//===================  Find a Single City with an id  ============================

exports.findOne = async (req, res) => {
    showCity = await CityProvider.showCity(req, res);
    if (showCity) {
        return ApiHelper.successError(res, 200, "Record found", showCity);
    } else {
        return ApiHelper.successError(res, 404, "Record not found", []);
    }
};

//===================  Update City by the id in the request  ============================

exports.update = async (req, res) => {
    result = await CityProvider.updateCity(req, res);
    if (result) {
        return ApiHelper.successError(res, 200, "City updated successfully", result);
    } else {
        return ApiHelper.successError(res, 200, "City updated failed please try again", []);
    }
};


//===================  Delete a City with the specified id in the request  ============================

exports.delete = async (req, res) => {
    result = await CityProvider.deleteCity(req, res);
    if (result) {
        if (result == 1) {
            return ApiHelper.successError(res, 200, "City deleted successfully!", result);
        } else {
            return ApiHelper.successError(res, 201, "City deleted failed,Please try again!", result);
        }
    } else {
        return ApiHelper.successError(res, 500, "City deleted failed,Please try again!", []);
    }
};
