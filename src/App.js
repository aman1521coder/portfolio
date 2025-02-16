import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaPython, FaJs, FaRobot, FaMicrosoft, FaTelegram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const projects = [
    {
      title: "Telegram Trading Bot",
      description: "Cryptocurrency trading bot with real-time market analysis",
      tech: ["C#", ".NET Core", "Binance API"],
      link: "#"
    },
    {
      title: "Enterprise MVC Platform",
      description: "Scalable enterprise application with ASP.NET MVC",
      tech: ["ASP.NET MVC", "Entity Framework", "Azure"],
      link: "#"
    },
    {
      title: "AI Chat Ecosystem",
      description: "Multi-platform chatbot system with NLP capabilities",
      tech: ["Python", "TensorFlow", "Telegram API"],
      link: "#"
    }
  ];

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-blur">
        <Container>
          <Navbar.Brand href="#home" className="gradient-text">DevPort 2025</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills">Expertise</Nav.Link>
              <Nav.Link href="#projects">Innovations</Nav.Link>
              <Nav.Link href="#contact">Connect</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="hero" className="hero-section">
        <Container className="text-center">
          <h1 className="mb-4 futuristic-heading">
            Next-Gen Software Architect
          </h1>
          <p className="lead subheading">Building the Future with Cutting-Edge Technologies</p>
          <div className="social-links mt-4">
            <a href="https://github.com/aman1521coder" className="social-icon">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/amanuel-esayase-8b941532b/" className="social-icon">
              <FaLinkedin size={28} />
            </a>
          </div>
        </Container>
      </section>

      <section id="skills" className="skills-section">
        <Container>
          <h2 className="section-title mb-5">Core Expertise</h2>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="skill-card hover-transform">
                <FaMicrosoft className="skill-icon" />
                <h3>.NET Ecosystem</h3>
                <p>ASP.NET MVC, Core, Entity Framework</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="skill-card hover-transform">
                <FaPython className="skill-icon" />
                <h3>AI Automation</h3>
                <p>ML Bots, Neural Networks, NLP</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="skill-card hover-transform">
                <FaTelegram className="skill-icon" />
                <h3>Telegram Bots</h3>
                <p>Trade Bots, Social Automation</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="skill-card hover-transform">
                <FaJs className="skill-icon" />
                <h3>Modern Web</h3>
                <p>React, Microservices, Cloud</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projects" className="projects-section">
        <Container>
          <h2 className="section-title mb-5">Innovative Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="project-card hover-transform">
                  <Card.Body>
                    <Card.Title className="mb-3">{project.title}</Card.Title>
                    <Card.Text className="text-muted">{project.description}</Card.Text>
                    <div className="tech-stack mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <Button variant="outline-primary" href={project.link}>Explore</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="contact" className="contact-section">
        <Container>
          <h2 className="section-title mb-5">Start a Conversation</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <form className="modern-form">
                <Row>
                  <Col md={6} className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </Col>
                </Row>
                <textarea className="form-control mb-4" rows="5" placeholder="Your Vision"></textarea>
                <Button variant="gradient" type="submit">
                  Launch Project
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer-section">
        <Container>
          <p className="text-center mb-0">&copy; 2025 NextGen Dev Solutions. All rights reserved</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;