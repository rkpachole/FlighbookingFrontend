var express = require('express');
var router  = express.Router();
const CountryController  = require("../controllers/country.controller");
const StateController  = require("../controllers/state.controller");
const { StateValidation} = require("../validations");

// Create a new country
router.post("",StateController.create);
// router.post("", [CountryValidation.countryCheck],  CountryController.create);


// Get a All Country
router.get("/get-all-state", StateController.findAll);


// Update a country with id
router.put("/updateState", StateController.update);

// Delete a country with id
router.delete("/deleteState", StateController.delete);


module.exports = router;