function validateSeatBookingInput(input) {
    if (!Array.isArray(input) || input.length === 0) {
      return false;
    }
  
    for (const seatId of input) {
      if (typeof seatId !== 'number' || seatId < 1) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = {
    validateSeatBookingInput,
  };
  