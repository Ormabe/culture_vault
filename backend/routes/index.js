const Experiences = require('./experience-routes.js');
const Locations = require('./location-routes.js');
const Users = require('./user-routes.js');
const Comments = require('./comment-routes.js');
<<<<<<< HEAD
const Likes = require('./like-routes.js');
=======
const Authentication = require('./authentication-routes.js')
const Search = require('./search-routes.js');

>>>>>>> master

module.exports = {
	routes: {
	  Experiences,
	  Locations,
		Users,
		Comments,
<<<<<<< HEAD
		Likes
=======
		Authentication,
		Search
>>>>>>> master
	}
}
