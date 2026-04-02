"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="px-6 md:px-12 w-full max-w-6xl mx-auto" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-emerald-200/45 bg-gradient-to-br from-[#065f46] via-[#059669] to-[#10b981] p-6 md:p-8 shadow-[0_26px_72px_rgba(6,95,70,0.3)]"
            >
                <div className="absolute -top-24 -left-14 w-64 h-64 rounded-full bg-[#34d399]/30 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-12 w-72 h-72 rounded-full bg-[#022c22]/30 blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
                    <div className="lg:col-span-8 rounded-[1.8rem] bg-white/12 border border-white/20 backdrop-blur-md p-6 md:p-7">
                        <p className="inline-flex px-3.5 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold bg-white/15 text-[#d1fae5] border border-white/20">
                            Contact / Open for Work
                        </p>
                        <h2 className="mt-5 text-4xl md:text-[4.2rem] font-extrabold font-headline text-white leading-[0.95] tracking-tight">
                            Let’s build
                            <br />
                            something meaningful.
                        </h2>
                        <p className="mt-5 max-w-2xl text-[#d1fae5] text-lg md:text-xl font-medium leading-relaxed">
                            DevOps pipelines, smart product engineering, and high-polish UI/UX experiences. If you want all three done right, let us build together.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a
                                href="mailto:alurubalakarthikeya@gmail.com"
                                className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#065f46] px-7 py-3.5 font-extrabold text-base md:text-lg shadow-[0_8px_0_#064e3b] hover:-translate-y-1 hover:shadow-[0_11px_0_#064e3b] active:translate-y-1 active:shadow-[0_5px_0_#064e3b] transition-all"
                            >
                                Start a Conversation
                                <span className="material-symbols-outlined text-[1.1rem]">arrow_outward</span>
                            </a>
                            <span className="text-[#d1fae5]/90 font-semibold text-sm md:text-base">Usually replies within 24h</span>
                        </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                        <div className="rounded-[1.5rem] bg-white/16 border border-white/25 backdrop-blur-md p-5">
                            <p className="text-[11px] tracking-[0.14em] uppercase text-[#a7f3d0] font-bold">Primary Channel</p>
                            <p className="mt-2 text-white text-lg font-bold break-all">alurubalakarthikeya@gmail.com</p>
                        </div>

                        <div className="rounded-[1.5rem] bg-white/16 border border-white/25 backdrop-blur-md p-5">
                            <p className="text-[11px] tracking-[0.14em] uppercase text-[#a7f3d0] font-bold">Social Links</p>
                            <div className="mt-3 flex items-center gap-3">
                                <a
                                    className="h-10 w-10 rounded-xl bg-white/20 border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                                    href="https://linkedin.com/in/alurubalakarthikeya"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <span className="material-symbols-outlined text-[1.05rem]">work</span>
                                </a>
                                <a
                                    className="h-10 w-10 rounded-xl bg-white/20 border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                                    href="https://github.com/alurubalakarthikeya"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                >
                                    <span className="material-symbols-outlined text-[1.05rem]">code</span>
                                </a>
                                <a
                                    className="h-10 w-10 rounded-xl bg-white/20 border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="X"
                                >
                                    <span className="material-symbols-outlined text-[1.05rem]">chat</span>
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[1.5rem] overflow-hidden border border-white/25 bg-white/10">
                            <motion.div
                                className="flex gap-3 py-2.5"
                                animate={{ x: [0, -460] }}
                                transition={{ duration: 14, ease: "linear", repeat: Infinity }}
                            >
                                {[
                                    "DevOps",
                                    "Automation",
                                    "UI/UX Systems",
                                    "Full Stack",
                                    "ServiceNow",
                                    "UX Precision",
                                    "Enterprise Scale",
                                    "Developer Experience",
                                    "Product Engineering",
                                    "AI Workflows",
                                ].map((word, idx) => (
                                    <span
                                        key={`${word}-${idx}`}
                                        className="shrink-0 px-3 py-1 rounded-full text-xs tracking-[0.12em] uppercase font-bold bg-white/20 text-[#d1fae5] border border-white/20"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
