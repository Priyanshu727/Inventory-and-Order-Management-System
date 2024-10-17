const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const { protect, isAdmin } = require('../middleware/authMiddleware');


const router = express.Router();

// auth routes
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/logout', logout);

module.exports = router;