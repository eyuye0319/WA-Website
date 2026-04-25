const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// We use authController.register to be 100% sure we are hitting the function
router.post('/register', authController.register);

module.exports = router;