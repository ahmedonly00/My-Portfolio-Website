import React from 'react';
import Section from './Section';
import './About.css';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I'm based in Rwanda and have been building software professionally since 2022 — starting
            with internships in community and government-adjacent systems, then moving into production
            platform engineering. My background spans .NET, Java, and JavaScript ecosystems across
            web, mobile, and USSD channels.
          </p>
          <p className="about-description">
            Most of my recent work lives at the intersection of backend reliability and African
            payment infrastructure. I've debugged production OOM crashes, fixed race conditions
            between services, and built audit systems that financial operators can actually trust.
          </p>
          <p className="about-description">
            Outside work I contribute to community-focused tools — the mosque management and
            savings group systems in my portfolio came from real requests by local organizations
            in Rwanda.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-item">
            <i className="fas fa-server highlight-icon"></i>
            <div className="highlight-content">
              <h4>Production Backend Systems</h4>
              <p>Spring Boot APIs with JWT-RBAC, audit logging across 12 services, and JPA/Redis tuned for production load.</p>
            </div>
          </div>

          <div className="highlight-item">
            <i className="fas fa-mobile-alt highlight-icon"></i>
            <div className="highlight-content">
              <h4>Mobile Money Payments</h4>
              <p>M-Pesa integration with real-time callback handling and automatic order confirmation — no bank card required.</p>
            </div>
          </div>

          <div className="highlight-item">
            <i className="fas fa-broadcast-tower highlight-icon"></i>
            <div className="highlight-content">
              <h4>Real-Time Features</h4>
              <p>WebSocket-based live delivery tracking, GPS ETA calculation, and live order status broadcasting.</p>
            </div>
          </div>

          <div className="highlight-item">
            <i className="fas fa-shield-alt highlight-icon"></i>
            <div className="highlight-content">
              <h4>Reliability Engineering</h4>
              <p>Diagnosed OOM crashes, fixed startup race conditions, resolved 16 LazyInitializationExceptions, and backfilled live database constraints.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
