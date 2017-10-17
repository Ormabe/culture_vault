const router = require('express').Router();
const Session = require('../server/models').Session;
const models = require('../server/models')


const getSessionInfo = (req,res,err) => {
  Session.findOne({
    where:{
      data:req
    }
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err)
  })
}

router.route('/')
    .get(getSessionInfo)

module.exports = router;
