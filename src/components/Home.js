import React from 'react';
import Section from './Section';
import Profile3D from './Profile3D';
import './Home.css';

const Home = () => {
  return (
    <Section id="home" className="home-section">
      <div className="home-content">
        <div className="profile-section">
          <div className="profile-container">
            <Profile3D />
            <div className="profile-overlay">
              <img 
                src="https://via.placeholder.com/200x200/8c00b0/ffffff?text=AN" 
                alt="Ahmed Ndayizeye" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
        
        <div className="intro-section">
          <h1 className="intro-title">
            Ahmed Ndayizeye
          </h1>
          <p className="intro-subtitle">
            Software Engineer | Full-Stack Developer | IT Specialist
          </p>
          <p className="intro-description">
            I am a passionate Software Engineer with hands-on experience in full-stack development, 
            scalable software applications, and Agile methodologies. I thrive in solving real-world 
            challenges using technology and creating innovative solutions that make a difference.
          </p>
          
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home; 