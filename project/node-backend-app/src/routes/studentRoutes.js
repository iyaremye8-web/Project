const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new student
router.post('/', authMiddleware.isAuthenticated, studentController.createStudent);

// Get all students
router.get('/', authMiddleware.isAuthenticated, studentController.getAllStudents);

// Get a single student by ID
router.get('/:id', authMiddleware.isAuthenticated, studentController.getStudentById);

// Update a student by ID
router.put('/:id', authMiddleware.isAuthenticated, studentController.updateStudent);

// Delete a student by ID
router.delete('/:id', authMiddleware.isAuthenticated, studentController.deleteStudent);

module.exports = router;