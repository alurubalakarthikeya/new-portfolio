"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ResumeDownloadFab() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 }}
      className="fixed right-3 md:right-5 bottom-[4vh] z-[950]"
    >
      <div className="relative group">
        <motion.p
          className="hidden md:block absolute right-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl border border-white/65 bg-white/38 backdrop-blur-xl px-2.5 py-1 text-[9px] font-bold tracking-[0.07em] uppercase text-[#047857] shadow-[0_10px_24px_rgba(6,95,70,0.14)] opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        >
          Download my resume
        </motion.p>

        <a
          href="/resume.pdf"
          download
          aria-label="Download resume"
          className="group h-9 w-9 rounded-full border border-[#86efac]/55 bg-[#10b981] text-white shadow-[0_8px_18px_rgba(6,95,70,0.2)] hover:-translate-y-0.5 hover:bg-[#059669] active:translate-y-0 transition-all flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faDownload} className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}
