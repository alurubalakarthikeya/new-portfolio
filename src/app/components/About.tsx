'use client';

import { useEffect, useRef } from 'react';
import { WireRings, WireCube } from './Shapes3D';

const highlights = [
  { icon: 'fas fa-code',        label: 'Clean Code',     desc: 'Principled, maintainable architecture' },
  { icon: 'fas fa-palette',     label: 'Design Focus',   desc: 'Pixel-perfect UI/UX execution' },
  { icon: 'fas fa-bolt',        label: 'Performance',    desc: 'Speed-optimised on every layer' },
  { icon: 'fas fa-shield-halved', label: 'Reliability',  desc: 'Resilient systems built to last' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = 'box-shadow 0.35s, border-color 0.35s';
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s, border-color 0.35s';
    el.style.transform = '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-ring-outer {
          width: 320px; height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(59,130,246,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: rotateSlow 25s linear infinite;
        }
        .about-ring-inner {
          width: 240px; height: 240px;
          border-radius: 50%;
          border: 1px dashed rgba(59,130,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: rotateSlow 18s linear infinite reverse;
        }
        .about-avatar {
          width: 160px; height: 160px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1d4ed8, #0a0a0f);
          border: 2px solid rgba(59,130,246,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading, 'Space Grotesk',sans-serif);
          font-size: 3.5rem;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 0 40px rgba(37,99,235,0.25), inset 0 0 40px rgba(37,99,235,0.1);
          animation: none;
        }
        .about-ring-dot {
          position: absolute;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--blue-500);
          box-shadow: 0 0 10px var(--blue-500);
        }
        .about-ring-dot-1 { top: -5px; left: 50%; transform: translateX(-50%); }
        .about-ring-dot-2 { bottom: -5px; right: 24px; }
        .about-ring-dot-3 { top: 50%; right: -5px; transform: translateY(-50%); }
        .about-float-badge {
          position: absolute;
          padding: 10px 18px;
          background: rgba(5,5,8,0.95);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 12px;
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          animation: floatY 4s ease-in-out infinite;
        }
        .about-float-badge-1 {
          bottom: 20px; right: -20px;
          color: var(--blue-400);
          animation-delay: 0s;
        }
        .about-float-badge-2 {
          top: 30px; left: -10px;
          color: #a5b4fc;
          animation-delay: -2s;
        }
        .about-text h2 { margin-bottom: 20px; }
        .about-bio {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.85;
          margin-bottom: 20px;
        }
        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        .about-highlight {
          padding: 20px;
          background: var(--card-bg, rgba(5,5,8,0.9));
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 14px;
          transition: box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s;
          position: relative;
          overflow: hidden;
          will-change: transform;
        }
        .about-highlight::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(59,130,246,0.05), transparent 70%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .about-highlight:hover {
          border-color: rgba(59,130,246,0.35);
          box-shadow: 0 0 20px rgba(59,130,246,0.18);
        }
        .about-highlight:hover::before { opacity: 1; }
        .about-highlight-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: var(--blue-500);
          margin-bottom: 12px;
        }
        .about-highlight h4 {
          font-family: var(--font-heading, 'Space Grotesk',sans-serif);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .about-highlight p {
          font-size: 0.78rem;
          color: var(--text-muted, #475569);
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-visual { order: -1; }
        }
        @media (max-width: 480px) {
          .about-highlights { grid-template-columns: 1fr; }
          .about-ring-outer { width: 260px; height: 260px; }
          .about-ring-inner { width: 195px; height: 195px; }
          .about-avatar { width: 130px; height: 130px; font-size: 2.8rem; }
          .about-float-badge { padding: 8px 13px; font-size: 0.72rem; }
          .about-float-badge-1 { right: 0; bottom: 10px; }
          .about-float-badge-2 { left: 0; top: 20px; }
        }
      `}</style>

      <section className="section" id="about" ref={sectionRef}
        style={{ background: 'linear-gradient(180deg, var(--black), #020208, var(--black))' }}>
        <div className="shapes-3d">
          <WireRings size={130} top="4%"    right="-3%" opacity={0.18} speed={16} />
          <WireCube  size={60}  bottom="8%" left="0%"  opacity={0.16} duration={22} animName="rotateCubeReverse" />
          <WireCube  size={42}  top="15%"   left="4%"  opacity={0.12} duration={14} animName="rotateCubeAlt" />
        </div>
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal-left">
              <div className="about-ring-outer">
                <span className="about-ring-dot about-ring-dot-1" />
                <span className="about-ring-dot about-ring-dot-2" />
                <span className="about-ring-dot about-ring-dot-3" />
                <div className="about-ring-inner">
                  <div className="about-avatar">K</div>
                </div>
              </div>
              <div className="about-float-badge about-float-badge-1">
                <i className="fas fa-check-circle" style={{ color: 'var(--blue-500)', marginRight: 6 }} />
                Open to work
              </div>
              <div className="about-float-badge about-float-badge-2">
                <i className="fas fa-star" style={{ color: '#fbbf24', marginRight: 6 }} />
                Top Rated Dev
              </div>
            </div>

            <div className="about-text">
              <div className="reveal d1">
                <span className="section-tag">About Me</span>
              </div>
              <div className="reveal d2">
                <h2 className="section-title">
                  Building things{' '}
                  <span className="gradient-text">people love</span>
                </h2>
              </div>
              <div className="reveal d3">
                <p className="about-bio">
                  I&apos;m Karthikeya, a full-stack developer and designer passionate about building
                  elegant, performant web applications. With over 3 years of experience, I bridge
                  the gap between beautiful design and robust engineering.
                </p>
                <p className="about-bio">
                  I thrive on solving complex problems and translating ideas into clean, scalable
                  products — from frontend pixel-craft to backend architecture and cloud deployment.
                </p>
              </div>

              <div className="about-highlights">
                {highlights.map((h, i) => (
                  <div key={h.label} className={`about-highlight reveal-scale d${i + 3}`}
                    onMouseMove={tilt} onMouseLeave={resetTilt}>
                    <div className="about-highlight-icon">
                      <i className={h.icon} />
                    </div>
                    <h4>{h.label}</h4>
                    <p>{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
