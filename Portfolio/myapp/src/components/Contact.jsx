import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-layout">
          {/* Left Side - Headline and Graphics */}
          <div className="contact-left">
            <div className="contact-content">
              <h2 className="contact-title">Let's work together!</h2>
              
              <div className="contact-graphic">
                <div className="overlapping-circles">
                  <div className="circle-left">
                    <img src="/images/person.svg" alt="Professional" className="profile-image" />
                  </div>
                  <div className="circle-right">
                    <div className="arrow-icon">↗</div>
                    <div className="circle-text">LET'S WORK TOGETHER</div>
                  </div>
                </div>
              </div>
              
              <div className="contact-email">
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>
            
            {/* Side Icons */}
            <div className="side-icons">
              <div className="icon-circle blue">
                <span className="icon">🎧</span>
              </div>
              <div className="icon-circle green">
                <span className="icon">🛒</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Proposal Form */}
          <div className="contact-right">
            <div className="proposal-form">
              <h3 className="form-title">Get a Proposal</h3>
              
              <form className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Company name" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    placeholder="Phone no." 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    placeholder="Tell us about your project" 
                    className="form-textarea"
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <div className="recaptcha">
                    <input type="checkbox" id="recaptcha" />
                    <label htmlFor="recaptcha">
                      <span className="recaptcha-icon">✓</span>
                      I'm not a robot
                    </label>
                    <div className="recaptcha-links">
                      <span>Privacy</span> - <span>Terms</span>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="submit-btn">
                  Request A Consultation
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
