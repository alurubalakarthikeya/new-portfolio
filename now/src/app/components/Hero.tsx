"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full relative min-h-screen md:min-h-0 md:h-full flex items-center justify-center px-6 md:px-12">

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10">

        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-[4.8rem] font-extrabold font-headline text-[#064e3f] tracking-tighter leading-[1.05] mb-6">
            Hi. I'm Karthikeya.<br />
            <span className="text-[#ffffff] md:text-[2.9rem]">DevOps & SNow Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-[#064e3f]/80 font-body leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            I build & deploy production level apps with clean, human-centered UI, and I’m deeply passionate about ServiceNow solutions.
          </p>

          <div className="md:hidden flex gap-5 justify-center mb-8">
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="mailto:alurubalakarthikeya@gmail.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://linkedin.com/in/alurubalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 0 3.1ZM8.33 10H5.54v8.6h2.79V10ZM12.8 10h-2.67v8.6h2.79v-4.25c0-2.37 3.08-2.56 3.08 0v4.25h2.78v-5.2c0-4.04-4.56-3.88-5.98-1.9V10Z" />
              </svg>
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://github.com/alurubalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.89.83.09-.65.35-1.08.63-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.71-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.03A9.55 9.55 0 0 1 12 6.84c.85 0 1.71.12 2.5.35 1.9-1.3 2.74-1.03 2.74-1.03.56 1.42.21 2.47.1 2.73.64.7 1.03 1.6 1.03 2.71 0 3.85-2.34 4.69-4.57 4.95.36.31.67.92.67 1.85v2.75c0 .27.18.59.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M18.24 2H21l-6.03 6.9L22 22h-5.62l-4.4-5.9L6.8 22H4.03l6.45-7.36L2 2h5.76l3.98 5.33L18.24 2Zm-1.97 18h1.56L7.1 3.9H5.43L16.27 20Z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Mega Button */}
            <Link href="/work"
              className="group relative bg-[#10b981] text-white px-10 py-4 rounded-full font-headline font-bold text-lg hover:-translate-y-1 shadow-[0_6px_0_#059669] hover:shadow-[0_8px_0_#059669] active:translate-y-2 active:shadow-none transition-all duration-200"
            >
              Explore Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
