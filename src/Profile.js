import React, { useState } from 'react';
import './Profile.css';
import { Navbar, Container, Nav, Row, Col, Card, Image, Accordion, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Profile() {
  const [activeKey, setActiveKey] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
 
  const handleImageClick = (img, title) => {
    setSelectedImage(img);
    setSelectedTitle(title);
    setModalShow(true);
  };
  const projects = [
    {
      id: 1,
      title: "M365 Copilot use cases ",
      description: "There are couple of use cased where i have used M365 copilot to leverage AI in daya to day work, some prompts and probing which mighht be of your help as well",
      imageUrl: "images/copilot.gif",
      imageAlt: "M365 Copilot Logo",
      projectLink: "/copilot"
    },
    {
      id: 2,
      title: "What new features to be expected?",
      description: "GPT-5 can handle complex scientific and technical questions, create software instantly , What can be expected beyond 2025?",
      imageUrl: "images/gptfuture.png",
      imageAlt: "GPT-5",
      projectLink: "/servicenow"
    },
    {
      id: 3,
      title: "The future of GPT-5 and the Future OPEN AI is Building",
      description: " The launch of GPT-5, has started the reace toward superintelligence, and what this profound technological shift means for all of us—from kids born today to seasoned professionals navigating career changes",
      imageUrl: "images/gpt5.png",
      projectLink: "/jira"
    },
    {
      id: 4,
      title: "AI Prompt Injection Threats",
      description: "Understand how attackers manipulate LLMs like ChatGPT through prompt injection attacks, with real-world examples and security best practices.",
      imageUrl: "images/bipin.png", // Use a placeholder or your image
      imageAlt: "Prompt Injection",
      projectLink: "/PromptInjectioninAI" // Make sure this route matches your route setup
    }
    
  ];

  const collapsibleData = [
    {
      id: 1,
      title: "What should we do with the Rapid pace of AI?",
      description: "When the river of progress flows faster than ever before, we must not merely build stronger boats—we must deepen our wisdom to steer them. Technology may evolve in moments, but humanity must evolve in meaning."
    },
    {
      id: 2,
      title: "If artificial intelligence were to surpass the abilities of its own creators, what would that moment mean for humanity’s purpose and responsibility?",
      description: "When the mind we create begins to outpace the mind that made it, we stand not at the end of knowledge, but at the threshold of our humility. What was once fiction is now the mirror we must dare to look into—seeking not only what we can build, but why we build it.."
    },
    {
      id: 3,
      title: "Standing at the edge of an era where possibilities seem limitless, how should today’s youth harness the unique opportunities before them to shape a future worth inheriting?",
      description: "Every era gifts its youth a frontier—but today’s horizon is infinite and unfolding at light speed. The luck is not in living now, but in daring to dream beyond the world you inherit, and having the courage to build it."
    },
    {
      id: 4,
      title: "In a world where ideas can be made real almost as quickly as they are conceived, how should we channel this creative power to serve beauty, truth, and the greater good?",
      description: "When imagination gains the wings of lightning, creation is no longer a distant shore—it is the breath between thought and being. Let us then shape with care, for what we dream, we can now make real before the echo fades."
    }
    ,
    {
      id: 5,
      title: " How to manage GEN-Z in corporate with current challenges? ",
      description: "When we meet a new generation in the workplace, we are not meeting a problem to be solved—we are meeting a mirror of the times. Gen‑Z brings speed, digital fluency, and a hunger for meaning. The challenge for leaders is not to slow them down, but to help them deepen their roots while they grow quickly. In a corporation, harmony is built when elders offer the wisdom of patience, and youth offer the courage of new vision. This is not about bending one to fit the other, but weaving the two into a fabric strong enough for the storms of change. If we listen deeply, lead with clarity of purpose, and create space for them to take ownership, we will find that the very traits that seem challenging today may be the seeds of resilience and innovation tomorrow."
    }

  ];

  const leadershipTips = [
    {
      id: 1,
      title: "Lead by Example",
      description: "A good leader sets the standard for their team by demonstrating the behavior and work ethic they expect from others."
    },
    {
      id: 2,
      title: "Communicate Effectively",
      description: "Clear and open communication is key to building trust and ensuring everyone is aligned with the team's goals."
    },
    {
      id: 3,
      title: "Empower Your Team",
      description: "Give your team members the autonomy and resources they need to succeed. Trust them to make decisions and take ownership of their work."
    },
    {
      id: 4,
      title: "Be Adaptable",
      description: "In a fast-changing world, leaders must be flexible and open to new ideas. Adaptability is crucial for navigating challenges and seizing opportunities."
    },
    {
      id: 5,
      title: "Focus on Growth",
      description: "Invest in your team's development by providing opportunities for learning and growth. A growing team is a motivated team."
    },
    {
      id: 6,
      title: "Build Relationships",
      description: "Strong relationships are the foundation of effective leadership. Take the time to connect with your team on a personal level."
    }
  ];

  const book = {
    title: "Leadership Puzzles: Challenges and Solutions for Budding Leaders",
    description: "This book provides practical insights and solutions to common leadership challenges, helping budding leaders navigate their journey effectively.",
    imageUrl: "https://m.media-amazon.com/images/I/31ov3gs4IML._SY445_SX342_.jpg",
    amazonLink: "https://www.amazon.in/Leadership-Puzzles-Challenges-Solutions-Budding-ebook/dp/B0BQPJXFJK"
  };

  const galleryItems = [
    { src: "images/m2.jpg", title: " Candid moments with our SVP " },
    { src: "images/m3.jpg", title: " 10 years with Merck " },
    { src: "images/wil.jpeg", title: "Women in Leadership contribution award" },
    { src: "images/gartner.jpg", title: "Gartner Summit 2024" },
    { src: "images/CH4_2464.JPG", title: "Profile Pic" },
    { src: "images/bipin.png", title: "" },
    { src: "images/1.jpg", title: "Candid moments with our SVP" }
  ];
  const videoUrl = "images/insead.mp4";

  return (
    <>
      <header className="position-relative">
        <Image src="images/bipin.png" alt="Bipin Sasi" className="w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ backgroundColor: 'rgba(224, 213, 213, 0.5)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h1 className="display-4">Hi, I’m Bipin Sasi </h1>
          <p>(Bih-pin Shuh-shee) /ˈbɪpɪn ˈʃəʃi/</p>
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
        {/* Project Cards */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map(project => (
            <Col key={project.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={project.imageUrl} alt={project.imageAlt} className="img-fluid w-50 mx-auto d-block" />
                <Card.Body>
                  <Card.Title className="text-center">{project.title}</Card.Title>
                  <Card.Text className="text-justify">{project.description}</Card.Text>
                  <div className="text-center">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5">
          <h1 className="text-center text-dark">Words of Wisdom</h1>
        </Row>
        <Row>
          <Col>
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
              {collapsibleData.map((item) => (
                <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.description}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* Leadership Tips */}
        <Row className="mt-5">
          <h1 className="text-center text-dark">Leadership Tips</h1>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4">
          {leadershipTips.map(tip => (
            <Col key={tip.id} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title className="text-center">{tip.title}</Card.Title>
                  <Card.Text className="text-justify">{tip.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Book Section */}
        <Row className="mt-5">
          <h1 className="text-center text-dark">My Book</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={book.imageUrl} alt={book.title} className="img-fluid w-75 mx-auto d-block mt-3" style={{ maxHeight: '300px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title className="text-center">{book.title}</Card.Title>
                <Card.Text className="text-justify">{book.description}</Card.Text>
                <div className="text-center">
                  <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy on Amazon</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Photo and Video Gallery */}
        <Row className="mt-5">
        <h1 className="text-center text-dark">Photo & Video Gallery</h1>
      </Row>
      <Row className="g-4">
        {galleryItems.map((item, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow hover-shadow" onClick={() => handleImageClick(item.src, item.title)} style={{ cursor: 'pointer' }}>
              <Card.Img
                variant="top"
                src={item.src}
                alt={`Gallery ${index + 1}`}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <Card.Body>
                <Card.Title className="text-center">{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="shadow">
            <div className="ratio ratio-16x9">
              <video controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>
        </Col>
      </Row>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <img src={selectedImage} alt="Enlarged view" className="img-fluid w-100" style={{ objectFit: 'contain' }} />
        </Modal.Body>
      </Modal>
      </main>
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
      <footer className="bg-dark text-white text-center p-4 mt-5">
        <p>&copy; 2025 bipinsasi.com | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Profile;
