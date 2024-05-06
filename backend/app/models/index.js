const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model Configuration By Ganesh Dhamande 
db.User                      = require("../models/user.model.js")(sequelize, Sequelize);
db.Country                   = require("../models/country.model.js")(sequelize, Sequelize);
db.State                     = require("../models/states.model.js")(sequelize, Sequelize);
db.City                      = require("../models/city.model.js")(sequelize, Sequelize);
db.Customer                  = require("../models/customer.model.js")(sequelize, Sequelize);
db.Booking                   = require("../models/booking.model.js")(sequelize, Sequelize);
db.FlightDetails             = require("../models/flightDetails.model.js")(sequelize, Sequelize);
db.FlightContactDetails      = require("../models/flightContactDetails.model.js")(sequelize, Sequelize);
db.PassengerInfo             = require("../models/passengerInfo.model.js")(sequelize, Sequelize);
db.rolePermission            = require("../models/rolePermission.js")(sequelize, Sequelize);
db.payment                   = require("../models/payment.model.js")(sequelize, Sequelize);
db.Airports                  = require("../models/airPort.model.js")(sequelize, Sequelize);
db.CountryFlag               = require("../models/countryFlag.model.js")(sequelize, Sequelize);
db.Amendments               = require("../models/amendments.model.js")(sequelize, Sequelize);

// User role management model 

db.AdminPages               = require("../models/adminPages.model.js")(sequelize, Sequelize);
db.AdminRolePermission      = require("../models/adminRolePermission.js")(sequelize, Sequelize);
db.AdminRoles               = require("../models/adminRoles.model.js")(sequelize, Sequelize);
db.AdminPagePermission      = require("../models/adminPagePermission.js")(sequelize, Sequelize);




Object.keys(db).forEach(modelName => {

  
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;