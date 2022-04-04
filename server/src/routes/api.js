const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

//create router that captures v1 of api
const api = express.Router();

api.use('/planets',planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;