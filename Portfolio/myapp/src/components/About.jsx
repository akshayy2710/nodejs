import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left side - Text content */}
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          
          <div className="about-text">
            <p>
              <span className="highlight">Designer</span>, Photographer & Developer with{' '}
              <span className="highlight">12+ Years</span> of Experience From USA. Worked with Apple,{' '}
              <span className="highlight">Google</span>, Nike and Spotify Winner of 34+
            </p>
          </div>
          
          {/* Icons on the left */}
          <div className="about-icons">
            <div className="icon-circle blue">
              <span className="icon">🎧</span>
            </div>
            <div className="icon-circle green">
              <span className="icon">🛒</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Skill circles */}
        <div className="about-right">
          <div className="skills-circles">
            <div className="skill-circle design-systems">
              <span>Design Systems</span>
            </div>
            <div className="skill-circle interaction-design">
              <span>Interaction Design</span>
            </div>
            <div className="skill-circle ux-ui-design">
              <span>UX/UI Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
