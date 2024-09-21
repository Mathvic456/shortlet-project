import React from 'react';
import './hotelList.css';

const hotels = [
  { name: "Hotel A", location: "Lagos", price: "₦10,000", img: "https://via.placeholder.com/200" },
  { name: "Hotel B", location: "Abuja", price: "₦15,000", img: "https://via.placeholder.com/200" },
  // Add more hotels as needed
];

const HotelList = () => {
  return (
    <>
    <div className="hotel-list">
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel-card">
          <img src={hotel.img} alt={hotel.name} />
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>{hotel.price}</p>
            <button>View Details</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default HotelList;
