const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/authController');

// GET /login
router.get('/login', authController.loginForm);

// POST /login
router.post('/login', authController.login);

// GET /register
router.get('/register', authController.registerForm);

// POST /register
router.post('/register', authController.register);

// GET /logout
router.get('/logout', authController.logout);

module.exports = router;
