import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Mail, Phone, MapPin, GitBranch } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-[#e6e5e0] bg-[#f5f4ef] text-[#121316]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company identity & registered info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size={40} />
            <p className="text-sm text-[#585c65] max-w-sm leading-relaxed mt-2">
              Developing intelligent engineering software systems to simplify complex electronics hardware development workflows.
            </p>
            <div className="pt-2 text-xs font-mono text-[#585c65] space-y-1">
              <p><span className="text-[#8b909a]">CIN:</span> {COMPANY_DETAILS.cin}</p>
              <p><span className="text-[#8b909a]">LEGAL:</span> {COMPANY_DETAILS.legalName}</p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b909a]">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#585c65] hover:text-[#121316] transition-colors">
                  About TUSK
                </Link>
              </li>
              <li>
                <Link href="/electronics-agent-kit" className="text-[#585c65] hover:text-[#121316] transition-colors">
                  Electronics Agent Kit (EAK)
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-[#585c65] hover:text-[#121316] transition-colors">
                  Technology & Architecture
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="text-[#585c65] hover:text-[#121316] transition-colors">
                  Open Source & Community
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#585c65] hover:text-[#121316] transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#585c65] hover:text-[#121316] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Contact & Registered Office */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b909a]">Registered Office</h3>
            <div className="text-xs leading-relaxed text-[#585c65] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.address}
                </span>
              </p>
              <p>
                <a
                  href={COMPANY_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#ff5500] hover:underline font-mono text-[11px]"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </p>
              <div className="pt-2 border-t border-[#e6e5e0] space-y-1.5 font-mono text-xs">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8b909a]" />
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#121316] hover:text-[#ff5500] underline">
                    {COMPANY_DETAILS.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8b909a]" />
                  <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-[#121316] hover:text-[#ff5500]">
                    {COMPANY_DETAILS.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5 text-[#8b909a]" />
                  <a
                    href={COMPANY_DETAILS.eakRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#121316] hover:text-[#ff5500] inline-flex items-center gap-1"
                  >
                    <span>NijoP/electronics-agent-kit-proto</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e6e5e0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b909a]">
          <p>© {new Date().getFullYear()} TUSK INNOVATIONS GLOBAL PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#121316] transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#121316] transition-colors">
              Contact
            </Link>
            <span>•</span>
            <Link href="/studio" className="hover:text-[#121316] transition-colors">
              CMS Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
