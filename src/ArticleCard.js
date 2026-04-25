import React from 'react';

export default function ArticleCard({ article, onClick }) {
  return (
    <div className="article-card" onClick={onClick}>
      <div className="article-card-bar" style={{ background: article.color }} />
      <div className="article-card-body">
        <span className="article-tag" style={{ color: article.color }}>{article.tag}</span>
        <div className="article-card-title">{article.title}</div>
        <div className="article-card-excerpt">{article.excerpt}</div>
        <div className="article-footer">
          <div className="article-meta">{article.date} · {article.readTime}</div>
          <button
            className="article-read-more"
            style={{ color: article.color }}
          >
            Read →
          </button>
        </div>
      </div>
    </div>
  );
}
