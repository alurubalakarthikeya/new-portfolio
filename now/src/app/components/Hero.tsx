"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import bush1 from "../assets/forest assets/bush-1.png";
import bush2 from "../assets/forest assets/bush-2.png";
import creeper1 from "../assets/forest assets/creeper-1.png";

export default function Hero() {
  return (
    <section id="hero" className="w-full relative min-h-screen md:min-h-0 md:h-full flex items-center justify-center px-6 md:px-12 pt-10 md:pt-12 pb-36 md:pb-44 scroll-mt-28">

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10">

        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-[4.8rem] font-extrabold font-headline text-[#064e3f] tracking-tighter leading-[1.05] mb-6">
            Hi. I&apos;m Karthikeya<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle">+</span><br />
            <span className="text-[#ffffff] md:text-[2.9rem]">DevOps & SNow Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-[#064e3f]/80 font-body leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            I build & deploy production level apps with clean, sleek UI, and I’m deeply passionate about ServiceNow solutions.
          </p>

          <div className="md:hidden flex gap-5 justify-center mb-8">
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="mailto:alurubalakarthikeya@gmail.com"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://linkedin.com/in/alurubalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://github.com/alurubalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://x.com/abalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              className="text-[#064e3b]/70 hover:text-[#10b981] transition-colors"
              href="https://youtube.com/@cartyk"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-16 h-16" aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Mega Button */}
            <Link href="/work"
              className="group relative bg-[#10b981]/90 backdrop-blur-md text-white px-10 py-4 rounded-full font-headline font-bold text-lg hover:-translate-y-1 shadow-[0_6px_0_#059669] hover:shadow-[0_8px_0_#059669] active:translate-y-2 active:shadow-none transition-all duration-200 border border-[#86efac]/45"
            >
              Explore Work
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
