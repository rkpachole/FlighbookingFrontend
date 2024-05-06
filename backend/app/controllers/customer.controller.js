const ApiHelper = require("../helpers/apiHelper")
const CustomerProvider = require("../providers/customer.provider");

// Get all users
exports.getAll = async (req, res) => { 
  Customer = await CustomerProvider.getAll(req, res);
  if (Customer.length != 0) {
    return ApiHelper.successError(res, 200, "Record Found", Customer);
  } else {
    return ApiHelper.successError(res, 404, 'Record not found', []);
  }
};

//Create user
exports.create = async (req, res) => {
  createCustomer = await CustomerProvider.createUpdate(req, res);
  if (createCustomer) {
    return ApiHelper.successError(res, 200, "Customer added successfully", createCustomer);
  } else {
    return ApiHelper.successError(res, 500, "Customer added failed please try again", []);
  }
};


//Get user using id
exports.get = async (req, res) => {
  user = await CustomerProvider.get(req, res);
  if (user) {
    return ApiHelper.successError(res, 200, "Record found", user);
  } else {
    return ApiHelper.successError(res, 404, "Record not found", []);
  }
};

//Here update user using id
exports.update = async (req, res) => {
  result = await CustomerProvider.createUpdate(req, res);
  if (result) {
    return ApiHelper.successError(res, 200, "User updated successfully", result);
  } else {
    return ApiHelper.successError(res, 200, "User updated failed please try again", []);
  }
};

//Here delete user using id
exports.destroy = async (req, res) => {
  result = await CustomerProvider.destroy(req, res);
  if (result) {
    if (result == 1) {
      return ApiHelper.successError(res, 200, "Customer deleted successfully!", result);
    } else {
      return ApiHelper.successError(res, 201, "Customer deleted failed,Please tray agin!", result);
    }
  } else {
    return ApiHelper.successError(res, 500, "Customer deleted failed,Please tray agin!", []);
  }
};

//Here update profile using id
exports.updateProfile = async (req, res) => {
  result = await CustomerProvider.updateProfile(req, res);
  if (result) {
    return ApiHelper.successError(res, 200, "Profile updated successfully", result);
  } else {
    return ApiHelper.successError(res, 200, "Profile updated failed please try again", []);
  }
};

