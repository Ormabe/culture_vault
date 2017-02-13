const express = require('express');
const router = express.Router();
const Comment = require('../server/models').Comment;
const Users = require('../server/models').Users;

const getAllComments = ((request, response) => {
	Comment.findAll({
		where: {
			ExperienceId: request.params.experienceId
		}
		,
		include: [Users],
		order: [["createdAt", "DESC"]]
	})
		.then((data) => {
			response.send(data);
		})
		.catch((error) => {
			response.send(error);
		})
})

const postAComment = ((request, response) => {
	Comment.create({
		comment: request.body.comment,
		ExperienceId: request.params.experienceId
	})
		.then((data) => {
			response.send(data);
		})
		.catch((error) => {
			response.send(error)
		})
})

const deleteAComment = ((request, response) => {
	Comment.destroy({
		where: {
			id: request.params.commentId
		}
	})
		.then( function() {
			response.send('Post has been deleted.');
		})
})

router.route('/:experienceId')
	.get(getAllComments)

router.route('/experience/:experienceId')
	.post(postAComment)

router.route('/delete/:commentId')
	.delete(deleteAComment)

module.exports = router;