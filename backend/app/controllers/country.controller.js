const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const CountryProvider = require("../providers/country.provider");


//Here create user
exports.create = async (req, res) => {
    createCountry = await CountryProvider.createCountry(req, res);
    if (createCountry) {
        if (createCountry == 1) {
            return ApiHelper.successError(res, 203, "Country name already exist !", []);
          }
        return ApiHelper.successError(res, 200, 'Country Added Successfully', createCountry);
    } else {
        return ApiHelper.successError(res, 500, 'Country Added Failed Please Try Again', []);
    }
};

//Here get 
exports.findAll = async (req, res) => { 
    getAllCountries = await CountryProvider.getAllCountries(req, res);
    if (getAllCountries.length != 0) {
        return ApiHelper.successError(res, 200, "Record Found", getAllCountries);
    } else {
        return ApiHelper.successError(res, 404, 'Record not found', []);
    }
};


//===================  Find a Single Country with an id  ============================

exports.findOne = async (req, res) => {
    showCountry = await CountryProvider.showCountry(req, res);
    if (showCountry) {
        return ApiHelper.successError(res, 200, "Record found", showCountry);
    } else {
        return ApiHelper.successError(res, 404, "Record not found", []);
    }
};


//===================  Update Country by the id in the request  ============================

exports.update = async (req, res) => {
    result = await CountryProvider.updateCountry(req, res);
    if (result) {
        return ApiHelper.successError(res, 200, "Country updated successfully", result);
    } else {
        return ApiHelper.successError(res, 200, "Country updated failed please try again", []);
    }
};


//===================  Delete a Country with the specified id in the request  ============================

exports.delete = async (req, res) => {
    result = await CountryProvider.deleteCountry(req, res);
    if (result) {
        if (result == 1) {
            return ApiHelper.successError(res, 200, "Country deleted successfully!", result);
        } else {
            return ApiHelper.successError(res, 201, "Country deleted failed,Please try again!", result);
        }
    } else {
        return ApiHelper.successError(res, 500, "Country deleted failed,Pleasetry again!", []);
    }
};
