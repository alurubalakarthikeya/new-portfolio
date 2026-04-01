"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      <nav className="bg-white/40 backdrop-blur-2xl rounded-full flex items-center justify-center p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 gap-1">
        {links.map((l) => {
          const isActive = pathname === l.href || (pathname.startsWith(l.href) && l.href !== '/');
          return (
            <Link key={l.href} href={l.href} scroll={false}
              className={`px-[14px] py-[6px] rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                ? 'bg-[#10b981] text-white shadow-md hover:scale-105'
                : 'text-[#064e3b]/80 hover:bg-white/50 hover:scale-105 hover:text-[#059669]'
                }`}
            >
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {l.icon}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
