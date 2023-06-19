const seatService = require('../services/seatService');

async function getAllSeats(req, res) {
  try {
    const seats = await seatService.getAllSeats();
    res.json(seats);
  } catch (error) {
    console.error('Error retrieving seats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getSeatPricing(req, res) {
  const seatId = req.params.id;

  try {
    const pricing = await seatService.getSeatPricing(seatId);
    res.json(pricing);
  } catch (error) {
    console.error('Error retrieving seat pricing:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllSeats,
  getSeatPricing,
};
