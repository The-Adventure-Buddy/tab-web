import React from 'react';
import './About.css'; // Make sure to create and style this CSS file
import Footer from '../components/Footer/Footer'

const About = () => {
  return (
    <>
    
    <div className="about-container">
      <div className="about-background">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            The Adventure Buddy breaks barriers by making thrilling outdoor experiences accessible to all in Bundelkhand. 
            As the premier provider of affordable school camps, trekking expeditions, and community trips, we're revolutionizing 
            local adventure. By bringing excitement to your doorstep, we ignite the adventurous spirit in students and youth. 
            Our mission is to cultivate a generation of adventure enthusiasts and foster successful sports personalities within 
            our community.
          </p>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default About;
