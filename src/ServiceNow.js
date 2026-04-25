import React from 'react';
import { Navbar, Container, Nav, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ServiceNowPage() {
  return (
    <>
      <header className="position-relative">
        <Image src="images/gptfuture.png" alt="ServiceNow" className="w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ backgroundColor: 'rgba(239, 238, 238, 0.5)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h1 className="display-5">What next after GPT-5?</h1>
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
        <article>
      
    <h1>GPT-5 and the Future: 2025–Beyond</h1>

    <h2>GPT-5 was recently launched in 2025</h2>
    <ul>
      <li><strong>Capabilities:</strong> GPT-5 can handle complex scientific and technical questions, create software instantly (e.g., TI-83 Snake game in seconds), and significantly improve knowledge work, learning, and creativity. It's more accurate in health advice, with less hallucination, and feels more natural in writing compared to GPT-4.</li>
      <li><strong>Limitations:</strong> Excels at short tasks (3–60 minutes) but doesn't fully replicate deep human skills. It's less effusive, offering more critical feedback, though some users miss the supportive tone of earlier models.</li>
      <li><strong>Integration:</strong> Expected to become more proactive and integrated into daily life (e.g., Gmail, calendars), acting as a companion that anticipates needs and suggests actions.</li>
    </ul>

    <h2>Near-Term Future (By Late 2027)</h2>
    <ul>
      <li><strong>Scientific Discovery:</strong> Sam Altman predicts that by late 2027, most people will agree that large language models like the GPT series will make significant scientific discoveries. This requires further scaling of cognitive power to tackle thousand-hour tasks, such as proving new mathematical theorems.</li>
      <li><strong>Reasoning Improvements:</strong> Building on breakthroughs like the reasoning paradigm seen in models like GPT-o1, future models will enhance reasoning capabilities, potentially matching or exceeding top human experts in specific domains.</li>
    </ul>

    <h2>Short-Term Future (By 2030)</h2>
    <ul>
      <li><strong>Job Impacts:</strong> Half of entry-level white-collar jobs may be replaced, but new roles will emerge, enabling individuals to leverage AI for innovation (e.g., one-person billion-dollar companies). Young people will find unprecedented opportunities to create.</li>
      <li><strong>Truth and Reality:</strong> Discerning real vs. AI-generated content (e.g., viral videos) will rely on cryptographic signatures and evolving societal norms. AI will adapt to cultural and personal contexts via enhanced memory features.</li>
      <li><strong>Health Advancements:</strong> AI will improve health advice significantly, with potential to treat or cure diseases by designing experiments and synthesizing treatments.</li>
    </ul>

    <h2>Mid-Term Future (By 2035)</h2>
    <ul>
      <li><strong>Healthcare Revolution:</strong> AI could cure or treat a significant number of diseases by autonomously hypothesizing, designing experiments, and guiding lab work (e.g., asking GPT-8 to "cure cancer" and iterating through experiments).</li>
      <li><strong>Societal Adaptation:</strong> The rapid pace of change may feel "vertigo-inducing," with job displacement for older workers and new job categories emerging. Society will adapt, with AI becoming as ubiquitous as transistors, integrated into all aspects of life.</li>
    </ul>

    <h2>Longer-Term Future (Beyond 2035)</h2>
    <ul>
      <li><strong>Superintelligence:</strong> Defined as AI surpassing top human researchers and leaders (e.g., better at running OpenAI than Sam or advancing AI research faster than the team). This could be visible "through the fog" within a few years, though exact timelines are unclear.</li>
      <li><strong>Societal Impact:</strong> Kids born today will grow up in a world where AI is smarter than humans, viewing non-AI tech as "stone age." Economic growth and innovation will accelerate, but transitions may disrupt certain job classes, requiring new social contracts or equitable access to AI compute to avoid conflicts.</li>
    </ul>
    </article>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p>&copy; {new Date().getFullYear()} bipinsasi.com | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default ServiceNowPage;
