//Import Seed Files
let users = require('./users-seed.js');
let locations = require('./locations-seed.js');
//let experiences = require('/experiences-seed.js');

//Import Models
let Users = require('../models').Users;
let Locations = require('../models').Locations;
//let Experiences = require('../models').Experiences;

const seedFunction = () => {
	Users.create(users[0])
	Users.create(users[1])
	Users.create(users[2])
	Users.create(users[3])
	Users.create(users[4])

	Locations.create(locations[0])
<<<<<<< HEAD
	Locations.create(locations[1])
	Locations.create(locations[2])
	Locations.create(locations[3])
	Locations.create(locations[4])
=======
	//Locations.create(locations[1])
	//Locations.create(locations[2])
	//Locations.create(locations[3])
	//Locations.create(locations[4])
>>>>>>> 1ab1c0062cd31071a99bcd3dadcec0c1565a45a1

	//Experiences.create(experiences[0])
	//Experiences.create(experiences[1])	
	//Experiences.create(experiences[2])
}

module.exports = seedFunction
