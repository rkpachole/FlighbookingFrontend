const UserRoutes = require("./user.routes");          
const CountryRoute = require("./country.routes");
const CityRoutes = require("./city.routes");
const StateRoutes = require("./state.routes");
const CustomerRoutes = require("./customer.routes");
const FlightRoutes = require("./flightSearch.routes");
const FlightRulesRoutes = require("./fareRoule.routes");
const bookingRoutes = require("./booking.routes");
const paymentRoutes = require("./payment.routes");
const airportRoutes = require("./airport.routes");
const mailerRoutes = require("./mailer.routes");
const hotelBookingRoutes = require("./hotelBooking.Routes");
const { load3rdPartyConfig, loadRazorPayConfig } = require("../utils/bin/global");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        load3rdPartyConfig();
        loadRazorPayConfig();
        next();
    });
    app.use("/api/user", UserRoutes);
    app.use("/api/country", CountryRoute);
    app.use("/api/state", StateRoutes);
    app.use("/api/city", CityRoutes);
    app.use("/api/customer", CustomerRoutes);
    app.use("/api/flight", FlightRoutes);    
    app.use("/api/flightRules", FlightRulesRoutes); 
    app.use("/api/booking", bookingRoutes); 
    app.use("/api/payment", paymentRoutes); 
    app.use("/api/airport", airportRoutes);    
    app.use("/api/mailer", mailerRoutes);  
    app.use("/api/hotelBooking", hotelBookingRoutes);         
};