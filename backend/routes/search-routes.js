//IMPORT MODULES
const express = require('express')
const router = express.Router();
const models = require('../server/models');

//=====================================
// ALL SEARCH
const allSearchTerms = ((req,res) => {
  return models.Search.findAll({
    order: [['id', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

//=====================================
// NEW SEARCH

const newSearchTerm = ((req,res) => {
  return models.Search.create({
    where: {
      search: req.body.search
    }
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

router.route('/explore/search')
  .get(allSearchTerms)
	.post(newSearchTerm)


//EXPORTS
module.exports = router
