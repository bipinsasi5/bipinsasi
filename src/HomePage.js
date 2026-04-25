import React from 'react';
import { ARTICLES } from './articles';
import ArticleCard from './ArticleCard';
import BinaryRain from './BinaryRain';

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const highlights = [
  {
    icon: '🏗️',
    title: 'Web Platforms',
    desc: 'Enterprise-scale Adobe Experience Manager, web security, analytics & identity management.'
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    desc: 'M365 Copilot, Copilot Studio, Power Platform & citizen development governance.'
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture',
    desc: 'Azure & GCP infrastructure design, scalability, security & compliance.'
  },
  {
    icon: '👥',
    title: 'People Leadership',
    desc: '~Developing Talents, D&I programmes, mentorship & Management Committee representation.'
  },
];

export default function HomePage({ navTo, openArticle }) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <BinaryRain />
        <div className="hero-geo">
          <svg width="700" height="700" style={{ top: '-120px', right: '-150px' }} viewBox="0 0 700 700">
            <circle cx="350" cy="350" r="320" fill="none" stroke="#c9a84c" strokeWidth="1" />
            <circle cx="350" cy="350" r="230" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            <circle cx="350" cy="350" r="140" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="350" y1="30" x2="350" y2="670" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="30" y1="350" x2="670" y2="350" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="600" y2="600" stroke="#c9a84c" strokeWidth="0.3" />
            <line x1="600" y1="100" x2="100" y2="600" stroke="#c9a84c" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="hero-left">
          <div className="hero-eyebrow">Director & Head of Web Capabilities · Merck KGaA</div>
          <h1 className="hero-name">
            Bipin<br />
            <em>Sasi</em>
          </h1>
          <p className="hero-tagline">
            Technology leader. Platform strategist.<br />
            Builder of teams that outlast.
          </p>
          <p className="hero-desc">
            15+ years shaping enterprise technology at Merck KGaA — from infrastructure
            automation to AI integration, web platforms, and inclusive leadership across India.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navTo('about')}>About Me</button>
            <button className="btn-outline" onClick={() => navTo('articles')}>Read Articles</button>
            <a
              className="btn-outline"
              href="https://x.com/BipinSasi"
              target="_blank"
              rel="noreferrer"
            >
              <XIcon /> @BipinSasi
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual" />
          <div className="hero-right-content">
            <div className="hero-profile-wrapper">
              <img
                src="/images/bipinsasi.png"
                alt="Bipin Sasi"
                className="hero-profile-img"
              />
              <div className="hero-profile-ring" />
              <div className="hero-profile-ring hero-profile-ring-2" />
            </div>
            <div className="hero-card">
              <div className="hero-stat">
                <div className="hero-stat-num">15+</div>
                <div className="hero-stat-label">Years in enterprise IT leadership</div>
              </div>
              <div className="hero-stat" style={{ marginBottom: 0 }}>
                <div className="hero-stat-num">11</div>
                <div className="hero-stat-label">Years at Merck KGaA</div>
              </div>
              <hr className="hero-divider" />
              <div className="hero-badges">
                <span className="hero-badge">Adobe Experience Manager</span>
                <span className="hero-badge">Power Platform</span>
                <span className="hero-badge">M365 Copilot</span>
                <span className="hero-badge">Azure & GCP</span>
                <span className="hero-badge">ServiceNow</span>
                <span className="hero-badge">K2 / Nintex</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section section-alt">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">Core Capabilities</h2>
        <p className="section-subtitle">Driving enterprise transformation across four key pillars.</p>
        <div className="home-highlights-grid">
          {highlights.map((h, i) => (
            <div className="home-highlight-card" key={h.title} style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="home-highlight-icon">{h.icon}</div>
              <div className="home-highlight-title">{h.title}</div>
              <div className="home-highlight-desc">{h.desc}</div>
              <div className="home-highlight-bar" />
            </div>
          ))}
        </div>
      </section>

      {/* ── ARTICLES PREVIEW ── */}
      <section className="section">
        <div className="section-label">Latest Thinking</div>
        <div className="home-articles-header">
          <h2 className="section-title">Articles & Insights</h2>
          <button
            className="article-read-more home-view-all-btn"
            onClick={() => navTo('articles')}
          >
            View all →
          </button>
        </div>
        <p className="section-subtitle">On leadership, enterprise technology, and the intersection of the two.</p>
        <div className="articles-grid">
          {ARTICLES.slice(0, 3).map(a => (
            <ArticleCard key={a.id} article={a} onClick={() => openArticle(a)} />
          ))}
        </div>
      </section>

      {/* ── RECOGNITION QUOTE ── */}
      <section className="section section-dark">
        <div className="section-label" style={{ color: 'var(--gold)' }}>Recognition</div>
        <h2 className="section-title section-title-light">What Leadership Says</h2>
        <div className="home-quote-box">
          <div className="home-quote-marks">"</div>
          <p className="home-quote-text">
            Bipin has played a pivotal role in building our in-house application development
            capabilities. His leadership, deep hands-on expertise, and ability to translate
            complex problems into practical, scalable solutions have been central to building
            the foundation we stand on today. This move reflects the trust placed in him and
            the enterprise-level impact he is expected to make going forward.
          </p>
          <div className="home-quote-author">Senior Leadership · Merck Group IT · April 2026</div>
        </div>
      </section>
    </>
  );
}
