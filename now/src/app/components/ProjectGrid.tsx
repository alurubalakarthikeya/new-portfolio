"use client";
import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import aetherShot from '../assets/imgs/aether.jpeg';
import calgpaShot from '../assets/imgs/calgpa.jpeg';
import zephraShot from '../assets/imgs/zephra.jpeg';

type PhoneMockupProps = {
  screenshotSrc?: string | StaticImageData;
  alt: string;
  accentClassName: string;
  topVisibleImageOnly?: boolean;
  imageClassName?: string;
  topGapPx?: number;
};

type ProjectKey = 'calgpa' | 'zephra' | 'aether' | 'miniminds' | 'carsio' | 'roledoc' | 'fastype';

type BracketButtonProps = {
  onClick: () => void;
  label: string;
  inverse?: boolean;
  className?: string;
  iconClassName?: string;
};

type PopupProject = {
  name: string;
  badge: string;
  summary: string;
  highlights: string[];
  stack: string[];
  stats: Array<{ label: string; value: string }>;
  repoUrl: string;
  liveUrl: string;
};

function BracketButton({ onClick, label, inverse = false, className = '', iconClassName = '' }: BracketButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-8 right-8 z-20 h-10 w-10 rounded-xl border backdrop-blur-md shadow-[0_10px_24px_rgba(6,95,70,0.14)] flex items-center justify-center transition-colors ${
        inverse
          ? 'border-white/80 bg-white text-emerald-800 hover:bg-emerald-50'
          : 'border-[#10b981]/80 bg-[#10b981] text-white hover:bg-[#059669]'
      } ${className}`}
    >
      <span className={`material-symbols-outlined text-[0.95rem] leading-none ${iconClassName}`} aria-hidden="true">open_in_new</span>
    </button>
  );
}

function PhoneMockup({ screenshotSrc, alt, accentClassName, topVisibleImageOnly = false, imageClassName = '', topGapPx = 0 }: PhoneMockupProps) {
  return (
    <div className="relative h-full w-full rounded-[2.1rem] overflow-hidden bg-[#f0fdf4]">
      {screenshotSrc ? (
        topVisibleImageOnly ? (
          <div className="h-full w-full flex flex-col">
            <div className="relative h-[90%] w-full overflow-hidden">
              <Image src={screenshotSrc} alt={alt} fill className={`object-cover object-top ${imageClassName}`} sizes="(max-width: 768px) 90vw, 370px" />
            </div>
            <div className="h-[10%] w-full bg-gradient-to-b from-[#0f172a]/28 to-[#0f172a]/55" />
          </div>
        ) : (
          <>
            <Image src={screenshotSrc} alt={alt} fill className={`object-cover ${imageClassName}`} sizes="(max-width: 768px) 90vw, 370px" />
            {topGapPx > 0 ? <div className="absolute inset-x-0 top-0 z-10 bg-[#f0fdf4]" style={{ height: `${topGapPx}px` }} /> : null}
          </>
        )
      ) : (
        <div className={`h-full w-full ${accentClassName} p-3 text-white`}>
          <div className="h-full w-full rounded-[1.35rem] bg-white/18 backdrop-blur-[1px] border border-white/30 p-3 flex flex-col gap-2.5">
            <div className="h-4 w-2/3 rounded-full bg-white/70" />
            <div className="h-16 rounded-xl bg-white/80" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-white/70" />
              <div className="h-10 rounded-lg bg-white/55" />
            </div>
            <div className="h-3 w-5/6 rounded-full bg-white/70" />
            <div className="h-3 w-4/6 rounded-full bg-white/55" />
            <div className="mt-auto grid grid-cols-3 gap-2">
              <div className="h-8 rounded-lg bg-white/80" />
              <div className="h-8 rounded-lg bg-white/60" />
              <div className="h-8 rounded-lg bg-white/70" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject]);

  const screenshots = {
    calgpa: calgpaShot,
    zephra: zephraShot,
    aether: aetherShot,
  };

  const popupProjects: Record<ProjectKey, PopupProject> = {
    calgpa: {
      name: 'CalGPA',
      badge: 'Academic Tool • PWA',
      summary:
        'CalGPA gives students a fast performance cockpit to track coursework, simulate grade outcomes, and plan future semesters with confidence.',
      highlights: [
        'Real-time GPA projection engine for What-If scenarios.',
        'Course-wise impact cards for smarter prioritization.',
        'Mobile-first layout focused on fast daily check-ins.',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
      stats: [
        { label: 'Core Modules', value: '7' },
        { label: 'Primary Views', value: '12' },
        { label: 'Target Platform', value: 'Mobile' },
      ],
        repoUrl: 'https://github.com/your-username/calgpa',
        liveUrl: 'https://your-calgpa-app-url.com',
    },
    zephra: {
      name: 'Zephra',
      badge: 'Climate Tracking • PWA',
      summary:
        'Zephra blends satellite and ground sensing into clear, actionable air-quality intelligence with an interface designed for quick comprehension.',
      highlights: [
        'Forecast overlays that unify live station and satellite feeds.',
        'Readable AQ indicators with trend confidence signals.',
        'Clean geographic exploration optimized for motion and clarity.',
      ],
      stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Visualization APIs'],
      stats: [
        { label: 'Data Sources', value: '2+' },
        { label: 'Update Cycle', value: 'Near-Real-Time' },
        { label: 'Primary Focus', value: 'Air Quality' },
      ],
        repoUrl: 'https://github.com/your-username/zephra',
        liveUrl: 'https://your-zephra-app-url.com',
    },
      aether: {
        name: 'Aether',
        badge: 'AI Companion • Habit System',
        summary:
          'Aether combines journaling, habits, and emotional analytics into a single adaptive loop with AI-assisted behavior support.',
        highlights: [
          'Habit and mood feedback loop that adapts over time.',
          'Conversational AI assistance for reflection and planning.',
          'Unified dashboard for routines, emotion signals, and progress.',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Workflows'],
        stats: [
          { label: 'Core Flows', value: '3' },
          { label: 'Primary Mode', value: 'Companion UX' },
          { label: 'Platform', value: 'Web App' },
        ],
        repoUrl: 'https://github.com/your-username/aether',
        liveUrl: 'https://your-aether-app-url.com',
      },
    miniminds: {
      name: 'Mini-Minds',
      badge: 'E-Learning Prototype',
      summary: 'A playful learning platform concept for children with mini exercises, levels, and progress rewards.',
      highlights: [
        'Kid-friendly learning flow with game-like progression.',
        'Short challenge cards with level-up style feedback.',
        'Built to keep focus high and learning stress low.',
      ],
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      stats: [
        { label: 'Mode', value: 'Prototype' },
        { label: 'Audience', value: 'Kids' },
        { label: 'Focus', value: 'Gamified Learning' },
      ],
      repoUrl: 'https://github.com/your-username/miniminds',
      liveUrl: 'https://your-miniminds-app-url.com',
    },
    carsio: {
      name: 'Cars.IO',
      badge: 'DBMS • SQL Project',
      summary: 'A SQL-based retail database system that tracks car inventory, purchases, and sales records.',
      highlights: [
        'Structured schema for car inventory and transactions.',
        'Query-driven reporting for seller-side tracking.',
        'Designed around clean relational data flow.',
      ],
      stack: ['SQL', 'Database Design', 'DBMS'],
      stats: [
        { label: 'Project Type', value: 'Academic' },
        { label: 'Core Tech', value: 'SQL' },
        { label: 'Domain', value: 'Automotive Retail' },
      ],
      repoUrl: 'https://github.com/your-username/cars-io',
      liveUrl: 'https://your-cars-io-demo-url.com',
    },
    roledoc: {
      name: 'RoleDoc',
      badge: 'RAG AI Chatbot',
      summary: 'A document-chat assistant that reads uploaded files and responds with role-aware, context-smart answers.',
      highlights: [
        'Document upload with instant Q&A workflow.',
        'RAG pipeline for context-grounded responses.',
        'Roleplay-oriented answer style control.',
      ],
      stack: ['RAG', 'LLM APIs', 'Next.js'],
      stats: [
        { label: 'AI Pattern', value: 'RAG' },
        { label: 'Input', value: 'Docs' },
        { label: 'Output', value: 'Real-Time Chat' },
      ],
      repoUrl: 'https://github.com/your-username/roledoc',
      liveUrl: 'https://your-roledoc-app-url.com',
    },
    fastype: {
      name: 'FasType',
      badge: 'Typing Practice App',
      summary: 'A lightweight React typing trainer for speed practice and quick WPM checks.',
      highlights: [
        'Simple typing sessions with instant speed feedback.',
        'Focused UI for daily practice loops.',
        'Fast load, minimal setup, easy replay.',
      ],
      stack: ['React', 'JavaScript', 'CSS'],
      stats: [
        { label: 'Type', value: 'Practice Tool' },
        { label: 'Core Metric', value: 'WPM' },
        { label: 'Experience', value: 'Minimal' },
      ],
      repoUrl: 'https://github.com/your-username/fastype',
      liveUrl: 'https://your-fastype-app-url.com',
    },
  };

  const selectedProject = activeProject ? popupProjects[activeProject] : null;

  return (
    <section className="px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold font-headline text-[#064e3f] mb-6">
          Projects Made.
        </h2>
        <p className="text-xl text-[#064e3b]/80 font-medium">Clean interfaces meeting powerful logical backends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[3rem] p-10 md:p-12 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-[550px] overflow-hidden relative shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
        >
            <BracketButton onClick={() => setActiveProject('calgpa')} label="Open CalGPA project details popup" />
          <div className="flex flex-col relative z-10 w-full mb-10 text-center items-center">
            <h3 className="text-4xl font-extrabold font-headline text-[#064e3f] mb-5">CalGPA</h3>
            <p className="text-[#10b981] font-bold text-sm tracking-widest uppercase bg-[#10b981]/10 px-4 py-1.5 rounded-full">Academic Tool • PWA</p><br />
            <p className="text-[#10b981] text-xl font-medium mb-12 max-w-md leading-relaxed">CalGPA is a web app designed to help uni students analyze and check their semester performance</p>

          </div>
          <div className="mt-auto relative overflow-hidden aspect-[9/42] w-[90%] md:w-[84%] max-w-none md:max-w-[370px] mx-auto -mb-[30%] rounded-[2.5rem] border-[10px] border-white shadow-[0_16px_28px_rgba(6,78,59,0.25)] transition-transform duration-500 md:group-hover:-translate-y-4 bg-[#0f172a]/20">
            <PhoneMockup screenshotSrc={screenshots.calgpa || undefined} alt="CalGPA mobile preview" accentClassName="bg-gradient-to-b from-[#34d399] to-[#059669]" topVisibleImageOnly />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[3rem] p-10 md:p-12 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-[550px] overflow-hidden relative shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
        >
            <BracketButton onClick={() => setActiveProject('zephra')} label="Open Zephra project details popup" />
          <div className="flex flex-col relative z-10 w-full mb-10 text-center items-center">
            <h3 className="text-4xl font-extrabold font-headline text-[#064e3f] mb-5">Zephra</h3>
            <p className="text-[#059669] font-bold text-sm tracking-widest uppercase bg-[#059669]/10 px-4 py-1.5 rounded-full mb-4">Climate Tracking • PWA</p>
            <p className="text-[#10b981] text-xl font-medium mb-12 max-w-md leading-relaxed">A web app that merges NASA TEMPO satellite data with ground-based monitoring to provide real-time air quality forecasts.</p>
          </div>
          <div className="mt-auto relative overflow-hidden aspect-[9/42] w-[90%] md:w-[84%] max-w-none md:max-w-[370px] mx-auto -mb-[30%] rounded-[2.5rem] border-[10px] border-white shadow-[0_16px_28px_rgba(6,78,59,0.25)] transition-transform duration-500 md:group-hover:-translate-y-4 bg-[#0f172a]/20">
            <PhoneMockup screenshotSrc={screenshots.zephra || undefined} alt="Zephra mobile preview" accentClassName="bg-gradient-to-b from-[#6ee7b7] to-[#10b981]" topVisibleImageOnly />
          </div>
        </motion.div>
      </div>

      {/* Featured Big Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#10b981] rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 shadow-[0_20px_60px_rgba(16,185,129,0.2)] overflow-hidden"
      >
        <BracketButton onClick={() => setActiveProject('aether')} label="Open Aether project details popup" inverse />
        <div className="md:w-1/2 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[12px] font-extrabold font-headline text-[#059669] mb-8 uppercase tracking-widest shadow-sm">FEATURED APP</span>
          <h3 className="text-5xl md:text-[4.5rem] font-extrabold font-headline text-white mb-6 leading-none">Aether.</h3>
          <p className="text-[#a7f3d0] text-xl font-medium mb-12 max-w-md leading-relaxed">A virtual pet system that integrates journaling, habit tracking, emotional analytics, and autonomous AI behavior..</p>
        </div>
        <div className="md:w-1/2 relative w-full flex justify-center z-10">
          <div className="w-[90%] sm:w-[76%] md:w-[56%] max-w-none md:max-w-[260px] aspect-[9/19] rounded-[2.7rem] border-[10px] border-white shadow-[0_18px_30px_rgba(6,78,59,0.28)] rotate-[-4deg] hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <PhoneMockup screenshotSrc={screenshots.aether || undefined} alt="Aether mobile preview" accentClassName="bg-gradient-to-b from-[#10b981] to-[#047857]" imageClassName="scale-[1.02]" topGapPx={2} />
          </div>
        </div>

        {/* Giant background blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[140%] bg-[#059669] rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      </motion.div>

      <div className="mt-10 mb-6 w-full">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {[
          {
            key: 'miniminds' as const,
            name: 'Mini-Minds',
            short: 'Fun e-learning with levels and mini exercises.',
            tone: 'bg-[#ecfdf5]',
          },
          {
            key: 'carsio' as const,
            name: 'Cars.IO',
            short: 'SQL retail DB for car sales and purchases.',
            tone: 'bg-[#f0fdf4]',
          },
          {
            key: 'roledoc' as const,
            name: 'RoleDoc',
            short: 'RAG chatbot that talks with your documents.',
            tone: 'bg-[#ecfeff]',
          },
          {
            key: 'fastype' as const,
            name: 'FasType',
            short: 'React typing speed practice and WPM checks.',
            tone: 'bg-[#f0fdfa]',
          },
        ].map((item) => (
          <div
            key={item.name}
            className="relative aspect-square rounded-[2rem] border border-emerald-100/80 bg-white shadow-[0_16px_30px_rgba(16,185,129,0.1)] p-4"
          >
            <BracketButton
              onClick={() => setActiveProject(item.key)}
              label={`Open ${item.name} project details popup`}
              className="top-3 right-3 h-8 w-8 rounded-lg"
              iconClassName="text-[0.72rem]"
            />
            <div className={`h-full w-full rounded-[1.35rem] ${item.tone} border border-emerald-100/70 p-3 flex flex-col justify-between`}>
              <div className="h-2.5 w-10 rounded-full bg-emerald-300/70" />
              <div>
                <p className="text-[0.97rem] font-bold text-emerald-900/90 leading-tight">{item.name}</p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-emerald-900/70">{item.short}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#052e24]/45 backdrop-blur-md md:p-8"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 26, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
                className="h-full w-full md:mx-auto md:h-[92vh] md:max-w-5xl overflow-hidden bg-white/65 border border-white/70 md:rounded-[2.5rem] shadow-[0_30px_80px_rgba(6,78,59,0.28)]"
            >
              <div className="h-full overflow-y-auto p-6 md:p-10">
                <div className="flex items-start justify-between gap-4 mb-6 md:mb-8">
                  <div>
                    <p className="inline-flex px-4 py-1.5 rounded-full text-xs tracking-[0.16em] uppercase bg-emerald-900/10 text-emerald-900 font-semibold">
                      {selectedProject.badge}
                    </p>
                    <h3 className="mt-4 text-4xl md:text-5xl font-black text-emerald-950 leading-tight">{selectedProject.name}</h3>
                    <p className="mt-4 text-base md:text-lg text-emerald-900/85 max-w-3xl leading-relaxed">{selectedProject.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="h-11 w-11 rounded-2xl border border-emerald-200 bg-white/80 text-emerald-900 text-xl font-semibold hover:bg-white transition-colors shrink-0"
                    aria-label="Close popup"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,0.85fr] gap-6 md:gap-8">
                  <div className="rounded-[2rem] border border-white/70 bg-white/60 backdrop-blur-md p-5 md:p-6 shadow-[0_15px_40px_rgba(15,23,42,0.1)]">
                    <h4 className="text-xl font-bold text-emerald-950">Project Insights</h4>
                    <ul className="mt-4 space-y-3">
                      {selectedProject.highlights.map((item) => (
                        <li key={item} className="rounded-xl bg-white/75 border border-emerald-700/10 px-4 py-3 text-emerald-900/90">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h5 className="mt-6 text-sm tracking-[0.14em] uppercase font-bold text-emerald-900/80">Tech Stack</h5>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-900/10 text-emerald-900 border border-emerald-700/15">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                    <div className="space-y-6">
                      <div className="rounded-[2rem] border border-white/70 bg-white/60 backdrop-blur-md p-4 md:p-5 shadow-[0_15px_40px_rgba(15,23,42,0.1)]">
                        <h4 className="text-sm tracking-[0.14em] uppercase font-bold text-emerald-900/80 mb-4">Project Links</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <a
                            href={selectedProject.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-emerald-700/15 bg-white/85 px-4 py-3 text-center font-semibold text-emerald-900 hover:bg-white transition-colors"
                          >
                            Open Repository
                          </a>
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-emerald-700/15 bg-emerald-700 text-white px-4 py-3 text-center font-semibold hover:bg-emerald-800 transition-colors"
                          >
                            Open Live App
                          </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedProject.stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                          <p className="text-[11px] tracking-[0.12em] uppercase text-emerald-900/65 font-semibold">{stat.label}</p>
                          <p className="mt-1.5 text-sm font-bold text-emerald-950">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
