import React, { useState, useEffect } from 'react';
import './site.css';

const XIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function SiteNav({ page, navTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when page changes
  useEffect(() => { setMenuOpen(false); }, [page]);

  const go = (p) => { navTo(p); setMenuOpen(false); };

  const links = ['home', 'about', 'articles', 'gallery', 'contact'];

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => go('home')}>Bipin Sasi</div>
        <ul className="nav-links">
          {links.map(l => (
            <a key={l} href="#" className={page === l ? 'active' : ''} onClick={(e) => { e.preventDefault(); go(l); }}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
          <a
            href="https://x.com/BipinSasi"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <XIcon size={12} /> @BipinSasi
          </a>
        </ul>
        <div
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>
        <button className="nav-drawer-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a
            key={l}
            href="#"
            className={page === l ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); go(l); }}
          >
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
        <a href="https://x.com/BipinSasi" target="_blank" rel="noreferrer"
           style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
          <XIcon size={18} /> @BipinSasi
        </a>
      </div>
    </>
  );
}
