//IMPORT MODULES
const router = require('express').Router();
const models = require('../server/models');


/////////////////
////FUNCTION/////
/////////////////
const getExperience = (req, res) => {
	let data ={user:null,location:null,recipe:null,experience:null,steps:null,ingredients:null,sneakUserId:null};

	 models.ExperiencesLocations.findOne({
		where:{
		ExperienceId:req.params.experienceId
	},
	include:[models.Experiences,models.Locations]
})
	.then(experienceLocation => {
		// freezing the Experience object and Location
		data.experience = experienceLocation.Experience
		data.location = experienceLocation.Location
		data.sneakUserId = experienceLocation.Experience.UserId

		let experienceId = experienceLocation.Experience.id


		return models.Recipes.findById(experienceId)
	})
	.then(recipe => {
		//freeze recipe object
		data.recipe = recipe

		let recipeId = 2

		return models.Steps.findAll({
			where:{
			RecipeId:recipeId
			},
			order:[['id', 'ASC']]
		})
	})
	.then(steps => {
		data.steps = steps

		let recipeId = 2

		return models.Ingredients.findAll({
			where:{
				RecipeId:recipeId
			},
			order:[['id', 'ASC']]
		})
	})
	.then(ingredients => {
		data.ingredients = ingredients

		return models.Users.findOne({
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

const getFeature = (req,res) => {
	models.Experiences.findAll()
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
};

/////////////////
////ROUTER///////
/////////////////
router.route('/experience/:experienceId')
	.get(getExperience)

router.route('/experience')
	.get(getFeature)
/////////////////
/////EXPORTS/////
/////////////////
module.exports = router;