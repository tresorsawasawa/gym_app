import React from 'react';
import Logo from '../assets/images/logo.png';

const Header = () => (
  <header className="header">
    <img src={Logo} className="logo" alt="logo" />

    <ul className="nav-list">
      <li className="nav-item">Home</li>
      <li className="nav-item">Programs</li>
      <li className="nav-item">Why us?</li>
      <li className="nav-item">Plans</li>
      <li className="nav-item">Testimonials</li>
    </ul>
  </header>
);

export default Header;
