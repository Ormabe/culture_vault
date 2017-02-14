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

const createLike = (req,res) => {
	models.Likes.create({
		ExperienceId:req.params.experienceId,
		UserId:req.params.userId
	}).then(data => res.send(data))
		.catch(err => res.status(500).send(err))
}

const deleteLike = (req,res)=> {
	models.Likes.destroy({
		where:{
			ExperienceId:req.params.experienceId,
			UserId:req.params.userId
		}
	}).then(data => res.send(data))
		.catch(err => res.status(500).send(err))
}
///////////////
///ROUTES//////
///////////////
router.route('/:experienceId')
	.get(getExperienceLikes)

router.route('/:experienceId/:userId')
.post(createLike)
.delete(deleteLike)
///////////////
////EXPORTS////
///////////////
module.exports = router