import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/images/logo.png';
import Hamburger from '../assets/images/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 992;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  const style = {
    width: '1.5rem',
    height: '1.5rem',
  };

  return (
    <header className="header">
      <Link to="hero" span smooth>
        <img src={Logo} className="logo" alt="logo" />
      </Link>

      <nav className="navbar">
        {menuOpen === false && mobile === true ? (
          <div
            aria-hidden="true"
            className="hamburger-container"
            onClick={() => handleMenu()}
          >
            <img src={Hamburger} alt="Hamburger" style={style} />
          </div>
        ) : (
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="hero" activeClass="active" span smooth onClick={() => handleCloseMenu()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="programs" span smooth onClick={() => handleCloseMenu()}>
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="reasons" span smooth onClick={() => handleCloseMenu()}>
                Why us?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="plans" span smooth onClick={() => handleCloseMenu()}>
                Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                span
                smooth
                onClick={() => handleCloseMenu()}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Header;
