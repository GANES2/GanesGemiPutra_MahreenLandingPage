import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--color-navy)',
      backgroundImage: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.03), transparent 40%)',
      overflow: 'hidden',
      paddingTop: '80px' // for navbar
    }}>
      {/* Background Shapes */}
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: '300px', height: '300px', background: 'rgba(255, 255, 255, 0.05)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '250px', height: '250px', background: 'rgba(255, 255, 255, 0.03)', filter: 'blur(80px)', borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="animate-fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
            <Sparkles size={16} />
            <span>Mahreen Indonesia Internship Batch 1</span>
          </div>
          
          <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'var(--color-white)', marginBottom: '1rem', animationDelay: '0.1s', lineHeight: 1.1, textTransform: 'uppercase' }}>
            Saatnya <br/><span className="text-gradient">Berkarya</span>
          </h1>
          <h2 className="animate-fade-in-up" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-gold)', marginBottom: '2rem', animationDelay: '0.15s', letterSpacing: '4px' }}>
            Untuk Indonesia
          </h2>
          
          <p className="animate-fade-in-up" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', animationDelay: '0.2s', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 3rem auto', fontFamily: 'var(--font-body)' }}>
            Kami mengajak generasi muda untuk memanfaatkan kreativitas dan teknologi dalam menciptakan inovasi yang berdampak positif bagi masyarakat. Melalui ide, kolaborasi, dan semangat berkarya, setiap anak muda dapat menjadi bagian dari perubahan untuk Indonesia.
          </p>
          
          <div className="animate-fade-in-up" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', animationDelay: '0.3s' }}>
            <style>{`
              @media (max-width: 480px) {
                .hero-btns { flex-direction: column; width: 100%; }
                .hero-btns .btn { width: 100%; }
              }
            `}</style>
            <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#karya" className="btn btn-primary val-btn-shape">
                Wujudkan Ide <ArrowRight size={20} />
              </a>
              <a href="#tentang" className="btn btn-outline val-btn-shape">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
