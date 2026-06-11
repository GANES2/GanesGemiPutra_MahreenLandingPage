import React from 'react';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section id="karya" className="section" style={{
      backgroundColor: 'var(--color-navy-light)',
      backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
      padding: '10rem 0 8rem 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '2px solid rgba(255,255,255,0.05)',
      borderBottom: '2px solid rgba(255,255,255,0.05)'
    }}>
      {/* Decorative Elements */}
      <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', border: '1px solid rgba(255,255,255,0.1)', transform: 'rotate(45deg)' }}></div>
      <div style={{ position: 'absolute', bottom: '-80px', right: '-20px', width: '300px', height: '300px', border: '1px solid rgba(255,255,255,0.1)', transform: 'rotate(45deg)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', marginBottom: '1.5rem', letterSpacing: '2px' }}>
            JANGAN BIARKAN IDEMU HANYA MENJADI WACANA
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
            Indonesia membutuhkan lebih banyak generasi muda yang berani menciptakan solusi, bukan hanya menunggu perubahan. Gunakan kreativitasmu, manfaatkan teknologi, dan mulailah memberikan kontribusi nyata bagi masyarakat.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn val-btn-shape" style={{ 
              backgroundColor: 'var(--color-white)', 
              color: 'var(--color-navy)',
              padding: '1.2rem 3rem', 
              fontSize: '1.2rem', 
              borderLeft: '4px solid var(--color-gold)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-white)'; }}>
              <Rocket size={24} style={{ marginRight: '0.5rem' }} />
              MULAI BERKARYA SEKARANG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
