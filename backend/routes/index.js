const Experiences = require('./experience-routes.js');
const Explore = require('./explore-routes.js');
const Users = require('./user-routes.js');
const Comments = require('./comment-routes.js');
const Likes = require('./like-routes.js');
const Login = require('./login-routes.js');
const Data = require('./data-routes.js')

module.exports = {
  routes: {
    Experiences,
    Explore,
    Users,
    Comments,
    Login,
    Likes,
    Data
  } };
