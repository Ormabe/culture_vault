const router = require('express').Router();
const Users = require('../server/models').Users;
const models = require('../server/models')

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

// const getUserById = ((req, res) => {
//   Users.findAll({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then((user) => {
//     res.json(user)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// });
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
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
const updateUserById = ((req, res) => {
  if (!req.isAuthenticated() || req.user.id !== req.params.id) {
    res.status(401).end()
  }
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

const findLoginUser = (req,res) => {
  let userProfile = {user:null, experiences:null, likes:[]}
  Users.findOne({
    where:{
      id:req.params.userId
    }
  }).then(userInfo => userProfile.user = userInfo)

    .then(experience => {
      return models.Experiences.findAll({
        where: {
          UserId: userProfile.user.id
        }
      })
    })

    .then(experience => userProfile.experiences = experience)

    .then(likes => {
      return models.Likes.findAll({
        where: {
          UserId: userProfile.user.id
        },
        include:[models.Experiences]
      })
    })

    .then(likes => userProfile.likes = likes)

    .then(data => res.send(userProfile))
    .catch(err => res.status(500).send(err));
}



/////////////
///ROUTES////
/////////////
router.route('/profile/:userId')
  .get(findLoginUser)

router.route('/')
  .get(getAllUsers)
  .post(createNewUser);


router.route('/:username')
  .get(findUserByUsername)

  // .delete(deleteByUsername)

//this needs another another path or it will mean the same thing as '/:username'
// router.route('/:id')
//   // .get(getUserById)
//   .put(updateUserById)


module.exports = router;
