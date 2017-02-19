require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const seedFunction = require('./seeds');
const indexRouter = require('../routes').routes;
// const uuid = require('uuid');
const passport = require('passport')
const auth = require('./config/passport');
const models = require('./models')

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const morgan = require('morgan');
const flash = require('express-flash');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SECRET_LOGIN_KEY,
  db: db.sequelize,
  cookie: {
    secure: true
  }
}));

passport.serializeUser((user, done) => {
  // console.log("SERIALIZE SESSION ID ====>", req.sessionID)
  console.log("SERIALIZE USER ====>", user.id)
  // console.log("USER OBJECT ====>", user)
  // const sessionUser = req.user.id ;
  done(null, user.id);
});

passport.deserializeUser( function (id, done) {
        console.log("DESERIALIZE USER ======>", id);
            models.Users.findOne({
              where: {
                id
              }
            })
            .then((user) => {
                console.log('USERNAME:',user.username);
                // done(null, user);
                return user
            })
            .catch((err) => {
                console.error('ERR:',err);
                done(err);
            });
    });

app.use(auth.initialize());
app.use(auth.session());
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
  console.log('PASSPORT ======>',req.user);
  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'));
});

app.listen(2222);
console.log('Listening at https://localhost:2222');


module.exports = app;
