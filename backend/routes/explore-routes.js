const router = require('express').Router();
const Locations = require('../server/models').Locations;
const Search = require('../server/models').Search;
const models = require('../server/models')
 
const findAllContinents = ((req,res) => {
  return Locations.findAll({
    order: [['continent', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByContinent = ((req, res) => {
		Locations.findAll({
      where: {
        continent: req.params.continent
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

const findAllCountries = ((req,res) => {
  return Locations.findAll({
    order: [['country', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByCountry = ((req, res) => {
		Locations.findAll({
      where: {
        id: req.params.id
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

const findAllStates = ((req,res) => {
  return Locations.findAll({
    order: [['state', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByState = ((req, res) => {
		Locations.findAll({
      where: {
        state: req.params.state
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

const findAllRegions = ((req,res) => {
  return Locations.findAll({
    order: [['region', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByRegion = ((req, res) => {
		Locations.findAll({
      where: {
        region: req.params.region
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

const findAllCities = ((req,res) => {
  return Locations.findAll({
    order: [['city', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByCity = ((req, res) => {
		Locations.findAll({
      where: {
        city: req.params.city
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

const getExperiences = (req,res) => {
  let dopeObj = {
    User:null, 
    LocationId:req.params.locationId, 
    Experience:null, 
    LikesCounter:null,
    Recipe:null,
    CommentsCounter:null
  }
  
  models.ExperiencesLocations.findAll({
    where:{
      LocationId:dopeObj.LocationId
    },
    include:[models.Experiences]
  })

  .then(experience => dopeObj.Experience = experience[0].Experience)

  .then(user => {
    return models.Users.findOne({
      where: {
        id:dopeObj.Experience.UserId
      }
    })
  })

  .then(user => dopeObj.User = user)

  .then(like => {
    return models.Likes.findAll({
      where: {
        ExperienceId:dopeObj.Experience.id
      }
    })
  })

  .then(like => dopeObj.LikesCounter = like)

  .then(like => {

   let data = {counter:0}
   for(var i = 0; i< dopeObj.LikesCounter.length ; i++){
    data.counter +=1
   }
    dopeObj.LikesCounter = data.counter
  })

  .then(recipe => {
    return models.Recipes.findAll({
      where: {
        ExperienceId: dopeObj.Experience.id
      }
    })
  })

  .then(recipe => dopeObj.Recipe = recipe)

  // .then(comment => {
  //   return models.Comments.findAll({
  //     where: {
  //       Experience: dopeObj.Experience.id
  //     }
  //   })
  // })

  // .then(comment => dopeObj.CommentsCounter = comment)
  
  .then(data => res.send(dopeObj))
  .catch(err => res.status(500).send(err))
};


const allSearchTerms = ((req,res) => {
  return Search.findAll({
    order: [['id', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const newSearchTerm = ((req,res) => {
  return Search.findOrCreate({
    where: {
      search: req.body.search
    }
  })
  .then((data) => {
    console.log('[=== SEARCH ROUTE FIRED ===]]')
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

router.route('/search')
  .get(allSearchTerms)
  .post(newSearchTerm)

router.route('/country/:locationId')
  .get(getExperiences)

router.route('/continents')
  .get(findAllContinents)

router.route('/continents/:continent')
  .get(findByContinent)

router.route('/countries')
  .get(findAllCountries)

router.route('/countries/:id')
  .get(findByCountry)

router.route('/states')
  .get(findAllStates)

router.route('/states/:state')
  .get(findByState)

router.route('/regions')
  .get(findAllRegions)

router.route('/regions/:region')
  .get(findByRegion)

router.route('/cities')
  .get(findAllCities)

router.route('/cities/:city')
  .get(findByCity)

//EXPORTS
module.exports = router