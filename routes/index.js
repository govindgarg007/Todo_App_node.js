const express = require('express');
const router = express.Router();

// Route to handle GET requests to the root path ('/')
router.get('/', require('../controllers/home_controller'));

// Route to handle requests to '/submit-task' by delegating to 'submit_route'
router.use('/submit-task', require('./submit_route'));

// Route to handle requests to '/delete-task' by delegating to 'delete_route'
router.use('/delete-task', require('./delete_route'));

module.exports = router;
