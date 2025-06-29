import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@travelfinder.com</p>
          <p>Phone: +(254) 795-186-545 </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Travel Destination Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
