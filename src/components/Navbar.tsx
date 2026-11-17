'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

const navItems = [
  { label: 'Company', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Product (EAK)', href: '/electronics-agent-kit' },
  { label: 'Technology', href: '/technology' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Insights', href: '/insights' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener for smooth height & shadow transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-[#faf9f6]/95 backdrop-blur-md border-[#e6e5e0] shadow-xs'
          : 'bg-[#faf9f6]/80 backdrop-blur-xs border-transparent'
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
          className="group flex items-center transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500] rounded"
          aria-label="TUSK Innovations Home"
        >
          <BrandLogo size={scrolled ? 34 : 38} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500] rounded ${
                  isActive
                    ? 'text-[#121316] font-semibold'
                    : 'text-[#585c65] hover:text-[#121316]'
                }`}
              >
                <span>{item.label}</span>
                {/* Animated growing underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#ff5500] transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Start a Project Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-semibold tracking-wide uppercase text-white bg-[#121316] hover:bg-[#ff5500] active:scale-[0.98] rounded-md transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff5500]"
          >
            <span>Start a Project</span>
          </Link>

          {/* GitHub Repository Button */}
          <a
            href={COMPANY_DETAILS.eakRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#585c65] hover:text-[#121316] border border-[#e6e5e0] hover:border-[#121316]/40 bg-white hover:bg-neutral-50 rounded-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500]"
            aria-label="View EAK Prototype on GitHub"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-[#ff5500]" />
          </a>
        </div>

        {/* Mobile Animated Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-md text-[#585c65] hover:text-[#121316] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            {/* Top Bar */}
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            {/* Middle Bar */}
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-200 ease-in-out ${
                mobileMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
              }`}
            />
            {/* Bottom Bar */}
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#e6e5e0] bg-[#faf9f6] ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-4 shadow-lg' : 'max-h-0 opacity-0 py-0 border-transparent'
        }`}
      >
        <div className="px-4 space-y-1">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms',
                }}
                className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#ff5500] bg-orange-50/60 font-semibold pl-4 border-l-2 border-[#ff5500]'
                    : 'text-[#121316] hover:bg-black/5 hover:pl-4'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />}
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-[#e6e5e0] flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#121316] hover:bg-[#ff5500] rounded-md transition-colors shadow-xs"
            >
              Start a Project
            </Link>
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-mono text-[#585c65] border border-[#e6e5e0] bg-white rounded-md flex items-center justify-center gap-1.5"
            >
              <span>GitHub (EAK Prototype)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff5500]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
