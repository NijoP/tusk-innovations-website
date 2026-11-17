import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Award, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from '@/components/SocialIcons';
import { COMPANY_DETAILS } from '@/lib/data';
import { AchievementsMilestonesSection } from '@/components/AchievementsMilestonesSection';
import { CompanyRegistrationsSection } from '@/components/CompanyRegistrationsSection';

export const metadata: Metadata = {
  title: 'About TUSK Innovations | AI & Electronics Engineering Company',
  description:
    'TUSK Innovations Global Pvt. Ltd. is an independent AI and electronics engineering startup headquartered in Thiruvananthapuram, Kerala. Founded by Nijo Ponnachan.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#da552f] dark:text-[#ff5500] mb-6">
          <Building2 className="w-3.5 h-3.5" />
          <span>Company &amp; Engineering Culture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.1] max-w-4xl">
          Engineered for Truth. Built for the Physical World.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed max-w-3xl">
          TUSK Innovations Global Pvt. Ltd. is an independent technology startup based in Thiruvananthapuram, Kerala. We build intelligent software systems and engineer physical electronic hardware from concept to verified delivery.
        </p>

        {/* Quick jumps */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
          <a href="#mission" className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#5a5a55] dark:text-neutral-300 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">#mission</a>
          <a href="#philosophy" className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#5a5a55] dark:text-neutral-300 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">#philosophy</a>
          <a href="#achievements" className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#5a5a55] dark:text-neutral-300 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">#achievements</a>
          <a href="#registrations" className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#5a5a55] dark:text-neutral-300 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">#registrations</a>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500] font-semibold">Our Mission</span>
            <h2 className="text-2xl font-serif font-bold text-[#141413] dark:text-white">Democratize Hardware Creation</h2>
            <p className="text-sm text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              To eliminate the friction of designing and fabricating physical electronics by bringing intelligent autonomous agents, deterministic verification, and modern systems engineering into a unified workspace.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500] font-semibold">Our Vision</span>
            <h2 className="text-2xl font-serif font-bold text-[#141413] dark:text-white">Zero-Loss Physical Synthesis</h2>
            <p className="text-sm text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              A world where high-reliability hardware engineering is as accessible, verifiable, and fast as deploying modern cloud software—with mathematically guaranteed manufacturing success.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            Foundational Tenets
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            How We Approach Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-[#141413] dark:text-white">1. Fail-Closed Validation</h3>
            <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              If an invariant check cannot be proven correct mathematically, it fails closed. We never gamble with physical hardware.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-[#141413] dark:text-white">2. No Vendor Lock-in</h3>
            <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              All outputs are standard open formats (Gerber RS-274X, IPC-D-356, KiCad assets, TypeScript/Rust code). The client owns all IP.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-[#141413] dark:text-white">3. First-Principles Simplicity</h3>
            <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              We eliminate unnecessary abstractions. The simplest circuit and the cleanest code path is the most reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements & Milestones (strictly separate) */}
      <AchievementsMilestonesSection />

      {/* Company Registrations & Recognitions (strictly separate) */}
      <CompanyRegistrationsSection />

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
          Partner with TUSK Innovations
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] dark:text-neutral-400 max-w-xl mx-auto">
          We welcome commercial project inquiries, technical partnerships, and research collaborations.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
