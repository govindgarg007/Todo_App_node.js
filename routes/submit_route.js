const express = require('express');
const router = express.Router();

// Route to handle POST requests to '/submit-task'
router.post('/', require('../controllers/submit_controller'));

module.exports = router;
