// Import express
const express = require('express');
// Create an express application
const app = express();
// Initialize port
const port = 8080;

// Import Database
// Ensure this file sets up Mongoose correctly

const db = require('./config/mongoose'); 

// Import the TodoList model
const TodoList = require('./models/todo_model');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files from the 'assets' directory
app.use(express.static('assets'));


// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error("Error running the server:", err);
        return;
    }
    console.log(`Server running successfully on port: ${port}`);
});
