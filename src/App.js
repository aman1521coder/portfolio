import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTelegram, FaJs, FaMicrosoft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import the image from the src folder
import profilePic from './photo_2024-09-22_21-12-29.jpg'; // Adjust the path if necessary

function App() {
  const projects = [
    {
      title: "Real-Time Auction Site",
      description: "A platform for real-time auctions with live bidding and automatic updates",
      tech: ["C#", ".NET Core", "SignalR"],
      link: "#"
    },
    {
      title: "Enterprise MVC Platform",
      description: "Scalable enterprise application with ASP.NET MVC",
      tech: ["ASP.NET MVC", "Entity Framework", "Azure"],
      link: "#"
    },
    {
      title: "Telegram Bots",
      description: "Social automation bots for Telegram with real-time interaction",
      tech: ["Python", "Telegram API"],
      link: "#"
    }
  ];

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-blur">
        <Container>
          <Navbar.Brand href="#home" className="gradient-text">Amanuel Esayase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills">Expertise</Nav.Link>
              <Nav.Link href="#projects">Innovations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="hero" className="hero-section">
        <Container className="text-center">
          {/* Use the imported image here */}
          <img 
            src={profilePic} 
            alt="Amanuel Esayase"
            className="profile-img mb-4"
          />
          <h1 className="mb-4 futuristic-heading">
            Real-Time Auction Site Builder
          </h1>
          <p className="lead subheading">Building Dynamic, Real-Time Platforms</p>
          <div className="social-links mt-4">
            <a href="https://github.com/aman1521coder" className="social-icon">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/amanuel-esayase-8b941532b/" className="social-icon">
              <FaLinkedin size={28} />
            </a>
            <a href="https://t.me/aman151515" className="social-icon">
              <FaTelegram size={28} />
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
                <FaTelegram className="skill-icon" />
                <h3>Telegram Bots</h3>
                <p>Social Automation</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="skill-card hover-transform">
                <FaJs className="skill-icon" />
                <h3>Web Dev</h3>
                <p>React, Microservices, Cloud</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="skill-card hover-transform">
                <h3>Go</h3>
                <p>Backend Services, Scalability</p>
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

      <footer className="footer-section">
        <Container>
          <p className="text-center mb-0">&copy; Amanue Esayase All rights reserved</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
