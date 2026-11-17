import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy | TUSK Innovations',
  description:
    'Privacy Policy and Data Protection standards of TUSK Innovations Global Private Limited.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5a55] dark:text-neutral-400 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider block">
          Governance &amp; Privacy Standards
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#141413] dark:text-white mt-2">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-[#888780] dark:text-neutral-400 mt-3">
          Effective Date: November 2026 • Statutory Identity: {COMPANY_DETAILS.cin}
        </p>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-sm text-[#5a5a55] dark:text-neutral-300 leading-relaxed">
        <div className="bg-white dark:bg-[#121418] p-8 rounded-2xl border border-[#e6e4dc] dark:border-neutral-800 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-serif font-bold text-[#141413] dark:text-white">1. Corporate Identity</h2>
          <p>
            This Privacy Policy governs the official digital portal of <strong>{COMPANY_DETAILS.legalName}</strong> (CIN: {COMPANY_DETAILS.cin}), with registered corporate headquarters at {COMPANY_DETAILS.address}.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121418] p-8 rounded-2xl border border-[#e6e4dc] dark:border-neutral-800 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-serif font-bold text-[#141413] dark:text-white">2. Information Collection</h2>
          <p>
            We collect personal and professional information strictly necessary to facilitate verified business communications, evaluate client project inquiries, and fulfill contractual engineering obligations:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5a5a55] dark:text-neutral-400">
            <li>Direct project inquiries (full name, work email address, company affiliation, technical requirements).</li>
            <li>Standard server security logs (IP addresses, user agent headers) collected strictly for cybersecurity audit purposes.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-[#121418] p-8 rounded-2xl border border-[#e6e4dc] dark:border-neutral-800 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-serif font-bold text-[#141413] dark:text-white">3. Local-First Engineering Runtimes</h2>
          <p>
            Our open-source software tools, including Electronics Agent Kit (EAK), are designed as local-first desktop runtimes. Local design files, schematic databases, PCB layouts, and simulation netlists remain stored exclusively on your local workstation and are never transmitted to our servers without explicit user command.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121418] p-8 rounded-2xl border border-[#e6e4dc] dark:border-neutral-800 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-serif font-bold text-[#141413] dark:text-white">4. Contact &amp; Grievances</h2>
          <p>
            For privacy inquiries, data subject access requests, or regulatory clarifications, you may contact our corporate office at:
          </p>
          <div className="p-4 bg-[#faf9f5] dark:bg-neutral-900 rounded-xl border border-[#e6e4dc] dark:border-neutral-800 font-mono text-xs text-[#141413] dark:text-white space-y-1">
            <p>Email: {COMPANY_DETAILS.email}</p>
            <p>Phone: {COMPANY_DETAILS.phone}</p>
            <p>Address: {COMPANY_DETAILS.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
