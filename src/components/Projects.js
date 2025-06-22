import React from 'react';
import Section from './Section';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Bus Management System',
      description: 'A comprehensive ticket reservation and seat booking system built with .NET framework. Features include real-time seat availability, online payment integration, and automated booking confirmations.',
      technologies: ['C#', '.NET', 'ASP.NET', 'SQL Server', 'Entity Framework'],
      backgroundColor: '#ff9966',
      icon: 'fas fa-bus'
    },
    {
      id: 2,
      title: 'E-Suggestion Box System',
      description: 'An anonymous feedback platform developed with ASP.NET that allows users to submit suggestions and complaints securely. Includes admin dashboard for feedback management.',
      technologies: ['ASP.NET', 'C#', 'JavaScript', 'Bootstrap', 'SQL Server'],
      backgroundColor: '#a4de02',
      icon: 'fas fa-comment-dots'
    },
    {
      id: 3,
      title: 'Pharmacy Management System',
      description: 'Java-based medicine search and order placement system with inventory management, prescription tracking, and automated reorder notifications.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'JSP'],
      backgroundColor: '#8c00b0',
      icon: 'fas fa-pills'
    },
    {
      id: 4,
      title: 'Smart Home Monitoring App',
      description: 'Real-time home automation application built with Flutter. Features include IoT device control, security monitoring, and energy consumption tracking.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'IoT', 'REST APIs'],
      backgroundColor: '#00d4ff',
      icon: 'fas fa-home'
    },
    {
      id: 5,
      title: 'Ikimina Ussd System',
      description: 'Complete Ikimina Ussd System with Java Spring Boot for backend. Includes user authentication, Requestin Loan processing, and Saving (Ingoboka & Ubwizigame) management.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Hibernate'],
      backgroundColor: '#ff6b6b',
      icon: 'fas fa-money-bill'
    },
    {
      id: 6,
      title: 'Mosque Management System',
      description: 'A comprehensive mosque management system that handles prayer schedules, event planning, donation tracking, and community member management. Features include automated adhan timings, Quranic class scheduling, and zakat calculations.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Hibernate'],
      backgroundColor: '#4ecdc4',
      icon: 'fas fa-mosque'
    },
    {
      id: 7,
      title: 'Personal Finance Tracker',
      description: 'A comprehensive personal finance tracker that handles income, expenses, and savings management. Features include automated adhan timings, Quranic class scheduling, and zakat calculations.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Hibernate'],
      backgroundColor: '#00d4ff',
      icon: 'fas fa-money-bill'
    }

  ];

  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div 
              className="project-header"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <i className={`project-icon ${project.icon}`}></i>
              <h3 className="project-title">{project.title}</h3>
            </div>
            
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="view-project-btn">
                <i className="fas fa-eye"></i>
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects; 