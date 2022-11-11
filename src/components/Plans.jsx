/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import PlansData from '../data/plansData';
import WhiteTick from '../assets/images/whiteTick.png';

const Plans = () => (
  <section className="plans">
    <div className="plans-header-container">
      <h2 className="heading">
        <span className="stroke-text">READY TO START </span>
        <span> YOUR JOURNEY </span>
        <span className="stroke-text">WITH US</span>
      </h2>
    </div>

    <ul className="plans-content">
      {PlansData.map((plan) => (
        <li key={plan.id} className="plan">
          {plan.icon}
          <h3>{plan.name}</h3>
          <span>
            $
            {plan.price}
          </span>

          <div className="features">
            {plan.features.map((feature, i) => (
              <div key={i} className="feature-item">
                <img src={WhiteTick} alt="WhiteTick" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="see-more">
            <span>See More Benefits </span>
            <span>
              <BsArrowRight />
            </span>
          </div>

          <button type="button" className="btn">Join Now</button>
        </li>
      ))}
    </ul>
  </section>
);

export default Plans;
