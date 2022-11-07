import React from 'react';
import programsData from '../data/programsData';
import RightArrow from '../assets/images/rightArrow.png';

const Programs = () => (
  <section id="Programs" className="Programs">
    <h2 className="Programs-header">
      <span className="stroke-text">Explore Our</span>
      {' '}
      <span>Programs</span>
      {' '}
      <span className="stroke-text">to shape you</span>
    </h2>

    <ul className="programs-categories">
      {programsData.map((program) => (
        <li key={program.id} className="category">
          <div className="card">
            {program.image}
            <h3>{program.heading}</h3>
            <p>{program.details}</p>
            <button type="button" className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Programs;
