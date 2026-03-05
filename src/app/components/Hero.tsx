'use client';

import { useEffect, useState, useRef } from 'react';

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Creative Thinker',
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: 'var(--blue-500)' }}>
      {displayed}
      <span style={{
        borderRight: '2px solid var(--blue-500)',
        marginLeft: '2px',
        animation: 'blink 0.7s infinite',
        display: 'inline-block',
        height: '1em',
        verticalAlign: 'middle',
      }} />
    </span>
  );
}

function Particle({ i }: { i: number }) {
  const left = `${10 + (i * 137.5) % 80}%`;
  const delay = `${(i * 0.7) % 8}s`;
  const duration = `${6 + (i * 1.3) % 8}s`;
  const size = `${2 + (i * 0.7) % 3}px`;
  const px = `${-30 + (i * 23) % 60}px`;

  return (
    <span style={{
      position: 'absolute',
      bottom: 0,
      left,
      width: size,
      height: size,
      borderRadius: '50%',
      background: i % 2 === 0 ? 'var(--blue-600)' : 'var(--blue-400)',
      opacity: 0,
      animationName: 'particleFloat',
      animationDuration: duration,
      animationDelay: delay,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      '--px': px,
    } as React.CSSProperties} />
  );
}

type WireCubeProps = {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  duration?: number;
  animName?: string;
};

function WireCube({ size, top, left, right, bottom, opacity = 0.28, duration = 24, animName = 'rotateCube3D' }: WireCubeProps) {
  const h = size / 2;
  const face: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    border: '1px solid rgba(59,130,246,0.45)',
    background: 'rgba(37,99,235,0.025)',
    backfaceVisibility: 'visible',
  };
  const transforms = [
    `translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      top, left, right, bottom,
      transformStyle: 'preserve-3d',
      animation: `${animName} ${duration}s linear infinite`,
      opacity,
      pointerEvents: 'none',
      zIndex: 1,
    }}>
      {transforms.map((t, idx) => (
        <div key={idx} style={{ ...face, transform: t }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMouse = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mx', `${x}%`);
      hero.style.setProperty('--my', `${y}%`);
    };
    hero.addEventListener('mousemove', onMouse);
    return () => hero.removeEventListener('mousemove', onMouse);
  }, []);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: var(--black);
          background-image:
            linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px);
          background-size: 64px 64px;
          padding-top: 72px;
          --mx: 50%;
          --my: 50%;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle 700px at var(--mx) var(--my), rgba(37,99,235,0.08), transparent 70%);
          pointer-events: none;
          transition: background 0.1s;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .hero-orb-1 {
          width: 500px; height: 500px;
          top: 10%; left: 10%;
          background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
          animation: orbDrift1 22s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 400px; height: 400px;
          bottom: 10%; right: 8%;
          background: radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%);
          animation: orbDrift2 26s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 300px; height: 300px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          background: radial-gradient(circle, rgba(96,165,250,0.08), transparent 70%);
          animation: orbDrift3 18s ease-in-out infinite;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 860px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--blue-400);
          text-transform: uppercase;
          margin-bottom: 36px;
          animation: fadeInDown 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--blue-500);
          animation: glowPulse 2s ease-in-out infinite;
        }
        .hero-name {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: #fff;
          margin-bottom: 24px;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }
        .hero-role-line {
          font-size: clamp(1.2rem, 2.5vw, 1.75rem);
          font-weight: 400;
          color: var(--text-secondary);
          margin-bottom: 48px;
          min-height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }
        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto 52px;
          line-height: 1.8;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both;
        }
        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both;
        }
        .hero-socials {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 56px;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both;
        }
        .hero-social-link {
          width: 44px; height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid rgba(59,130,246,0.18);
          color: var(--text-secondary);
          font-size: 1rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .hero-social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(59,130,246,0.0);
          transition: background 0.3s;
        }
        .hero-social-link:hover {
          color: var(--blue-400);
          border-color: rgba(59,130,246,0.5);
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(59,130,246,0.25);
        }
        .hero-social-link:hover::before {
          background: rgba(59,130,246,0.07);
        }
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: fadeIn 1s 1s both;
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--blue-700), transparent);
          position: relative;
          overflow: hidden;
        }
        .hero-scroll-line::after {
          content: '';
          position: absolute;
          top: -40px; left: 0;
          width: 100%;
          height: 40px;
          background: linear-gradient(to bottom, transparent, var(--blue-400), transparent);
          animation: scanLine 2s ease-in-out infinite;
        }
        .hero-3d-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-stats {
          display: flex;
          gap: 0;
          justify-content: center;
          margin-top: 64px;
          border-top: 1px solid rgba(59,130,246,0.08);
          padding-top: 40px;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s both;
        }
        .hero-stat {
          flex: 1;
          max-width: 180px;
          text-align: center;
          padding: 0 24px;
          border-right: 1px solid rgba(59,130,246,0.08);
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-num {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-num span { color: var(--blue-500); }
        .hero-stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 20px; }
          .hero-badge { font-size: 0.68rem; padding: 5px 13px; margin-bottom: 28px; }
          .hero-name { margin-bottom: 18px; }
          .hero-role-line { margin-bottom: 32px; font-size: clamp(1rem, 4vw, 1.4rem); }
          .hero-desc { font-size: 0.95rem; margin-bottom: 36px; }
          .hero-ctas { gap: 12px; }
          .hero-socials { gap: 12px; margin-top: 40px; }
          .hero-stats { margin-top: 44px; padding-top: 28px; }
          .hero-3d-shapes { display: none; }
        }
        @media (max-width: 640px) {
          .hero-stats { gap: 0; flex-wrap: wrap; }
          .hero-stat { min-width: 50%; border-right: none; padding: 16px; }
        }
        @media (max-width: 480px) {
          .hero { padding-top: 72px; background-size: 40px 40px; }
          .hero-content { max-width: 100%; padding: 0 16px; }
          .hero-badge { margin-bottom: 20px; }
          .hero-name { letter-spacing: -0.03em; margin-bottom: 14px; }
          .hero-desc { font-size: 0.9rem; max-width: 100%; margin-bottom: 28px; }
          .hero-ctas { flex-direction: column; align-items: center; width: 100%; }
          .hero-ctas .btn-primary,
          .hero-ctas .btn-secondary { width: 100%; justify-content: center; }
          .hero-socials { margin-top: 32px; }
          .hero-social-link { width: 40px; height: 40px; }
          .hero-stats { margin-top: 36px; padding-top: 24px; }
          .hero-stat-num { font-size: 1.7rem; }
          .hero-stat-label { font-size: 0.65rem; }
          .hero-scroll { display: none; }
        }
      `}</style>

      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* 3D wireframe shapes */}
        <div className="hero-3d-shapes">
          <WireCube size={110} top="12%"  right="7%"   opacity={0.28} duration={28} animName="rotateCube3D" />
          <WireCube size={60}  bottom="22%" left="5%"  opacity={0.22} duration={18} animName="rotateCubeReverse" />
          <WireCube size={160} top="45%"  right="18%"  opacity={0.10} duration={42} animName="rotateCubeAlt" />
          <WireCube size={44}  top="20%"  left="13%"   opacity={0.20} duration={14} animName="rotateCubeAlt" />
        </div>

        {Array.from({ length: 16 }, (_, i) => <Particle key={i} i={i} />)}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for hire
          </div>

          <h1 className="hero-name">Karthikeya</h1>

          <div className="hero-role-line">
            <TypewriterText />
          </div>

          <p className="hero-desc">
            Crafting high-quality digital experiences with clean code,
            thoughtful design, and a passion for innovation.
          </p>

          <div className="hero-ctas">
            <a className="btn-primary" href="#projects">
              View Projects <i className="fas fa-arrow-right" />
            </a>
            <a className="btn-secondary" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/alurubalakarthikeya" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/alurubalakarthikeya/" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://x.com/abalakarthikeya" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="Twitter">
              <i className="fab fa-x-twitter" />
            </a>
            <a href="mailto:hello@alurubalakarthikeya.dev" className="hero-social-link" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">3<span>+</span></div>
              <div className="hero-stat-label">Years Exp.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">20<span>+</span></div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">10<span>+</span></div>
              <div className="hero-stat-label">Certs</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">5<span>★</span></div>
              <div className="hero-stat-label">Rating</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>
    </>
  );
}
