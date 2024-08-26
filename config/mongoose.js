const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todolist_db', {
  useNewUrlParser: true,  // Use the new URL parser
  useUnifiedTopology: true // Use the new Server Discover and Monitoring engine
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('Error connecting to MongoDB:', err));

const db = mongoose.connection;

// Error handling
db.on('error', console.error.bind(console, 'Connection error:'));

// Success handling
db.once('open', () => {
  console.log("Connection established to the database!");
});
