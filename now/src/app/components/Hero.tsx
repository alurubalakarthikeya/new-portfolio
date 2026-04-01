"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10">

        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-[6.5rem] font-extrabold font-headline text-[#022c22] tracking-tighter leading-[1.05] mb-8">
            Hi. I'm Karthikeya.<br />
            <span className="text-[#10b981]">Web Designer & AI Developer.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#064e3b]/80 font-body leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            I build intelligent, production-grade applications that fuse raw engine power with incredibly clean, human-centered UI.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Mega Button */}
            <Link href="/work"
              className="group relative bg-[#10b981] text-white px-12 py-5 rounded-full font-headline font-bold text-xl hover:-translate-y-1 shadow-[0_6px_0_#059669] hover:shadow-[0_8px_0_#059669] active:translate-y-2 active:shadow-none transition-all duration-200"
            >
              Explore Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
