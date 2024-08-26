const TodoList = require('../models/todo_model'); // Import the database model

module.exports = async function(req, res) {
    try {
        // Create a new task
        const newTask = await TodoList.create({
            description: req.body.description,
            category: req.body.category,
            due_date: req.body.due_date
        });
        
        // Redirect back after successful creation
        res.redirect('back');
    } catch (err) {
        // Log the error and send an appropriate response
        console.error("Error creating task:", err);
        res.status(500).send("Internal Server Error");
    }
};
