import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';

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
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Condition</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/safety">Safety</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section head-office">
            <h4>Head Office</h4>
            <address>
              RISE Incubation Center, Nagar Nigam Parisar, Elite Chauraha, Civil Lines, Jhansi, Uttar Pradesh - 284001
            </address>
            <h4>Connect With Us</h4>
            <p><a href="tel:9351891313">9351891313</a>, <a href="tel:8572575655">8572575655</a></p>
            <p><a href="mailto:contact@theadventurebuddy.in">contact@theadventurebuddy.in</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 The Adventure Buddy. All Rights Reserved.
        </div>
      </footer>
  );
};

export default Footer;
