import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Revix Inc.",
      date: "Jun 2024 - Present",
      title: "Team Leader Designer",
      description: "Designing digital products for global clients, focusing on usability, clarity, and clean visuals.",
      location: "New York, USA",
      type: "Full-Time",
      position: "top"
    },
    {
      company: "Amazon",
      date: "Jun 2023",
      title: "Senior UX/UI Designer",
      description: "Designing digital products for global clients, focusing on usability, clarity, and clean visuals.",
      location: "New York, USA",
      type: "Full-Time",
      position: "top"
    },
    {
      company: "Microsoft",
      date: "Jun 2022",
      title: "UX/UI Designer",
      description: "Designing digital products for global clients, focusing on usability, clarity, and clean visuals.",
      location: "New York, USA",
      type: "Full-Time",
      position: "top"
    },
    {
      company: "Apple",
      date: "Jun 2020",
      title: "Senior Web Designer",
      description: "Designing digital products for global clients, focusing on usability, clarity, and clean visuals.",
      location: "New York, USA",
      type: "Full-Time",
      position: "bottom"
    },
    {
      company: "Google",
      date: "Jun 2018",
      title: "Jr. Web Designer",
      description: "Designing digital products for global clients, focusing on usability, clarity, and clean visuals.",
      location: "New York, USA",
      type: "Full-Time",
      position: "bottom"
    }
  ];

  return (
    <section className="experience">
      <div className="experience-container">
        <h2 className="experience-title">The path I've taken</h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-card ${exp.position}`}>
              <div className="timeline-node"></div>
              <div className="card-content">
                <div className="card-header">
                  <span className="company-tag">{exp.company}</span>
                  <span className="date-tag">{exp.date}</span>
                </div>
                <h3 className="job-title">{exp.title}</h3>
                <p className="job-description">{exp.description}</p>
                <div className="card-footer">
                  <div className="location">
                    <span className="icon">📍</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="employment-type">
                    <span className="icon">💼</span>
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
