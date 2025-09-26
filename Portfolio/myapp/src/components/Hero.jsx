import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left side - Text content */}
        <div className="hero-left">
          <div className="greeting">
            <span className="wave">👋</span>
            <span>Hello i am</span>
          </div>
          
          <h1 className="name">DANIEL BENNETT</h1>
          
          <div className="title">
            <span className="headphone-icon">🎧</span>
            <span>UX Designer and Startup Entrepreneur</span>
          </div>
          
          <button className="download-cv-btn">
            <span className="cart-icon">🛒</span>
            <span>Download CV</span>
            <span className="download-arrow">↓</span>
          </button>
        </div>
        
        {/* Right side - Profile Image */}
        <div className="hero-right">
          <div className="profile-image">
            <img src="/images/person.svg" alt="Daniel Bennett" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
