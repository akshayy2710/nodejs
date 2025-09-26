import React from 'react';

const Testimonials = () => {
  const certifications = [
    {
      year: "2023",
      status: "Nominee",
      icon: "🌐",
      awardName: "Interface Design Awards",
      awardDetail: "Red Dot Award"
    },
    {
      year: "2024", 
      status: "Nominee",
      icon: "W",
      awardName: "Interface Design Awards",
      awardDetail: "Red Dot Award"
    },
    {
      year: "2025",
      status: "Nominee", 
      icon: "X",
      awardName: "Interface Design Awards",
      awardDetail: "Red Dot Award"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Certified in what I love</h2>
        
        <div className="certifications-cards">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="card-header">
                <span className="year-status">{cert.year} • {cert.status}</span>
              </div>
              
              <div className="cert-icon">
                <div className="icon-background">
                  <span className="icon">{cert.icon}</span>
                </div>
              </div>
              
              <div className="cert-details">
                <h3 className="award-name">{cert.awardName}</h3>
                <p className="award-detail">{cert.awardDetail}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-footer">
          <h3 className="footer-title">Awards & Recognitions</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
