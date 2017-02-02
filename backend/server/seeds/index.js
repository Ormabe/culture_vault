//Import Seed Files
let users = require('./users-seed.js');
let locations = require('./locations-seed.js');
//let experiences = require('/experiences-seed.js');
let recipes = require('./recipes-seed.js');
let steps = require('./steps-seed.js');

//Import Models
let Users = require('../models').Users;
let Locations = require('../models').Locations;
//let Experiences = require('../models').Experiences;
let Recipes = require('../models').Recipes;
let Steps = require('../models').Steps;

const seedFunction = () => {
	Users.create(users[0])
	Users.create(users[1])
	Users.create(users[2])
	Users.create(users[3])
	Users.create(users[4])

	Locations.create(locations[0])
	Locations.create(locations[1])
	Locations.create(locations[2])
	Locations.create(locations[3])
	Locations.create(locations[4])
	Locations.create(locations[5])

	//Experiences.create(experiences[0])
	//Experiences.create(experiences[1])
	//Experiences.create(experiences[2])

	Recipes.create(recipes[0])
	Recipes.create(recipes[1])
	Recipes.create(recipes[2])
	Recipes.create(recipes[3])
	Recipes.create(recipes[4])

	Steps.create(steps[0])
	Steps.create(steps[1])
	Steps.create(steps[2])
	Steps.create(steps[3])
	Steps.create(steps[4])
}

module.exports = seedFunction
