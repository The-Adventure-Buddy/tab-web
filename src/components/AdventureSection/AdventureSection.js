// src/AdventureSection.js

import React from 'react';
import './AdventureSection.css';

const AdventureSection = () => {
  return (
    <div className="adventure-containers">
      <div className="text-sections">
        <p>Experience</p>
        <h1>The Thrill<br/>Adventure!</h1>
      </div>
      <div className="video-container">
        <iframe
          width="420"
          height="345"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AdventureSection;
