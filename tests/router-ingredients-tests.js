process.env.NODE_ENV = 'test';

//IMPORTS
let models = require('../backend/server/models')
let Ingredients = models.Ingredients;

//DEV DEPENDENCIES
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../backend/server/server.js');
let should = chai.should();

//SEEDS
let ingredients = require('..backend/server/seeds/ingredients-seed.js')
let seedFunction = require('../backend/server/seeds')


//TESTS