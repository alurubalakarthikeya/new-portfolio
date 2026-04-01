"use client";
import { motion } from 'framer-motion';

export default function ProjectGrid() {
  return (
    <section className="px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold font-headline text-[#022c22] mb-6">
          Projects Made.
        </h2>
        <p className="text-xl text-[#064e3b]/80 font-medium">Clean interfaces meeting powerful logical backends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[3rem] p-10 md:p-12 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-[550px] overflow-hidden relative shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
        >
          <div className="flex flex-col relative z-10 w-full mb-10 text-center items-center">
            <h3 className="text-4xl font-extrabold font-headline text-[#022c22] mb-5">CalGPA</h3>
            <p className="text-[#10b981] font-bold text-sm tracking-widest uppercase bg-[#10b981]/10 px-4 py-1.5 rounded-full">Academic Tool • PWA</p><br />
            <p className="text-[#10b981] text-xl font-medium mb-12 max-w-md leading-relaxed">CalGPA is a web app designed to help uni students analyze and check their semester performance</p>

          </div>
          <div className="mt-auto relative rounded-t-[2.5rem] overflow-hidden aspect-[4/3] w-[95%] mx-auto -mb-[15%] shadow-xl transition-transform duration-500 md:group-hover:-translate-y-4 border-t-8 border-x-8 border-b-0 border-white">
            <div className="w-full h-full bg-[#10b981] relative">
              {/* Flat simplistic shapes inside the mock */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full flex justify-center items-center shadow-inner">
                <span className="material-symbols-outlined text-[4rem] text-[#059669]">robot_2</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[3rem] p-10 md:p-12 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-[550px] overflow-hidden relative shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
        >
          <div className="flex flex-col relative z-10 w-full mb-10 text-center items-center">
            <h3 className="text-4xl font-extrabold font-headline text-[#022c22] mb-5">Zephra</h3>
            <p className="text-[#059669] font-bold text-sm tracking-widest uppercase bg-[#059669]/10 px-4 py-1.5 rounded-full mb-4">Climate Tracking • PWA</p>
            <p className="text-[#10b981] text-xl font-medium mb-12 max-w-md leading-relaxed">A web app that merges NASA TEMPO satellite data with ground-based monitoring to provide real-time air quality forecasts.</p>
          </div>
          <div className="mt-auto relative rounded-t-[2.5rem] overflow-hidden aspect-[4/3] w-[95%] mx-auto -mb-[15%] shadow-xl transition-transform duration-500 md:group-hover:-translate-y-4 border-t-8 border-x-8 border-b-0 border-white">
            <div className="w-full h-[120%] bg-[#34d399] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-[2rem] flex justify-center items-center shadow-inner rotate-12">
                <span className="material-symbols-outlined text-[4rem] text-[#047857]">self_improvement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Big Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#10b981] rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 shadow-[0_20px_60px_rgba(16,185,129,0.2)] overflow-hidden"
      >
        <div className="md:w-1/2 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[12px] font-extrabold font-headline text-[#059669] mb-8 uppercase tracking-widest shadow-sm">FEATURED APP</span>
          <h3 className="text-5xl md:text-[4.5rem] font-extrabold font-headline text-white mb-6 leading-none">Aether.</h3>
          <p className="text-[#a7f3d0] text-xl font-medium mb-12 max-w-md leading-relaxed">A virtual pet system that integrates journaling, habit tracking, emotional analytics, and autonomous AI behavior..</p>
        </div>
        <div className="md:w-1/2 relative w-full flex justify-center z-10">
          <div className="w-full max-w-sm aspect-square bg-[#059669] rounded-[3rem] p-8 shadow-inner border-[16px] border-white/20 rotate-[-4deg] hover:rotate-0 transition-transform duration-500 flex justify-center items-center">
            <span className="material-symbols-outlined text-white text-[8rem]">menu_book</span>
          </div>
        </div>

        {/* Giant background blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[140%] bg-[#059669] rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      </motion.div>
    </section>
  );
}
