const db = require('../config/dbConfig');

async function createBooking(seatIds, name, phoneNumber) {
  const query = 'INSERT INTO bookings (seat_id, name, phone_number) VALUES ($1, $2, $3) RETURNING *';
  const values = seatIds.map((seatId) => [seatId, name, phoneNumber]);

  const result = await Promise.all(
    values.map((params) => db.query(query, params))
  );

  return result.map((res) => res.rows[0]);
}

async function getUserBookings(userIdentifier) {
  const query = `
    SELECT
      b.*,
      s.class
    FROM
      bookings b
      JOIN seats s ON b.seat_id = s.id
    WHERE
      b.phone_number = $1 OR b.email = $1;
  `;

  const result = await db.query(query, [userIdentifier]);
  return result.rows;
}

module.exports = {
  createBooking,
  getUserBookings,
};
