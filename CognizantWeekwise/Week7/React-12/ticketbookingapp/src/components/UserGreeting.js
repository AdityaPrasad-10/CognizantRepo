import React from 'react';

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <p>You can now book your tickets below.</p>
      {/* Example booking section */}
      <div>
        <h3>Flight Booking</h3>
        <p>Flight: Mumbai → Delhi</p>
        <p>Price: ₹4500</p>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default UserGreeting;
