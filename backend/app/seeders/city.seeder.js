const db = require("../models");
const City = db.City

async function CitySeader() {
    await City.create({
      code:"BPL"  ,
      name:"Bhopal",
      stateId: 1,
  });
}
module.exports = CitySeader;  
