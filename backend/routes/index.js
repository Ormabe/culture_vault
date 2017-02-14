const Experiences = require('./experience-routes.js');
const Locations = require('./location-routes.js');
const Users = require('./user-routes.js');
const Comments = require('./comment-routes.js');
const Authentication = require('./authentication-routes.js')

module.exports = {
	routes: {
	  Experiences,
	  Locations,
		Users,
		Comments,
		Authentication
	}
}
