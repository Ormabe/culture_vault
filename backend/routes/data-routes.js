const router = require('express').Router();
const Users = require('../server/models').Users;
const models = require('../server/models')

const getUserData = ((req, res, err) => {
  return User.findAll({
    id: req.user.id
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err)
  })
});

router.route('/')
  .get(getUserData)

  module.exports = router;
