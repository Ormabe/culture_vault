// //Import Seed Files
// let users = require('./users-seed.js');
// let locations = require('./locations-seed.js');
// let ingredient = require('./ingredient-seed.js')
// let experiences = require('./experiences-seed.js');
// let recipes = require('./recipes-seed.js');
// let steps = require('./steps-seed.js');

//Import Models
let models = require('../models');


const seedFunction = () => {
	models.Users.bulkCreate([
	{
	first_name: "Chanice",
	last_name: "Stlouis",
	username: "chanicestlouis",
	password: "gangstaboo45",
	email: "chanicestlouis@gmail.com",
	image: "https://s25.postimg.org/si7uajpun/chanice_stlouis.jpg",
	location: "Brooklyn",
	bio: "My presence is a present"
	},

	{
	first_name: "Rabiya",
	last_name: "Watson",
	username: "ormabe",
	password: "mkdhRE45jk#$v0",
	email: "ormabe@erols.com",
	image: "https://s25.postimg.org/5usl4eaan/rabiya_watson.jpg",
	location: "Manhattan, NY",
	bio: "Politics or bust!"
	}
	]).then(data => {
		models.Experiences.bulkCreate([
		{
		name: 'Life lesson soup',
		fav: 4,
		quote: "My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
		story: " more story blah blah.....Every sunday my gran would make soup and teach me about life. My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
		image: "https://unsplash.com/search/soup?photo=XoByiBymX20",
		UserId:1
		},

		{
		name: 'Fueling school success with canned pasta',
		fav: 3,
		quote: "My programming instructor Charles taught us this tasty 'struggle recipe' to fuel our studies when hunger is serious but money and time are tight",
		story: " more story blah blah.....Every sunday my gran would make soup and teach me about life. My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
		image: "https://unsplash.com/search/pasta?photo=nVPfPXc3eis",
		UserId:2
		}
	])
	}).then(data => {
	models.Locations.bulkCreate([
	{
	continent: "North America",
	country: "United States of America",
	state: "New York",
	region: "Tri-State Area",
	city: "New York City"
	},

	{
	continent: "North America",
	country: "United States of America",
	state: "Louisiana",
	region: "Mississippi Delta",
	city: "New Orleans"
	}

	])
	}).then(data => {
	models.Recipes.bulkCreate([
	
	{
	name: 'Charle\'s Survival Pasta',
	ExperienceId:2
	},

	{
	name: 'Humpty Dumpty\'s Wall Flower',
	ExperienceId:1
	}
		])
	}).then(data => {
		models.Ingredients.bulkCreate([
		{
		name:"paprika",
		quantity:2,
		unit:'tablespoons',
		RecipeId:2
		},

		{
		name:"cumin seeds, toasted" ,
		quantity:1,
		unit:"tablespoon",
		RecipeId:2
		},

		{
		name:"coriander seeds, toasted",
		quantity:2,
		unit:"teaspoons",
		RecipeId:2
		},

		{
		name:"black peppercorns",
		quantity:2,
		unit:"teaspoons",
		RecipeId:2
		},

		{
		name:"sea salt, coarse",
		quantity:1.5,
		unit:"teaspoons",
		RecipeId:2
		}

	])
	}).then(data => {
		models.Steps.bulkCreate([
		{
		steps: 'boil shit in a pot',
		RecipeId:2
		},

		{
		steps: 'mix some seasoned rice',
		RecipeId:2
		},

		{
		steps: 'put some cheese and hot sauce on canned pasta',
		RecipeId:2
		},

		{
		steps: 'boil chicken in a pot',
		RecipeId:2
		},

		{
		steps: 'scramble some eggs',
		RecipeId:2
		}
	])
	}).then(data => {
		models.ExperiencesLocations.bulkCreate([
		{LocationId:1,
			ExperienceId:2
		},

		{LocationId:2,
			ExperienceId:1
		}
			])
	})
}


module.exports = seedFunction
