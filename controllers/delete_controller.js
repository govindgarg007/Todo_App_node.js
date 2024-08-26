const TodoList = require('../models/todo_model');

module.exports = async function(req, res) {
    const toBeDeleted = req.body.checked; // Can be undefined, string, or array

    try {
        if (typeof toBeDeleted === 'string') {
            // Single ID deletion
            await TodoList.findByIdAndDelete(toBeDeleted);
        } else if (Array.isArray(toBeDeleted)) {
            // Batch deletion
            await TodoList.deleteMany({ _id: { $in: toBeDeleted } });
        } else if (toBeDeleted === undefined) {
            // Handle case where nothing is checked
            console.log("No tasks selected for deletion.");
        }
        // Redirect after deletion
        res.redirect('back');
    } catch (err) {
        console.log("Error deleting tasks:", err);
        res.status(500).send("Internal Server Error");
    }
};
