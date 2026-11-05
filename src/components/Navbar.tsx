'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Company', href: '/about' },
  { label: 'Product (EAK)', href: '/electronics-agent-kit' },
  { label: 'Technology', href: '/technology' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Insights', href: '/insights' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6e5e0] bg-[#faf9f6]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <BrandLogo size={36} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-[#121316] bg-black/5 font-semibold'
                    : 'text-[#585c65] hover:text-[#121316] hover:bg-black/[0.03]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-medium tracking-wide uppercase text-white bg-[#121316] hover:bg-neutral-800 rounded-md transition-all duration-150 shadow-xs"
          >
            Contact TUSK
          </Link>
          <a
            href="https://github.com/NijoP/electronics-agent-kit-proto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#585c65] hover:text-[#121316] border border-[#e6e5e0] hover:border-[#d0ceca] bg-white rounded-md transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#585c65] hover:text-[#121316] hover:bg-black/5 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e6e5e0] bg-[#faf9f6] px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#121316] rounded-md hover:bg-black/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#e6e5e0] flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-mono font-medium uppercase text-white bg-[#121316] rounded-md"
            >
              Contact TUSK
            </Link>
            <a
              href="https://github.com/NijoP/electronics-agent-kit-proto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-mono text-[#121316] border border-[#e6e5e0] bg-white rounded-md flex items-center justify-center gap-1"
            >
              <span>View EAK on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
