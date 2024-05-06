const db = require("../models");
const States = db.State

async function StateSeeder() {    
    await States.create({
        code: "23",
        name: "Madhyapradesh",
        sortName: "MP",
        countryId: 1
  });
}
module.exports = StateSeeder;  
