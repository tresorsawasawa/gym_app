import React from 'react';
import Header from './Header';
import HeroImage from '../assets/images/hero_image.png';
import HeroImageBack from '../assets/images/hero_image_back.png';
import Heart from '../assets/images/heart.png';
import Calories from '../assets/images/calories.png';

const Hero = () => (
  <div className="hero-container">
    <div className="left-hero">
      <Header />

      <div className="the-best-ad">
        <div className="background" />
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
            In here we will help you to shape and build your ideal body and live
            up your life to fullest.
          </p>
        </div>
      </div>

      <div className="figures">
        <div className="block-fig fig-1">
          <span>+140</span>
          <span>expert coaches</span>
        </div>

        <div className="block-fig fig-2">
          <span>+978</span>
          <span>members joined</span>
        </div>

        <div className="block-fig fig-3">
          <span>+50</span>
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
      <button type="button" className="btn">Join Now</button>

      <div className="heart-rate">
        <img src={Heart} className="love_img" alt="Heart pic" />

        <span>Heart Rate</span>
        <span>116 bpm</span>
      </div>

      <img src={HeroImage} className="hero_image" alt="Hero_image" />
      <img src={HeroImageBack} className="hero_image_back" alt="Hero_image_back" />

      <div className="calories">
        <img src={Calories} className="calories_img" alt="calories_img" />
        <div className="calories_text">
          <span className="ssa">Calories Burned</span>
          <span>220kcal</span>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;