var express = require('express');
var router  = express.Router();
const CityController  = require("../controllers/city.controller");
const { CityValidation } = require("../validations");

// Create a new city
router.post("",  CityController.create);

// Get a All city
router.get("/get-all-city", CityController.findAll);


router.get("/cities", CityController.cities);


// Retrieve a single city with id
router.get("/:id", CityController.findOne);

// Update a city with id
router.put("/:id", CityController.update);

// Delete a city with id
router.delete("/:id", CityController.delete);


module.exports = router;