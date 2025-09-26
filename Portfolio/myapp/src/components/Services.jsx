import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-title-section">
            <div className="cartoon-head">
              <div className="head">
                <div className="eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="nose"></div>
                <div className="mouth"></div>
              </div>
              <div className="hair"></div>
            </div>
            <h2 className="services-title">My Best Services</h2>
          </div>
        </div>
        
        {/* Service Cards */}
        <div className="services-cards">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="service-card-title">Interface Design</h3>
            <p className="service-card-description">
              Creating visually beautiful and intuitive (UI) that improve the (UX) across several digital platforms
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <rect x="7" y="7" width="10" height="10"/>
                <path d="M7 17h10"/>
                <path d="M7 7h10"/>
              </svg>
            </div>
            <h3 className="service-card-title">Wireframing</h3>
            <p className="service-card-description">
              Design wireframes and prototypes to refine digital product structure and flow before development.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                <path d="M20.2 3.8l-4.2 4.2m-6 6l-4.2 4.2"/>
                <path d="M3.8 20.2l4.2-4.2m6-6l4.2-4.2"/>
              </svg>
            </div>
            <h3 className="service-card-title">Usability Testing</h3>
            <p className="service-card-description">
              Observing real-world users engage with prototypes or finished items to assess design success.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                <path d="M20.2 3.8l-4.2 4.2m-6 6l-4.2 4.2"/>
                <path d="M3.8 20.2l4.2-4.2m6-6l4.2-4.2"/>
              </svg>
            </div>
            <h3 className="service-card-title">Visual Design</h3>
            <p className="service-card-description">
              Applying graphic design principles for visually appealing interfaces: color, typography, iconography.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
