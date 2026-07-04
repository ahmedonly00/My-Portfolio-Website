import React from 'react';
import Section from './Section';
import Profile3D from './Profile3D';
import './Home.css';

const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home" className="home-section">
      <div className="home-content">
        <div className="profile-section">
          <div className="profile-container">
            <Profile3D />
            <div className="profile-overlay">
              <div className="profile-initials">AN</div>
            </div>
          </div>
        </div>

        <div className="intro-section">
          <p className="intro-tag">&gt;_ full-stack engineer</p>
          <h1 className="intro-title">Ahmed Ndayizeye</h1>
          <p className="intro-subtitle">Full-Stack Software Engineer</p>
          <p className="intro-description">
            I build production systems for real users — Spring Boot APIs, Next.js frontends,
            M-Pesa payment flows, and Docker deployments serving the African market.
          </p>

          <div className="intro-ctas">
            <button className="cta-primary" onClick={() => scrollTo('projects')}>
              View Work
            </button>
            <button className="cta-secondary" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </div>

          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Full</span>
              <span className="stat-label">Stack</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
