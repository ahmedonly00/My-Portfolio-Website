import React from 'react';
import Section from './Section';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HEMS',
      description: 'National health workforce management platform for Rwanda — tracking professionals from student enrollment through clinical training, internship placement, and Ministry of Health licensing. Used by hospitals, universities, the Ministry of Health, and the Rwanda Health Council.',
      technologies: ['Spring Boot', 'Microservices', 'PostgreSQL', 'Next.js', 'REST APIs'],
      icon: 'fas fa-hospital',
      backgroundColor: '#0f4c75',
    },
    {
      id: 2,
      title: 'MozFood',
      description: 'Production food delivery platform for the Mozambican market — connecting customers, restaurants, and riders in real time with M-Pesa mobile payments.',
      technologies: ['Java 17', 'Spring Boot', 'MySQL', 'Redis', 'Next.js 14', 'Docker', 'M-Pesa API', 'WebSocket'],
      icon: 'fas fa-utensils',
      backgroundColor: '#8c00b0',
    },
    {
      id: 2,
      title: 'Ikimina USSD System',
      description: 'USSD-based savings and loan platform serving community savings groups. Members request loans, track savings, and manage contributions directly from a basic phone.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'USSD API'],
      icon: 'fas fa-money-bill-wave',
      backgroundColor: '#1a6b3c',
    },
    {
      id: 4,
      title: 'Mosque Management System',
      description: 'Community management system handling prayer schedules, event planning, donation tracking, Quranic class scheduling, and member management.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate'],
      icon: 'fas fa-mosque',
      backgroundColor: '#1a3a6b',
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header" style={{ backgroundColor: project.backgroundColor }}>
              <i className={`project-icon ${project.icon}`}></i>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="technology-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
