import React from 'react';

const galleryPhotos = [
  {
    src: '/images/wil.jpeg',
    title: 'Women in Leadership',
    desc: 'Actively participated in the Women in Leadership committee, promoting gender diversity and leadership development.'
  },
  {
    src: '/images/event.jpeg',
    title: 'Leadership in Diversity & Inclusion',
    desc: 'Co-led the Diversity and Inclusion initiative at Merck India, focusing on the inclusion of People with Disabilities.'
  },
  {
    src: '/images/Matthias.JPG',
    title: 'With IT leadership during townhall',
    desc: 'With Sr Vice President Merckgroup Dr Matthias Gesselle and Global Director Gaurav Bhatnagar.'
  },
  {
    src: '/images/gartner.PNG',
    title: 'Gartner Event',
    desc: 'Round table meeting at Gartner event which was showcased later on their website.'
  }
];

export default function GalleryPage() {
  return (
    <div className="page-top-pad">
      <section className="section">
        <div className="section-label">Moments &amp; Events</div>
        <h1 className="section-title">Gallery</h1>
        <p className="section-subtitle">
          A collection of highlights from leadership summits, diversity &amp; inclusion initiatives, and enterprise technology events.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3.5rem'
        }}>
          {galleryPhotos.map((photo, index) => (
            <div key={index} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  color: 'var(--navy)',
                  fontSize: '1.2rem',
                  marginBottom: '0.75rem',
                  fontWeight: 700
                }}>
                  {photo.title}
                </h3>
                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
