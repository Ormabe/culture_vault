const Experiences = require('./experience-routes.js');
const Locations = require('./location-routes.js');
const Users = require('./user-routes.js');
const Comments = require('./comment-routes.js');
const Search = require('./search-routes.js');
const Login = require('./login-routes.js');


module.exports = {
	routes: {
	  Experiences,
	  Locations,
		Users,
		Comments,
		Login,
		Search
	}
}
