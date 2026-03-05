'use client';

import { useEffect, useRef, useState } from 'react';
import { WireCube, WireRings } from './Shapes3D';

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'hello@alurubalakarthikeya.dev',
    link: 'mailto:hello@alurubalakarthikeya.dev',
  },
  {
    icon: 'fas fa-location-dot',
    label: 'Location',
    value: 'Bangalore, India',
    link: null,
  },
  {
    icon: 'fas fa-clock',
    label: 'Availability',
    value: 'Open to full-time & freelance',
    link: null,
  },
];

const socials = [
  { icon: 'fab fa-github',      label: 'GitHub',   link: 'https://github.com/alurubalakarthikeya' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', link: 'https://www.linkedin.com/in/alurubalakarthikeya' },
  { icon: 'fab fa-x-twitter',   label: 'Twitter',  link: 'https://x.com/abalakarthikeya' },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulate async send — replace with your API call
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1400);
  }

  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 64px;
          align-items: start;
        }

        /* Left column */
        .contact-info-block {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .contact-headline {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: clamp(1.6rem, 3vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 18px;
        }
        .contact-sub {
          font-size: 0.98rem;
          color: var(--text-secondary, #94a3b8);
          line-height: 1.8;
          margin-bottom: 44px;
        }
        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 44px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--card-bg, rgba(5,5,8,0.9));
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 14px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .contact-item:hover {
          border-color: rgba(59,130,246,0.28);
          box-shadow: 0 0 20px rgba(59,130,246,0.06);
        }
        .contact-item-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(59,130,246,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-500, #60a5fa);
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .contact-item-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted, #475569);
          margin-bottom: 3px;
        }
        .contact-item-value {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary, #94a3b8);
        }
        a.contact-item-value { transition: color 0.25s; }
        a.contact-item-value:hover { color: var(--blue-400, #93c5fd); }
        .contact-socials-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted, #475569);
          margin-bottom: 16px;
        }
        .contact-socials {
          display: flex;
          gap: 12px;
        }
        .contact-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 10px;
          border: 1px solid rgba(59,130,246,0.15);
          background: rgba(37,99,235,0.04);
          color: var(--text-secondary, #94a3b8);
          font-size: 0.95rem;
          transition: all 0.3s;
        }
        .contact-social-btn:hover {
          border-color: rgba(59,130,246,0.4);
          color: var(--blue-400, #93c5fd);
          transform: translateY(-3px);
          box-shadow: 0 0 18px rgba(59,130,246,0.2);
          background: rgba(37,99,235,0.1);
        }

        /* Right column — form */
        .contact-form-wrap {
          background: var(--card-bg, rgba(5,5,8,0.9));
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 22px;
          padding: 44px;
          position: relative;
          overflow: hidden;
        }
        .contact-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent);
        }
        .contact-form-title {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .contact-form-sub {
          font-size: 0.85rem;
          color: var(--text-muted, #475569);
          margin-bottom: 32px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .contact-field label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary, #94a3b8);
          text-transform: uppercase;
        }
        .contact-input,
        .contact-textarea {
          background: rgba(37,99,235,0.03);
          border: 1px solid rgba(59,130,246,0.14);
          border-radius: 10px;
          padding: 13px 16px;
          color: #fff;
          font-size: 0.9rem;
          font-family: var(--font-body, 'Inter', sans-serif);
          transition: border-color 0.25s, box-shadow 0.25s;
          outline: none;
          resize: none;
          width: 100%;
        }
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: var(--text-muted, #475569);
        }
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: rgba(59,130,246,0.45);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.07);
        }
        .contact-textarea { height: 130px; }
        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 36px;
          background: var(--blue-700, #2563eb);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: 10px;
          border: 1px solid rgba(59,130,246,0.3);
          cursor: pointer;
          font-family: var(--font-body, 'Inter', sans-serif);
          transition: all 0.3s;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .contact-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .contact-submit:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 0 44px rgba(37,99,235,0.4);
          border-color: var(--blue-500, #60a5fa);
        }
        .contact-submit:hover::after { opacity: 1; }
        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .contact-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          text-align: center;
          padding: 48px 24px;
        }
        .contact-success-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          color: #10b981;
          animation: scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .contact-success h4 {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
        }
        .contact-success p {
          font-size: 0.88rem;
          color: var(--text-secondary, #94a3b8);
          max-width: 280px;
          line-height: 1.7;
        }

        /* Footer CTA strip */
        .contact-footer-strip {
          margin-top: 80px;
          padding: 52px 48px;
          background: rgba(37,99,235,0.04);
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          position: relative;
          overflow: hidden;
        }
        .contact-footer-strip::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
        }
        .contact-footer-strip-text h3 {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-size: clamp(1.2rem, 2.5vw, 1.75rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.025em;
          margin-bottom: 8px;
        }
        .contact-footer-strip-text p {
          font-size: 0.9rem;
          color: var(--text-secondary, #94a3b8);
        }
        .contact-footer-strip-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 640px) {
          .contact-form-row { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 28px; }
          .contact-footer-strip { flex-direction: column; padding: 36px 24px; text-align: center; }
          .contact-footer-strip-actions { justify-content: center; }
        }
        @media (max-width: 480px) {
          .contact-headline { font-size: 1.5rem; }
          .contact-sub { font-size: 0.88rem; }
          .contact-form-wrap { padding: 22px; }
          .contact-form-title { font-size: 1.1rem; }
          .contact-item { padding: 13px 16px; }
          .contact-items { gap: 10px; }
          .contact-submit { padding: 13px 24px; font-size: 0.85rem; }
          .contact-footer-strip { margin-top: 48px; padding: 28px 20px; }
          .contact-footer-strip-actions { flex-direction: column; width: 100%; }
          .contact-footer-strip-actions .btn-primary,
          .contact-footer-strip-actions .btn-secondary { justify-content: center; }
        }
      `}</style>

      <section
        className="section"
        id="contact"
        ref={sectionRef}
        style={{ background: 'linear-gradient(180deg, var(--black), #020208, var(--black))' }}
      >
        <div className="shapes-3d">
          <WireCube  size={100} top="5%"    left="-2%"   opacity={0.18} duration={28} animName="rotateCubeAlt" />
          <WireRings size={120} bottom="4%" right="-3%"  opacity={0.16} speed={15} />
          <WireCube  size={48}  top="40%"   left="3%"    opacity={0.12} duration={16} animName="rotateCubeReverse" />
        </div>
        <div className="container">
          <div className="section-header">
            <div className="reveal d1">
              <span className="section-tag">Contact</span>
            </div>
            <div className="reveal d2">
              <h2 className="section-title">
                Let&apos;s <span className="gradient-text">Work Together</span>
              </h2>
            </div>
            <div className="reveal d3">
              <p className="section-subtitle">
                Have a project in mind, a role to fill, or just want to say hi?
                My inbox is always open — I&apos;ll get back to you promptly.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            {/* Left — contact info */}
            <div className="contact-info-block reveal-left d1">
              <h3 className="contact-headline">
                Get in<br />
                <span className="gradient-text">touch.</span>
              </h3>
              <p className="contact-sub">
                Whether it&apos;s a freelance gig, a full-time opportunity, or a
                collaboration on something exciting — I&apos;d love to hear from you.
              </p>

              <div className="contact-items">
                {contactInfo.map(info => (
                  <div key={info.label} className="contact-item">
                    <div className="contact-item-icon">
                      <i className={info.icon} />
                    </div>
                    <div>
                      <div className="contact-item-label">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="contact-item-value">{info.value}</a>
                      ) : (
                        <div className="contact-item-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="contact-socials-label">Find me on</div>
                <div className="contact-socials">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-btn"
                      aria-label={s.label}
                    >
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-wrap reveal-right d2">
              {status === 'sent' ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <i className="fas fa-check" />
                  </div>
                  <h4>Message sent!</h4>
                  <p>Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
                  <button
                    className="btn-secondary"
                    style={{ marginTop: 8, fontSize: '0.85rem', padding: '10px 24px' }}
                    onClick={() => setStatus('idle')}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form-title">Send a message</div>
                  <div className="contact-form-sub">I&apos;ll respond as fast as I can.</div>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="contact-input"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="contact-input"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="contact-input"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="contact-textarea"
                        placeholder="Tell me about your project or idea..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="contact-submit"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <i className="fas fa-circle-notch fa-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fas fa-paper-plane" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="contact-footer-strip reveal">
            <div className="contact-footer-strip-text">
              <h3>Open to new opportunities</h3>
              <p>Available for full-time roles and select freelance projects.</p>
            </div>
            <div className="contact-footer-strip-actions">
              <a
                href="mailto:hello@alurubalakarthikeya.dev"
                className="btn-primary"
              >
                <i className="fas fa-envelope" /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/alurubalakarthikeya/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <i className="fab fa-linkedin-in" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
