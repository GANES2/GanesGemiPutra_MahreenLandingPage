import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'var(--transition-normal)',
      backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      padding: isScrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
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

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-menu">
          <style>{`
            @media (max-width: 768px) {
              .desktop-menu { display: none !important; }
            }
          `}</style>
          <a href="#tentang" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.8)', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-white)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}>Tentang</a>
          <a href="#dampak" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.8)', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-white)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}>Nilai & Dampak</a>
          <a href="#karya" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
            Mulai Berkarya
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" style={{ cursor: 'pointer', color: 'var(--color-white)' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <style>{`
            @media (min-width: 769px) {
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-navy)',
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <a href="#tentang" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: 400, color: 'var(--color-white)' }}>Tentang</a>
          <a href="#dampak" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: 400, color: 'var(--color-white)' }}>Nilai & Dampak</a>
          <a href="#karya" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-outline" style={{ textAlign: 'center', borderColor: 'rgba(255,255,255,0.3)' }}>Mulai Berkarya</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
