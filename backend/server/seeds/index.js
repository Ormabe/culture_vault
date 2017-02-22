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
	last_name: "St. Louis",
	username: "chanicestlouis",
	// PASSWORD: gangstaboo45
	password: "$2a$10$sVGZGrr4Psswx/6jgSvBe.ok1.EEAUfrFM7GNY1fr336qaHT4rTGK",
	email: "chanice@zol.com",
	image: "https://s25.postimg.org/5i4wwqw0v/chanice_stlouis.png",
	location: "Brooklyn",
	bio: "My presence is a present"
	},

	{
	first_name: "Rabiya",
	last_name: "Watson",
	username: "ormabe",
	// PASSWORD: darthcheeto2017
	password: "$2a$10$jGz5PkNbw8USxid6cvyzR.hO6WroPwGNT3GGs89zse43sD.ZmeiyC",
	email: "rabiya@zol.com",
	image: "https://s25.postimg.org/45n7uuylb/rabiya_watson.png",
	location: "Manhattan, NY",
	bio: "Politics or bust!"
	},
	{
	first_name: "Niko",
	last_name: "Bella",
	username: "nikobellalew",
	// PASSWORD: ihatepasswords31-00
	password: "$2a$10$C3LQE66CVilaPKYwQMmh0OM.a3eaU7WvKMy6Vz/5/ILCt2xk7IUbm",
	email: "niko@zol.com",
	image: "https://s25.postimg.org/y3l5y70rj/niko_law.png",
	location: "Brooklyn",
	bio: "Devs Do It Better"
	},
	{
	first_name: "Victor",
	last_name: "Amos",
	username: "victorbrooklyn",
	// PASSWORD: bkisthebest7102
	password: "$2a$10$5pLqKLaxsMsBAdjZ/m.CNOB6GO7FH7qYHO0Xo/UsBPysVVgbmKIYm",
	email: "victor@zol.com",
	image: "https://s25.postimg.org/g116nduov/victor_amos.jpg",
	location: "New York City",
	bio: "There's nothing not to love about me..."
	}
	]).then(data => {
		models.Experiences.bulkCreate([
		{
		name: "Mamasan's Chanko Nabe",
		fav: 4,
		quote: `"My gran once told me that, "People are like ingredients. If we made a soup with with just potatoes, it'll taste too bland. But if you mix a variety of ingredients, your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too..."`,
		story: " more story blah blah.....Every Sunday my gran would make soup and teach me about life. My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
		image: 'https://s25.postimg.org/bwhxmzu73/chanko_nabe.jpg',
		UserId:1
		},

		{
		name: 'Fueling School Success with Canned Pasta',
		fav: 3,
		quote: "My programming instructor Charles taught us this tasty 'struggle recipe' to fuel our studies when hunger is serious but money and time are tight",
		story: " more story blah blah.....Every sunday my gran would make soup and teach me about life. My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
		image: "https://s25.postimg.org/hzuwt5v33/spaghettios.jpg",
		UserId:2
		},
		{
		name: 'Cross-cultural Bonds',
		fav: 2,
		quote: "When you're stuck with a group of people repeatedly for hours on end, you're not friends until you've shared food. My co-worker Shazia introducing me to Pakistani briyani has changed my life",
		story: " more story blah blah.....Every sunday my gran would make soup and teach me about life. My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
		image: "https://s25.postimg.org/5wpl5lk0v/biryani.jpg",
		UserId:3
		}
	])
	}).then(data => {
	models.Locations.bulkCreate([
	{
	continent: "North America",
	country: "United States",
	state: "New York",
	region: "Tri-State Area",
	city: "New York City",
	image: "https://s25.postimg.org/wdzo70vq7/united_states.png"
	},
	{
	continent: "Asia",
	country: "Japan",
	city: "Tokyo",
	image: "https://s25.postimg.org/t4l90k7mn/japan.png"
	},
	{
	continent: "Europe",
	country: "United Kingdom",
	city: "London",
	image: "https://s25.postimg.org/6h5zues2n/united_kingdom.png"
	},
	{
	continent: "Africa",
	country: "South Africa",
	city: "Cape Town",
	image: "https://s25.postimg.org/60g6u8exr/south_africa.png"
	},
	{
	continent: "Australia",
	country: "Australia",
	city: "Sydney",
	image: "https://s25.postimg.org/kxt98zhjz/australia.png"
	},
	{
	continent: "South America",
	country: "Colombia",
	city: "Cartagena",
	image: "https://s25.postimg.org/rycno0ty7/colombia.png"
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
	},
	{
  name: 'Shazia\'s Briyani',
  ExperienceId:3
	}
		])
	}).then(data => {
		models.Ingredients.bulkCreate([
		{
		ingredients:"paprika",
		quantity:2,
		unit:'tablespoons',
		RecipeId:2
		},

		{
		ingredients:"cumin seeds, toasted" ,
		quantity:1,
		unit:"tablespoon",
		RecipeId:2
		},

		{
		ingredients:"coriander seeds, toasted",
		quantity:2,
		unit:"teaspoons",
		RecipeId:2
		},

		{
		ingredients:"black peppercorns",
		quantity:2,
		unit:"teaspoons",
		RecipeId:2
		},

		{
		ingredients:"sea salt, coarse",
		quantity:1.5,
		unit:"teaspoons",
		RecipeId:2
		}
	])
	}).then(data => {
		models.Comment.bulkCreate([
			{

		    "comment": "This is my fourth comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:07:08.136Z",
		    "updatedAt": "2017-02-11T21:07:08.136Z",
		    "UserId": null,
		    "ExperienceId": 2,
		    "User": null
		  },
		  {

		    "comment": "This is my third comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:07:01.535Z",
		    "updatedAt": "2017-02-11T21:07:01.535Z",
		    "UserId": null,
		    "ExperienceId": 2,
		    "User": null
		  },
		  {

		    "comment": "This is my second comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:06:55.825Z",
		    "updatedAt": "2017-02-11T21:06:55.825Z",
		    "UserId": null,
		    "ExperienceId": 2,
		    "User": null
		  },
		  {

		    "comment": "This is my first comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:06:50.626Z",
		    "updatedAt": "2017-02-11T21:06:50.626Z",
		    "UserId": null,
		    "ExperienceId": 2,
		    "User": null
		  },
		  {

		    "comment": "This is my fourth comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:06:39.215Z",
		    "updatedAt": "2017-02-11T21:06:39.215Z",
		    "UserId": null,
		    "ExperienceId": 1,
		    "User": null
		  },
		  {

		    "comment": "This is my third comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:05:57.695Z",
		    "updatedAt": "2017-02-11T21:05:57.695Z",
		    "UserId": null,
		    "ExperienceId": 1,
		    "User": null
		  },
		  {

		    "comment": "This is my second comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:05:49.586Z",
		    "updatedAt": "2017-02-11T21:05:49.586Z",
		    "UserId": null,
		    "ExperienceId": 1,
		    "User": null
		  },
		  {

		    "comment": "This is my first comment. Woo hoo!",
		    "createdAt": "2017-02-11T21:05:39.826Z",
		    "updatedAt": "2017-02-11T21:05:39.826Z",
		    "UserId": null,
		    "ExperienceId": 1,
		    "User": null
		  }
		])
	}).then(data => {
		models.Likes.bulkCreate([
		{
		ExperienceId:1,
		UserId:3
		},
		{
		ExperienceId:2,
		UserId:2
		},
		{
		ExperienceId:3,
		UserId:1
		},
		{
		ExperienceId:1,
		UserId:1
		},
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
		{
		LocationId:1,
		ExperienceId:2
		},

		{
		LocationId:2,
		ExperienceId:1
		},

		{
		LocationId:3,
		ExperienceId:3
		}

		])
	})
};


module.exports = seedFunction
