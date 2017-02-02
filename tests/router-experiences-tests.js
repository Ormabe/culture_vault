process.env.NODE_ENV = 'test';

//IMPORTS
let models = require('../backend/server/models')
let Experiences = models.Experiences;

//DEV DEPENDENCIES
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../backend/server/server.js');
let should = chai.should();

//SEEDS
let experiences = require('..backend/server/seeds/experiences-seed.js')
let seedFunction = require('../backend/server/seeds')


//TESTS