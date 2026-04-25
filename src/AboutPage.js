import React from 'react';

const expertise = [
  {
    icon: '🌐',
    t: 'Web Platform Management',
    d: 'Adobe Experience Manager, web security, identity management, analytics, and full lifecycle of web and mobile services at enterprise scale.'
  },
  {
    icon: '🤖',
    t: 'AI & Automation',
    d: 'M365 Copilot, Copilot Studio, Dataverse, Power Platform, K2 / Nintex workflow automation, and citizen development governance.'
  },
  {
    icon: '☁️',
    t: 'Cloud Architecture',
    d: 'Microsoft Azure, Google Cloud Platform, multi-tier infrastructure design, scalability, security, and compliance.'
  },
  {
    icon: '🔗',
    t: 'Enterprise Integration',
    d: 'End-to-end system integrations, legacy migrations (Lotus Notes → modern platforms), API architecture, SAP, ServiceNow, SharePoint.'
  },
  {
    icon: '👥',
    t: 'People Leadership',
    d: '~30-person team across multiple disciplines, D&I programmes, mentorship, coaching, and Management Committee representation.'
  },
  {
    icon: '🛡️',
    t: 'Governance & Risk',
    d: 'IT Architecture Reviews, SAP access reviews, strategic risk evaluations, change management, and enterprise security posture.'
  },
];

const timeline = [
  {
    date: 'May 2025 – Present',
    role: 'Director & Head of Web Capabilities',
    co: 'Merck KGaA, Darmstadt, Germany',
    detail: 'Leads ~30-person team for AEM, web security, analytics, identity management, and lifecycle of web and mobile services.'
  },
  {
    date: 'Mar 2019 – Apr 2025',
    role: 'Director & Head of Infrastructure Automation Engineering',
    co: 'Merck KGaA, Darmstadt, Germany',
    detail: 'Drove automation strategy across K2, SharePoint, ServiceNow, and Power Platform. Led AI adoption (M365 Copilot, Copilot Studio, Dataverse).'
  },
  {
    date: 'Jun 2018 – Nov 2023',
    role: 'IT Manager – Development & Support',
    co: 'Merck KGaA, Darmstadt, Germany',
    detail: 'Managed development and support function across multiple enterprise application portfolios.'
  },
  {
    date: 'Apr 2016 – 2023',
    role: 'Application Manager – GCP',
    co: 'Merck KGaA',
    detail: 'Full platform ownership of K2, overseeing workflow governance, upgrades, and deployment.'
  },
  {
    date: 'Jul 2015 – 2016',
    role: 'Senior IT Analyst – GCP',
    co: 'Sigma-Aldrich (now Merck)',
    detail: 'Enterprise applications support and development before the Merck–Sigma-Aldrich merger.'
  },
];

const values = [
  { n: '01', t: 'Scalable Teams', d: 'Build teams that don\'t need you. Create systems, not dependencies.' },
  { n: '02', t: 'Inclusive by Design', d: 'Diversity isn\'t a programme — it\'s architecture. Design for it deliberately.' },
  { n: '03', t: 'Technology with Purpose', d: 'Every platform, every automation must solve a real human or business problem.' },
  { n: '04', t: 'Continuous Humility', d: 'The best leaders remain the most curious. Stay a student of your craft.' },
];

export default function AboutPage() {
  return (
    <div className="page-top-pad">
      {/* ── HERO SECTION ── */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <div className="about-hero-left">
            <div className="section-label">Background</div>
            <h1 className="about-hero-title">
              About <em>Bipin</em>
            </h1>
            <p className="about-hero-subtitle">
              Director & Head of Web Capabilities at Merck KGaA
            </p>
          </div>
          <div className="about-hero-right">
            <div className="about-hero-image-wrapper">
              <img
                src="/images/bipinsasi.png"
                alt="Bipin Sasi"
                className="about-hero-image"
              />
              <div className="about-hero-image-ring" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BIO SECTION ── */}
      <section className="section section-alt">
        <div className="about-bio-grid">
          <div className="about-bio-text">
            <div className="section-label">My Story</div>
            <p>
              I am <strong>Director and Head of Web Capabilities at Merck KGaA</strong> — one of the world's
              oldest science and technology companies, founded in 1668. In this role, I lead a team of
              <strong> ~30 professionals</strong> responsible for enterprise web technologies including
              Adobe Experience Manager, web security, analytics, identity management, and the full lifecycle
              of web and mobile services.
            </p>
            <p>
              My journey at Merck spans <strong>11 years</strong> — beginning as a Senior IT Analyst at Sigma-Aldrich,
              a US-based firm later acquired by Merck, and growing through roles in infrastructure automation
              leadership into my current position as Director of Web Capabilities. This trajectory has been
              defined by a consistent approach: translate complex technical challenges into practical, scalable
              solutions that deliver genuine, measurable business value.
            </p>
            <p>
              My technical roots are in <strong>K2 / Nintex workflow automation, Power Platform, SharePoint,
              ReactJS, Java, Microsoft Azure, and Google Cloud Platform</strong>. Over the past several years,
              I have led enterprise AI adoption — including M365 Copilot, Copilot Studio, and Dataverse — and
              served as Integration Architect for cross-system migrations from legacy platforms such as Lotus Notes
              to modern enterprise environments.
            </p>
            <p>
              Alongside the technical work, I remain deeply committed to <strong>inclusive leadership</strong>. I
              have co-led Diversity & Inclusion programmes across India and served on the Management Committee
              at Merck IT Center Bangalore. My belief is that the strongest teams are built on psychological safety,
              diverse perspectives, and deliberate people development — not just technical excellence.
            </p>
            <p>
              I hold a <strong>Master's degree in Computer Science</strong> and occasionally share leadership
              thinking through writing, including a published book on leadership. I am based in
              <strong> Bengaluru, Karnataka, India</strong>, and am fluent in English, Hindi, and Malayalam.
            </p>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-number">15+</div>
              <div className="about-stat-label">Years in IT</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">30+</div>
              <div className="about-stat-label">System Integrations</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">~200+</div>
              <div className="about-stat-label">Automations</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">Apps</div>
              <div className="about-stat-label">200+</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE SECTION ── */}
      <section className="section">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">Core Expertise</h2>
        <p className="section-subtitle">Six pillars of capability that drive enterprise transformation.</p>
        <div className="expertise-grid">
          {expertise.map((e, i) => (
            <div className="expertise-card" key={e.t} style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="expertise-icon">{e.icon}</div>
              <div className="expertise-card-title">{e.t}</div>
              <div className="expertise-card-desc">{e.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE SECTION ── */}
      <section className="section section-dark">
        <div className="section-label" style={{ color: 'var(--gold)' }}>Journey</div>
        <h2 className="section-title section-title-light">Career Timeline</h2>
        <p className="section-subtitle section-subtitle-light">A decade-plus of growth, impact, and leadership.</p>
        <div className="about-timeline">
          {timeline.map((t, i) => (
            <div className="about-timeline-item" key={t.role} style={{ animationDelay: `${0.15 * i}s` }}>
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <div className="about-timeline-date">{t.date}</div>
                <div className="about-timeline-role">{t.role}</div>
                <div className="about-timeline-company">{t.co}</div>
                {t.detail && (
                  <div className="about-timeline-detail">{t.detail}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section className="section section-alt">
        <div className="section-label">Philosophy</div>
        <h2 className="section-title">What I Believe About Leadership</h2>
        <p className="section-subtitle">Principles that guide how I build teams and drive impact.</p>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={v.n} style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="value-number">{v.n}</div>
              <div className="value-title">{v.t}</div>
              <div className="value-desc">{v.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
