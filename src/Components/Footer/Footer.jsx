import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: contact@devCodeCampRULZ</p>
            <p>Phone: (555) 867-5309</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            {/* Add other social media links */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> by Michelle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

