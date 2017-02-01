var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var db = require('./models');


app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//later we will need an express static

// we need an instance of express to know when there are no routes hit in the backend to look in the front



db.sequelize.sync().then(()=>{
	app.listen(2222)
	console.log('Listening at https://localhost:2222')
});

module.exports = app;