const express = require('express');
const seatController = require('../controllers/seatsController');

const router = express.Router();

router.get('/', seatController.getAllSeats);
router.get('/id', seatController.getSeatPricing);

module.exports = router;
