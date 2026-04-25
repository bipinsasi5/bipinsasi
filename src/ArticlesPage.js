import React, { useState } from 'react';
import { ARTICLES } from './articles';
import ArticleCard from './ArticleCard';

const FILTERS = ['All', 'Leadership', 'Technology'];

export default function ArticlesPage({ openArticle }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? ARTICLES : ARTICLES.filter(a => a.tag === filter);

  return (
    <div className="page-top-pad">
      <section className="section">
        <div className="section-label">Writing</div>
        <h1 className="section-title">Articles &amp; Insights</h1>
        <p className="section-subtitle">
          Thoughts on enterprise technology, AI, and what it means to lead in a rapidly shifting landscape.
        </p>

        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="articles-grid" style={{ marginTop: '2.5rem' }}>
          {filtered.map(a => (
            <ArticleCard key={a.id} article={a} onClick={() => openArticle(a)} />
          ))}
        </div>
      </section>
    </div>
  );
}
