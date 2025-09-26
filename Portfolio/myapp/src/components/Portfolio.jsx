import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">My Latest Works</h2>
        
        <div className="portfolio-works">
          {/* Left Mockup */}
          <div className="work-mockup left-mockup">
            <div className="mockup-surface cream-surface">
              <div className="laptop-mockup">
                <div className="laptop-screen">
                  <div className="screen-content">
                    <div className="nav-bar">
                      <div className="nav-items">
                        <span className="nav-item">Home</span>
                        <span className="nav-item">About</span>
                        <span className="nav-item">Services</span>
                        <span className="nav-item">Contact</span>
                      </div>
                    </div>
                    <div className="screen-body">
                      <h3 className="screen-title">EXTENDED SCREEN MOCKUP</h3>
                      <p className="screen-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="astronaut-image">
                        <div className="astronaut-glow"></div>
                        <span className="astronaut-emoji">🚀</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="document-mockup">
                <div className="document-content">
                  <h4 className="doc-title">OUR PRO SERVICES</h4>
                  <p className="doc-text">
                    Professional design services for your business needs.
                  </p>
                  <div className="doc-section">
                    <h5 className="doc-subtitle">FEATURING A HIGH RES DISPLAY</h5>
                    <div className="ufo-image">
                      <span className="ufo-emoji">🛸</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Mockup */}
          <div className="work-mockup right-mockup">
            <div className="mockup-surface dark-surface">
              <div className="laptop-pedestal">
                <div className="laptop-mockup dark-laptop">
                  <div className="laptop-screen green-screen">
                    <div className="green-content">
                      <div className="green-text">
                        <p>Device Mockup.</p>
                        <p>Mock-Up Template</p>
                        <p>2025 PROTFOLIO</p>
                        <p>Paste Your Design Here</p>
                        <p className="device-text">Device Laptop</p>
                      </div>
                      <div className="hearts">
                        <span className="heart">♥</span>
                        <span className="heart">♥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="background-elements">
          <div className="blue-circle"></div>
          <div className="background-letters">
            <span className="letter">W</span>
            <span className="letter">O</span>
            <span className="letter">R</span>
            <span className="letter">K</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
