import React from 'react';
import { Lightbulb, Code, Target } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Lightbulb size={32} color="var(--color-gold)" />,
      title: 'KREATIVITAS TANPA BATAS',
      desc: 'Setiap ide memiliki potensi untuk berkembang menjadi karya yang bermakna. Kreativitas menjadi langkah awal untuk menciptakan solusi yang relevan dan berdampak.'
    },
    {
      icon: <Code size={32} color="var(--color-gold)" />,
      title: 'OPTIMALISASI TEKNOLOGI',
      desc: 'Teknologi dapat menjadi alat untuk mempercepat perubahan. Dengan pemanfaatan digital yang tepat, ide dapat diwujudkan menjadi solusi yang lebih efektif dan mudah diakses.'
    },
    {
      icon: <Target size={32} color="var(--color-gold)" />,
      title: 'FOKUS PADA SOLUSI',
      desc: 'Karya yang baik bukan hanya menarik secara visual, tetapi juga mampu menjawab kebutuhan dan memberikan manfaat nyata bagi masyarakat Indonesia.'
    }
  ];

  return (
    <section id="tentang" className="section val-section-notch-br" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-white)', marginBottom: '1rem', letterSpacing: '2px' }}>TENTANG PROGRAM</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Program Mahreen Indonesia Internship Batch 1 menjadi ruang belajar dan kolaborasi bagi generasi muda untuk mengembangkan potensi, kreativitas, serta kemampuan teknologi. Melalui program ini, peserta diajak untuk tidak hanya memahami dunia digital, tetapi juga menciptakan karya yang bermanfaat bagi masyarakat.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {cards.map((card, idx) => (
            <div key={idx} className="val-card-shape" style={{
              backgroundColor: 'var(--color-navy-light)',
              padding: '2.5rem 2rem',
              borderRadius: '0',
              border: '1px solid rgba(255,255,255,0.05)',
              borderLeft: '4px solid var(--color-white)',
              transition: 'var(--transition-normal)',
              cursor: 'default',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', display: 'inline-block', padding: '1rem', borderRadius: '0', border: '1px solid rgba(255,255,255,0.1)', transform: 'rotate(45deg)' }}>
                <div style={{ transform: 'rotate(-45deg)' }}>
                  {card.icon}
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-white)', marginBottom: '1rem', letterSpacing: '1px' }}>{card.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
