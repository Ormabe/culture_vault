const router = require('express').Router();
const Users = require('../server/models').Users;


const getAllUsers = ((req,res) => {
  return Users.findAll({
    order: [['id', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const createNewUser = ((req,res) => {
  return Users.findOrCreate({
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

const findUserByUsername = ((req, res) => {
		Users.findAll({
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

router.route('/')
  .get(getAllUsers)
	.post(createNewUser)

router.route('/:username')
  .get(findUserByUsername)
  // .delete(deleteByUsername)
  // .put(updateUserByURL)

module.exports = router
