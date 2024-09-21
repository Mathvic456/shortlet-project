import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import HotelList from './components/hotelList';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HotelList />
      <Footer />
    </div>
  );
}

export default App;
