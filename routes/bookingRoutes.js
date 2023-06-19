const express = require('express');
const seatController = require('../controllers/bookingController');

const router = express.Router();

router.post('/booking', seatController.createBooking);
router.get('/bookings', seatController.getUserBookings);

module.exports = router;
