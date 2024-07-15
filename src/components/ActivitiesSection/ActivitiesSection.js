// src/ActivitiesSection.js
import React from 'react';
import './ActivitiesSection.css';
import schoolcamp from '../../assets/schoolcamp.png'
import outdoorcamp from '../../assets/outdoorcamp.png'
import AdventureActivitiescamp from '../../assets/AdventureActivitiescamp.png'
import bg from '../../assets/hello.png'

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
        <div className="activity-card">
          <img src={schoolcamp} alt="School Camp" />
          <p>School Camp</p>
        </div>
        <div className="activity-card">
          <img src={outdoorcamp} alt="Outdoor Camp" />
          <p>Outdoor Camp</p>
        </div>
        <div className="activity-card">
          <img src={AdventureActivitiescamp} alt="Adventure Activities" />
          <p>Adventure Activities</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
