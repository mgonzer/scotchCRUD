const environment = 'development';
const config = require('../knexfile');
const environmentConig  = config[environment];
const knex = require('knex');
const connection = knex(environmentConig);


module.exports = connection;
