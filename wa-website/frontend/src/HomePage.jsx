import { useState } from 'react';
import './HomePage.css';
import wubgzerPhoto from './assets/image.png';

function HomePage({ onLogout }) {
  const services = [
    {
      title: 'Full Stack Development (AI Integrated)',
      summary: 'Modern web apps with intelligent automation and analytics.',
      image:
        'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
      details:
        'We build complete frontend and backend systems with AI features like smart search, recommendations, chat assistants, and workflow automation to improve performance and user experience.',
    },
    {
      title: 'Mobile Application Development',
      summary: 'Fast, user-friendly apps for Android and cross-platform.',
      image:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
      details:
        'From UI design to API integration and deployment, we create mobile applications focused on smooth performance, clean interfaces, and real-world usability.',
    },
    {
      title: 'Cyber Security',
      summary: 'Security-first approach for apps, APIs, and user data.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      details:
        'We apply best practices like secure authentication, data protection, vulnerability checks, and safer coding standards to reduce risks and improve trust.',
    },
    {
      title: 'Machine Learning',
      summary: 'Data-driven models for prediction and smarter decisions.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      details:
        'We help apply machine learning to practical use cases such as forecasting, classification, and intelligent insights to support better decision-making.',
    },
    {
      title: 'Programming Language',
      summary: 'Hands-on guidance in coding fundamentals and practice.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
      details:
        'We provide practical support in learning programming concepts, writing clean code, and building projects that bridge theory and real implementation.',
    },
    {
      title: 'Video Editing',
      summary: 'Professional editing for educational and business content.',
      image:
        'https://images.unsplash.com/photo-1574717024453-3540565e71df?auto=format&fit=crop&w=1200&q=80',
      details:
        'We edit and polish video content with storytelling, transitions, subtitles, and branding for social media, classes, and promotions.',
    },
    {
      title: 'Graphics Designing',
      summary: 'Strong visual identity for products and brands.',
      image:
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
      details:
        'We design logos, posters, social media creatives, and product graphics that communicate clearly and create memorable visual impact.',
    },
  ];
  const projects = [
    {
      title: 'KMS (Knowledge Management System)',
      summary: 'Centralized platform to capture, organize, and share knowledge.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      details:
        'A knowledge management system designed for teams and institutions to store documents, training materials, FAQs, and best practices in one searchable platform.',
    },
    {
      title: 'Food Delivery Platform',
      summary: 'Fast ordering, live tracking, and seamless delivery operations.',
      image:
        'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
      details:
        'A complete food delivery solution with customer ordering, restaurant dashboards, rider assignment, GPS tracking, and secure digital payment integration.',
    },
    {
      title: 'E-commerce Platform',
      summary: 'Scalable online marketplace with secure checkout flow.',
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      details:
        'A multi-vendor commerce experience featuring product catalogs, inventory control, order management, customer accounts, and business analytics.',
    },
    {
      title: 'School Management App',
      summary: 'Academic operations in one smart digital system.',
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
      details:
        'A complete school platform for attendance, grading, assignment workflows, teacher-parent communication, and automated report generation.',
    },
    {
      title: 'Business Analytics Dashboard',
      summary: 'Real-time performance insights for better decision making.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      details:
        'A modern executive dashboard that combines KPIs, live charts, and trend analysis to help teams make faster and more informed decisions.',
    },
    {
      title: 'Other Custom Projects',
      summary: 'Tailored software solutions for unique business needs.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
      details:
        'Beyond listed products, WA Software builds custom websites, portals, internal tools, and automation systems based on specific client goals.',
    },
  ];
  const [activeService, setActiveService] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [contactStatus, setContactStatus] = useState('');

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    setContactStatus('');
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.question.trim()) {
      setContactStatus('Please fill in all fields before sending.');
      return;
    }
    setContactStatus('Thanks! Your message has been received. We will contact you soon.');
    setContactForm({ name: '', email: '', question: '' });
  };

  return (
    <div className="site-page">
      <header className="site-header">
        <div className="site-brand">
          <div className="site-logo" aria-hidden="true">
            <span>WA</span>
          </div>
          <div className="site-brand-text">
            <strong>WA SOFTWARE COMPANY</strong>
            <small>Building intelligent digital futures</small>
          </div>
        </div>
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button type="button" className="logout-btn" onClick={onLogout}>
          Log out
        </button>
      </header>

      <section id="home" className="hero-section">
        <p className="hero-kicker">Software. Innovation. Impact.</p>
        <h1>We craft intelligent digital products that turn ideas into impact</h1>
        <p>
          WA Software delivers modern websites, scalable applications, and
          AI-integrated solutions that help businesses grow, teams move faster,
          and communities access better digital opportunities.
        </p>
        <div className="hero-tags">
          <span>AI-Integrated Solutions</span>
          <span>Secure Engineering</span>
          <span>Creative Product Design</span>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="primary-link">
            Start Your Journey
          </a>
          <a href="#projects" className="secondary-link">
            Explore Projects
          </a>
        </div>
        <div className="hero-metrics">
          <article>
            <h3>7+</h3>
            <p>Core service domains</p>
          </article>
          <article>
            <h3>End-to-End</h3>
            <p>From planning to deployment</p>
          </article>
          <article>
            <h3>Mission-Driven</h3>
            <p>Bridging theory, skill, and opportunity</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <h2>Why Choose WA Software</h2>
        <p className="section-intro">
          We combine technical depth, creative design, and practical execution
          to deliver software products that perform in the real world.
        </p>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Modern Tech Stack</h3>
            <p>Built with scalable tools and frameworks aligned with industry standards.</p>
          </article>
          <article className="feature-card">
            <h3>User-First Design</h3>
            <p>Interfaces focused on clarity, usability, speed, and conversion impact.</p>
          </article>
          <article className="feature-card">
            <h3>Secure by Design</h3>
            <p>Security practices integrated from planning through deployment.</p>
          </article>
          <article className="feature-card">
            <h3>Results Focused</h3>
            <p>Solutions designed to create measurable business and social value.</p>
          </article>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2>About Me</h2>
        <div className="about-layout">
          <div className="about-photo-card">
            <img
              src={wubgzerPhoto}
              alt="Wubgzer Alemayehu portrait"
              className="about-photo"
            />
            <div className="about-photo-caption">
              <h3>Wubgzer Alemayehu</h3>
              <p>Software Engineering Student | Future Tech Founder</p>
            </div>
          </div>
          <div className="about-copy">
            <p>
              I am Wubgzer Alemayehu, a dedicated Software Engineering student
              with a strong passion for building modern web applications and
              solving real-world problems through technology.
            </p>
            <p>
              My journey into software development is driven by both curiosity
              and purpose. Coming from a background where access to
              opportunities is limited, I have learned to be resourceful,
              disciplined, and focused on continuous growth.
            </p>
            <p>
              I am currently developing my skills in full-stack web development,
              working with technologies such as React, Node.js, Express, and
              modern JavaScript to build practical and user-friendly
              applications.
            </p>
            <p>
              I enjoy transforming ideas into functional digital solutions, with
              a particular focus on clean design, performance, and usability.
              Beyond development, I am deeply interested in emerging fields like
              artificial intelligence and innovative software systems that can
              create meaningful impact in underserved communities.
            </p>
            <p>
              This website represents my progress, projects, and commitment to
              becoming a skilled and impactful software developer. My long-term
              vision is to establish my own technology company and contribute to
              building solutions that empower people and solve real challenges.
            </p>
            <p>
              I am continuously learning, building, and pushing myself to grow
              both as a developer and as a problem solver.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Mission & Vision</h2>
        <p className="section-intro">
          The purpose that drives WA Software Company and the long-term impact
          we are building for communities, learners, and businesses.
        </p>
        <div className="mv-grid">
          <article className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To build practical, high-quality digital solutions that connect
              classroom theory with real-world skill, while creating supportive
              opportunities for females and underrepresented learners in tech.
            </p>
          </article>
          <article className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted and innovative software company recognized for
              empowering people through technology, delivering impactful
              products, and inspiring the next generation of problem solvers.
            </p>
          </article>
        </div>
      </section>

      <section id="services" className="content-section">
        <h2>Services</h2>
        <p className="section-intro">
          Click any service card to view a full explanation of how WA Software
          can support your project.
        </p>
        <div className="card-grid">
          {services.map((service) => {
            const isActive = activeService === service.title;
            return (
              <article
                key={service.title}
                className={`info-card service-card ${isActive ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="service-trigger"
                  onClick={() =>
                    setActiveService((prev) =>
                      prev === service.title ? null : service.title
                    )
                  }
                  aria-expanded={isActive}
                  style={{
                    backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.76), rgba(2, 6, 23, 0.9)), url("${service.image}")`,
                  }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  {isActive && <p className="service-details">{service.details}</p>}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2>Projects</h2>
        <p className="section-intro">
          Sample project directions that represent the quality and impact we
          aim to deliver.
        </p>
        <div className="card-grid">
          {projects.map((project) => {
            const isActive = activeProject === project.title;
            return (
              <article
                key={project.title}
                className={`info-card service-card ${isActive ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="service-trigger"
                  onClick={() =>
                    setActiveProject((prev) =>
                      prev === project.title ? null : project.title
                    )
                  }
                  aria-expanded={isActive}
                  style={{
                    backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.72), rgba(2, 6, 23, 0.9)), url("${project.image}")`,
                  }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  {isActive && <p className="service-details">{project.details}</p>}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <h2>Our Process</h2>
        <div className="process-grid">
          <article className="process-step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>Understand your goals, users, and technical requirements.</p>
          </article>
          <article className="process-step">
            <span>02</span>
            <h3>Design & Planning</h3>
            <p>Create clear flows, architecture, and implementation roadmap.</p>
          </article>
          <article className="process-step">
            <span>03</span>
            <h3>Development</h3>
            <p>Build performant, secure, and maintainable software systems.</p>
          </article>
          <article className="process-step">
            <span>04</span>
            <h3>Launch & Support</h3>
            <p>Deploy confidently and continue improving with feedback and data.</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <h2>Client Experience</h2>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p>
              "WA Software delivered a polished solution with excellent communication and
              strong attention to detail."
            </p>
            <h4>Startup Founder</h4>
          </article>
          <article className="testimonial-card">
            <p>
              "The team transformed our idea into a reliable and user-friendly platform
              faster than expected."
            </p>
            <h4>Education Project Lead</h4>
          </article>
          <article className="testimonial-card">
            <p>
              "Great balance between design quality, technical execution, and business
              understanding."
            </p>
            <h4>Small Business Owner</h4>
          </article>
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <h2>Contact</h2>
        <p className="section-intro">
          Ready to build something meaningful? Reach out and let us start.
        </p>
        <form
          className="contact-form"
          onSubmit={handleContactSubmit}
          noValidate
        >
          <div className="field-group">
            <label className="auth-label" htmlFor="contactName">
              Name
            </label>
            <input
              id="contactName"
              name="name"
              className="contact-input"
              type="text"
              placeholder="Enter your full name"
              value={contactForm.name}
              onChange={handleContactChange}
            />
          </div>
          <div className="field-group">
            <label className="auth-label" htmlFor="contactEmail">
              Email
            </label>
            <input
              id="contactEmail"
              name="email"
              className="contact-input"
              type="email"
              placeholder="Enter your email address"
              value={contactForm.email}
              onChange={handleContactChange}
            />
          </div>
          <div className="field-group">
            <label className="auth-label" htmlFor="contactQuestion">
              Question
            </label>
            <textarea
              id="contactQuestion"
              name="question"
              className="contact-input contact-textarea"
              placeholder="Write your question here..."
              rows={5}
              value={contactForm.question}
              onChange={handleContactChange}
            />
          </div>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
          {contactStatus && <p className="contact-status">{contactStatus}</p>}
        </form>
        <p>
          Email:{' '}
          <a href="mailto:wubgzeralemayehu18@gmail.com">
            wubgzeralemayehu18@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:0986059839">0986059839</a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/wubgzer-alemayehu-0aa33934b"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/wubgzer-alemayehu-0aa33934b
          </a>
        </p>
      </section>

      <section className="content-section cta-section">
        <h2>Ready to Build Something Great?</h2>
        <p>
          Let’s transform your idea into a modern, high-impact digital product.
          WA Software Company is ready to partner with you.
        </p>
        <a href="#contact" className="primary-link">
          Book a Consultation
        </a>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} WA SOFTWARE COMPANY. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
