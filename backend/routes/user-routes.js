//IMPORT MODULES
const express = require('express')
const router = express.Router();
const models = require('../server/models');

//=====================================
// ALL USERS
const usersAll = ((req,res) => {
  return models.Users.findAll({
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
// NEW USER

const userSignUp = ((req,res) => {
  return models.Users.findOrCreate({
    where: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

//=====================================
// SEARCH BY USERNAME

const findUserByUsername = ((req, res) => {
		models.Users.findAll({
      where: {
        username: req.params.username
      }
    })
		.then( (user) => {
			res.send(user);
		})
		.catch( (err) => {
			console.log(err);
		})
	})

  //=====================================
  // TO BE COMPLETED DURING SPRINT 2

//   const deleteByUsername = ((req, res, next) => {
//   	return models.Users.findAll({
//         where: {
//           username: req.params.username
//         }
//       })
//       .then((result) => {
//           res.status(200)
//             .json({
//               status: 'success',
//               message: `Removed ${result.rowCount} user`
//             });
//         })
//         .catch((err) => {
//           return next(err);
//         });
//   	})
//
// const updateUserByURL = ((req, res) => {
// 		models.User.findById(req.params.id)
// 		.then((user) => {
// 			user.update({username: req.param('newName')})
// 		})
// 		.then((data) => {
// 			console.log('Updated User\'s Name!')
// 			res.send(data)
// 		})
// 		.catch((err) => {
// 			res.send(err)
// 		})
// 	})

//ROUTES
router.route('/')
  .get(usersAll)
	.post(userSignUp)
router.route('/:username')
  .get(findUserByUsername)
  // .delete(deleteByUsername)
  // .put(updateUserByURL)

//EXPORTS
module.exports = router
