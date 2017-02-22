const express = require('express');

const router = express.Router();

const passport = require('../server/config/passport');

router.post('/login',
  function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      console.log('auth user', user)
      if (err) { return next(err); }
      if (!user) { res.status(401).end(); return; }
      req.logIn(user, function(err) {
        if (err) { res.status(401).end(); return; }
        res.send(JSON.stringify(user)).end();
      });
    })(req, res, next);
  })
  // passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/login',
  //   failureFlash: true,
  // }));

  // router.post('/login', (req, res, next) => {
  // 	passport.authenticate('local', (err, user) => {
  // 		if (err) {
  // 			return next(err);
  // 		}
  // 		if (!user) {
  // 			return res.redirect('/login');
  // 		}
  // 		req.logIn(user, (err) => {
  // 			req.session.save(() => {
  // 				return res.redirect('/users/' + user.id);
  // 			});
  // 		});
  // 	})(req, res, next);
  // });
  //
  //

module.exports = router;
