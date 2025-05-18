const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get the dashboard
router.get('/dashboard', authMiddleware.isAuthenticated, dashboardController.getDashboard);

// Route to log out the user
router.post('/logout', authMiddleware.isAuthenticated, dashboardController.logout);

module.exports = router;