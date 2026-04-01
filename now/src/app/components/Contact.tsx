"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="px-6 md:px-12 w-full max-w-5xl mx-auto" id="contact">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[#10b981] rounded-[4rem] p-16 md:p-32 text-center shadow-[0_30px_100px_rgba(16,185,129,0.3)] relative overflow-hidden"
            >
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-10 shadow-inner backdrop-blur-md">
                        <span className="material-symbols-outlined text-white text-[4rem]">waving_hand</span>
                    </div>

                    <h2 className="text-5xl md:text-[5.5rem] font-extrabold font-headline text-white mb-6 leading-tight tracking-tight">
                        Let's work<br />together.
                    </h2>

                    <p className="text-xl md:text-2xl text-[#a7f3d0] font-medium mb-16 max-w-xl mx-auto">
                        Ready to build intelligent apps with slick, world-class UI? Let's talk.
                    </p>

                    <a
                        href="mailto:alurubalakarthikeya@gmail.com"
                        className="group relative bg-white text-[#064e3b] px-14 py-6 rounded-full font-headline font-bold text-2xl hover:-translate-y-1 shadow-[0_8px_0_#064e3b] hover:shadow-[0_12px_0_#064e3b] active:translate-y-2 active:shadow-none transition-all duration-200 inline-flex items-center gap-4"
                    >
                        Say Hello <span>👋</span>
                    </a>
                </div>

                {/* Background playful shapes */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[100%] bg-[#059669] rounded-[4rem] rotate-12 -z-0 pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-5%] w-[50%] h-[80%] bg-[#34d399] rounded-full blur-[40px] -z-0 pointer-events-none opacity-50"></div>
            </motion.div>
        </section>
    );
}
