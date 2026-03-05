'use client';

import { useEffect, useRef } from 'react';
import { WireCube, WireRings } from './Shapes3D';

const categories = [
  {
    title: 'Languages',
    icon: 'fas fa-terminal',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'Python',     level: 85 },
      { name: 'JavaScript', level: 93 },
      { name: 'Java',       level: 72 },
    ],
  },
  {
    title: 'Frontend',
    icon: 'fas fa-layer-group',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TailwindCSS',     level: 88 },
      { name: 'HTML & CSS',      level: 96 },
      { name: 'Figma / UI',      level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: 'fas fa-server',
    skills: [
      { name: 'Node.js',   level: 86 },
      { name: 'Express',   level: 84 },
      { name: 'PostgreSQL',level: 78 },
      { name: 'MongoDB',   level: 80 },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: 'fas fa-cloud',
    skills: [
      { name: 'Git / GitHub', level: 94 },
      { name: 'Docker',       level: 75 },
      { name: 'AWS',          level: 70 },
      { name: 'CI / CD',      level: 76 },
    ],
  },
];

const tags = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'Figma', 'TailwindCSS', 'GraphQL',
  'REST APIs', 'Git', 'Linux', 'Jest',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s';
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
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
            entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach(bar => {
              const target = bar.dataset.target as string;
              bar.style.setProperty('--tw', target + '%');
              bar.classList.add('animate');
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
        .skills-categories {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }
        .skill-card {
          background: var(--card-bg, rgba(5,5,8,0.9));
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 18px;
          padding: 32px;
          transition: box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s;
          position: relative;
          overflow: hidden;
          will-change: transform;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .skill-card:hover {
          border-color: rgba(59,130,246,0.28);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.08);
        }
        .skill-card:hover::before { transform: scaleX(1); }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .skill-card-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-500);
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .skill-card-title {
          font-family: var(--font-heading, 'Space Grotesk',sans-serif);
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
        }
        .skill-row {
          margin-bottom: 18px;
        }
        .skill-row:last-child { margin-bottom: 0; }
        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .skill-name {
          font-size: 0.85rem;
          color: var(--text-secondary, #94a3b8);
          font-weight: 500;
        }
        .skill-pct {
          font-size: 0.78rem;
          color: var(--blue-400);
          font-weight: 600;
          font-family: var(--font-heading, 'Space Grotesk',sans-serif);
        }
        .skill-bar-track {
          height: 4px;
          background: rgba(59,130,246,0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa);
          width: 0;
          transition: width 1.2s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-bar-fill.animate {
          width: var(--tw, 80%);
        }

        .skills-tags-section {}
        .skills-tags-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted, #475569);
          margin-bottom: 20px;
        }
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag {
          padding: 7px 16px;
          background: rgba(37,99,235,0.06);
          border: 1px solid rgba(59,130,246,0.14);
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--text-secondary, #94a3b8);
          transition: all 0.25s;
          cursor: default;
          font-weight: 500;
        }
        .skill-tag:hover {
          background: rgba(37,99,235,0.14);
          border-color: rgba(59,130,246,0.38);
          color: var(--blue-400);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-categories { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .skill-card { padding: 24px; }
          .skill-card-title { font-size: 0.95rem; }
          .skill-name { font-size: 0.8rem; }
          .skill-tag { padding: 6px 12px; font-size: 0.75rem; }
        }
      `}</style>

      <section className="section" id="skills" ref={sectionRef}
        style={{ background: 'var(--black)' }}>
        <div className="shapes-3d">
          <WireCube  size={110} top="5%"     right="-2%"  opacity={0.18} duration={30} animName="rotateCube3D" />
          <WireRings size={85}  bottom="6%"  left="-1%"   opacity={0.16} speed={13} />
          <WireCube  size={50}  top="50%"    right="3%"   opacity={0.10} duration={18} animName="rotateCubeAlt" />
        </div>
        <div className="container">
          <div className="section-header">
            <div className="reveal d1">
              <span className="section-tag">Skills</span>
            </div>
            <div className="reveal d2">
              <h2 className="section-title">
                My <span className="gradient-text">Technical Stack</span>
              </h2>
            </div>
            <div className="reveal d3">
              <p className="section-subtitle">
                Technologies I work with daily to build powerful, scalable products.
              </p>
            </div>
          </div>

          <div className="skills-categories">
            {categories.map((cat, ci) => (
              <div key={cat.title} className={`skill-card reveal d${ci + 2}`}
                onMouseMove={tilt} onMouseLeave={resetTilt}>
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <i className={cat.icon} />
                  </div>
                  <span className="skill-card-title">{cat.title}</span>
                </div>
                {cat.skills.map(sk => (
                  <div key={sk.name} className="skill-row">
                    <div className="skill-meta">
                      <span className="skill-name">{sk.name}</span>
                      <span className="skill-pct">{sk.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        data-target={sk.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={`skills-tags-section reveal`}>
            <div className="skills-tags-label">All Technologies</div>
            <div className="skills-tags">
              {tags.map((tag, i) => (
                <span key={tag} className={`skill-tag reveal-scale d${(i % 8) + 1}`}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
