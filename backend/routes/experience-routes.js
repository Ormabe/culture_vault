const router = require('express').Router();
const Locations = require('../server/models').Locations;
const Experiences = require('../server/models').Experiences;
const Recipes = require('../server/models').Recipes;
const Ingredients = require('../server/models').Ingredients;
const Steps = require('../server/models').Steps;
const Users = require('../server/models').Users;
const ExperiencesLocations = require('../server/models').ExperiencesLocations;
const models = require('../server/models')

// const ExperiencesLocations = require('../server/models').ExperiencesLocations;

const createAnExperience = (req, res) => {
	let storage ={
		locationId:null,
		quote: req.body.quote,
		story: req.body.story,
		image: req.body.image,
		UserId: req.user.id,
		//*******LOCATION*********//
		country: req.body.country,
		city: req.body.city,
		//*****INGREDIENTS********//
		ingredients:req.body.ingredients,
		recipeId:null,
		//*********STEPS*********//
		steps: req.body.steps,
		//********RECIPE*********//
		recipe:req.body.name,
		experienceId:null
	};

	 models.Experiences.create({
				quote: storage.quote,
				story: storage.story,
				image: storage.image,
				UserId: storage.UserId
	})
	 .then(data => storage.experienceId = data.id)

	 .then(data => {
		 return models.Locations.create({
				country: storage.country,
				city: storage.city
		})
	})
	 .then(location => storage.locationId = location.id)

	 .then(data => {
	 	 models.ExperiencesLocations.create({
	 		ExperienceId:storage.experienceId,
	 		LocationId:storage.locationId
	 	})
	 })
	 .then(data => {
	 	return models.Recipes.create({
	 		name:storage.recipe,
	 		ExperienceId:storage.experienceId
	 	})
	 })
	 .then(recipe => storage.recipeId = recipe.id)

	 .then(data => {

	 	return	models.Ingredients.bulkCreate(
	 		storage.ingredients.map(val => {
	 			val.RecipeId = storage.recipeId;

	 			return val;
	 		})
	 	)
 })
	 .then(data => {
	 	return models.Steps.bulkCreate(
	 			storage.steps.map(val => {
	 				val.RecipeId = storage.recipeId;

	 				return val
	 			})
	 		)
	 })
	.then(something => {
		console.log('SOMETHING ======>>>>>>',something.datavalues.id)
	})
	.catch(error => console.log(error))
}


const getExperience = (req, res) => {
	let data ={user:null,location:null,recipe:null,experience:null,steps:null,ingredients:null,sneakUserId:null};

	 ExperiencesLocations.findOne({
		where:{
		ExperienceId:req.params.experienceId
	},
	include:[Experiences,Locations]
})
	.then(experienceLocation => {
		// freezing the Experience object and Location
		data.experience = experienceLocation.Experience
		data.location = experienceLocation.Location
		data.sneakUserId = experienceLocation.Experience.UserId

		let experienceId = experienceLocation.Experience.id


		return Recipes.findById(experienceId)
	})
	.then(recipe => {
		//freeze recipe object
		data.recipe = recipe

		let recipeId = data.recipe.id

		return Steps.findAll({
			where:{
			RecipeId:recipeId
			},
			order:[['id', 'ASC']]
		})
	})
	.then(steps => {
		data.steps = steps

		let recipeId = data.recipe.id

		return Ingredients.findAll({
			where:{
				RecipeId:recipeId
			},
			order:[['id', 'ASC']]
		})
	})
	.then(ingredients => {
		data.ingredients = ingredients

		return Users.findOne({
			where: {
				id:data.sneakUserId
			}
		})
	})
	.then(user => {
		data.user = user
	})


	.then(() => res.send(data))
	.catch(error => res.status(500).send(error))
};

const getFeature = (req, res) => {
  console.log('Tao in here, you got user ID');
  const userId = req.user && req.user.dataValues && req.user.dataValues.id;
  console.log(userId);
  Experiences.findAll().then(data => res.send(data)).catch(error => res.status(500).send(error))
};

router.route('/create/:userId')
	.post(createAnExperience)

router.route('/:experienceId')
	.get(getExperience)

router.route('/discover/featured')
	.get(getFeature)

module.exports = router;
