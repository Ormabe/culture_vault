const router = require('express').Router();
const Users = require('../server/models').Users;

const getAllUsers = ((req, res) => {
  return Users.findAll({
    order: [['id', 'ASC']],
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  });
});

const createNewUser = ((req, res) => {
  return Users.findOrCreate({
    where: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  });
});

const findUserByUsername = ((req, res) => {
  Users.findAll({
    where: {
      username: req.params.username,
    },
  })
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    res.send(err);
  });
});


// function getUserById (request, response) {
//   return Users.findAll({
//     where: {
//       id: request.params.id
//     }
//   })
//   .then((data) => {
//     console.log('<====== RETURN 1 USER ======>')
//     res.send(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

const getUserById = ((req, res) => {
  Users.findAll({
    where: {
      id: req.params.id
    }
  })
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    console.log(err)
  })
});

  // =====================================
  // TO BE COMPLETED DURING SPRINT 2

//   const deleteByUsername = ((req, res, next) => {
//   return models.Users.findAll({
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
//   });
//
const updateUserById = ((req, res) => {
  return Users.findById(
      req.params.id )
  .then((user) => {
      user.update({email: req.body.email})
  })
  .then((data) => {
    console.log('Updated User\'s Email!')
   res.send(data)
  })
   .catch((err) => {
  res.send(err)
  })
})

router.route('/')
  .get(getAllUsers)
  .post(createNewUser);

router.route('/:username')
  .get(findUserByUsername)

  // .delete(deleteByUsername)

router.route('/:id')
  .get(getUserById)
  .put(updateUserById)


module.exports = router;
