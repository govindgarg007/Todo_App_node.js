const express = require('express');
const router = express.Router();

// Import the controller function
const deleteController = require('../controllers/delete_controller');

// Route to handle POST requests for deleting tasks
router.post('/', deleteController);

module.exports = router;
