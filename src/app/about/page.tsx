import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';
import { ShieldCheck, Cpu, Code2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About TUSK INNOVATIONS',
  description:
    'Corporate background, engineering mission, and corporate identity of TUSK INNOVATIONS GLOBAL PRIVATE LIMITED.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            About TUSK INNOVATIONS
          </h1>
          <p className="text-lg text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            Building intelligent software systems that make high-complexity hardware engineering workflows accessible, structured, and deterministically verifiable.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <Section id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
              At the Intersection of AI, Systems Software, and EDA
            </h2>
            <div className="p-4 bg-white border border-[#e6e5e0] rounded-md font-mono text-xs space-y-2 text-[#585c65]">
              <p><strong className="text-[#121316]">Company:</strong> {COMPANY_DETAILS.legalName}</p>
              <p><strong className="text-[#121316]">CIN:</strong> {COMPANY_DETAILS.cin}</p>
              <p><strong className="text-[#121316]">Incorporated In:</strong> Kerala, India</p>
              <p><strong className="text-[#121316]">Category:</strong> Deep-Tech Engineering Software</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#585c65] text-base leading-relaxed">
            <p>
              <strong className="text-[#121316]">TUSK INNOVATIONS GLOBAL PRIVATE LIMITED</strong> was formed to solve one of the most stubborn productivity ceilings in modern hardware engineering: the disconnect between rapid digital intelligence and slow, manual electronics design automation (EDA).
            </p>
            <p>
              While software engineers have enjoyed compilers, continuous integration, unified version control, and instant automated testing for decades, electronics hardware engineers remain tied to fragmented workflows. Schematics live in one proprietary tool, component specifications remain trapped in thousand-page PDF datasheets, physical board layout requires laborious manual routing, and electrical validation is often caught late in physical prototypes.
            </p>
            <p>
              Our mission is to build the deterministic software foundation that bridges this divide. Through our flagship platform, <strong>Electronics Agent Kit (EAK)</strong>, we are constructing a verified engineering runtime where AI models propose structured engineering steps, and pure deterministic invariant engines validate and commit them.
            </p>
          </div>
        </div>
      </Section>

      {/* Guiding Engineering Principles */}
      <Section id="principles" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="Our Doctrine"
          title="Core Engineering Principles"
          description="We reject superficial marketing claims in favor of foundational systems design principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#121316] mb-2">Deterministic Authority</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              AI should propose; deterministic physics and engineering rules must validate. The runtime is the source of truth, never an external opaque file or an ungrounded neural network.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500] mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#121316] mb-2">Open Systems & Verifiability</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Foundational tools should be auditable. We architect our core runtimes under dual permissive open-source licenses (MIT or Apache-2.0), allowing global engineers to review every invariant.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#121316] mb-2">High-Performance Foundations</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              We build using Rust and native desktop runtimes. Low-level memory safety, multi-threaded event processing, and typed physical quantities ensure our systems are fast, lightweight, and durable.
            </p>
          </div>
        </div>
      </Section>

      {/* Executive Leadership & Team */}
      <Section id="leadership">
        <SectionHeader
          eyebrow="Leadership"
          title="Executive & Engineering Leadership"
          description="Guided by founders with backgrounds in software architecture, electronics systems, and computational platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#121316] text-white flex items-center justify-center font-mono font-bold text-sm">
                NP
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#121316]">Nijo Ponnachan</h3>
                <span className="text-xs font-mono text-[#ff5500]">Founder & CEO</span>
              </div>
            </div>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Leading the company’s strategic vision, core runtime specifications, and product roadmap. Passionate about bridging compiler design with electronics manufacturing.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#121316] text-white flex items-center justify-center font-mono font-bold text-sm">
                AJ
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#121316]">Anjai Itty Jacob</h3>
                <span className="text-xs font-mono text-[#ff5500]">CTO</span>
              </div>
            </div>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Directing technical architecture, multi-provider model integration, and engineering verification engines across the EAK kernel and desktop IDE.
            </p>
          </div>
        </div>
      </Section>

      {/* Official Details Box */}
      <Section id="statutory" className="bg-[#121417] text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Statutory & Official Information
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Verifiable Corporate Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-sm font-mono text-neutral-300">
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded">
              <p className="text-neutral-500 text-xs mb-1">REGISTERED CORPORATE NAME</p>
              <p className="text-white font-semibold">{COMPANY_DETAILS.legalName}</p>
            </div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded">
              <p className="text-neutral-500 text-xs mb-1">CIN (MINISTRY OF CORPORATE AFFAIRS)</p>
              <p className="text-[#ff5500] font-semibold">{COMPANY_DETAILS.cin}</p>
            </div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded">
              <p className="text-neutral-500 text-xs mb-1">OFFICIAL EMAIL</p>
              <p className="text-white">{COMPANY_DETAILS.email}</p>
            </div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded">
              <p className="text-neutral-500 text-xs mb-1">REGISTERED OFFICE</p>
              <p className="text-white text-xs leading-relaxed">{COMPANY_DETAILS.address}</p>
            </div>
          </div>
          <div className="pt-4 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold bg-[#ff5500] hover:bg-[#e04a00] text-white rounded transition-colors"
            >
              Contact Corporate Office
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
