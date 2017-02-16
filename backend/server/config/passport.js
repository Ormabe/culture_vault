const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  models.Users.findById(id, function(err, user) {
    done(err, user);
  });
});


passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    console.log("<====== TRYING TO AUTHENTICATE ======>")
    console.log('< ****** LOOK AT ME ****** >',email, password)
    models.Users.findOne({
      where: {
        email: email
      }
    })
    .then( function(user) {
      if (!user) {
        console.log("<====== NOT FOUND ======>")
        return done(null, false, {
          message: 'Email does not exist.'
        });
      }
      if (!user.validPassword(password)) {
        console.log("<====== INVALID PASSWORD ======>")
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      console.log("<====== WOOHOO ======>")
      return done(null, user);
    })
    .catch((err) => {
      if (err) {
        console.log("<====== ERROR ======>", err)
        return done(err);
      }
    });
  }
));

module.exports = passport
