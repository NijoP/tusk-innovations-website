'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ChevronDown, ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { COMPANY_DETAILS } from '@/lib/data';

interface NavItemChild {
  label: string;
  href: string;
  description: string;
  isExternal?: boolean;
}

interface NavGroup {
  label: string;
  href?: string;
  items: NavItemChild[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Solutions',
    href: '/services',
    items: [
      {
        label: 'AI Solutions for Businesses',
        href: '/services/ai-solutions',
        description: 'Intelligent software, autonomous agents, and workflow automation systems.',
      },
      {
        label: 'Electronics & PCB Engineering',
        href: '/services/electronics-pcb',
        description: 'High-speed multi-layer PCB design, embedded systems, and hardware testing.',
      },
      {
        label: 'End-to-End Product Development',
        href: '/services/product-development',
        description: 'Full-cycle engineering from discovery and design to final delivery.',
      },
    ],
  },
  {
    label: 'Products',
    href: '/electronics-agent-kit',
    items: [
      {
        label: 'Electronics Agent Kit',
        href: '/electronics-agent-kit',
        description: 'AI-native workstation bringing intelligent agents and PCB engineering together.',
      },
      {
        label: 'Product Development Status',
        href: '/electronics-agent-kit#status',
        description: 'Verified capability matrix and development roadmap milestones.',
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/NijoP/electronics-agent-kit-new-prototype',
        description: 'Open prototype codebase, issue tracking, and developer updates.',
        isExternal: true,
      },
    ],
  },
  {
    label: 'Technology',
    href: '/technology',
    items: [
      {
        label: 'Engineering Architecture',
        href: '/technology#architecture',
        description: 'Deterministic kernel, event-sourced design model, and state runtime.',
      },
      {
        label: 'Technical Principles',
        href: '/technology#principles',
        description: 'Fail-closed validation, AI isolation, and mathematical DRC/ERC verification.',
      },
      {
        label: 'Open Source',
        href: '/open-source',
        description: 'Community initiatives, open-source toolkits, and developer documentation.',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/insights',
    items: [
      {
        label: 'Technical Insights',
        href: '/insights',
        description: 'Engineering essays, architectural analyses, and technical perspectives.',
      },
      {
        label: 'Engineering Articles',
        href: '/insights#articles',
        description: 'Practical notes on PCB design, AI agents, and embedded workflows.',
      },
      {
        label: 'Documentation',
        href: '/technology#docs',
        description: 'System specifications, reference guides, and engineering standards.',
      },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    items: [
      {
        label: 'About TUSK',
        href: '/about',
        description: 'Our mission, engineering culture, and technology focus.',
      },
      {
        label: 'Leadership',
        href: '/about#leadership',
        description: 'Founder profile and core engineering leadership.',
      },
      {
        label: 'Achievements',
        href: '/about#achievements',
        description: 'NVIDIA Inception Program and Kerala Startup Mission Idea Grant.',
      },
      {
        label: 'Registrations & Recognitions',
        href: '/about#registrations',
        description: 'MCA incorporation, DPIIT recognition, and statutory details.',
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Direct communication channels, project enquiries, and office details.',
      },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll listener for smooth height & subtle paper border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-[#faf9f5]/92 backdrop-blur-md border-[#e6e4dc] shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-[#faf9f5]/80 backdrop-blur-xs border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          scrolled ? 'h-16' : 'h-18 sm:h-20'
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#da552f] rounded"
          aria-label="TUSK Innovations Home"
        >
          <BrandLogo size={scrolled ? 34 : 38} theme="light" />
        </Link>

        {/* Desktop Navigation Groups */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_GROUPS.map((group) => {
            const isOpen = activeDropdown === group.label;
            const isGroupActive =
              (group.href && pathname === group.href) ||
              group.items.some((item) => pathname === item.href);

            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : group.label)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isGroupActive
                      ? 'text-[#141413] font-semibold'
                      : 'text-[#5a5a55] hover:text-[#141413]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{group.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#888780] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#141413]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-full left-0 pt-2 w-80 xl:w-96 animate-in fade-in-0 zoom-in-95 duration-150">
                    <div className="p-3 bg-white/95 backdrop-blur-md border border-[#e6e4dc] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] divide-y divide-[#f2f0e8]">
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              target={item.isExternal ? '_blank' : undefined}
                              rel={item.isExternal ? 'noopener noreferrer' : undefined}
                              className={`group block p-2.5 rounded-lg transition-all ${
                                isActive
                                  ? 'bg-[#f5f4ee] text-[#141413]'
                                  : 'hover:bg-[#faf9f5] text-[#141413]'
                              }`}
                            >
                              <div className="flex items-center justify-between text-xs font-semibold">
                                <span className="group-hover:text-[#da552f] transition-colors">
                                  {item.label}
                                </span>
                                {item.isExternal ? (
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#888780] group-hover:text-[#da552f] transition-colors" />
                                ) : (
                                  <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#da552f] group-hover:translate-x-0.5 transition-all" />
                                )}
                              </div>
                              <p className="mt-1 text-[11px] leading-relaxed text-[#5a5a55]">
                                {item.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                      {group.href && (
                        <div className="pt-2 mt-2 px-2.5">
                          <Link
                            href={group.href}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#888780] hover:text-[#da552f] transition-colors"
                          >
                            <span>Explore all {group.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions: Start a Project (Primary CTA) & GitHub (Secondary) */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#5a5a55] hover:text-[#141413] transition-colors"
            title="EAK GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden xl:inline">GitHub</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#2a2926] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex sm:hidden items-center px-3 py-1.5 text-xs font-semibold text-[#faf9f5] bg-[#141413] rounded-full"
          >
            Start
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5a5a55] hover:text-[#141413] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#da552f]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#faf9f5] border-t border-[#e6e4dc] overflow-y-auto px-4 py-6 space-y-6 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-4">
            {NAV_GROUPS.map((group) => {
              const isExpanded = mobileExpanded === group.label;
              return (
                <div key={group.label} className="border-b border-[#e6e4dc]/60 pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isExpanded ? null : group.label)}
                    className="w-full flex items-center justify-between text-base font-semibold text-[#141413] py-2"
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#888780] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#da552f]' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-2 pl-3 space-y-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={item.isExternal ? '_blank' : undefined}
                          rel={item.isExternal ? 'noopener noreferrer' : undefined}
                          className="block text-sm text-[#5a5a55] hover:text-[#141413] py-1"
                        >
                          <div className="font-medium text-[#141413] flex items-center gap-1.5">
                            <span>{item.label}</span>
                            {item.isExternal && <ArrowUpRight className="w-3.5 h-3.5 text-[#888780]" />}
                          </div>
                          <p className="text-xs text-[#888780] mt-0.5">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#faf9f5] bg-[#141413] rounded-full shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#141413] bg-white border border-[#e6e4dc] rounded-full"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Official GitHub Repository</span>
              <ArrowUpRight className="w-4 h-4 text-[#888780]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
