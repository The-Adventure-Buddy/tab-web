import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <img src={logo} alt="The Adventure Buddy Logo" className="footer-logo" />
          </div>
          <div className="footer-section explore">
            <h4>Explore</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Activities</li>
              <li>Register</li>
              <li>Safety</li>
              <li>Gallery</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-section head-office">
            <h4>Head Office</h4>
            <p>RISE Incubation Center, Nagar Nigam Parisar, Elite Chauraha, Civil Lines, Jhansi, Uttar Pradesh - 284001</p>
            <h4>Connect With Us</h4>
            <p>9351891313, 8572575655</p>
            <p>contact@theadventurebuddy.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 The Adventure Buddy. All Rights Reserved.
        </div>
      </footer>
  );
};

export default Footer;
