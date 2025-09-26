import React from 'react';

const Awards = () => {
  const awardCards = [
    {
      icon: '🏆',
      title: 'Winner of 34+ Awards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      position: 'top-left'
    },
    {
      icon: '🥇',
      title: 'Winner of 34+ Awards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      position: 'top-right'
    },
    {
      icon: '⭐',
      title: 'Winner of 34+ Awards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      position: 'bottom-left'
    },
    {
      icon: '🏅',
      title: 'Winner of 34+ Awards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      position: 'bottom-right'
    }
  ];

  return (
    <section className="awards">
      <div className="awards-container">
        <h2 className="awards-title">My Awards & Achievements</h2>
        
        <div className="awards-visual">
          {/* Central 34+ Element */}
          <div className="central-number">
            <div className="number-glow"></div>
            <span className="number-34">34</span>
            <span className="number-plus">+</span>
          </div>
          
          {/* Award Cards */}
          <div className="awards-cards">
            {awardCards.map((award, index) => (
              <div key={index} className={`award-card ${award.position}`}>
                <div className="award-icon">
                  <span className="icon">{award.icon}</span>
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-description">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
