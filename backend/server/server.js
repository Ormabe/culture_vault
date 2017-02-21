require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const seedFunction = require('./seeds');
const indexRouter = require('../routes').routes;
// const uuid = require('uuid');
const passport = require('./config/passport');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// INITIALIZE SEQUELIZESTORE
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SECRET_LOGIN_KEY,
  saveUninitialized: true,
  resave: true,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: process.env.COOKIE_SECURE
  },
  store: new SequelizeStore({
    genid: function(req) {
      return genuuid() 
    },
    db: db.sequelize,
    table: 'Session',
    extendDefaultFields: db.Session.extendDefaultFields
  })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

app.use('/api/users', indexRouter.Users);
app.use('/api/explore', indexRouter.Explore);
app.use('/api/comments', indexRouter.Comments);
app.use('/api/likes', indexRouter.Likes);
app.use('/api/experiences', indexRouter.Experiences);
app.use('/api/', indexRouter.Login);

app.get('/*', (req, res) => {
  console.log('tao');
  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'));
});

app.listen(2222);
console.log('Listening at https://localhost:2222');


module.exports = app;
