const mongoose = require('mongoose');

// Define the schema for the TodoList
const todoListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'General'  // Default category if not provided
    },
    due_date: {
        type: Date
    }
}, {
    timestamps: true  // Automatically manage createdAt and updatedAt fields
});

// Create and export the model
const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
