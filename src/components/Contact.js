import React from 'react';
import Section from './Section';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      type: 'Email',
      value: 'ahmedndayizeye@gmail.com',
      icon: 'fas fa-envelope',
      link: 'mailto:ahmedndayizeye@gmail.com'
    },
    {
      id: 2,
      type: 'Phone',
      value: '+250782242930',
      icon: 'fas fa-phone',
      link: 'tel:+250782242930'
    },
    {
      id: 3,
      type: 'LinkedIn',
      value: 'linkedin.com/in/ahmed-ndayizeye',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/ahmed-ndayizeye'
    },
    {
      id: 4,
      type: 'GitHub',
      value: 'github.com/ahmedndayizeye',
      icon: 'fab fa-github',
      link: 'https://github.com/ahmedonly00'
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/ahmed-ndayizeye',
      color: '#0077b5'
    },
    {
      id: 2,
      name: 'GitHub',
      icon: 'fab fa-github',
      link: 'https://github.com/ahmedonly00',
      color: '#333'
    },
    {
      id: 3,
      name: 'Twitter',
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/ahmedndayizeye',
      color: '#1da1f2'
    },
    {
      id: 4,
      name: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://instagram.com/ahmedndayizeye',
      color: '#e4405f'
    }
  ];

  return (
    <Section id="contact" title="Contact">
      <div className="contact-content">
        <div className="contact-info-section">
          <h3 className="contact-subtitle">Get In Touch</h3>
          <p className="contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
          
          <div className="contact-info-grid">
            {contactInfo.map((info) => (
              <a 
                key={info.id} 
                href={info.link} 
                className="contact-info-card"
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-details">
                  <h4 className="contact-type">{info.type}</h4>
                  <p className="contact-value">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="social-section">
          <h3 className="contact-subtitle">Follow Me</h3>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--social-color': social.color }}
              >
                <i className={social.icon}></i>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact; 