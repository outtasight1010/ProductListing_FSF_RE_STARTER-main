import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            {/* Add other social media links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
