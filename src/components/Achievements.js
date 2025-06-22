import React from 'react';
import Section from './Section';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'Udacity',
      year: '2023',
      description: 'Comprehensive course covering AI fundamentals, machine learning algorithms, and practical applications.',
      icon: 'fas fa-brain'
    },
    {
      id: 2,
      title: 'Complete Web Development Course',
      issuer: 'Udemy',
      year: '2022',
      description: 'Full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and database management.',
      icon: 'fas fa-globe'
    },
    {
      id: 3,
      title: 'Programming with JavaScript',
      issuer: 'Coursera',
      year: '2021',
      description: 'Advanced JavaScript programming course focusing on modern ES6+ features and best practices.',
      icon: 'fab fa-js-square'
    },
    {
      id: 4,
      title: 'SCRUM MASTER 1 Certification',
      issuer: 'Article26',
      year: '2020',
      description: 'Professional Scrum Master certification demonstrating expertise in Agile methodologies and team leadership.',
      icon: 'fas fa-users-cog'
    }
  ];

  const accomplishments = [
    {
      id: 1,
      title: '10+ Projects Completed',
      description: 'Successfully delivered over 10 software projects across various domains and technologies.',
      icon: 'fas fa-trophy'
    },
    {
      id: 2,
      title: '2+ Years Experience',
      description: 'Accumulated over 2 years of professional experience in software development and IT solutions.',
      icon: 'fas fa-clock'
    },
    {
      id: 3,
      title: '5+ Technologies Mastered',
      description: 'Proficient in more than 5 programming languages, frameworks, and development tools.',
      icon: 'fas fa-code' 
    },
    {
      id: 4,
      title: 'Team Leadership',
      description: 'Led development teams and mentored junior developers in multiple successful projects.',
      icon: 'fas fa-user-tie'
    }
  ];

  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="achievements-content">
        <div className="certifications-section">
          <h3 className="section-subtitle">Certifications</h3>
          <div className="certifications-grid">
            {achievements.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="certification-icon">
                  <i className={cert.icon}></i>
                </div>
                <div className="certification-content">
                  <h4 className="certification-title">{cert.title}</h4>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-year">{cert.year}</p>
                  <p className="certification-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="accomplishments-section">
          <h3 className="section-subtitle">Key Accomplishments</h3>
          <div className="accomplishments-grid">
            {accomplishments.map((accomplishment) => (
              <div key={accomplishment.id} className="accomplishment-card">
                <div className="accomplishment-icon">
                  <i className={accomplishment.icon}></i>
                </div>
                <h4 className="accomplishment-title">{accomplishment.title}</h4>
                <p className="accomplishment-description">{accomplishment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements; 