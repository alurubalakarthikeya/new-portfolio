'use client';

import { useEffect, useRef, useState } from 'react';
import { WirePlane, WireRings } from './Shapes3D';

type Project = {
  title: string;
  description: string;
  long?: string;
  tags: string[];
  github: string;
  live: string;
  featured?: boolean;
  category: string;
  icon: string;
  color: string;
};

const projects: Project[] = [
  {
    title: 'ShopSphere — E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard. Handles 1000+ concurrent users with sub-200ms API response times.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    github: '#',
    live: '#',
    featured: true,
    category: 'Full Stack',
    icon: 'fas fa-bag-shopping',
    color: '#3b82f6',
  },
  {
    title: 'NexTalk — Real-Time Chat',
    description:
      'Scalable messaging app with WebSocket rooms, file sharing, read receipts, and end-to-end encrypted DMs. Built for low-latency at scale.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'AWS S3'],
    github: '#',
    live: '#',
    category: 'Full Stack',
    icon: 'fas fa-message',
    color: '#8b5cf6',
  },
  {
    title: 'Lumis — AI Content Studio',
    description:
      'AI-powered writing assistant that generates, refines and exports blog posts, emails and social content. Integrated with OpenAI GPT-4o.',
    tags: ['Next.js', 'OpenAI API', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    github: '#',
    live: '#',
    category: 'AI / ML',
    icon: 'fas fa-wand-magic-sparkles',
    color: '#f59e0b',
  },
  {
    title: 'Taskly — SaaS Project Manager',
    description:
      'Trello-inspired kanban board with drag-and-drop, team workspaces, priority tagging, and Slack notifications. Multi-tenant architecture.',
    tags: ['React', 'Redux', 'Express', 'PostgreSQL', 'Webhooks'],
    github: '#',
    live: '#',
    category: 'Full Stack',
    icon: 'fas fa-table-columns',
    color: '#10b981',
  },
  {
    title: 'CloudWatch — DevOps Dashboard',
    description:
      'Monitoring dashboard that aggregates AWS CloudWatch, GitHub Actions, and Docker container metrics into a single real-time view.',
    tags: ['React', 'Node.js', 'AWS SDK', 'WebSockets', 'Docker'],
    github: '#',
    live: '#',
    category: 'DevOps',
    icon: 'fas fa-gauge-high',
    color: '#ef4444',
  },
  {
    title: 'StudyFlow — EdTech Platform',
    description:
      'Learning management system with video lessons, quizzes, progress tracking, and community forums. Currently serving 400+ active learners.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Mux Video', 'Stripe'],
    github: '#',
    live: '#',
    category: 'Full Stack',
    icon: 'fas fa-graduation-cap',
    color: '#06b6d4',
  },
];

const filters = ['All', 'Full Stack', 'AI / ML', 'DevOps'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState('All');

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s';
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s, border-color 0.35s';
    el.style.transform = '';
  };

  const visible = active === 'All' ? projects : projects.filter(p => p.category === active);
  const [featured, ...rest] = visible;

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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .proj-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }
        .proj-filter-btn {
          padding: 8px 22px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid rgba(59,130,246,0.15);
          color: var(--text-secondary, #94a3b8);
          background: rgba(37,99,235,0.04);
          transition: all 0.25s;
          cursor: pointer;
          font-family: var(--font-body, 'Inter', sans-serif);
        }
        .proj-filter-btn:hover {
          border-color: rgba(59,130,246,0.35);
          color: var(--blue-400, #93c5fd);
          background: rgba(37,99,235,0.08);
        }
        .proj-filter-btn.active {
          background: var(--blue-700, #2563eb);
          border-color: var(--blue-600, #3b82f6);
          color: #fff;
          box-shadow: 0 0 20px rgba(37,99,235,0.3);
        }

        /* Featured card */
        .proj-featured {
          background: var(--card-bg, rgba(5,5,8,0.9));
          border: 1px solid rgba(59,130,246,0.15);
          border-radius: 22px;
          padding: 44px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
          transition: box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s;
          will-change: transform;
        }
        .proj-featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent);
        }
        .proj-featured::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 50%, rgba(59,130,246,0.04), transparent 60%);
          pointer-events: none;
        }
        .proj-featured:hover {
          border-color: rgba(59,130,246,0.3);
          box-shadow: 0 30px 80px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.07);
        }
        .proj-featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--blue-400, #93c5fd);
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .proj-featured-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--blue-500, #60a5fa);
          animation: glowPulse 2s ease-in-out infinite;
        }
        .proj-featured-title {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .proj-featured-desc {
          font-size: 0.98rem;
          color: var(--text-secondary, #94a3b8);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .proj-featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }
        .proj-tag {
          padding: 5px 13px;
          background: rgba(37,99,235,0.07);
          border: 1px solid rgba(59,130,246,0.14);
          border-radius: 100px;
          font-size: 0.75rem;
          color: var(--text-secondary, #94a3b8);
          font-weight: 500;
          transition: all 0.2s;
        }
        .proj-tag:hover {
          background: rgba(37,99,235,0.14);
          border-color: rgba(59,130,246,0.3);
          color: var(--blue-400, #93c5fd);
        }
        .proj-featured-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .proj-icon-display {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 240px;
          border-radius: 16px;
          background: rgba(37,99,235,0.04);
          border: 1px solid rgba(59,130,246,0.1);
          overflow: hidden;
        }
        .proj-icon-display::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.06), transparent 70%);
        }
        .proj-icon-huge {
          font-size: 5rem;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 0 40px currentColor);
          opacity: 0.85;
        }
        .proj-icon-bg-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(59,130,246,0.06);
        }
        .proj-icon-bg-ring-1 { width: 180px; height: 180px; }
        .proj-icon-bg-ring-2 { width: 120px; height: 120px; }

        /* Grid cards */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .proj-card {
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
        .proj-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .proj-card:hover {
          border-color: rgba(59,130,246,0.28);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.08);
        }
        .proj-card:hover::before { transform: scaleX(1); }
        .proj-card-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(59,130,246,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          flex-shrink: 0;
        }
        .proj-card-title {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.35;
        }
        .proj-card-desc {
          font-size: 0.83rem;
          color: var(--text-secondary, #94a3b8);
          line-height: 1.75;
          flex: 1;
        }
        .proj-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .proj-card-footer {
          display: flex;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(59,130,246,0.07);
          margin-top: auto;
        }
        .proj-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary, #94a3b8);
          transition: color 0.25s;
          padding: 0;
          background: none;
          border: none;
          font-family: var(--font-body, 'Inter', sans-serif);
        }
        .proj-link:hover { color: var(--blue-400, #93c5fd); }
        .proj-link i { font-size: 0.7rem; }

        @media (max-width: 1024px) {
          .proj-featured { grid-template-columns: 1fr; gap: 32px; }
          .proj-icon-display { height: 160px; }
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .proj-featured { padding: 28px; }
          .proj-grid { grid-template-columns: 1fr; }
          .proj-filters { gap: 8px; }
          .proj-filter-btn { padding: 7px 16px; font-size: 0.78rem; }
        }
        @media (max-width: 480px) {
          .proj-featured { padding: 22px; }
          .proj-featured-title { font-size: 1.3rem; }
          .proj-featured-desc { font-size: 0.88rem; }
          .proj-featured-actions { flex-wrap: wrap; }
          .proj-icon-display { height: 120px; }
          .proj-icon-huge { font-size: 3.5rem; }
          .proj-card { padding: 22px; }
          .proj-card-title { font-size: 0.92rem; }
          .proj-card-desc { font-size: 0.8rem; }
        }
      `}</style>

      <section
        className="section"
        id="projects"
        ref={sectionRef}
        style={{ background: 'var(--black)' }}
      >
        <div className="shapes-3d">
          <WirePlane size={120} top="4%"    right="-2%"  opacity={0.15} duration={22} />
          <WireRings size={90}  bottom="8%" left="-1%"   opacity={0.17} speed={11} />
          <WirePlane size={50}  top="55%"   right="4%"   opacity={0.10} duration={14} />
        </div>
        <div className="container">
          <div className="section-header">
            <div className="reveal d1">
              <span className="section-tag">Projects</span>
            </div>
            <div className="reveal d2">
              <h2 className="section-title">
                Things I&apos;ve <span className="gradient-text">Built</span>
              </h2>
            </div>
            <div className="reveal d3">
              <p className="section-subtitle">
                A selection of production-ready projects that showcase my range — from
                full-stack platforms to AI tooling and DevOps dashboards.
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="proj-filters reveal d4">
            {filters.map(f => (
              <button
                key={f}
                className={`proj-filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Featured project */}
          {featured && (
            <div className="proj-featured reveal d1" onMouseMove={tilt} onMouseLeave={resetTilt}>
              <div>
                <div className="proj-featured-badge">
                  <span className="proj-featured-badge-dot" />
                  Featured Project
                </div>
                <h3 className="proj-featured-title">{featured.title}</h3>
                <p className="proj-featured-desc">{featured.description}</p>
                <div className="proj-featured-tags">
                  {featured.tags.map(tag => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>
                <div className="proj-featured-actions">
                  <a href={featured.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '11px 24px', fontSize: '0.85rem' }}>
                    <i className="fab fa-github" /> GitHub
                  </a>
                  <a href={featured.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '11px 24px', fontSize: '0.85rem' }}>
                    Live Demo <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }} />
                  </a>
                </div>
              </div>
              <div className="proj-icon-display reveal-right">
                <div className="proj-icon-bg-ring proj-icon-bg-ring-1" />
                <div className="proj-icon-bg-ring proj-icon-bg-ring-2" />
                <i
                  className={`proj-icon-huge ${featured.icon}`}
                  style={{ color: featured.color }}
                />
              </div>
            </div>
          )}

          {/* Project grid */}
          {rest.length > 0 && (
            <div className="proj-grid">
              {rest.map((proj, i) => (
                <div key={proj.title} className={`proj-card reveal-scale d${(i % 6) + 1}`}
                  onMouseMove={tilt} onMouseLeave={resetTilt}>
                  <div className="proj-card-icon">
                    <i className={proj.icon} style={{ color: proj.color }} />
                  </div>
                  <div className="proj-card-title">{proj.title}</div>
                  <div className="proj-card-desc">{proj.description}</div>
                  <div className="proj-card-tags">
                    {proj.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                    {proj.tags.length > 4 && (
                      <span className="proj-tag">+{proj.tags.length - 4}</span>
                    )}
                  </div>
                  <div className="proj-card-footer">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">
                      <i className="fab fa-github" /> Code
                    </a>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="proj-link">
                      <i className="fas fa-arrow-up-right-from-square" /> Live
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
