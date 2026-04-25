import React from 'react';

const XIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ArticleFullPage({ article, goBack }) {
  return (
    <div className="page-top-pad" style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="article-full">
          <button className="back-btn" onClick={goBack}>← Back to Articles</button>
          <span className="article-full-tag" style={{ color: article.color }}>{article.tag}</span>
          <h1 className="article-full-title">{article.title}</h1>
          <div className="article-full-meta">
            <span>{article.date}</span>
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>·</span>
            <span>{article.readTime}</span>
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>·</span>
            <span>By Bipin Sasi</span>
          </div>
          <div
            className="article-full-body"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
          <div className="article-author-bar">
            <div className="author-avatar">BS</div>
            <div>
              <div className="author-name">Bipin Sasi</div>
              <div className="author-role">Director &amp; Head of Web Capabilities · Merck KGaA</div>
            </div>
            <a
              href="https://x.com/BipinSasi"
              target="_blank"
              rel="noreferrer"
              className="author-x-link"
            >
              <XIcon /> @BipinSasi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
