import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://facebook.com/olivehomellc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/olivehomellc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://pinterest.com/olivehomeco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
          <p>
            &copy; 2025 Olive Home Co. All rights reserved. | Eagle Mountain,
            Utah | 801-900-3329
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
