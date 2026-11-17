import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';
import { GitFork, Terminal, Code2, Users, ArrowUpRight, ShieldCheck, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Source & Community | Electronics Agent Kit (EAK)',
  description:
    'Explore the open-source philosophy, licensing, prebuilt installers, and official repository of Electronics Agent Kit (EAK).',
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
            We believe that the next generation of electronic design automation must be open, inspectable, and verifiable by the global engineering community.
          </p>
        </div>
      </section>

      {/* Main content */}
      <Section id="repository">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
              Official Prototype Repository
            </h2>
            <p className="text-base text-[#585c65] leading-relaxed">
              The official Electronics Agent Kit (EAK) codebase is publicly hosted on GitHub. We encourage hardware designers, firmware developers, systems software engineers, and EDA researchers to inspect the implementation, verify the test suites, and follow our progress.
            </p>
            <div className="p-4 bg-white border border-[#e6e5e0] rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">REPOSITORY</span>
                <span className="text-[#121316] font-semibold">NijoP/electronics-agent-kit-new-prototype</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">LICENSE</span>
                <span className="text-emerald-600 font-semibold">O&apos;Saasy (Free to use, modify &amp; self-host)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">TECH STACK</span>
                <span className="text-[#121316]">Rust Kernel + Tauri v2 Desktop + TypeScript</span>
              </div>
            </div>
            <div>
              <a
                href={COMPANY_DETAILS.eakRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#121316] hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
              >
                <GitFork className="w-4 h-4 text-[#ff5500]" />
                <span>Visit Repository on GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#16181d] text-white p-6 rounded-xl border border-neutral-800 font-mono text-xs space-y-4">
            <div className="text-neutral-500 pb-2 border-b border-neutral-800 flex items-center justify-between">
              <span># Install prebuilt verified binary</span>
              <Download className="w-3.5 h-3.5 text-[#ff5500]" />
            </div>
            <div className="space-y-1">
              <p className="text-neutral-400"># Windows (PowerShell):</p>
              <p className="text-emerald-400 break-all select-all">
                irm https://raw.githubusercontent.com/NijoP/electronics-agent-kit-new-prototype/main/install.ps1 | iex
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-neutral-400"># Linux &amp; macOS:</p>
              <p className="text-emerald-400 break-all select-all">
                curl -fsSL https://raw.githubusercontent.com/NijoP/electronics-agent-kit-new-prototype/main/install.sh | bash
              </p>
            </div>
            <div className="space-y-1 pt-2 border-t border-neutral-800">
              <p className="text-neutral-400"># Clone source repository:</p>
              <p className="text-sky-400 break-all select-all">
                git clone https://github.com/NijoP/electronics-agent-kit-new-prototype.git
              </p>
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
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500]">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#121316]">Report Issues &amp; RFCs</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Open discussions, report DRC edge cases, propose footprint validation invariants, and help expand our canonical engineering specifications.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#121316]">Verification First</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Every PR must include deterministic unit tests and pass CI checks. We hold zero-compromise standards on electrical invariants.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#121316]">Open Hardware Ecosystem</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Work with us on expanding KiCad interchange, native component libraries, and simulation integrations across open-source toolchains.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
