const router = require('express').Router();
const models = require('../server/models');

///////////////
//FUNCTION/////
///////////////
const getExperienceLikes = (req,res) => {
	models.Likes.findAll({
		where:{
			ExperienceId:req.params.experienceId
		}
	}).then(data => res.send(data))
		.catch(err => res.status(500).send(err))
}
///////////////
///ROUTES//////
///////////////
router.route('/:experienceId')
	.get(getExperienceLikes)
///////////////
////EXPORTS////
///////////////
module.exports = router