import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Side - Navigation Links */}
          <div className="footer-left">
            <nav className="footer-nav">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#services" className="footer-link">Service</a>
              <a href="#portfolio" className="footer-link">Portfolio</a>
              <a href="#contact" className="footer-link">Let's Talk</a>
            </nav>
          </div>
          
          {/* Right Side - Social Media */}
          <div className="footer-right">
            <div className="social-section">
              <span className="follow-text">Follow Me:</span>
              <div className="social-icons">
                <a href="#" className="social-icon linkedin">
                  <span className="icon-text">in</span>
                </a>
                <a href="#" className="social-icon twitter">
                  <span className="icon-text">X</span>
                </a>
                <a href="#" className="social-icon dribbble">
                  <span className="icon-text">🌐</span>
                </a>
                <a href="#" className="social-icon facebook">
                  <span className="icon-text">f</span>
                </a>
                <a href="#" className="social-icon behance">
                  <span className="icon-text">Be</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
