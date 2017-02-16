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
	})
	.then(data => {
		console.log("FROM ROUTES:" + data)
		res.send(data)
	})
	.catch(error => {
		res.send(error)
	})	
}

const createLike = (req,res) => {
	models.Likes.create({
		ExperienceId:req.params.experienceId,
		UserId:req.params.userId
	})
	.then(data => {
		console.log("FROM ROUTES:" + data)
		res.send(data)
	})
		.catch(error => {
		res.send(error)
	})
}

const deleteLike = (req,res)=> {
	models.Likes.destroy({
		where:{
			ExperienceId:req.params.experienceId,
			UserId:req.params.userId
		}
	})
	.then(data => {
		res.send(data)
	})
		.catch(error => {
		res.send(error)
	})
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