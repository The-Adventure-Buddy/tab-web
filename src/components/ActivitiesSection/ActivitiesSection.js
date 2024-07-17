// src/ActivitiesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesSection.css';
import schoolcamp from '../../assets/schoolcamp.png';
import outdoorcamp from '../../assets/outdoorcamp.png';
import AdventureActivitiescamp from '../../assets/AdventureActivitiescamp.png';
import bg from '../../assets/hello.png';

const ActivitiesSection = () => {
  return (
      <div className="activities-section">
        <div className="hero">
          <img src={bg} alt="Hero" className="hero-image" />
          <div className="hero-content">
            <h2>What We Offering?</h2>
            <h1>Our Activities</h1>
          </div>
        </div>
        <div className="activities">
          <Link to="/school-camp" className="activity-card">
            <img src={schoolcamp} alt="School Camp" />
            {/*<p>School Camp</p>*/}
          </Link>
          <Link to="/outdoor-camp" className="activity-card">
            <img src={outdoorcamp} alt="Outdoor Camp" />
            {/*<p>Outdoor Camp</p>*/}
          </Link>
          <Link to="/adventure-activities" className="activity-card">
            <img src={AdventureActivitiescamp} alt="Adventure Activities" />
            {/*<p>Adventure Activities</p>*/}
          </Link>
        </div>
      </div>
  );
};

export default ActivitiesSection;
