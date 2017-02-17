const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

// passport.serializeUser((user, done) => {
//   console.log('<===== SERIALIZER =====>')
//   console.log('<== USER ======>>>',user.dataValues.id)
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   console.log('<===== DESERIALIZER =====>')
//   models.Users.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

passport.serializeUser((req, user, done) => {
  console.log("SERIALIZE SESSION ID ====>", req.sessionID)
  console.log("SERIALIZE USER ====>", user.id)
  console.log("SERIALIZE REQ ====>", req.user.id)
  // const sessionUser = { id: user.id };
  done(null, req.user.id);
});

passport.deserializeUser((req, done) => {
  console.log("DESERIALIZE SESSION ====>", req)
  // done(null, sessionUser)
})

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
    console.log('<====== BEGIN AUTHENTICATION ======>')
  models.Users.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (!user) {
        console.log('<====== EMAIL NOT FOUND ======>')
        return done(null, false, {
          message: 'Email does not exist.',
        });
      }
      if (!user.validPassword(password)) {
        console.log('<====== INVALID PASSWORD ======>')
        return done(null, false, {
          message: 'Incorrect password.',
        });
      }
      console.log('<====== AUTHENTICATION COMPLETE ======>')
      return done(null, user);
    })
    .catch((err) => {
      if (err) {
        console.log('<====== ERROR ======>')
        return done(err);
      }
      return done(err);
    });
}
));

module.exports = passport;
