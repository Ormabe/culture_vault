//IMPORT MODULES
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./models');
const seedFunction = require('./seeds')
const router = express.Router();
const indexRouter = require('../routes').routes;

//BODY PARSER
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//app.use(express.static('public'));

//ROUTES
app.use('/api/experiences', indexRouter.Experiences);
app.use('/api/ingredients', indexRouter.Ingredients);
app.use('/api/locations', indexRouter.Locations);
app.use('/api/recipes', indexRouter.Recipes);
app.use('/api/steps', indexRouter.Steps);
app.use('/api/users', indexRouter.Users);
// we need an instance of express to know when there are no routes hit in the backend to look in the front

//DATABASE SYNC & START
db.sequelize.sync({force:true}).then(()=>{
	seedFunction()
	app.listen(2222)
	console.log('Listening at https://localhost:2222')
});

//EXPORTS
module.exports = app;