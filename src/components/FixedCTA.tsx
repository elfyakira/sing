'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contact } from '@/lib/site';

export default function FixedCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/contact') return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (pathname === '/contact') return null;

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-[99] bg-white flex h-[60px] transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.08)' }}
    >
      <a
        href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, '')}`}
        className="flex items-center justify-center gap-2 w-1/2 text-navy text-[13px] font-medium border-r border-[#E8E4DE]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        電話する
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center w-1/2 bg-accent text-white text-sm font-semibold"
      >
        無料相談
      </Link>
    </div>
  );
}
