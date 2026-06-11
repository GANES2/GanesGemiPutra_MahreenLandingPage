import React from 'react';
import { Heart, Globe, Users, Target } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      value: '100+',
      label: 'Ide Kreatif',
      icon: <Users size={24} color="var(--color-white)" />,
      desc: 'Ruang untuk mengembangkan gagasan menjadi karya nyata.'
    },
    {
      value: '34',
      label: 'Provinsi',
      icon: <Globe size={24} color="var(--color-white)" />,
      desc: 'Semangat berkarya yang dapat tumbuh dari seluruh Indonesia.'
    },
    {
      value: '1',
      label: 'Tujuan Indonesia',
      icon: <Target size={24} color="var(--color-white)" />,
      desc: 'Bersama menciptakan dampak positif melalui kreativitas dan teknologi.'
    },
    {
      value: '100%',
      label: 'Semangat Berkarya',
      icon: <Heart size={24} color="var(--color-white)" />,
      desc: 'Komitmen untuk terus belajar, berkembang, dan memberi manfaat.'
    }
  ];

  return (
    <section id="dampak" className="section val-section-complex" style={{ backgroundColor: 'var(--color-navy)' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '4rem',
        }}>
          {/* Left Text */}
          <div style={{ flex: '1 1 400px' }}>
            <div className="val-btn-shape" style={{
              display: 'inline-block',
              padding: '0.4rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--color-white)',
              borderRadius: '0',
              fontWeight: 700,
              fontSize: '0.875rem',
              marginBottom: '1rem',
              borderLeft: '4px solid var(--color-white)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Nilai & Dampak
            </div>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-white)', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              MEMBAWA PERUBAHAN MELALUI <span style={{ color: 'var(--color-gold)' }}>KARYA NYATA</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              Kreativitas yang dipadukan dengan teknologi dapat menjadi awal dari perubahan besar. Melalui karya digital, generasi muda dapat membantu menciptakan solusi yang inklusif, bermanfaat, dan relevan dengan perkembangan zaman.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Mendorong pemanfaatan teknologi untuk pendidikan, kreativitas, dan masyarakat.',
                'Menghadirkan ruang berkarya yang inklusif bagi generasi muda.',
                'Mengembangkan ide menjadi solusi digital yang bermanfaat.',
                'Menumbuhkan semangat kolaborasi untuk Indonesia.'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontWeight: 500, lineHeight: 1.5 }}>
                  <div style={{ minWidth: '8px', height: '8px', backgroundColor: 'var(--color-white)', transform: 'rotate(45deg)', marginTop: '0.4rem' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stats */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {impacts.map((impact, idx) => (
              <div key={idx} className="val-card-shape" style={{
                backgroundColor: 'var(--color-navy-light)',
                borderRadius: '0',
                padding: '1.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                borderLeft: '4px solid var(--color-gold)',
                transform: `translateX(${idx % 2 !== 0 ? '20px' : '0'})`
              }}>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '1rem',
                  borderRadius: '0',
                  transform: 'rotate(45deg)'
                }}>
                  <div style={{ transform: 'rotate(-45deg)' }}>
                    {impact.icon}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-white)', fontFamily: 'var(--font-heading)' }}>{impact.value}</span>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{impact.label}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{impact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
