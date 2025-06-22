import React from 'react';
import Section from './Section';
import './About.css';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I am a passionate Software Engineer with hands-on experience in full-stack development, 
            scalable software applications, and Agile methodologies. With over 2 years of experience 
            in the technology industry, I have developed a strong foundation in both frontend and 
            backend technologies.
          </p>
          
          <p className="about-description">
            My expertise spans across multiple programming languages and frameworks, including Java 
            , JavaScript, C#, and .NET. I specialize in building robust web applications using 
            modern technologies like React, Node.js, Spring Boot, and ASP.NET, while also having experience 
            in Linux and Windows.
          </p>
          
          <p className="about-description">
            I thrive in solving real-world challenges using technology and creating innovative 
            solutions that make a difference. My approach combines technical excellence with 
            strong problem-solving skills, ensuring that every project I work on delivers 
            exceptional user experiences and meets business objectives.
          </p>
        </div>
        
        <div className="about-highlights">
          <div className="highlight-item">
            <i className="fas fa-code highlight-icon"></i>
            <div className="highlight-content">
              <h4>Full-Stack Development</h4>
              <p>Experienced in both frontend and backend development with modern frameworks and technologies.</p>
            </div>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-users highlight-icon"></i>
            <div className="highlight-content">
              <h4>Team Collaboration</h4>
              <p>Strong experience working in Agile teams with excellent communication and collaboration skills.</p>
            </div>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-rocket highlight-icon"></i>
            <div className="highlight-content">
              <h4>Problem Solving</h4>
              <p>Expert at analyzing complex problems and designing efficient, scalable solutions.</p>
            </div>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-graduation-cap highlight-icon"></i>
            <div className="highlight-content">
              <h4>Continuous Learning</h4>
              <p>Committed to staying updated with the latest technologies and industry best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 