import React from 'react';
import Section from './Section';
import './Skills.css';

const Skills = () => {
  const groups = [
    {
      label: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'JPA / Hibernate', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'Redis', icon: 'fas fa-bolt' },
        { name: 'REST APIs', icon: 'fas fa-cloud' },
      ],
    },
    {
      label: 'Frontend',
      icon: 'fas fa-desktop',
      skills: [
        { name: 'Next.js', icon: 'fas fa-code' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'TypeScript', icon: 'fas fa-code' },
        { name: 'Tailwind CSS', icon: 'fas fa-palette' },
        { name: 'shadcn/ui', icon: 'fas fa-layer-group' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
      ],
    },
    {
      label: 'DevOps',
      icon: 'fas fa-cogs',
      skills: [
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'GitHub Actions', icon: 'fab fa-github' },
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Git', icon: 'fab fa-git-alt' },
      ],
    },
    {
      label: 'Payments & Real-Time',
      icon: 'fas fa-mobile-alt',
      skills: [
        { name: 'M-Pesa API', icon: 'fas fa-money-bill-wave' },
        { name: 'Mobile Money', icon: 'fas fa-wallet' },
        { name: 'WebSocket', icon: 'fas fa-broadcast-tower' },
        { name: 'JWT / RBAC', icon: 'fas fa-shield-alt' },
      ],
    },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="skills-content">
        {groups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3 className="skill-group-title">
              <i className={group.icon}></i>
              {group.label}
            </h3>
            <div className="skills-grid">
              {group.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <i className={`skill-icon ${skill.icon}`}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
