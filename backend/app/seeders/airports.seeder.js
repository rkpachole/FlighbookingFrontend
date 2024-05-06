const db = require("../models");
const AirportList = db.Airports

async function AirPortSeader() {
    await AirportList.create({
        code                 : "KDH",
        name                 : "Kandahar International Airport",
        citycode             : "KDH",
        city                 : "Kandahar, Afghanistan",
        country              : "Afghanistan",
        countrycode          : "AF"       
  });
}
module.exports = AirPortSeader;     