import React from 'react';
import GitHub from '../assets/images/github.png';
import Instagram from '../assets/images/instagram.png';
import Linkedin from '../assets/images/linkedin.png';
import Logo from '../assets/images/logo.png';

const Footer = () => (
  <footer id="footer" className="footer">
    <hr className="horizontal" />
    <div className="row">
      <div className="logo_footer">
        <a href="https://github.com">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <ul className="footer_icons">
        <li className="icon-item">
          <a href="https://github.com"><img src={GitHub} alt="GitHub Icon" /></a>
        </li>
        <li className="icon-item">
          <a href="https://www.facebook.com/"><img src={Instagram} alt="Instagram Icon" /></a>
        </li>
        <li className="icon-item">
          <a href="https://www.linkedin.com/feed/"><img src={Linkedin} alt="Linkedin Icon" /></a>
        </li>
      </ul>
    </div>
    <div className="footer-blur-1" />
    <div className="footer-blur-2" />
  </footer>
);

export default Footer;
