import React from 'react';
import { Globe, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--color-white)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '1.5rem' }}>
              <div style={{
                color: 'var(--color-white)',
                fontSize: '2.5rem',
                fontFamily: '"Brush Script MT", "Great Vibes", cursive',
                lineHeight: 1,
                paddingBottom: '0.2rem'
              }}>
                M
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontSize: '1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--color-white)'
              }}>
                Mahreen
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Mewadahi semangat generasi muda untuk berkarya, berinovasi, dan menciptakan dampak positif melalui teknologi.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Tautan Cepat</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#tentang" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition-fast)' }}>Tentang Program</a></li>
              <li><a href="#dampak" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition-fast)' }}>Nilai & Dampak</a></li>
              <li><a href="#karya" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition-fast)' }}>Mulai Berkarya</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Dibuat untuk:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
              <li>Mahreen Indonesia Internship Batch 1</li>
              <li>Web Developer</li>
            </ul>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>&copy; {new Date().getFullYear()} Berkarya Untuk Indonesia. Dibuat oleh Ganes Gemi Putra.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
