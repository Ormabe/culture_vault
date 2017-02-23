const express = require('express');

const router = express.Router();

const passport = require('../server/config/passport');

router.post('/login',

  function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      console.log('AUTH USER >>>>>>', user)
      if (err) { return next(err); }
      if (!user) { res.status(401).end(); return; }
      req.logIn(user, function(err) {
        if (err) { res.status(401).end(); return; }
        // res.send(JSON.stringify(user)).end();

        res.send(`http://localhost:2222/users/${user.id}`)
      });
    })(req, res, next);
  })

module.exports = router
