"use client";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pb-32">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-12">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="font-bold text-lg text-[#022c22] mb-1">Bala Karthikeya</p>
          <p className="text-sm font-medium text-[#059669]">© 2025 All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-[#064e3b]/70 font-bold hover:text-[#10b981] transition-colors" href="mailto:alurubalakarthikeya@gmail.com">Mail</a>
          <a className="text-[#064e3b]/70 font-bold hover:text-[#10b981] transition-colors" href="https://linkedin.com/in/alurubalakarthikeya" target="_blank">LinkedIn</a>
          <a className="text-[#064e3b]/70 font-bold hover:text-[#10b981] transition-colors" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
