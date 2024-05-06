const db = require("../models");
const CountryFlag = db.CountryFlag


async function CountryFlagSeeder() {  
    await CountryFlag.create({       
        code:"IN",
        country:"India",
        fullCode:"IND",
        url:"https://www.worldometers.info//img/flags/small/tn_in-flag.gif",
        
        
  });
}
module.exports = CountryFlagSeeder;  
