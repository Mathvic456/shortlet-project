import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <>
    <div className="hero-section">
      <h1>Book Shortlets across Rivers State</h1>
      <div className="search-bar">
        <input type="text" placeholder="Where are you going?" />
        <button>Search</button>
      </div>
    </div>
    </>
  );
};

export default Hero;
