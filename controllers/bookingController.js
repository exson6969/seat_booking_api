const seatService = require('../services/seatService');

async function createBooking(req, res) {
  const { seatIds, name, phoneNumber } = req.body;

  try {
    const booking = await seatService.createBooking(seatIds, name, phoneNumber);
    res.json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUserBookings(req, res) {
  const userIdentifier = req.query.userIdentifier;

  if (!userIdentifier) {
    res.status(400).json({ error: 'User identifier not provided' });
    return;
  }

  try {
    const bookings = await seatService.getUserBookings(userIdentifier);
    res.json(bookings);
  } catch (error) {
    console.error('Error retrieving user bookings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createBooking,
  getUserBookings,
};
