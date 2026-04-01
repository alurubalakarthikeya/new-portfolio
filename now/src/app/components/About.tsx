"use client";
import { motion } from "framer-motion";

const skills = [
    "Python", "TypeScript", "ReactJS", "FastAPI", "FAISS",
    "Retrieval-Augmented Generation", "Figma", "ServiceNow",
    "PWA", "Prompt Engineering", "JavaScript"
];

export default function About() {
    return (
        <section className="px-6 md:px-12 w-full max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-extrabold font-headline text-[#022c22] mb-6">
                    About me.
                </h2>
                <p className="text-xl text-[#064e3b]/80 font-medium max-w-2xl mx-auto">Blending machine learning logic with perfect pixel aesthetics.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_60px_rgba(16,185,129,0.06)]"
                >
                    <div className="w-16 h-16 bg-[#10b981]/10 rounded-full flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-[#10b981] text-3xl">psychology</span>
                    </div>
                    <p className="text-xl text-[#064e3b]/80 font-medium leading-relaxed mb-6">
                        I'm a Full Stack Developer and AI engineer profoundly interested in User Solution-Centric Apps, LLMs, and bridging the gap between intelligent AI tools and pristine UI/UX.
                    </p>
                    <p className="text-xl text-[#064e3b]/80 font-medium leading-relaxed">
                        I specialize in taking raw machine learning horsepower and packaging it into tactile, responsive interfaces that feel incredibly satisfying to use.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full lg:w-1/2 bg-[#022c22] text-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_60px_rgba(2,44,34,0.15)] flex flex-col justify-center relative overflow-hidden"
                >
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#10b981] rounded-full blur-[80px] opacity-40"></div>

                    <h3 className="text-3xl font-extrabold font-headline mb-10 relative z-10">Toolkit.</h3>
                    <div className="flex flex-wrap gap-4 relative z-10">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-white/10 text-[#a7f3d0] border border-white/20 px-6 py-3 rounded-full text-md font-bold hover:bg-[#10b981] hover:text-white transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
