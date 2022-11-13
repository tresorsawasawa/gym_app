import React, { useState } from 'react';
import { motion } from 'framer-motion';
import testimonialsData from '../data/testimonialsData';
import leftArrow from '../assets/images/leftArrow.png';
import rightArrow from '../assets/images/rightArrow.png';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tDataLength = testimonialsData.length;

  // Animations variables start
  const transition = {
    type: 'spring',
    duration: 3,
  };

  const initial = {
    opacity: 0,
    x: -100,
  };

  const whileInView = {
    opacity: 1,
    x: 0,
  };

  const initial1 = {
    opacity: 0,
    x: 100,
  };

  const whileInView1 = {
    opacity: 1,
    x: 0,
  };

  const animTestimonialImg = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const reviewAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  // Animations variables end

  const handleLeftArrow = () => {
    if (selected === 0) {
      setSelected(tDataLength - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };

  const handleRightArrow = () => {
    if (selected === tDataLength - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <motion.p
          key={selected}
          initial={reviewAnimation.initial}
          animate={reviewAnimation.animate}
          exit={reviewAnimation.exit}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.p>
        <div className="name-status">
          <span className="name">{testimonialsData[selected].name}</span>
          {' - '}
          <span className="status">{testimonialsData[selected].status}</span>
        </div>
      </div>

      <div className="right-t">
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          className="border"
        />
        <motion.div
          initial={initial1}
          whileInView={whileInView1}
          transition={{ ...transition, duration: 2 }}
          className="background"
        />
        <motion.img
          key={selected}
          initial={animTestimonialImg.initial}
          animate={animTestimonialImg.animate}
          exit={animTestimonialImg.exit}
          transition={transition}
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
