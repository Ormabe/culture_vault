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
		first_name: "Iliass",
		last_name: "S.",
		username: "thewindsmademe",
		// PASSWORD: ihatepasswords31-00
		password: "$2a$10$C3LQE66CVilaPKYwQMmh0OM.a3eaU7WvKMy6Vz/5/ILCt2xk7IUbm",
		email: "winds@zol.com",
		image: "https://s25.postimg.org/wkzgxkefz/victor_amos.png",
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
		image: "https://s25.postimg.org/wkzgxkefz/victor_amos.png",
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
			UserId:3,
			songURI: "2zT5npcA5n2RhhnBiWg3zo"
		},

		{
			name: 'Fueling School Success with Canned Pasta',
			fav: 3,
			quote: "Spicy pasta with a gang of cheese",
			story: "My programming instructor Charles taught us this tasty 'struggle recipe' to fuel our studies when hunger is serious but money and time are tight. He was so sure that we would enjoy this meal he brough cans of pasta, heaps of cheese and shared it with half the class. Delicious. Fast, easy, tasty . . . and cost effective everything that you could ask for",
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
		},
		{
			name: 'My love affair with Quince',
			fav: 16,
			quote: "There is a reason that the Quince was on the tree of knowledge in the Garden of Eden",
			story: "One of the best and easiest foods to make is Quince paste. Once you've made it you will never go back to store bought anything.  My quince paste is simply pure quince, sugar and a the juice of a lemon – nothing more!  Just pure, intense quince flavor to accompany everything on your cheese board.",
			image: "https://nettleandquince.files.wordpress.com/2010/11/dsc_03051.jpg",
			UserId:4
		},
		{
			name: 'Fairy Bread, for the child within us all',
			fav: 2,
			quote: 'Sometimes you want molocular gastronomy and deconstructed lasagne othertimes you want bread with candy sprinkles',
			story: 'This bread is simple and delicous. There is nothing better than suprising your guests with a tray of delightful fairy bread and watching their smiles\' come alive',
			image: "https://c1.staticflickr.com/2/1170/1463485066_6b952055af_b.jpg",
			UserId:4,
			songURI:'6r2BECwMgEoRb5yLfp0Hca'
		},
		{
			name: 'Here in the states I feel like a stranger',
			fav: 44,
			quote: "Nothing is better that eating your favorite meal with your favorite person.",
			story: "This meal represents family to me. We always have it at gatherings and festivals .I'm from Rabat, Morocco originally, I immigrated to New York, U.S. when I was 21.My strongest memory of this dish is eating it alone with my wife. Whenever she cooks it we share it. Eating out the same pot makes me feel loved. Nothing is better that eating your favorite meal with your favorite person.This stew always reminds me of the people I love close and far. I've eaten it since I was a child surrounded by parents and siblings in another country and eat it now with the family I've created in America.my wife is a lovely person. She's incredibly smart and kind. And is pursuing becoming a immigration lawyer. Cooking is her favorite hobby. She tries to cook all cuisines from all over the world always trading recipes with her friends from Pakistan and other places. She will take these recipes and mix in moroccan touches that her friends fall in love with the results of. She brought this same creativity to the previous careers as a seamstress and accountant. and now pursuing becoming an immigration lawyer. Tajjin is a nationally prized dish in Morocco. The family recipes are passed from mother to daughter through the generations. It's slightly different in each region, where I'm from we add prunes and veal, other places use chicken and almonds instead. Sitting in in my kitchen in bayside queens across from my wife. The room is quiet other then the sound of utensil dinging the clay pot () , I smell a sweet delicious smell of the roasting prunes and cinnamon. and I see my life partner and the most delicious stew.what makes it special is you cook it slowly. traditionally it's cooked oven low low heated coals for many hours making the meat extra tender and flavorful. These moments eating Tajjin with my wife gives me the feeling of being at home. Often struggling to make a way for myself and my family here in the states I feel like a stranger. When I eat Tajjin, I have no doubt of who I am and that I'm where I belong.",
			image: "https://es1-ladleandspricell.netdna-ssl.com/wp-content/uploads/2013/12/tagine-chicken-1.jpg",
			UserId:3
		},
		{
			name: "Bandeja Paisa (Farmer\'s Platter)",
			fav: 2,
			quote: "This is a slow food meant to fuel hard work. Even though the pace of our culture has changed this dish is timeless.",
			story: "I was born in Medellin, Colombia and eating bandeja paisa makes me think of home. Meat is prized in our culture and a meal isn't considered adequate without beef or pork ( poultry and seafood do not count, sorry not sorry). This dish is the home run of meat dishes, it has at least 3 kinds of meat and is packed with stick to your ribs nutrition to keep you going during long days and hard work. The traditional bandeja paisa includes beans, rice, ground beef, chorizo with lime, plantain, arepa, avocado, fried egg on top and of course a big slice of chicharron (fried pork belly). It is often served with mazamorra, a cold milk drink made with crushed corn.Strong savory smells dominate the preparation of this meal: grilled steak, stewed beans, fried chorizo, and chicharron. Bean preparation varies based on region and personal taste, it's popular to season them with pata (pork feet). It's not elaborate like what you'd find in a restaurant and you don't make it with the same ingredients every time. Throughout the week families will make variations of this this dish, mine had it twice a week for lunch. It's defines comforting 'home food' for me. I miss it. I don't cook it here in america due to expense and time. The meat tastes different here ( almost like I can taste the antibiotics), beef is so much more expensive, and the traditional beans take hours to make.My favorite thing about this dish is it’s accessibility to all Colombians. Everyone knows, likes, orders, and cooks it. It developed in a region where coffee is produced. The farm laborers there would consume the high calorie bandeja paisa as a means of providing them a full day’s worth of energy and nourishment to keep them going throughout the entire day. The dish has always been from and for working class people, it is the unofficially thought of as the national dish.",
			image: "http://img.absolutviajes.com/wp-content/uploads/2008/10/bandeja-paisa-png.png",
			UserId:2
		},
		{
			name: 'He Taught Me To Cook With Fire',
			fav: 2,
			quote: "Fishing with my ex-boyfriend's father helped me find peace.",
			story: " more story blah blah.....Every sunday my gran would make soup and teach me about life. My gran oncetold me 'people are like ingredients, if we made a soup with with just potatoes it'd taste too bland, but if you mix a variety of ingredients your stew will be flavorful. If you have a variety of types of people in your life your life will be flavorful too.",
			image: "http://www.seriouseats.com/recipes/assets_c/2015/06/20150625-food-lab-grilled-shrimp-15-thumb-1500xauto-424445.jpg",
			UserId:3
		}
		,
		{
			name: 'She Taught Me There Was Strength In Kindness',
			fav: 2,
			quote: "People are like spices, without the good blend nothing tastes good. Diversity and inclusion is required for a flavorful life. We are all needed.",
			story: "My grandmother Mirabelle passed away recently, she was my favorite person in the world. She a had a razor sharp tongue and take no bs from anyone gruffness to her. But under that hard shell that protected us/demanded we improve...that would read you (set you straight) without delay , was bottomless compassion. She was the person that everyone in our small Louisiana neighborhood could come to with their troubles and leave with a clear mind and full heart and belly. After the katrina she spent her last years demonstrating to anyone who had lost their homes, loved ones, or sense of belonging in life, that they belonged to her now. Their home was hers, that they mattered, and showered them with gestures, clothing, blankets, food, hugs, every cent she received from her social security checks. She was a benevolent force of nature and since she’s died, my world is a noticeably colder. Many of my favorite moments with her were spent in the kitchen. I can still hear the chop of the knife on the cutting board, her scratchy voice singing along with old blue records playing, and the clang of the pots being shifted on the stove. She taught me about life in that kitchen. For years I dreaded that as a religious woman that she would condemn me for being gay. But when I finally came out to her, she told me that people are like spices, if we leave something out our gumbo will taste off. That difference are required for a flavorful life. We are all needed. Then she told me it was ok to cry, but not to burn the onions I was caramelizing on the stove so I needed to handle my business. She taught me about gumbo’s african roots and how the legacy of colonialism in louisiana resulted in a vast range of gumbo-preparation techniques practiced by the different peoples who make up the region's complex ethnic fabric. That what is not in recipes online, or rarely written down, is the element of adding the onions first. That it makes the roux get darker because of the sugars in the onions and then you add the other seasonings--the celery and the bell pepper. She taught me that though the combination of onions, celery, and bell pepper--is often called the 'holy trinity' of Creole cooking, that it is a late 20th-century invention. That celery is not a traditional element of New Orleans cuisine. That the heart of Creole cuisine was really creole mirepoix. diced vegetable cooked for a long time on a gentle heat in fat with the intention to sweeten the ingredients like she gently sweetened the all the lives she touched. I’m not dealing well with her loss and when I recently saw some nonsensical play on cajun style gumbo being passed off as authentic creole gumbo it broke my heart. It made me want to share my Maw maw’s story and real Creole gumbo with the world. I hope that it nourishes and supports you through lifes hardships the way it has for me.",
			image: "http://cdn-image.foodandwine.com/sites/default/files/recipe1115-xl-seafood-gumbo.jpg",
			UserId:1,
			songURI:'4Hhv2vrOTy89HFRcjU3QOx'
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
		name: 'Chanko Nabe',
		ExperienceId:1
	},
	{
		name: 'Charles\' Survival Pasta',
		ExperienceId:2
	},
	{
		name: 'Shazia\'s Briyani',
		ExperienceId:3
	},
	{
		name: 'My Delightful Quince Paste',
		ExperienceId:4
	},
	{
		name: 'Fairy Bread for All',
		ExperienceId: 5
	},
	{
		name: "My Love's Tajjin",
		ExperienceId:6
	},
	{
		name: 'Bandeja Paisa',
		ExperienceId:7
	},
	{
		name: 'He Taught Me To Cook With Fire',
		ExperienceId:8
	},
	,
	{
		name: "Maw maw Mirabelle’s Creole Seafood Gumbo",
		ExperienceId:9
	}
		])
	}).then(data => {
		models.Ingredients.bulkCreate([
		{
			ingredients:"Chef Boyardee Rigatoni",
			quantity:1,
			unit:'can',
			RecipeId:2
		},

		{
			ingredients:"Polly-O String Cheese" ,
			quantity:2,
			unit:"sticks",
			RecipeId:2
		},

		{
			ingredients:"Sriracha ",
			quantity:3,
			unit:"squeezes",
			RecipeId:2
		},
		{
			ingredients: 'Quinces, washed',
			quantity: 36,
			unit: "ounces",
			RecipeId: 4
		},
		{
			ingredients: 'White sugar',
			quantity: 36,
			unit: "ounces",
			RecipeId: 4
		},
		{
			ingredients: 'Lemon',
			quantity: 1,
			unit: 'whole',
			RecipeId: 4
		},
		{
			ingredients: 'Water',
			quantity: 5,
			unit: "ounces",
			RecipeId: 4
		},
		{
			ingredients: 'Caster sugar',
			quantity: 1,
			unit: "ounces",
			RecipeId: 4
		},
		{
			ingredients: 'White bread',
			quantity: 10,
			unit: 'slices',
			RecipeId: 5
		},
		{
			ingredients: 'Butter',
			quantity: 1,
			unit: 'stick',
			RecipeId: 5
		},
		{
			ingredients: 'Hundreds and Thousands (Round Sprinkles)',
			quantity: 4,
			unit: 'ounces',
			RecipeId: 5
		},
		{
			ingredients:"lamb shanks trimmed of excess fat (about 4 small or 3 large shanks",
			quantity:3,
			unit:"pounds",
			RecipeId:6
		},
		{
			ingredients:"large onions (about 800 gr), chopped",
			quantity:4,
			RecipeId:6
		},
		{
			ingredients:"olive oil",
			quantity:2,
			unit:"tablespoons",
			RecipeId:6
		},
		{
			ingredients:"finely chopped garlic (about 4 cloves)",
			quantity:1,
			unit:"tablespoon",
			RecipeId:6
		},
		{
			ingredients:"ground tumeric",
			quantity:1,
			unit:"teaspoon",
			RecipeId:6
		},{
			ingredients:"ground ginger",
			quantity:1,
			unit:"teaspoon",
			RecipeId:6
		},
		{
			ingredients:"salt (or more to taste)",
			quantity:1,
			unit:"teaspoon",
			RecipeId:6
		},
		{
			ingredients:"ground black pepper",
			quantity:1/4,
			unit:"teaspoon",
			RecipeId:6
		},
		{
			ingredients:"saffron",
			quantity:1/4,
			unit:"teaspoon",
			RecipeId:6
		},
		{
			ingredients:"large coriander bouquet, tied",
			quantity:1,
			RecipeId:6
		},
		{
			ingredients:"soft dried prunes",
			quantity: 10.5,
			unit:"ounces",
			RecipeId:6
		},
		{
			ingredients:"honey",
			quantity:3,
			unit:"tablespoons",
			RecipeId:6
		},
		{
			ingredients:"ground cinnamon",
			quantity:1,
			unit:"teaspoon",
			RecipeId:6
		},
		{
			ingredients:"Chorizo",
			quantity:8,
			unit:"ounces",
			RecipeId:7
		},
		{
			ingredients:"Chicarron",
			quantity:1/2,
			unit:"pound",
			RecipeId:7
		},
		{
			ingredients:"Eggs",
			quantity: 4,
			unit:"",
			RecipeId:7
		},
		{
			ingredients:"Maple wood chips",
			quantity: 3,
			unit:"pounds",
			RecipeId:8
		},
		{
			ingredients:"Shrimp",
			quantity:1,
			unit:"pound",
			RecipeId:8
		},
		{
			ingredients:"Shrimp",
			quantity:8,
			unit:"ounces",
			RecipeId:1
		},
		{
			ingredients:"miso paste",
			quantity:2,
			unit:"tablespoons",
			RecipeId:1
		},
		{
			ingredients:"chicken meatballs",
			quantity:3/4,
			unit:"pound",
			RecipeId:1
		},
		{
			ingredients:"oil (for frying okra)",
			quantity:1,
			unit:"cup",
			RecipeId:9
		},
		{
			ingredients:"flour",
			quantity:1 + ( 1 / 2),
			unit:"pound",
			RecipeId:9
		},
		{
			ingredients:"gumbo crabs",
			quantity:4,
			unit:"",
			RecipeId:9
		},
		{
			ingredients:"onion, chopped",
			quantity:1,
			unit:"",
			RecipeId:9
		},
		{
			ingredients:"bell pepper, chopped",
			quantity:1,
			unit:"",
			RecipeId:9
		},
		{
			ingredients:"shrimp",
			quantity:4,
			unit:"pounds",
			RecipeId:9
		},
		{
			ingredients:"celery, chopped",
			quantity:3,
			unit:"stalks",
			RecipeId:9
		},
		{
			ingredients:"okra, sliced 1/4 inch thick",
			quantity:2,
			unit:"pounds",
			RecipeId:9
		},
		{
			ingredients:"can of crushed tomatoes",
			quantity:14.5,
			unit:"ounces",
			RecipeId:9
		},
		{
			ingredients:"shrimp stock",
			quantity:1/2,
			unit:"gallon",
			RecipeId:9
		},
		{
			ingredients:"garlic",
			quantity:1,
			unit:"clove",
			RecipeId:9
		},
		{
			ingredients:"dried thyme",
			quantity:2,
			unit:"pound",
			RecipeId:9
		},
		{
			ingredients:"bay leaf",
			quantity: 1,
			unit:"",
			RecipeId:9
		},
		{
			ingredients:"green onions",
			quantity:1,
			unit:"bunch",
			RecipeId:9
		},
		{
			ingredients:"garlic powder, salt, and pepper to taste",
			unit:"",
			RecipeId:9
		},
		{
			ingredients:"cooked rice",
			quantity:1,
			unit:"pot",
			RecipeId:9
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
		{
			ExperienceId: 4,
			UserId: 4
		},
		{
			ExperienceId: 5,
			UserId: 4
		},
		{
			ExperienceId: 6,
			UserId:3
		},
		{
			ExperienceId: 6,
			UserId:2
		},
		{
			ExperienceId:7,
			UserId: 1
		},
		{
			ExperienceId:8,
			UserId:2
		}
			])
	}).then(data => {
		models.Steps.bulkCreate([
		{
			steps: 'Boil ingredients in stone pot',
			RecipeId:1
		},
		{
			steps: 'Cook then enjoy',
			RecipeId:1
		},

		{
			steps: 'open can and place pasta in a microwave safe bowl',
			RecipeId:2
		},
		{
			steps: 'peel string cheese and place evenly distributed over pasta',
			RecipeId:2
		},
		{
			steps: 'Place bowl in Microwave for 2-3 mins or until pasta is hot and cheese is melted',
			RecipeId:2
		},
		{
			steps: 'drizzle Sriracha on top to taste',
			RecipeId:2
		},
		{
			steps: 'Enjoy',
			RecipeId:2
		},
		{
			steps: 'Preheat oven to 300° F',
			RecipeId:4
		},
		{
			steps: 'Bake quinces whole, with skin on, in a baking dish for approximately 2 hours until soft when pierced with a fork',
			RecipeId:4
		},
		{
			steps: 'Remove and cool',
			RecipeId: 4
		},
		{
			steps: 'When cool, peel and cut quinces into quarters, removing seeds',
			RecipeId: 4
		},
		{
			steps: 'Weigh the flesh and weigh out an equal amount of white sugar.',
			RecipeId: 4
		},
		{
			steps: 'Puree the flesh in a food processor (you may need to add a small amount of water to puree as it could be quite thick) and then rub puree through a sieve.',
			RecipeId: 4
		},
		{
			steps: 'Put the weighed out sugar, juice of one lemon and the water into a heavy-based saucepan.',
			RecipeId: 4
		},
		{
			steps: 'Bring to boil and stir to dissolve the sugar.',
			RecipeId: 4
		},
		{
			steps: 'Add the quince pulp and cook over a very low heat for two hours, stirring occasionally with a wooden spoon.',
			RecipeId: 4
		},
		{
			steps: 'Towards the end the paste will really thicken up and leave the sides of the saucepan when you are stirring.',
			RecipeId: 4
		},
		{
			steps: 'Pour the hot mixture into warm sterilised jars and screw the lid on tightly. Keep in a cool place. Once opened, keep in the refrigerator.',
			RecipeId: 4
		},
		{
			steps: 'Butter the bread slices liberally',
			RecipeId: 5
		},
		{
			steps: 'Sprinkle with Hundred and Thousands',
			RecipeId: 5
		},
		{
			steps: 'Sprinkle even more Hundred and Thousands on top',
			RecipeId: 5
		},
		{
			steps: "In a large casserole, heat the olive oil to medium high heat and brown the lamb shanks on each side. Make sure the pan is very hot before placing the meat in the pan, you should hear a sizzle when the meat touches the pan, if you don't, it means the pan is not warm enough. The meat will be naturally released once browned, don’t be tempted to flip it earlier. If you try to flip too early, you will notice that the meat sticks to the pan and you might damage it . Using tongs will help you to flip the meat on each side",
			RecipeId:6
		},
		{
			steps: "Remove the browned lamb shanks from the pan and set aside. In the same casserole, place the onions and lower the heat to medium. Cover with a lid and leave the onions until they are soft and translucent, about 10 to 15 minutes. This will allow sweating the onions.",
			RecipeId:6
		},
		{
			steps: "Once you’ve sweated the onions, place the lamb shanks, the spices, the garlic, salt and pepper in the casserole. Cover with a lid. Pour a cup and half of water (320 ml) in the casserole and place the coriander bouquet on top of the meat. Bring to the boil and cover with a lid over medium low heat. Leave to simmer gently for 2 hours or until the meat is soft and separates easily from the bone",
			RecipeId:6
		},
			{
			steps: "Halfway through cooking, after about 1 hour, reserve ½ cup of liquid from the casserole and set aside. At this stage, if it looks like there is almost no liquid left in the tagine, add a few tablespoons (or 1/4 a cup) of water in the casserole to avoid the tagine from drying out and sticking to the pan.",
			RecipeId:6
		},
			{
			steps: "Meanwhile, prepare the caramelized prunes. Transfer the prunes in boiling water for 5 minutes to soften them and drain. Then, in a small deep skillet, transfer the liquids you reserved earlier (½ cup) along with the drained prunes, cinnamon and honey over medium low heat. Leave to simmer for 5 minutes until the sauce starts to thicken. Set aside until ready to serve.",
			RecipeId:6
		},
		{
			steps: "To serve, place the lamb shank and the onion sauce in a plate, arrange the prunes and the syrup (from the prunes) on top Garnish with toasted sesame seeds or chopped roasted almonds. Enjoy with a side of couscous or crusty bread.",
			RecipeId:6
		},
		{
			steps: 'Fry all meats',
			RecipeId:7
		},
		{
			steps: 'Prepare eggs sunny-side up',
			RecipeId:7
		},
		{
			steps: 'Cook then enjoy',
			RecipeId:7
		},
		{
			steps: 'Season shrimp',
			RecipeId:8
		},
		{
			steps: 'Grill',
			RecipeId:8
		},
		{
			steps: 'Enjoy',
			RecipeId:8
		},
		{
			steps: 'Chop peppers, green onions, and celery (reserve tops).',
			RecipeId:9
		},
		{
			steps: 'Peel and chop onions (reserve skin).',
			RecipeId:9
		},
		{
			steps: 'Peel shrimp shells (reserve shells).',
			RecipeId:9
		},
		{
			steps: 'combine veg tops, onion skins, and shrimp shells in a stock pot. Cover with water and boil for 10 minutes.',
			RecipeId:9
		},
		{
			steps: 'Strain and reserve shrimp stock.',
			RecipeId:9
		},
		{
			steps: 'Fry okra in very hot oil until lightly browned. Remove from oil and set aside.',
			RecipeId:9
		},
		{
			steps: 'Make a dark roux with the flour and oil, cooking to the color of milk chocolate brown.',
			RecipeId:9
		},
		{
			steps: 'Add onions, stirring together until the roux darkens to a bittersweet chocolate brown.',
			RecipeId:9
		},
		{
			steps: 'Add celery and bellpepper. Saute for five minutes.',
			RecipeId:9
		},
		{
			steps: 'Add the gumbo crabs, tomatoes okra, herbs, and the shrimp stock. ',
			RecipeId:9
		},
		{
			steps: 'Add garlic and salt and pepper to taste. ',
			RecipeId:9
		},
		{
			steps: 'Simmer 45 minutes or longer.',
			RecipeId:9
		},
		{
			steps: '10 minutes before serving add shrimp and green onions.',
			RecipeId:9
		},
		{
			steps: 'Serve on top of cooked rice.',
			RecipeId:9
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
		},
		{
			LocationId:5,
			ExperienceId:4
		},
		{
			LocationId:5,
			ExperienceId:5
		},
		{
			LocationId:4,
			ExperienceId:6
		},
		{
			LocationId:6,
			ExperienceId:7
		},
		{
			LocationId:5,
			ExperienceId:8
		},
		{
			LocationId:1,
			ExperienceId:9
		}
		])
	})
};


module.exports = seedFunction
