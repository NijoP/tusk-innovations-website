import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-[#e6e4dc] dark:border-neutral-800 bg-[#f5f4ee] dark:bg-[#0c0e12] text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Corporate Details */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4 space-y-4">
            <BrandLogo size={36} />
            <p className="text-sm text-[#5a5a55] dark:text-neutral-400 max-w-sm leading-relaxed mt-2 font-sans">
              TUSK Innovations Global Pvt. Ltd. is an independent technology startup building intelligent AI solutions and engineering electronic products from concept to final delivery.
            </p>

            <div className="pt-2 text-xs font-mono text-[#888780] dark:text-neutral-500 space-y-1">
              <p><span className="text-[#5a5a55] dark:text-neutral-400">CIN:</span> {COMPANY_DETAILS.cin}</p>
              <p><span className="text-[#5a5a55] dark:text-neutral-400">LEGAL:</span> {COMPANY_DETAILS.legalName}</p>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#da552f] dark:text-[#ff5500] font-semibold">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/ai-solutions" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/electronics-pcb" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Electronics &amp; PCB
                </Link>
              </li>
              <li>
                <Link href="/services/product-development" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Product Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#888780] dark:text-neutral-500 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">
                  All Services Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#da552f] dark:text-[#ff5500] font-semibold">
              Products
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/electronics-agent-kit" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Electronics Agent Kit
                </Link>
              </li>
              <li>
                <Link href="/electronics-agent-kit#status" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Capability Status
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors"
                >
                  <span>GitHub Repo</span>
                  <ArrowUpRight className="w-3 h-3 text-[#888780] dark:text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#da552f] dark:text-[#ff5500] font-semibold">
              Resources
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/technology" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Technology &amp; Specs
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Open Source
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#da552f] dark:text-[#ff5500] font-semibold">
              Company
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  About TUSK
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#achievements" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/about#registrations" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Registrations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Legal Bar */}
        <div className="mt-12 pt-8 border-t border-[#e6e4dc] dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888780] dark:text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#141413] dark:hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#da552f] dark:text-[#ff5500]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-[#141413] dark:hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#da552f] dark:text-[#ff5500]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#da552f] dark:text-[#ff5500]" />
              <span>Thiruvananthapuram, Kerala, India</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#141413] dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <p>© {new Date().getFullYear()} TUSK Innovations Global Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
