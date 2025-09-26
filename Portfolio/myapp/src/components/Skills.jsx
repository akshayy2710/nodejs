import React from 'react';

const Skills = () => {
  const skillIcons = [
    { name: 'Python', color: '#3776ab', icon: '🐍' },
    { name: 'C', color: '#00599c', icon: 'C' },
    { name: 'React.js', color: '#61dafb', icon: '⚛️' },
    { name: 'Vue.js', color: '#4fc08d', icon: 'V' },
    { name: 'PHP', color: '#777bb4', icon: 'php' },
    { name: 'Sass', color: '#cf649a', icon: 'S' },
    { name: 'HTML5', color: '#e34f26', icon: '5' },
    { name: 'Figma', color: '#f24e1e', icon: 'F' },
    { name: 'TypeScript', color: '#3178c6', icon: 'TS' },
    { name: 'Bootstrap', color: '#7952b3', icon: 'B' }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Here's how I can help you</h2>
        
        <div className="skills-visual">
          {/* Central Figure */}
          <div className="central-figure">
            <div className="person-image">
              <img src="/images/person.svg" alt="Enthusiastic Developer" />
            </div>
            <div className="gradient-arc"></div>
          </div>
          
          {/* Skill Icons in Semi-circle */}
          <div className="skills-icons">
            {skillIcons.map((skill, index) => (
              <div 
                key={index} 
                className={`skill-icon skill-${index + 1}`}
                style={{ '--skill-color': skill.color }}
              >
                <div className="icon-content">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
          
          {/* Connecting Arc Line */}
          <div className="connecting-arc"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
