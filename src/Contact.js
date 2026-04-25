import React from 'react';
import './Profile.css';
import { Navbar, Container, Nav, Row, Col, Card, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Profile() {
  return (
    <>
      <header className="position-relative">
        <Image src="images/gartner.jpg" alt="Bipin Sasi" className="w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ backgroundColor: 'rgba(224, 213, 213, 0.5)', padding: '1rem', borderRadius: '0.5rem' }}>
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
       

        {/* All content sections remain unchanged */}

        <section className="text-center mt-5">
          <h2>Connect with Me</h2>
          <p className="mt-3">Feel free to reach out or follow me on social media.</p>
          <div className="d-flex justify-content-center gap-4 fs-3">
            <a href="mailto:bipin514@gmail.com" className="text-decoration-none text-dark" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://x.com/BipinSasi" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/bipinsasi" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark" title="LinkedIn">
              <FaLinkedin />
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
