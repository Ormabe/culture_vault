//IMPORT MODULES
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./models');
const seedFunction = require('./seeds')
const indexRouter = require('../routes').routes;

//BODY PARSER
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'../../frontend/public')))
//ROUTES

app.use('/api/explore/country', indexRouter.Experiences);
app.use('/api/explore/users', indexRouter.Users);
app.use('/api/explore/', indexRouter.Locations);

// app.use('/api/recipes', indexRouter.Recipes);
// we need an instance of express to know when there are no routes hit in the backend to look in the front


//FRONTEND ROUTES
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'))
})

//DATABASE SYNC & START
db.sequelize.sync({force:true}).then(()=>{
	seedFunction()
	app.listen(2222)
	console.log('Listening at https://localhost:2222')
});

//EXPORTS
module.exports = app;
