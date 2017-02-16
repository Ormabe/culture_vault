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
    // <====== BEGIN AUTHENTICATION ======>"

    models.Users.findOne({
      where: {
        email: email
      }
    })
    .then( function(user) {
      if (!user) {
        // <====== EMAIL NOT FOUND ======>
        return done(null, false, {
          message: 'Email does not exist.'
        });
      }
      if (!user.validPassword(password)) {
        // <====== INVALID PASSWORD ======>
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      // <====== AUTHENTICATION COMPLETE ======>
      return done(null, user);
    })
    .catch((err) => {
      if (err) {
        // <====== ERROR ======>
        return done(err);
      }
    });
  }
));

module.exports = passport
