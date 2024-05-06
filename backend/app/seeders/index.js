const UserSeeder                     = require("./user.seeder");
const CountrySeeder                  = require("./country.seeder");
const CitySeeder                     = require("./city.seeder");
const StateSeeder                    = require("./state.seeder");
const CustomerSeeder                 = require("./customer.seeder");
const AdminRolesSeeder               = require("./adminRole.seeder");
const BookingSeeder                  = require("./booking.seeder");
const flightDetailsSeeder            = require("./flightDetails.seeder");
const flightContactDetailsSeeder     = require("./flightContactDetails.seeder");
const PassengerInfoSeeder            = require("./passenger.seeder");
const AirPortSeader                  = require("./airports.seeder");
const CountryFlagSeader              = require("./countryFlag.seeder");

const AdminRolePermission            = require("./adminRolePermission.seeder");
const AdminPages                     = require("./adminPages.seeder");
const AdminPagePermission            = require("./adminPagePermission.seeder");
const AdminRoles                     = require("./adminRole.seeder");




module.exports = {
  UserSeeder,
  CountrySeeder,
  StateSeeder,
  CitySeeder,
  CustomerSeeder,
  AdminRolesSeeder,
  BookingSeeder,
  flightDetailsSeeder,
  flightContactDetailsSeeder,
  PassengerInfoSeeder,
  AirPortSeader,
  CountryFlagSeader,
  AdminRolePermission,
  AdminPagePermission,
  AdminRoles,
  AdminPages
};