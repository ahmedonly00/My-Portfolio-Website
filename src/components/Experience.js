import React from 'react';
import Section from './Section';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'JACKAL TECH LTD.',
      period: '2025 - Present',
      description: 'Leading full-stack development projects using React, Node.js, and cloud technologies. Cooperating with other developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      id: 2,
      title: 'Backend Developer Trainee',
      company: 'ALX Rwanda',
      period: '2025 - Present',
      description: 'Developed and maintained web applications using .NET framework and React. Collaborated with cross-functional teams in Agile environment. ',
      technologies: ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'SQL Server', 'Azure']
    },
    {
      id: 3,
      title: 'Software Developer Intern',
      company: 'Rwanda Muslim Community',
      period: '2023 - 2024',
      description: 'Built scalable applications using Java and Spring Boot. Implemented RESTful APIs and database optimization strategies.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'REST APIs']
    },
    {
      id: 4,
      title: 'Executive Secretary',
      company: 'Rwanda Muslims Community - Masdjid Al Djamia',
      period: '2022 - 2024',
      description: 'Managed administrative processes, documentation, and scheduling efficiently.',
      technologies: ['Microsoft Office', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Word']
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-marker">
              <div className="marker-dot"></div>
              {index < experiences.length - 1 && <div className="marker-line"></div>}
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">{experience.title}</h3>
                <span className="experience-company">{experience.company}</span>
                <span className="experience-period">{experience.period}</span>
              </div>
              
              <p className="experience-description">{experience.description}</p>
              
              <div className="experience-technologies">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience; 