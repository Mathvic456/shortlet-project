import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Icon for Mobile */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </div>

      {/* Logo (Centered) */}
      <div className="navbar-logo">
        <a href="/">Shortlets.ng</a>
      </div>

      {/* Navigation Links */}
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Deals</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>

      {/* Search Bar (Only on Desktop) */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for hotels..." />
      </div>
    </nav>
  );
};

export default Navbar;
