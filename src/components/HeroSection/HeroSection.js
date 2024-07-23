import React from 'react';
import './HeroSection.css';
import adventureImage from '../../assets/Heroimage.png'; // Replace with your actual image path

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div>
                <h1>Welcome To <br /> Adventure <br /> Life!</h1>
                <p>
                    Embark on an Adventure with The Adventure Buddy - Pioneering Affordable and Accessible Outdoor Experiences in Bundelkhand!
                </p>
                <a href="/about" target="_blank" rel="noopener noreferrer">
                    <button className="read-more-btn">Read More</button>
                </a>
            </div>
            <img src={adventureImage} alt="Adventure Life" className="hero-image" />
        </div>
    );
};

export default HeroSection;
