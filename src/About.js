import React from 'react';
import './Profile.css';
import { Navbar, Container, Nav, Row, Col, Card, Image, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "M365 Copilot Implementation",
    description: "The rollout of M365 Copilot took place in 2024 and 2025, during which several enablement sessions were conducted to introduce its features. I led the project throughout this process.",
    imageUrl: "images/copilot.gif",
    imageAlt: "M365 Copilot Logo"
  },
  {
    id: 2,
    title: "Service Now",
    description: "Lead implementation of several Service now workflows in the realm of IT service management framework.",
    imageUrl: "images/servicenow.png",
    imageAlt: "Service Now"
  },
  {
    id: 3,
    title: "The future of GPT-5 and the Future OPEN AI is Building",
    description: " The launch of GPT-5, has started the reace toward superintelligence, and what this profound technological shift means for all of us—from kids born today to seasoned professionals navigating career changes",
    imageUrl: "images/gpt5.png",
    imageAlt: "GPT-5"
  }
];

const achievements = [
  {
    id: 1,
    title: "Leadership in Diversity & Inclusion",
    description: "Co-led the Diversity and Inclusion initiative at Merck India, focusing on the inclusion of People with Disabilities.",
    imageUrl: "images/event.jpeg",
    imageAlt: "Diversity and Inclusion"
  },
  {
    id: 2,
    title: "IT Strategy & Innovation",
    description: "Attended Gartner conference in Nove 2024 at Cochin, Kerala India meeting several Industry leaders, Learned about Top Strategic Technology Trends for 2025, We all know that Artificial Intelligence (AI) continues to be a dominant force, with advancements in AI and Generative AI bringing new capabilities to cybersecurity and other fields. AI is expected to power a wide range of applications, making it a critical technology for businesses to adopt.  With the increasing reliance on digital technologies, cybersecurity remains a top priority. New defenses and threats are emerging, and organizations need to stay ahead of these developments to protect their assets",
    imageUrl: "images/gartner.jpg",
    imageAlt: "IT Strategy and Innovation"
  },
  {
    id: 3,
    title: "Women in Leadership",
    description: "Actively participated in the Women in Leadership committee, promoting gender diversity and leadership development.",
    imageUrl: "images/wil.jpeg",
    imageAlt: "Women in Leadership"
  }
];

function Profile() {
  return (
    <>
      <header className="position-relative">
        <Image src="images/gartner.jpg" alt="Bipin Sasi" className="w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ backgroundColor: 'rgba(251, 246, 246, 0.5)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h1 className="display-4">Hi, I’m Bipin Sasi</h1>
          <p className="lead">Director, Head of Infrastructure Automation at Merck KGaA</p>
        </div>
      </header>

      <Navbar expand="lg" className="bg-danger navbar-dark">
        <Container>
          <Navbar.Brand href="#" className="text-white">Bipin Sasi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="container mt-5">
        <section className="mb-5">
          <h2 className="text-center mb-4">About Me</h2>
          <div class="profile-container">
  <h2>As Director and Head of Infra Automation Engineering</h2>
  <p>
    I lead transformative initiatives that modernize infrastructure, streamline operations, 
    and elevate user experience across the digital workplace. With over 15 years of experience 
    in IT project management and platform automation, I specialize in integrating AI and 
    automation into enterprise ecosystems.
  </p>

  <h3>Current Focus Areas:</h3>
  <ul>
    <li>
      <strong>Infra Automation Strategy:</strong> Driving automation across platforms like 
      K2, SharePoint, ServiceNow, and Power Platform, with a focus on scalability, security, 
      and compliance.
    </li>
    <li>
      <strong>AI &amp; Digitalization:</strong> Leading AI adoption and citizen development 
      initiatives using Microsoft technologies including M365 Copilot, Copilot Studio, and Dataverse.
    </li>
    <li>
      <strong>Platform Ownership:</strong> Full ownership of the K2 platform, overseeing workflow 
      governance, upgrades, and deployment.
    </li>
    <li>
      <strong>Architecture &amp; Integration:</strong> Acting as Integration Architect for secure, 
      compliant end-system integrations and legacy migrations (e.g., Lotus Notes to modern platforms).
    </li>
    <li>
      <strong>Governance &amp; Risk:</strong> Engaged in IT Architecture Review and strategic risk 
      evaluations for enterprise systems.
    </li>
  </ul>

  <h3>Leadership &amp; Collaboration:</h3>
  <p>
    I consult cross-functionally to enable business users through technology, support strategic planning 
    formats, and contribute to leadership communications and events. I’m also deeply committed to 
    inclusive workplace culture, having co-led Diversity &amp; Inclusion programs and contributed to 
    strategic committees.
  </p>

  <h3>Specialties:</h3>
  <p>
    Infrastructure Automation | AI Integration | Digital Workplace | Platform Strategy &amp; Management | 
    Enterprise Architecture | Leadership
  </p>
</div>

        </section>

        <section className="mb-5">
          <h2 className="text-center text-dark">Achievements</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {achievements.map((achievement) => (
              <Col key={achievement.id} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={achievement.imageUrl} alt={achievement.imageAlt} className="img-fluid" />
                  <Card.Body>
                    <Card.Title className="text-center">{achievement.title}</Card.Title>
                    <Card.Text className="text-justify">{achievement.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="mb-5">
          <h2 className="text-center text-dark">Key Projects</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project) => (
              <Col key={project.id} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={project.imageUrl} alt={project.imageAlt} className="img-fluid w-50 mx-auto d-block" />
                  <Card.Body>
                    <Card.Title className="text-center">{project.title}</Card.Title>
                    <Card.Text className="text-justify">{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="text-center mt-5">
          <h2>Connect with Me</h2>
          <p className="mt-3">Feel free to reach out or follow me on social media.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="mailto:bipin514@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-dark" className="d-flex align-items-center gap-2">
                <FaEnvelope /> Email
              </Button>
            </a>
            <a href="https://x.com/BipinSasi" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-dark" className="d-flex align-items-center gap-2">
                <FaTwitter /> Twitter
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/bipinsasi" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-dark" className="d-flex align-items-center gap-2">
                <FaLinkedin /> LinkedIn
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p>&copy; {new Date().getFullYear()} bipinsasi.com | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Profile;
