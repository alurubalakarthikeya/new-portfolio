"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const focusTags = ["DevOps", "Automation", "UI/UX Systems", "Full Stack", "ServiceNow", "AI Workflows"];

const socialLinks = [
    { href: "https://linkedin.com/in/alurubalakarthikeya", label: "LinkedIn", icon: faLinkedinIn },
    { href: "https://github.com/alurubalakarthikeya", label: "GitHub", icon: faGithub },
    { href: "https://x.com/abalakarthikeya", label: "X", icon: faXTwitter },
    { href: "https://youtube.com/@your-channel", label: "YouTube", icon: faYoutube },
];

export default function Contact() {
    return (
        <section className="relative w-full min-h-screen flex items-center py-20 md:py-24 lg:py-16 overflow-hidden" id="contact">
            <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 text-center lg:text-left"
                >
                    <p className="inline-flex px-3.5 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold bg-[#10b981]/12 text-[#047857] border border-[#10b981]/20">
                        Contact / Open for Work
                    </p>
                    <h2 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline font-doto text-[#022c22] leading-[0.95] tracking-tight">
                        Let’s build
                        <br />
                        something meaningful.
                    </h2>
                    <p className="mt-5 max-w-2xl mx-auto lg:mx-0 text-[#064e3b]/85 text-lg md:text-xl font-medium leading-relaxed">
                        DevOps pipelines, smart product engineering, and high-polish UI/UX experiences. If you want all three done right, let us build together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -22 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-8"
                    >
                        <div className="flex flex-wrap gap-3 mb-5 justify-center lg:justify-start">
                            {focusTags.map((word) => (
                                <span
                                    key={word}
                                    className="px-3 py-1.5 rounded-full text-xs tracking-[0.12em] uppercase font-bold bg-white/65 text-[#047857] border border-emerald-200/80 backdrop-blur-md"
                                >
                                    {word}
                                </span>
                            ))}
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200/60 bg-white/65 backdrop-blur-xl shadow-[0_20px_56px_rgba(6,95,70,0.14)] px-5 py-4 md:px-6">
                            <div className="absolute inset-y-0 right-[-10%] w-[40%] rounded-full bg-[#10b981]/14 blur-2xl" />
                            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                <a
                                    href="mailto:alurubalakarthikeya@gmail.com"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#10b981] text-white px-7 py-3 font-extrabold text-base md:text-lg shadow-[0_7px_0_#059669] hover:-translate-y-1 hover:shadow-[0_10px_0_#059669] active:translate-y-1 active:shadow-[0_4px_0_#059669] transition-all"
                                >
                                    Start a Conversation
                                    <span className="material-symbols-outlined text-[1.1rem]">arrow_outward</span>
                                </a>
                                <span className="text-[#065f46] font-semibold text-sm md:text-base text-center sm:text-left">Usually replies within 24h</span>
                            </div>
                        </div>

                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, x: 22 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                        className="lg:col-span-4"
                    >
                        <div className="rounded-[2rem] border border-emerald-300/45 bg-gradient-to-br from-[#10b981] to-[#047857] text-white p-5 md:p-6 shadow-[0_24px_62px_rgba(6,95,70,0.26)] text-center lg:text-left">
                            <p className="text-[11px] tracking-[0.14em] uppercase text-[#d1fae5] font-bold">Primary Channel</p>
                            <p className="mt-2 text-white text-lg font-extrabold break-all">alurubalakarthikeya@gmail.com</p>

                            <div className="mt-5 flex items-center gap-3 justify-center lg:justify-start flex-wrap">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item.label}
                                        className="h-12 w-12 md:h-10 md:w-10 rounded-xl bg-white/20 border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.label}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="w-5 h-5 md:w-4 md:h-4" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
