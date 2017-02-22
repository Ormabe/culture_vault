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
	image: "https://s25.postimg.org/5fhbbdodb/niko_law.jpg",
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
		name: "Oba No Chanko Nabe",
		fav: 4,
		quote: `"My Aunt once told me that, "People are like ingredients. If we made the soup with with just potatoes, it'd taste too bland. But with a variety of ingredients, your soup will be flavorful. Different types of people make life flavorful"`,
		story: "My favorite person in the world is my Aunt, she has encouraged my individuality like no one else. I was never girly even as a little girl. Dolls and cute sweets didn’t thrill me, it hinted at tendencies to my immediate family that were unacceptable. While others tried to discourage me from being my authentic self to protect me from society's disapproval at the cost of smothering my light. My aunt always encouraged my interests and expression. My Aunt once told me that, People are like ingredients. If we made the soup with with just potatoes, it'd taste too bland. But with a variety of ingredients, your soup will be flavorful. Different types of people make life flavorfulShe was a career woman that married but never had children, wild and daring for her generation. She taught me that there were different types of strength. That being yourself in a world intent on you being anything but was quiet bravery. Chanko Nabe, well known for being a core diet component of sumo wrestlers is heaven. It’s a hearty mixture of vegetables, meats, and tofu in a miso ( fermented soybean and barley/rice malt) based broth and is nothing like the airy miso soups you’ve likely tried at japanese restaurants outside of Japan.Chanko Nabe became my favorite dish the first time she made it for me when I was 7 years old. I can still remember the rich and almost buttery, yet clear broth. It tasted like bones had been boiling for years to create such a powerful flavor. My aunt would make it with strips of pork, a lot of napa cabbage, some mushrooms, tofu and a variety of extras that changed each time. I always felt like it was her way of acknowledging my differences, nourishing me with the soup of warriors, and urging me to be strong without words. Years later when I came-out of the closet as a lesbian to my family, she was the first person to accept me. And while I waited in the cold for the rest of my family to come to terms ( and mourned those that couldn’t),she continued to love and comfort me with large bowls of soup that represent the same simple honest authentic warmth she always gave to her niece.",
		image: 'http://www.gotokyo.org/en/tourists/topics_event/topics/150115/images/150115_main.jpg',
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
		,
		{
		name: 'SABILLAH FAMILY TAJJIN',
		fav: 44,
		quote: "Nothing is better that eating your favorite meal with your favorite person.",
story: "This meal represents family to me. We always have it at gatherings and festivals .I'm from Rabat, Morocco originally, I immigrated to New York, U.S. when I was 21.My strongest memory of this dish is eating it alone with my wife. Whenever she cooks it we share it. Eating out the same pot makes me feel loved. Nothing is better that eating your favorite meal with your favorite person.This stew always reminds me of the people I love close and far. I've eaten it since I was a child surrounded by parents and siblings in another country and eat it now with the family I've created in America.my wife is a lovely person. She's incredibly smart and kind. And is pursuing becoming a immigration lawyer. Cooking is her favorite hobby. She tries to cook all cuisines from all over the world always trading recipes with her friends from Pakistan and other places. She will take these recipes and mix in moroccan touches that her friends fall in love with the results of. She brought this same creativity to the previous careers as a seamstress and accountant. and now pursuing becoming an immigration lawyer. Tajjin is a nationally prized dish in Morocco. The family recipes are passed from mother to daughter through the generations. It's slightly different in each region, where I'm from we add prunes and veal, other places use chicken and almonds instead. Sitting in in my kitchen in bayside queens across from my wife. The room is quiet other then the sound of utensil dinging the clay pot () , I smell a sweet delicious smell of the roasting prunes and cinnamon. and I see my life partner and the most delicious stew.what makes it special is you cook it slowly. traditionally it's cooked oven low low heated coals for many hours making the meat extra tender and flavorful. These moments eating Tajjin with my wife gives me the feeling of being at home. Often struggling to make a way for myself and my family here in the states I feel like a stranger. When I eat Tajjin, I have no doubt of who I am and that I'm where I belong.",
			image: "https://es1-ladleandspricell.netdna-ssl.com/wp-content/uploads/2013/12/tagine-chicken-1.jpg",
		UserId:3
		}
		,
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
	country: "Morocco",
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
	name: 'Chanko Nabe',
	ExperienceId:1
	},
	{
  name: 'Shazia\'s Briyani',
  ExperienceId:3
	}
	,
	{
  name: 'Tajjin',
  ExperienceId:4
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
		,

		{
		ingredients:"lamb",
		quantity:1.5,
		unit:"pounds",
		RecipeId:4
		}
		,

		{
		ingredients:"sea salt, coarse",
		quantity:1,
		unit:"teaspoon",
		RecipeId:4
		}
		,

		{
		ingredients:"prunes",
		quantity:4,
		unit:"ounces",
		RecipeId:4
		}
		,

		{
		ingredients:"cinnamon",
		quantity:2,
		unit:"sticks",
		RecipeId:4
		}
		,

		{
		ingredients:"Shrimp",
		quantity:8,
		unit:"ounces",
		RecipeId:2
		}
		,

		{
		ingredients:"miso paste",
		quantity:2,
		unit:"tablespoons",
		RecipeId:2
		}
		,

		{
		ingredients:"chicken meatballs",
		quantity:3/4,
		unit:"pound",
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
		UserId:1
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
		,
		{
		ExperienceId:4,
		UserId:3
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
		,

		{
		steps: 'Place ingredients and water in tajjin',
		RecipeId:4
		}
		,

		{
		steps: 'Cook then enjoy',
		RecipeId:4
		}
		,

		{
		steps: 'Boil in stone pot',
		RecipeId:1
		}
		,

		{
		steps: 'Cook then enjoy',
		RecipeId:1
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
		ExperienceId:2
		},

		{
		LocationId:3,
		ExperienceId:3
		}
		,

		{
		LocationId:4,
		ExperienceId:4
		}

		])
	})
};


module.exports = seedFunction
