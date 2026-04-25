import React, { useState, useEffect } from 'react';
import './index.css';
import './site.css';

import SiteNav from './SiteNav';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ArticlesPage from './ArticlesPage';
import ArticleFullPage from './ArticleFullPage';
import ContactPage from './ContactPage';
import GalleryPage from './GalleryPage';

const XIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function App() {
  const [page, setPage] = useState('home');
  const [activeArticle, setActiveArticle] = useState(null);

  const navTo = (p) => {
    setPage(p);
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArticle = (a) => {
    setActiveArticle(a);
    setPage('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update document title
  useEffect(() => {
    const titles = {
      home: 'Bipin Sasi — Director & Head of Web Capabilities',
      about: 'About — Bipin Sasi',
      articles: 'Articles — Bipin Sasi',
      gallery: 'Gallery — Bipin Sasi',
      contact: 'Contact — Bipin Sasi',
      article: activeArticle ? `${activeArticle.title} — Bipin Sasi` : 'Article — Bipin Sasi',
    };
    document.title = titles[page] || 'Bipin Sasi';
  }, [page, activeArticle]);

  return (
    <>
      {/* SEO meta */}
      <SiteNav page={page} navTo={navTo} />

      <main>
        {page === 'home' && <HomePage navTo={navTo} openArticle={openArticle} />}
        {page === 'about' && <AboutPage />}
        {page === 'articles' && <ArticlesPage openArticle={openArticle} />}
        {page === 'gallery' && <GalleryPage />}
        {page === 'contact' && <ContactPage />}
        {page === 'article' && activeArticle && (
          <ArticleFullPage article={activeArticle} goBack={() => navTo('articles')} />
        )}
      </main>

      <footer className="footer">
        <div className="footer-logo">Bipin Sasi</div>
        <div className="footer-links">
          <a href="mailto:bipin514@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/bipinsasi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/BipinSasi" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <XIcon /> @BipinSasi
          </a>
        </div>
        <div className="footer-copy">© 2026 · Bengaluru, India</div>
      </footer>
    </>
  );
}
