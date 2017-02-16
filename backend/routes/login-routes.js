const express = require('express');

const router = express.Router();

const passport = require('../server/config/passport');

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }));

module.exports = router;