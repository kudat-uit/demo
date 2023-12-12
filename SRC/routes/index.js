const express = require('express');
const authRouter = require('./auth');
const siteRouter = require('./site'); // Change from 'sitesRouter' to 'siteRouter'

function route(app) {
  app.use('/auth', authRouter);
  app.use('/', siteRouter); // Change from 'sitesRouter' to 'siteRouter'
}

module.exports = route;
