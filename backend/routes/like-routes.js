const router = require('express').Router();
const Likes = require('../server/models').Likes;


const getExperienceLikes = (req,res) => {
	Likes.findAll({
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
	Likes.create({
		ExperienceId: req.params.experienceId,
		UserId: req.params.userId
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
	Likes.destroy({
		where:{
			ExperienceId:req.params.experienceId,
			UserId: req.params.userId
		}
	})
	.then(data => {
		res.send("Unliked")
	})
		.catch(error => {
		res.send(error)
	})
}


router.route('/:experienceId')
	.get(getExperienceLikes)

router.route('/:experienceId/:userId')
	.post(createLike)
	.delete(deleteLike)


module.exports = router