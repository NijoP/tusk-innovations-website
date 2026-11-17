'use client';

import Image from 'next/image';
import Link from 'next/link';

interface RecognitionItem {
  id: string;
  name: string;
  category: string;
  href: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  isCustomRender?: boolean;
}

const RECOGNITION_ITEMS: RecognitionItem[] = [
  {
    id: 'nvidia',
    name: 'NVIDIA Inception',
    category: 'Global AI Ecosystem Member',
    href: '/about#achievements',
    logo: '/brand/nvidia-full.svg',
    logoAlt: 'NVIDIA Inception Program Official Logo',
    logoWidth: 120,
    logoHeight: 28,
  },
  {
    id: 'ksum',
    name: 'Kerala Startup Mission',
    category: 'KSUM Idea Grant Awardee',
    href: '/about#achievements',
    logo: '/brand/ksum-logo.svg',
    logoAlt: 'Kerala Startup Mission (KSUM) Official Logo',
    logoWidth: 140,
    logoHeight: 28,
  },
  {
    id: 'startup-india',
    name: 'Startup India & DPIIT',
    category: 'DPIIT Recognised (Govt. of India)',
    href: '/about#registrations',
    logo: '/brand/startup-india.png',
    logoAlt: 'Startup India DPIIT Ministry of Commerce & Industry',
    logoWidth: 110,
    logoHeight: 30,
    isCustomRender: true,
  },
  {
    id: 'mca',
    name: 'Ministry of Corporate Affairs',
    category: 'MCA Incorporated (Govt. of India)',
    href: '/about#registrations',
    logo: '/brand/mca-logo.svg',
    logoAlt: 'Ministry of Corporate Affairs Government of India Official Emblem',
    logoWidth: 130,
    logoHeight: 30,
  },
];

export function HeroRecognitionMarquee() {
  // Duplicate array for seamless infinite looping
  const duplicatedItems = [...RECOGNITION_ITEMS, ...RECOGNITION_ITEMS, ...RECOGNITION_ITEMS];

  return (
    <div className="w-full pt-8 pb-2 space-y-3.5" aria-label="Official company recognitions and statutory accreditations">
      <div className="flex items-center justify-center gap-2">
        <span className="w-6 h-px bg-[#d4d1c6] dark:bg-neutral-800" />
        <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-widest text-[#888780] dark:text-neutral-400">
          Official Recognitions &amp; Statutory Credentials
        </span>
        <span className="w-6 h-px bg-[#d4d1c6] dark:bg-neutral-800" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-1">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#faf9f5] dark:from-[#0a0c0f] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#faf9f5] dark:from-[#0a0c0f] to-transparent z-10" />

        {/* Continuous Horizontal Marquee Track */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
          {duplicatedItems.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.href}
              className="group flex-shrink-0 flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 hover:border-[#da552f] dark:hover:border-[#ff5500] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200"
            >
              <div className="h-7 sm:h-8 flex items-center justify-center px-1.5 py-0.5 rounded bg-white dark:bg-neutral-900 border border-[#f0eee6] dark:border-neutral-800">
                {item.isCustomRender ? (
                  <div className="flex items-center gap-2">
                    <div className="relative h-6 w-20">
                      <Image
                        src="/brand/startup-india.png"
                        alt="Startup India"
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                    <span className="text-[9px] font-mono font-semibold text-neutral-500 dark:text-neutral-400 border-l border-neutral-300 dark:border-neutral-700 pl-1.5">
                      DPIIT
                    </span>
                  </div>
                ) : (
                  <div
                    className="relative flex items-center justify-center"
                    style={{ width: `${item.logoWidth * 0.75}px`, height: `${item.logoHeight}px` }}
                  >
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      fill
                      className="object-contain object-center"
                      sizes="150px"
                    />
                  </div>
                )}
              </div>

              <div className="text-left flex flex-col justify-center">
                <span className="text-xs font-serif font-bold text-[#141413] dark:text-white group-hover:text-[#da552f] dark:group-hover:text-[#ff5500] transition-colors leading-tight whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#888780] dark:text-neutral-400 whitespace-nowrap">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
