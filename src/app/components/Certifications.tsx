'use client';

import { useEffect, useRef } from 'react';
import { WireRings, WirePyramid } from './Shapes3D';

const certifications = [
  {
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    icon: 'fab fa-aws',
    iconColor: '#FF9900',
    tags: ['Cloud', 'DevOps'],
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Sep 2023',
    icon: 'fab fa-react',
    iconColor: '#61dafb',
    tags: ['React', 'Frontend'],
    link: '#',
  },
  {
    title: 'Google UX Design Certificate',
    issuer: 'Google (Coursera)',
    date: 'Jun 2023',
    icon: 'fab fa-google',
    iconColor: '#4285F4',
    tags: ['Design', 'UX'],
    link: '#',
  },
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    date: 'Mar 2023',
    icon: 'fas fa-leaf',
    iconColor: '#00ED64',
    tags: ['Database', 'Backend'],
    link: '#',
  },
  {
    title: 'Docker Foundations Professional',
    issuer: 'Docker, Inc.',
    date: 'Nov 2022',
    icon: 'fab fa-docker',
    iconColor: '#2496ED',
    tags: ['DevOps', 'Containers'],
    link: '#',
  },
  {
    title: 'GitHub Actions — CI/CD',
    issuer: 'GitHub',
    date: 'Aug 2022',
    icon: 'fab fa-github',
    iconColor: '#ffffff',
    tags: ['CI/CD', 'Automation'],
    link: '#',
  },
  {
    title: 'JavaScript Algorithms & DS',
    issuer: 'freeCodeCamp',
    date: 'May 2022',
    icon: 'fas fa-fire',
    iconColor: '#f5a623',
    tags: ['JavaScript', 'Algorithms'],
    link: '#',
  },
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan',
    date: 'Feb 2022',
    icon: 'fab fa-python',
    iconColor: '#FFD43B',
    tags: ['Python', 'Backend'],
    link: '#',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Dec 2021',
    icon: 'fas fa-mobile-screen',
    iconColor: '#48bb78',
    tags: ['HTML', 'CSS'],
    link: '#',
  },
];

export default function Certifications() {
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
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cert-card {
          background: var(--card-bg, rgba(5,5,8,0.9));
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s;
          position: relative;
          overflow: hidden;
          will-change: transform;
        }
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .cert-card:hover {
          border-color: rgba(59,130,246,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.08);
        }
        .cert-card:hover::before { transform: scaleX(1); }
        .cert-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .cert-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(59,130,246,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .cert-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(59,130,246,0.14);
          border-radius: 100px;
          font-size: 0.7rem;
          color: var(--text-muted, #475569);
          font-weight: 500;
          white-space: nowrap;
        }
        .cert-body { flex: 1; }
        .cert-title {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
          line-height: 1.4;
        }
        .cert-issuer {
          font-size: 0.8rem;
          color: var(--text-muted, #475569);
          font-weight: 500;
        }
        .cert-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
        }
        .cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .cert-tag {
          padding: 3px 10px;
          background: rgba(37,99,235,0.07);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 100px;
          font-size: 0.68rem;
          color: var(--text-secondary, #94a3b8);
          font-weight: 500;
        }
        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--blue-400, #93c5fd);
          white-space: nowrap;
          transition: color 0.25s, gap 0.25s;
        }
        .cert-link:hover {
          color: var(--blue-300, #bfdbfe);
          gap: 8px;
        }
        .cert-stats {
          display: flex;
          gap: 40px;
          justify-content: center;
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid rgba(59,130,246,0.08);
        }
        .cert-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .cert-stat-num {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
        }
        .cert-stat-num span { color: var(--blue-500, #60a5fa); }
        .cert-stat-label {
          font-size: 0.73rem;
          color: var(--text-muted, #475569);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 500;
        }
        @media (max-width: 960px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .cert-grid { grid-template-columns: 1fr; }
          .cert-stats { gap: 24px; flex-wrap: wrap; }
        }
        @media (max-width: 480px) {
          .cert-card { padding: 22px; }
          .cert-title { font-size: 0.88rem; }
          .cert-stats { margin-top: 40px; padding-top: 32px; }
          .cert-stat-num { font-size: 1.6rem; }
        }
      `}</style>

      <section
        className="section"
        id="certifications"
        ref={sectionRef}
        style={{ background: 'linear-gradient(180deg, var(--black), #020208, var(--black))' }}
      >
        <div className="shapes-3d">
          <WireRings  size={140} top="3%"    left="-4%"   opacity={0.16} speed={18} />
          <WirePyramid size={70} bottom="6%" right="1%"   opacity={0.18} duration={24} />
          <WireRings  size={55}  top="45%"   right="5%"   opacity={0.12} speed={10} />
        </div>
        <div className="container">
          <div className="section-header">
            <div className="reveal d1">
              <span className="section-tag">Certifications</span>
            </div>
            <div className="reveal d2">
              <h2 className="section-title">
                Verified <span className="gradient-text">Credentials</span>
              </h2>
            </div>
            <div className="reveal d3">
              <p className="section-subtitle">
                Industry-recognised certifications that validate my expertise across cloud,
                development, and design disciplines.
              </p>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`cert-card reveal-scale d${(i % 6) + 1}`}
                onMouseMove={tilt}
                onMouseLeave={resetTilt}
              >
                <div className="cert-card-top">
                  <div className="cert-icon">
                    <i className={cert.icon} style={{ color: cert.iconColor }} />
                  </div>
                  <span className="cert-date-badge">
                    <i className="fas fa-calendar-check" />
                    {cert.date}
                  </span>
                </div>

                <div className="cert-body">
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>

                <div className="cert-footer">
                  <div className="cert-tags">
                    {cert.tags.map(tag => (
                      <span key={tag} className="cert-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                    View <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="cert-stats reveal">
            <div className="cert-stat">
              <div className="cert-stat-num">10<span>+</span></div>
              <div className="cert-stat-label">Certifications</div>
            </div>
            <div className="cert-stat">
              <div className="cert-stat-num">6<span>+</span></div>
              <div className="cert-stat-label">Platforms</div>
            </div>
            <div className="cert-stat">
              <div className="cert-stat-num">3<span>+</span></div>
              <div className="cert-stat-label">Years Learning</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
