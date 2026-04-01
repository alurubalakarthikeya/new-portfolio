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
