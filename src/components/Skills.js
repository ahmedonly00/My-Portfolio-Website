import React from 'react';
import Section from './Section';
import './Skills.css';


const Skills = () => {
  const technicalSkills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'ASP.NET', icon: 'fab fa-microsoft' },
    { name: 'Hibernate', icon: 'fas fa-database' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Tailwind CSS', icon: 'fab fa-tailwind-css' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'RESTful APIs', icon: 'fas fa-cloud' },
    { name: 'Entity Framework', icon: 'fas fa-cogs' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'GitLab', icon: 'fab fa-gitlab' },
    { name: 'Linux', icon: 'fab fa-linux' },
    { name: 'Windows', icon: 'fab fa-windows' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fab fa-kubernetes' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Azure', icon: 'fab fa-azure' },
    { name: 'Firebase', icon: 'fab fa-firebase' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'Redis', icon: 'fas fa-database' },
  ];

  const aiToolsCategories = {
    'Text Generation & Assistance': [
      { name: 'ChatGPT', icon: 'fas fa-robot' },
      { name: 'Claude', icon: 'fas fa-brain' },
     
    ],
    'Coding & Programming Expertise': [
      { name: 'GitHub Copilot', icon: 'fas fa-code-branch' },


    ],
    'Design Software': [
      { name: 'Figma', icon: 'fab fa-figma' },
      { name: 'draw.io', icon: 'fas fa-eye' }
    ]
  };

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="skills-content">
        <div className="skills-section">
          <h3 className="skills-category-title">My Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <i className={`skill-icon ${skill.icon}`}></i>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-category-title">Additional Skills (AI Tools Expertise)</h3>
          <div className="ai-categories">
            {Object.entries(aiToolsCategories).map(([category, skills]) => (
              <div key={category} className="ai-category">
                <h4 className="ai-category-title">{category}</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card ai-skill">
                      <i className={`skill-icon ${skill.icon}`}></i>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills; 