const express = require('express');

const router = express.Router();

const passport = require('../server/config/passport');

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

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
