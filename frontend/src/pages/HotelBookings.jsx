import React, { useState } from 'react';

const HotelBookings = () => {
  // Placeholder hotel data (replace with actual data from API or state)
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = [
    { id: 1, name: 'Hotel A', location: 'City A', price: 100 },
    { id: 2, name: 'Hotel B', location: 'City B', price: 120 },
    { id: 3, name: 'Hotel C', location: 'City C', price: 150 }
  ];

  // Conversion rate from USD to NPR (Nepalese Rupees)
  const conversionRate = 120.5; // Replace with the current conversion rate

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleBookHotel = () => {
    if (selectedHotel) {
      // Perform booking logic here (e.g., API call, state update)
      console.log(`Booking hotel ${selectedHotel.name}`);
      setSelectedHotel(null); // Reset selected hotel after booking
    }
  };

  return (
    <div>
      <h2>Hotel Bookings</h2>
      <div>
        <h3>Available Hotels:</h3>
        <ul>
          {hotels.map(hotel => (
            <li key={hotel.id} onClick={() => handleSelectHotel(hotel)}>
              <strong>{hotel.name}</strong> - {hotel.location}, Price: NPR {Math.round(hotel.price * conversionRate)}
            </li>
          ))}
        </ul>
      </div>
      {selectedHotel && (
        <div>
          <h3>Selected Hotel:</h3>
          <p>Name: {selectedHotel.name}</p>
          <p>Location: {selectedHotel.location}</p>
          <p>Price: NPR {Math.round(selectedHotel.price * conversionRate)}</p>
          <button onClick={handleBookHotel}>Book Hotel</button>
        </div>
      )}
    </div>
  );
};

export default HotelBookings;
