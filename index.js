const express = require('express');

// Initialize Express.js app
const app = express();

// Middleware for JSON request body parsing
app.use(express.json());

// Routes

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
