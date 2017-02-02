process.env.NODE_ENV = 'test';

//IMPORTS
let models = require('../backend/server/models')
let Recipes = models.Recipes;

//DEV DEPENDENCIES
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../backend/server/server.js');
let should = chai.should();

//SEEDS
let recipes = require('..backend/server/seeds/recipes-seed.js')
let seedFunction = require('../backend/server/seeds')


//TESTS