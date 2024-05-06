const db = require("../models");
var bcrypt = require("bcryptjs");
const User = db.Customer;

async function CustomerSeeder() {
    await User.create({
      title: "MR", 
      firstName:"John",
      lastName:"Doe",
      gender: "Male",
      email:"john@mailinator.com",
      mobileNumber:"1234567890",      
      roleId:'3',      
      passport: "ABA9875413",       
      DOB: "1989-13-04",
      passportExp: "2028-12-31",
      agentRef: 3,
      status: 1,
      isDeleted: 0      
  });
}
module.exports = CustomerSeeder;