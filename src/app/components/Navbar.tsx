'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        /* ── Root wrapper — transparent, just provides the gap from the top ── */
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 10px 20px 0;
          pointer-events: none;
        }

        /* ── The glass pill ── */
        .nav-inner {
          pointer-events: all;
          max-width: 1180px;
          margin: 0 auto;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px 0 20px;

          /* Glass core */
          background: rgba(3, 3, 10, 0.42);
          backdrop-filter: blur(22px) saturate(160%) brightness(0.9);
          -webkit-backdrop-filter: blur(22px) saturate(160%) brightness(0.9);

          border: 1px solid rgba(255, 255, 255, 0.07);
          border-bottom-color: rgba(59, 130, 246, 0.12);
          border-radius: 16px;

          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.5),
            0 1px 0   rgba(255, 255, 255, 0.04) inset,
            0 0  0 1px rgba(59, 130, 246, 0.04);

          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        /* Scrolled state — denser glass */
        .nav-root.scrolled .nav-inner {
          background: rgba(3, 3, 12, 0.78);
          border-color: rgba(59, 130, 246, 0.18);
          border-bottom-color: rgba(59, 130, 246, 0.22);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            0 1px 0   rgba(255, 255, 255, 0.05) inset,
            0 0  0 1px rgba(59, 130, 246, 0.07),
            0 0 24px  rgba(59, 130, 246, 0.06);
        }

        /* Shimmer line across the top of the glass */
        .nav-inner::before {
          content: '';
          position: absolute;
          top: 10px; left: 20px; right: 20px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          pointer-events: none;
          border-radius: 1px;
        }
        .nav-inner { position: relative; }

        /* ── Logo ── */
        .nav-logo {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 2px;
          color: #fff;
          user-select: none;
        }
        .nav-logo .dot {
          color: var(--blue-500, #60a5fa);
          font-size: 1.5rem;
          line-height: 1;
        }
        .nav-logo:hover .dot {
          text-shadow: 0 0 12px rgba(96,165,250,0.8);
        }

        /* ── Desktop links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(148, 163, 184, 0.85);
          padding: 7px 13px;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
          transition: color 0.25s, background 0.25s;
          background: none;
          border: none;
          font-family: inherit;
          letter-spacing: 0.01em;
        }
        .nav-link:hover {
          color: #fff;
          background: rgba(59, 130, 246, 0.07);
        }
        .nav-link.active {
          color: #fff;
          background: rgba(59, 130, 246, 0.1);
        }
        /* Active pill underline */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 3px; left: 50%;
          width: 0; height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--blue-600), var(--blue-400));
          box-shadow: 0 0 6px rgba(96,165,250,0.6);
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1), left 0.3s;
        }
        .nav-link:hover::after  { width: 55%; left: calc(50% - 27.5%); }
        .nav-link.active::after { width: 55%; left: calc(50% - 27.5%); }

        /* ── CTA button ── */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 20px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          font-size: 0.84rem;
          font-weight: 600;
          border-radius: 9px;
          border: 1px solid rgba(96,165,250,0.3);
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.01em;
          transition: all 0.3s;
          margin-left: 8px;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.14), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nav-cta:hover {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          transform: translateY(-2px);
          box-shadow: 0 0 22px rgba(59,130,246,0.45), 0 4px 12px rgba(0,0,0,0.3);
          border-color: rgba(96,165,250,0.5);
        }
        .nav-cta:hover::before { opacity: 1; }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          cursor: pointer;
          background: none;
          border: none;
          margin-right: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile dropdown — glass card ── */
        .mobile-menu {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 80px;          /* 10px padding + 62px inner + 8px gap */
          left: 20px; right: 20px;

          background: rgba(3, 3, 12, 0.88);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);

          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(59,130,246,0.08);

          padding: 8px;
          gap: 2px;

          transform: translateY(-10px) scale(0.98);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: top center;
        }
        .mobile-menu.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }
        .mobile-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(148, 163, 184, 0.9);
          padding: 13px 16px;
          border-radius: 10px;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
          text-align: left;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mobile-link::before {
          content: '';
          display: block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(59,130,246,0.4);
          flex-shrink: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .mobile-link:hover {
          color: #fff;
          background: rgba(59, 130, 246, 0.08);
        }
        .mobile-link:hover::before {
          background: var(--blue-500, #60a5fa);
          box-shadow: 0 0 8px rgba(96,165,250,0.5);
        }
        .mobile-link.active {
          color: var(--blue-400, #93c5fd);
          background: rgba(59, 130, 246, 0.07);
        }
        .mobile-link.active::before {
          background: var(--blue-500, #60a5fa);
          box-shadow: 0 0 8px rgba(96,165,250,0.5);
        }
        .mobile-cta-row {
          padding: 8px 8px 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin-top: 2px;
        }
        .mobile-cta-row button {
          width: 100%;
          padding: 12px 20px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 10px;
          border: 1px solid rgba(96,165,250,0.3);
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .mobile-cta-row button:hover {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          box-shadow: 0 0 20px rgba(59,130,246,0.4);
        }

        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .hamburger  { display: flex; }
          .mobile-menu { display: flex; }
          .nav-root { padding: 10px 16px 0; }
          .mobile-menu { left: 16px; right: 16px; }
        }
        @media (max-width: 480px) {
          .nav-inner { border-radius: 12px; padding: 0 4px 0 16px; }
          .nav-logo  { font-size: 1.15rem; }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo" onClick={() => handleLink('#home')}>
            Karthikeya<span className="dot">.</span>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
              >
                {l.label}
              </button>
            ))}
            <button className="nav-cta" onClick={() => handleLink('#contact')}>
              Hire Me <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }} />
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <button
            key={l.href}
            onClick={() => handleLink(l.href)}
            className={`mobile-link${active === l.href.slice(1) ? ' active' : ''}`}
          >
            {l.label}
          </button>
        ))}
        <div className="mobile-cta-row">
          <button onClick={() => handleLink('#contact')}>
            <i className="fas fa-envelope" /> Hire Me
          </button>
        </div>
      </div>
    </>
  );
}
