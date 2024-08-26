const TodoList = require('../models/todo_model');

module.exports = async function(req, res) {
    try {
        // Retrieve all tasks from the database
        const tasks = await TodoList.find({});
        
        // Render the tasks on the 'home' page
        res.render('home', {
            tasks_list: tasks
        });
    } catch (err) {
        // Log the error and send a response if something goes wrong
        console.error("Error retrieving tasks from the database:", err);
        res.status(500).send("Internal Server Error");
    }
};
