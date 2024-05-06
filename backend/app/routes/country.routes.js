var express = require('express');
var router  = express.Router();
const CountryController  = require("../controllers/country.controller");
const { CountryValidation } = require("../validations");

// Create a new country
router.post("",  CountryController.create);
// router.post("", [CountryValidation.countryCheck],  CountryController.create);


// Get a All Country
router.get("/get-all-country", CountryController.findAll);


// Retrieve a single country with id
router.get("/:id", CountryController.findOne);

// Update a country with id
router.put("/:id", CountryController.update);

// Delete a country with id
router.delete("/:id", CountryController.delete);


module.exports = router;