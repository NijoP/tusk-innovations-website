import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';
import { ShieldCheck, Cpu, Code2, Brain, Rocket } from 'lucide-react';
import Link from 'next/link';
import { AchievementsMilestonesSection } from '@/components/AchievementsMilestonesSection';
import { CompanyRegistrationsSection } from '@/components/CompanyRegistrationsSection';

export const metadata: Metadata = {
  title: 'About TUSK Innovations | Corporate Profile & Doctrine',
  description:
    'Corporate background, engineering mission, and institutional identity of TUSK Innovations (TUSK Innovations Global Pvt. Ltd.). Deep-tech engineering across AI solutions, electronics, and end-to-end product development.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Corporate Profile &amp; Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            About TUSK Innovations
          </h1>
          <p className="text-lg text-[#585c65] max-w-3xl mx-auto leading-relaxed">
            An independently operating technology and engineering company focused on AI solutions, electronics engineering, PCB design, and end-to-end product development.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <Section id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
              Corporate Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
              At the Intersection of AI, Systems Software, and Hardware Engineering
            </h2>
            <div className="p-4 bg-white border border-[#e6e5e0] rounded-xl font-mono text-xs space-y-2 text-[#585c65]">
              <p><strong className="text-[#121316]">Company:</strong> {COMPANY_DETAILS.primaryBrand}</p>
              <p><strong className="text-[#121316]">Legal Entity:</strong> {COMPANY_DETAILS.legalName}</p>
              <p><strong className="text-[#121316]">CIN:</strong> {COMPANY_DETAILS.cin}</p>
              <p><strong className="text-[#121316]">Headquarters:</strong> Thiruvananthapuram, Kerala, India</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#585c65] text-base leading-relaxed">
            <p>
              <strong className="text-[#121316]">TUSK Innovations</strong> (TUSK Innovations Global Pvt. Ltd.) is an independently operating deep-tech engineering startup founded to unify modern computing intelligence with physical hardware engineering.
            </p>
            <p>
              We operate across three core business capabilities: building intelligent AI solutions and software systems for businesses, engineering electronics, embedded systems, and advanced PCB layouts, and taking complete product development projects from initial concept to final delivery.
            </p>
            <p>
              Through our flagship open-source initiative, <strong>Electronics Agent Kit (EAK)</strong>, we are building an AI-native electronics engineering workstation where professional schematic and PCB editors share one verifiable design model with terminal AI agents.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121316] hover:text-[#ff5500] transition-colors"
              >
                <span>Explore our engineering services</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SEPARATE SECTION 6: Achievements & Milestones */}
      <AchievementsMilestonesSection />

      {/* SEPARATE SECTION 7: Company Registrations & Recognitions */}
      <CompanyRegistrationsSection />

      {/* Guiding Engineering Principles */}
      <Section id="principles" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="Our Doctrine"
          title="Core Engineering Principles"
          description="We reject superficial marketing claims in favor of foundational systems design and rigorous physical correctness."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#121316] mb-2">Deterministic Authority</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              AI should propose; deterministic physics, electrical constraints, and compilation rules must validate. Authoritative state is never mutated without provable verification.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500] mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#121316] mb-2">Verifiable &amp; Open Standards</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Tools that build physical reality must be auditable. We engineer our core runtimes with transparent boundaries and open protocols, avoiding opaque lock-ins.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#121316] mb-2">High-Performance Foundations</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              We leverage systems languages like Rust alongside native desktop runtimes. Memory safety, multi-threaded event processing, and typed physical quantities ensure durability.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership">
        <SectionHeader
          eyebrow="Leadership"
          title="Executive &amp; Engineering Leadership"
          description="Guided by founders with backgrounds spanning systems software architecture, artificial intelligence, and electronics engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#121316] text-white flex items-center justify-center font-mono font-bold text-sm">
                NP
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#121316]">Nijo Ponnachan</h3>
                <span className="text-xs font-mono text-[#ff5500]">Founder &amp; CEO</span>
              </div>
            </div>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Directing strategic company vision, systems architecture, and core product roadmaps. Passionate about unifying modern AI compilers with physical hardware fabrication.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#121316] text-white flex items-center justify-center font-mono font-bold text-sm">
                AJ
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#121316]">Anjai Itty Jacob</h3>
                <span className="text-xs font-mono text-[#ff5500]">CTO</span>
              </div>
            </div>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Overseeing technical execution, AI agent pipelines, multi-provider model integration, and engineering verification engines across desktop EDA and software platforms.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
