const express = require('express');
const siteController = require('../app/controllers/SiteController');

const router = express.Router();

// Define your site-specific routes here
router.get('/', siteController.home);

module.exports = router;
