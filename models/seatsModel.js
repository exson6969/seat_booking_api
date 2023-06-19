const db = require('../config/dbConfig');

async function getAllSeats() {
  const sql = 'SELECT * FROM seats ORDER BY seat_class';
  return new Promise((resolve, reject) => {
    db.query(sql, [], (error, results) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(results);
    });
  });
}

async function getSeatPricing(seatId) {
  const query = `
    SELECT
      s.*,
      CASE
        WHEN b.count < 0.4 * s.max_seat_count THEN s.min_price
        WHEN b.count < 0.6 * s.max_seat_count THEN s.normal_price
        ELSE s.max_price
      END AS pricing
    FROM
      seats s
      LEFT JOIN (
        SELECT
          id,
          COUNT(*) AS count
        FROM
          bookings
        GROUP BY
          id
      ) b ON s.id = b.id
    WHERE
      s.id = $1
    LIMIT 1;
  `;

  const result = await db.query(query, [seatId]);

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0].pricing;
}

module.exports = {
  getAllSeats,
  getSeatPricing,
};
