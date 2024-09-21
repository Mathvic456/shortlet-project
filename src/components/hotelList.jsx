import React from 'react';
import './hotelList.css';

const hotels = [
  { name: "Shortlet A", location: "Lagos", price: "₦110,000", img: "https://via.placeholder.com/200" },
  { name: "Shortlet B", location: "Abuja", price: "₦150,000", img: "https://via.placeholder.com/200" },
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
