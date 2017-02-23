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
  models.ExperiencesLocations.findAll({
    where:{
      LocationId:req.params.locationId
    },
    include:[models.Experiences]
  })
  .then(data => res.send(data))
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