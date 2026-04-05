"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import bush2 from '../assets/forest assets/bush-2.png';

export default function MobileNav() {
  const pathname = usePathname();

  const links = [
    { href: '/', icon: 'home' },
    { href: '/work', icon: 'work' },
    { href: '/about', icon: 'face' },
    { href: '/contact', icon: 'mail' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-auto">
      <Image
        src={bush2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-5 bottom-0 -translate-x-[58%] w-20 opacity-80 z-0"
      />
      <nav className="relative z-10 bg-[#d1fae5]/35 backdrop-blur-2xl rounded-full flex items-center justify-center p-1 shadow-[0_12px_32px_rgba(5,150,105,0.16)] border border-[#86efac]/45 gap-[2px]">
        {links.map((l) => {
          const isActive = pathname === l.href || (pathname.startsWith(l.href) && l.href !== '/');
          return (
            <Link key={l.href} href={l.href}
              className={`px-[10px] py-[4px] rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                ? 'bg-[#10b981] text-white shadow-md hover:scale-105'
                : 'text-[#064e3b]/80 hover:bg-white/50 hover:scale-105 hover:text-[#059669]'
                }`}
            >
              <span className="material-symbols-outlined text-[8px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {l.icon}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
