# Seat Booking API

### Create bookings table 
```
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  seat_id INTEGER[],
  name VARCHAR(255)[],
  phone_number VARCHAR(255)[]
);

```