import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';
import { GitFork, Terminal, Code2, Users, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Source & Community',
  description:
    'Explore the open-source philosophy, licensing, and public repository of Electronics Agent Kit (EAK).',
};

export default function OpenSourcePage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Open-First Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            Open Source Electronics Engineering
          </h1>
          <p className="text-lg text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            We believe that the next generation of electronic design automation must be open, reproducible, and verifiable by the global engineering community.
          </p>
        </div>
      </section>

      {/* Main content */}
      <Section id="repository">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
              Public Prototype Repository
            </h2>
            <p className="text-base text-[#585c65] leading-relaxed">
              The flagship Electronics Agent Kit (EAK) codebase is publicly hosted on GitHub. We encourage hardware designers, firmware developers, systems software engineers, and EDA researchers to inspect the implementation, verify the test suites, and follow our progress.
            </p>
            <div className="p-4 bg-white border border-[#e6e5e0] rounded-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">REPOSITORY</span>
                <span className="text-[#121316] font-semibold">NijoP/electronics-agent-kit-proto</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">LICENSE</span>
                <span className="text-emerald-600 font-semibold">Dual MIT / Apache-2.0</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">WORKSPACE</span>
                <span className="text-[#121316]">Cargo Workspace (13 Crates) + Tauri v2 Shell</span>
              </div>
            </div>
            <div>
              <a
                href={COMPANY_DETAILS.eakRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#121316] hover:bg-neutral-800 rounded-md transition-colors"
              >
                <GitFork className="w-4 h-4 text-[#ff5500]" />
                <span>Visit Repository on GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#16181d] text-white p-6 rounded-lg border border-neutral-800 font-mono text-xs space-y-4">
            <div className="text-neutral-500 pb-2 border-b border-neutral-800">
              # Quick start for engineers
            </div>
            <div className="space-y-2">
              <p className="text-neutral-400"># 1. Clone the repository</p>
              <p className="text-emerald-400">git clone https://github.com/NijoP/electronics-agent-kit-proto.git</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-400"># 2. Enter the Rust kernel workspace</p>
              <p className="text-white">cd electronics-agent-kit-proto/eak</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-400"># 3. Check workspace compilation</p>
              <p className="text-sky-400">cargo check --workspace</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-400"># 4. Run deterministic tests</p>
              <p className="text-sky-400">cargo test --workspace</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contribution Guidelines */}
      <Section id="contributing" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="How to Participate"
          title="Contributing to EAK"
          description="EAK welcomes rigorous, evidence-backed contributions from engineers worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Code2 className="w-6 h-6 text-[#ff5500] mb-3" />
            <h3 className="text-base font-semibold text-[#121316] mb-2">RFCs & Architecture</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Review our 16 canonical architectural RFCs in the `docs/` folder. Propose architectural refinements before writing complex subsystems.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Terminal className="w-6 h-6 text-[#ff5500] mb-3" />
            <h3 className="text-base font-semibold text-[#121316] mb-2">Physical Invariant Rules</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Contribute verified electrical design rules, DRC physics formulas, unit conversions (`eak-units`), and KiCad parsing adapters.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Users className="w-6 h-6 text-[#ff5500] mb-3" />
            <h3 className="text-base font-semibold text-[#121316] mb-2">Issue Tracking & Review</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Report reproducible edge cases, suggest component asset schemas, or review pull requests through GitHub Discussions and Issues.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
