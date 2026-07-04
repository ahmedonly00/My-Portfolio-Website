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
      link: 'mailto:ahmedndayizeye@gmail.com',
    },
    {
      id: 2,
      type: 'GitHub',
      value: 'github.com/ahmedonly00',
      icon: 'fab fa-github',
      link: 'https://github.com/ahmedonly00',
    },
    {
      id: 3,
      type: 'LinkedIn',
      value: 'linkedin.com/in/ahmed-ndayizeye',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/ahmed-ndayizeye',
    },
    {
      id: 4,
      type: 'Phone',
      value: '+250 782 242 930',
      icon: 'fas fa-phone',
      link: 'tel:+250782242930',
    },
  ];

  return (
    <Section id="contact" title="Contact">
      <div className="contact-content">
        <div className="contact-info-section">
          <h3 className="contact-subtitle">Get In Touch</h3>
          <p className="contact-description">
            Whether you're building a product, hiring an engineer, or have a collaboration in mind —
            I'm always open to a conversation. Reach out through any of the channels below.
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
      </div>
    </Section>
  );
};

export default Contact;
