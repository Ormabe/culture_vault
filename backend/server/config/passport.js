const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

// passport.serializeUser((user, done) => {
//   // console.log("SERIALIZE SESSION ID ====>", req.sessionID)
//   console.log("SERIALIZE USER ====>", user.id)
//   // console.log("USER OBJECT ====>", user)
//   // const sessionUser = req.user.id ;
//   done(null, user.id);
// });
//
// passport.deserializeUser( function (id, done) {
//         console.log("DESERIALIZE USER ======>", id);
//             models.Users.findOne({
//               where: {
//                 id
//               }
//             })
//             .then((user) => {
//                 console.log('USERNAME:',user.username);
//                 // done(null, user);
//                 return user
//             })
//             .catch((err) => {
//                 console.error('ERR:',err);
//                 done(err);
//             });
//     });

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
