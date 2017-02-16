require('dotenv').config()
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./models');
const seedFunction = require('./seeds')
const indexRouter = require('../routes').routes;
const uuid = require('uuid');
const passport = require('./config/passport');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const models = require('./models');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'../../frontend/public')));

app.use(session({
  secret: process.env.SECRET_LOGIN_KEY,
  saveUninitialized: true,
  resave: false
 }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	next();
});



app.use('/api/explore/country', indexRouter.Experiences);
app.use('/api/explore/users', indexRouter.Users);
app.use('/api/explore/', indexRouter.Locations);
app.use('/api/comments/', indexRouter.Comments);
app.use('/api/likes', indexRouter.Likes)
app.use('/api/explore/search', indexRouter.Search);
app.use('/api/', indexRouter.Login)

app.get('auth/twitter', passport.authenticate('twitter'));
app.get('/*', function(req, res) {

  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'))
})

db.sequelize.sync({force:true}).then(()=>{
	seedFunction()
	app.listen(2222)
	console.log('Listening at https://localhost:2222')
});

module.exports = app;
