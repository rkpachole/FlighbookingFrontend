const express           = require("express");
const bodyParser        = require("body-parser");
const cors              = require("cors");
const expressValidator  = require('express-validator');
const app               = express();
const db                = require("./app/models");
const seeder            = require("./app/seeders");
const alterTable        = require("./app/models/alterTables");
const Razorpay          = require('razorpay');
const { port,databaseMigration }          = require('./app/config/env.config');
var path = require('path');
var corsOptions = {
  origin: "*"
};
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cors(corsOptions));
//*For Db Migration */
if(databaseMigration=="Yes"){
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    seeder.UserSeeder()
    seeder.CountrySeeder()
    seeder.StateSeeder()
    seeder.CitySeeder()
    seeder.CustomerSeeder()
    seeder.BookingSeeder()
    seeder.flightDetailsSeeder()
    seeder.flightContactDetailsSeeder()  
    // seeder.CountryFlagSeader()
    // seeder.AdminRolesSeeder()
    // seeder.AdminPagePermission()
    // seeder.AdminRolePermission
    // seeder.AdminPages()
    
    //seeder.PassengerInfoSeeder()  
    //seeder.AirPortSeader();
    //alterTable.userTable();
  });
}

// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to booking" });
});
app.use("/public", express.static(path.join(__dirname, 'public')));
require('./app/routes/index.routes')(app);
// set port, listen for requests
const PORT = port || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});