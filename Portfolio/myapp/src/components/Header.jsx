import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Logo */}
        <div className="logo">
          <h2>Candid.CV</h2>
        </div>
        
        {/* Navigation */}
        <nav className="nav">
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        
        {/* Right side items */}
        <div className="header-right">
          {/* Language Selector */}
          <div className="language-selector">
            <span>En</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          {/* Phone Number */}
          <div className="phone">
            +1 (123) 456-78-90
          </div>
          
          {/* Hire Me Button */}
          <button className="hire-me-btn">Hire Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
