import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import NumberCounter from 'number-counter';
import Header from './Header';
import HeroImage from '../assets/images/hero_image.png';
import HeroImageBack from '../assets/images/hero_image_back.png';
import Heart from '../assets/images/heart.png';
import Calories from '../assets/images/calories.png';

const Hero = () => {
  const transition = {
    type: 'spring',
    duration: 3,
  };

  const mobile = window.innerWidth <= 992;

  return (
    <section id="hero" className="hero-container">
      <div className="bur hero-blur" />
      <div className="left-hero">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
            className="background"
          />
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div className="text">
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div className="text-description">
            <p>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest.
            </p>
          </div>
        </div>

        <div className="figures">
          <div className="block-fig fig-1">
            <span>
              <NumberCounter start={100} end={140} preFix="+" delay="4" />
            </span>
            <span>expert coaches</span>
          </div>

          <div className="block-fig fig-2">
            <span>
              <NumberCounter start={900} end={978} preFix="+" delay="4" />
            </span>
            <span>members joined</span>
          </div>

          <div className="block-fig fig-3">
            <span>
              <NumberCounter start={10} end={50} preFix="+" delay="4" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button type="button" className="btn">
            Get Started
          </button>
          <button type="button" className="btn">
            Learn More
          </button>
        </div>
      </div>
      <div className="right-hero">
        <button type="button" className="btn">
          <Link to="join-us" span smooth>
            Join Now
          </Link>
        </button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ left: '3rem' }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} className="love_img" alt="Heart pic" />

          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={HeroImage} className="hero_image" alt="Hero_image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={HeroImageBack}
          className="hero_image_back"
          alt="Hero_image_back"
        />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '25rem' }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} className="calories_img" alt="calories_img" />
          <div className="calories_text">
            <span className="ssa">Calories Burned</span>
            <span>220kcal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
