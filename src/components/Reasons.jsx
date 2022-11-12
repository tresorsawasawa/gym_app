import React from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import tick from '../assets/images/tick.png';
import nb from '../assets/images/nb.png';
import adidas from '../assets/images/adidas.png';
import nike from '../assets/images/nike.png';

const Reasons = () => (
  <section id="reasons" className="reasons">
    <div className="left-reasons">
      <img src={image1} alt="image1" />
      <img src={image2} alt="image2" />
      <img src={image3} alt="image3" />
      <img src={image4} alt="image4" />
    </div>

    <div className="right-reasons">
      <h3 className="heading">Some Reasons</h3>
      <div className="text_container">
        <span className="stroke-text">Why</span>
        <span>choose us?</span>
      </div>

      <ul className="details-right">
        <li className="detail-item">
          <img src={tick} alt="" />
          <span>OVER 140+ EXPERT COACHES</span>
        </li>

        <li className="detail-item">
          <img src={tick} alt="" />
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </li>

        <li className="detail-item">
          <img src={tick} alt="" />
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </li>

        <li className="detail-item">
          <img src={tick} alt="" />
          <span>RELIABLE PARTNER</span>
        </li>
      </ul>

      <div className="our-partners-container">
        <h3 className="our-partners-title">OUR PARTNERS</h3>
        <ul className="partners-list">
          <li><img src={nb} alt="nb_logo" /></li>
          <li><img src={adidas} alt="adidas_logo" /></li>
          <li><img src={nike} alt="nike_logo" /></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Reasons;
