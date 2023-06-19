const seatModel = require('../models/seatsModel');
const validationUtils = require('../utils/validation');

async function getAllSeats() {
  return seatModel.getAllSeats();
}

async function getSeatPricing(seatId) {
  const pricing = await seatModel.getSeatPricing(seatId);
  return { pricing };
}

async function createBooking(seatIds, name, phoneNumber) {
  if (!validationUtils.validateSeatBookingInput(seatIds)) {
    throw new Error('Invalid seat booking input');
  }

  const booking = await seatModel.createBooking(seatIds, name, phoneNumber);
  return { booking };
}

async function getUserBookings(userIdentifier) {
  const bookings = await seatModel.getUserBookings(userIdentifier);
  return { bookings };
}

module.exports = {
  getAllSeats,
  getSeatPricing,
  createBooking,
  getUserBookings,
};
