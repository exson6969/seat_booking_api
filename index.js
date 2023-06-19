const express = require('express');
const seatsRoutes = require('./routes/seatsRoutes');
const bookingRoutes = require('./routes/bookingRoutes')

// Initialize Express.js app
const app = express();

// Middleware for JSON request body parsing
app.use(express.json());

// Routes
app.use('/seats',seatsRoutes)
app.use('/booking',bookingRoutes)

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
