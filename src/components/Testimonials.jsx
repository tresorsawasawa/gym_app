import React, { useState } from 'react';
import testimonialsData from '../data/testimonialsData';
import leftArrow from '../assets/images/leftArrow.png';
import rightArrow from '../assets/images/rightArrow.png';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tDataLength = testimonialsData.length;

  const handleLeftArrow = () => {
    if (selected === 0) {
      setSelected(tDataLength - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };

  const handleRightArrow = () => {
    if (selected === (tDataLength - 1)) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };

  return (
    <section className="testimonials">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <p>{testimonialsData[selected].review}</p>
        <div className="name-status">
          <span className="name">{testimonialsData[selected].name}</span>
          {' - '}
          <span className="status">{testimonialsData[selected].status}</span>
        </div>
      </div>

      <div className="right-t">
        <div className="border" />
        <div className="background" />
        <img
          src={testimonialsData[selected].image}
          className="reviewer_image"
          alt="reviewer_image"
        />
        <div className="arrows">
          <img
            aria-hidden="true"
            src={leftArrow}
            className="arrow"
            alt="leftArrow"
            onClick={() => handleLeftArrow()}
          />
          <img
            aria-hidden="true"
            src={rightArrow}
            className="arrow"
            alt="rightArrow"
            onClick={() => handleRightArrow()}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
