const router = require('express').Router();
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

const editAComment = ((request, response) => {
	let values = { comment: request.body.comment };
	let selector = { where: { id: request.params.commentId }};

	Comment.update(values, selector)
		.then((data) => {
			response.send(data);
		})
		.catch((error) => {
			response.send(error)
		})
})

router.route('/:experienceId')
	.get(getAllComments)

router.route('/experience/:experienceId')
	.post(postAComment)

router.route('/delete/:commentId')
	.delete(deleteAComment)

router.route('/edit/:commentId')
	.put(editAComment)

module.exports = router;