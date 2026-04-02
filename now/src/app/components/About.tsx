"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import mePhoto from "../assets/imgs/me.png";

const coreStack = [
    "Python",
    "TypeScript",
    "React",
    "DevOps",
    "CI/CD",
    "FastAPI",
    "RAG",
    "ServiceNow",
    "UI/UX",
    "Figma",
    "Prompt Engineering",
    "PWA",
    "JavaScript",
];

const journey = [
    {
        date: "May 2025 - Present",
        title: "Lead Web Developer · DSU MUNS Club",
        blurb: "Built event systems and React interfaces that scaled student applications and team output.",
    },
    {
        date: "Jun 2024 - Jul 2025",
        title: "AI Intern · Akeshya Pvt Ltd",
        blurb: "Engineered RAG-driven workflows with HuggingFace + FAISS for faster retrieval and cleaner doc intelligence.",
    },
];

const certs = [
    { name: "ServiceNow SysAdmin", issuer: "ServiceNow" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp" },
    { name: "Full Stack Development", issuer: "Udemy" },
];

const loopTitles = [
    "DevOps Engineering",
    "Product Development",
    "UI/UX Systems",
    "ServiceNow Workflows",
    "Workflow Automation",
    "Enterprise UX",
    "AI + RAG Systems",
    "Full Stack Delivery",
    "Performance Driven",
    "Design-Led Building",
];

const focusAreas = [
    { label: "DevOps & Delivery", level: 92 },
    { label: "UI/UX Craft", level: 90 },
    { label: "Full Stack Development", level: 91 },
    { label: "ServiceNow Workflows", level: 86 },
];

const education = [
    {
        institution: "Dayananda Sagar University",
        period: "Sep 2023 - May 2027",
        score: "8.4 CGPA",
    },
    {
        institution: "Narayana Institute",
        period: "Aug 2021 - Mar 2023",
        score: "87%",
    },
    {
        institution: "Ratnam High School",
        period: "Jun 2016 - Apr 2021",
        score: "9.8",
    },
];


export default function About() {
    return (
        <section id="about" className="relative px-6 md:px-12 w-full max-w-7xl mx-auto pb-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]">
                <div className="absolute top-6 -left-6 w-72 h-72 rounded-full bg-[#10b981]/20 blur-3xl" />
                <div className="absolute top-10 right-8 w-80 h-80 rounded-full bg-[#047857]/20 blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-14"
            >
                <p className="inline-block px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold bg-[#10b981]/10 text-[#047857] border border-[#10b981]/20">
                    About / Design + Dev + Me
                </p>
                <h2 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline font-doto text-[#022c22] tracking-tight leading-[0.95]">
                    Building Apps,
                    With Passion<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle">+</span>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-[#064e3b]/80 font-medium max-w-3xl mx-auto">
                    I build at the intersection of DevOps, full stack engineering, UI/UX, and intelligent automation with ServiceNow as one of my core strengths.
                </p>
            </motion.div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden rounded-none border-y border-[#86efac]/45 bg-[#d1fae5]/35 backdrop-blur-2xl shadow-[0_12px_32px_rgba(5,150,105,0.16)] mb-10">
                <motion.div
                    className="flex gap-4 w-max py-4 px-6 md:px-12"
                    animate={{ x: [0, -860] }}
                    transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                >
                    {[...loopTitles, ...loopTitles, ...loopTitles].map((title, index) => (
                        <span
                            key={`single-${index}`}
                            className="px-4 py-1.5 rounded-full text-xs md:text-sm tracking-[0.13em] uppercase font-extrabold bg-[#10b981]/12 text-[#047857] border border-[#10b981]/18 whitespace-nowrap"
                        >
                            {title}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="lg:col-span-7 relative rounded-[2.3rem] bg-white border border-emerald-100/80 p-7 md:p-9 shadow-[0_24px_60px_rgba(16,185,129,0.08)] overflow-hidden"
                >
                    <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#10b981]/15 blur-3xl" />
                    <div className="mb-6 flex items-center gap-4 rounded-2xl border border-emerald-600/20 bg-[#10b981]/12  p-3 shadow-sm">
  
  <div className="relative w-16 h-16 rounded-full border-2 border-emerald-500/40 overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
    <Image
      src={mePhoto}
      alt="Karthikeya profile"
      fill
      className="object-cover"
      sizes="64px"
      priority
    />
  </div>

  <div>
        <p className="text-gray-900 font-bold text-lg leading-tight">
      Aluru Bala Karthikeya
    </p>
    <p className="text-[12px] tracking-[0.13em] uppercase font-bold text-emerald-600">
      24k @LinkedIn
    </p>
  </div>

</div>
                    <h3 className="text-3xl md:text-4xl font-extrabold font-headline text-[#022c22] leading-tight mb-4">About Me</h3>
                    <p className="text-lg text-[#064e3b]/85 leading-relaxed font-medium">
                        I focus on delivering robust systems across DevOps pipelines, full stack architecture, and clean interface design that users genuinely enjoy.
                    </p>
                    <p className="mt-4 text-lg text-[#064e3b]/80 leading-relaxed font-medium">
                        ServiceNow, AI workflows, and modern frontend patterns come together in my workflow to build products that are both scalable and human.
                    </p>
                </motion.article>

                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    className="lg:col-span-5 rounded-[2.3rem] bg-[#022c22] text-white border border-emerald-400/20 p-7 md:p-9 shadow-[0_24px_60px_rgba(2,44,34,0.24)]"
                >
                    <h3 className="text-3xl font-extrabold font-headline mb-6">Skills</h3>
                    <div className="space-y-4 mb-7">
                        {focusAreas.map((item) => (
                            <div key={item.label}>
                                <div className="flex items-center justify-between text-sm font-semibold mb-1 text-[#d1fae5]">
                                    <span>{item.label}</span>
                                    <span>{item.level}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-white/12 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-[#34d399] to-[#a7f3d0]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {coreStack.map((skill) => (
                            <span key={skill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#d1fae5] font-semibold text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.article>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-4 rounded-[2.3rem] border border-emerald-100 bg-white/80 backdrop-blur-md p-7 md:p-9 shadow-[0_18px_45px_rgba(16,185,129,0.08)]"
                >
                    <h3 className="text-2xl md:text-3xl font-extrabold font-headline text-[#022c22]">Currently Working</h3>
                    <p className="mt-3 text-lg text-[#064e3b]/80 font-medium leading-relaxed">
                        Designing agentic systems that feel less like tools and more like collaborators, while keeping UI language bold, calm, and unmistakably human.
                    </p>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="lg:col-span-8 rounded-[2.3rem] bg-white border border-emerald-100/80 p-7 md:p-9 shadow-[0_20px_55px_rgba(16,185,129,0.08)]"
                >
                    <h3 className="text-3xl md:text-4xl font-extrabold font-headline text-[#022c22] mb-6">Education</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {education.map((item) => (
                            <div key={item.institution} className="rounded-2xl bg-[#ecfdf5] border border-emerald-100/80 px-4 py-4">
                                <p className="text-lg font-bold text-[#022c22] leading-snug">{item.institution}</p>
                                <p className="mt-2 text-[11px] tracking-[0.08em] uppercase text-[#047857] font-bold">{item.period}</p>
                                <p className="mt-2 text-[#064e3b]/85 font-semibold">Score: {item.score}</p>
                            </div>
                        ))}
                    </div>
                </motion.article>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                <motion.article
                    id="experience"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-8 rounded-[2.3rem] bg-white border border-emerald-100/80 p-7 md:p-9 shadow-[0_20px_55px_rgba(16,185,129,0.08)]"
                >
                    <h3 className="text-3xl md:text-4xl font-extrabold font-headline text-[#022c22] mb-7">Experiences</h3>
                    <div className="space-y-5">
                        {journey.map((item, index) => (
                            <div key={item.title} className="relative rounded-2xl bg-[#ecfdf5] border border-emerald-100/80 px-5 py-4">
                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#10b981] to-[#047857]" />
                                <p className="text-xs tracking-[0.14em] uppercase text-[#047857] font-bold ml-2">{item.date}</p>
                                <h4 className="mt-1 text-xl font-bold text-[#022c22] ml-2">{item.title}</h4>
                                <p className="mt-2 text-[#064e3b]/80 font-medium leading-relaxed ml-2">{item.blurb}</p>
                                {index < journey.length - 1 ? <div className="mt-4 border-b border-emerald-200/60" /> : null}
                            </div>
                        ))}
                    </div>
                </motion.article>

                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-4 rounded-[2.3rem] bg-[#10b981] text-white border border-emerald-300/40 p-7 md:p-9 shadow-[0_22px_55px_rgba(16,185,129,0.26)]"
                >
                    <h3 className="text-3xl font-extrabold font-headline mb-5">Credentials</h3>
                    <div className="space-y-4">
                        {certs.map((cert) => (
                            <div key={cert.name} className="rounded-2xl bg-white/15 border border-white/30 px-4 py-3">
                                <p className="text-xs tracking-[0.12em] uppercase text-[#d1fae5] font-bold">{cert.issuer}</p>
                                <p className="mt-1 font-bold text-white text-lg leading-tight">{cert.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.article>
            </div>

        </section>
    );
}
