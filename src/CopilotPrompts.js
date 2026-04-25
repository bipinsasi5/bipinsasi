import React from 'react';
import './Profile.css';
import { Navbar, Container, Nav, Row, Col, Card, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Profile() {
  const ShareIcons = () => (
    <div className="d-flex justify-content-center gap-3 my-4">
      <a href="https://twitter.com/intent/tweet?text=Check+this+article+on+M365+Copilot!&url=https://bipinsasi.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://bipinsasi.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://wa.me/?text=https://bipinsasi.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={24} />
      </a>
    </div>
  );

  return (
    <>
      <header className="position-relative">
        <Image src="images/gartner.jpg" alt="Bipin Sasi" className="w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ backgroundColor: 'rgba(246, 241, 241, 0.5)', padding: '1rem', borderRadius: '0.5rem' }}>
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
        <h1 className="text-center mb-5">The Art of Prompting with Microsoft 365 Copilot</h1>

        <ShareIcons />

        <section className="mb-5">
          <p>Microsoft 365 Copilot is transforming workplace productivity by integrating AI-powered assistance into everyday tools like Word, Excel, PowerPoint, Outlook, and Teams. However, the key to unlocking its full potential lies in mastering the art of prompting. A well-crafted prompt can make the difference between a generic response and a tailored, actionable output that streamlines your workflow.</p>

          <p>This article explores the principles of effective prompting, provides real-time examples based on current capabilities, and highlights upcoming features announced at Microsoft Build 2025 that promise to enhance Copilot’s functionality.</p>
        </section>

        <section className="mb-5">
          <h2>The Fundamentals of Prompting</h2>
          <p>Prompting is the process of giving clear, specific instructions to Copilot to achieve desired outcomes. A good prompt consists of four key elements:</p>
          <ul>
            <li><strong>Goal:</strong> Clearly state what you want Copilot to do (e.g., create, summarize, analyze).</li>
            <li><strong>Context:</strong> Provide background information to ensure the response is relevant to your needs.</li>
            <li><strong>Expectations:</strong> Specify the tone, format, or level of detail you want in the output.</li>
            <li><strong>Source:</strong> Reference specific files, apps, or data sources (e.g., emails, SharePoint documents).</li>
          </ul>
          <p>Microsoft’s Prompt Gallery and Skilling Center offer sample prompts and training to help users refine their skills.</p>
        </section>

        <section className="mb-5">
          <h2>Real-Time Examples of Effective Prompting</h2>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>1. Drafting a Job Description in Word</Card.Title>
              <Card.Text><strong>Prompt:</strong> Draft a job description for a Level 1 Software Engineer... (rest of detailed use case continues here)</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>2. Summarizing a Long Email Thread in Outlook</Card.Title>
              <Card.Text><strong>Prompt:</strong> Summarize all emails from the past week in the ‘Project X’ thread... (summary output)</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>3. Creating a Presentation in PowerPoint</Card.Title>
              <Card.Text><strong>Prompt:</strong> Create a 5-slide presentation on time management for hybrid workers...</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>4. Analyzing Data in Excel</Card.Title>
              <Card.Text><strong>Prompt:</strong> Analyze the sales data in ‘Q2_Sales.xlsx’ from OneDrive...</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>5. Catching Up on a Teams Meeting</Card.Title>
              <Card.Text><strong>Prompt:</strong> Summarize the ‘Weekly Team Sync’ meeting from June 10, 2025...</Card.Text>
            </Card.Body>
          </Card>
        </section>

        <section className="mb-5">
          <h2>Tips for Better Prompting</h2>
          <ul>
            <li><strong>Be Specific:</strong> Refine general prompts to include tone, audience, and outcome.</li>
            <li><strong>Iterate:</strong> Adjust your prompt based on the output.</li>
            <li><strong>Use Data Sources:</strong> Reference files or folders in OneDrive/SharePoint.</li>
            <li><strong>Leverage Shortcuts:</strong> Use the Copilot key or drag-and-drop files.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>Upcoming Features from Microsoft Build 2025</h2>
          <ul>
            <li><strong>Copilot Tuning:</strong> Train models with your own data and workflows (June 2025).</li>
            <li><strong>Multi-Agent Orchestration:</strong> Coordinate tasks across departments using specialized agents.</li>
            <li><strong>Agent Store:</strong> Browse and deploy ready-made agents like Analyst or Legal Assistant.</li>
            <li><strong>Copilot Notebooks:</strong> Real-time summarization and audio overviews in OneNote.</li>
            <li><strong>Real-Time Voice:</strong> Voice-command based task prompting (Mid-2025).</li>
            <li><strong>Computer Use in Agents:</strong> Automate desktop and web tasks using plain prompts.</li>
          </ul>
        </section>

        <section className="mb-5">
        
          <p>Mastering the art of prompting with Microsoft 365 Copilot is about clarity, context, and iteration. By leveraging its integration with Microsoft 365 apps and grounding prompts in organizational data, users can achieve remarkable productivity gains.</p>
          <p>To get started, explore the <a href="https://www.microsoft.com/en-us/microsoft-365/copilot" target="_blank" rel="noopener noreferrer">Copilot Prompt Gallery</a> or try it out via <a href="https://m365copilot.com" target="_blank" rel="noopener noreferrer">M365Copilot.com</a>.</p>
        </section>

        <ShareIcons />
      </main>

      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} bipinsasi.com | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Profile;
