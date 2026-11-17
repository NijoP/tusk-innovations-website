import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS, EAK_CAPABILITIES, ROADMAP_STAGES } from '@/lib/data';
import { ArrowUpRight, GitFork, ArrowRight, ShieldCheck, Terminal, Layers, Cpu } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electronics Agent Kit (EAK) | AI-Native Electronics Engineering Workstation',
  description:
    'Electronics Agent Kit (EAK) is an open-source, AI-native electronics engineering environment designed to transform engineering requirements into manufacturable electronic hardware.',
};

export default function EAKProductPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Implemented':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Implemented (Beta)
          </span>
        );
      case 'Partially Implemented':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Partially Implemented
          </span>
        );
      case 'Experimental':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-sky-500/10 text-sky-600 border border-sky-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Experimental
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-neutral-200/80 text-neutral-600 border border-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            Planned
          </span>
        );
    }
  };

  return (
    <div>
      {/* Header / Hero */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] text-xs font-mono font-medium mb-6">
            <span>FLAGSHIP PRODUCT</span>
            <span>•</span>
            <span>OPEN SOURCE PROTOTYPE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#121316] leading-tight">
            Electronics Agent Kit (EAK)
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-mono text-[#ff5500]">
            Intent In. Manufactured Board Out.
          </p>
          <p className="mt-6 text-base sm:text-lg text-[#585c65] max-w-3xl leading-relaxed">
            An AI-native electronics engineering environment designed to transform engineering requirements into manufacturable electronic hardware. Professional schematic and PCB editors share one verifiable design model with terminal AI agents in a local-first, fail-closed desktop shell.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#121316] hover:bg-neutral-800 rounded-md transition-colors"
            >
              <GitFork className="w-4 h-4 text-[#ff5500]" />
              <span>Inspect on GitHub (NijoP/electronics-agent-kit-new-prototype)</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="#capabilities"
              className="px-6 py-3.5 text-sm font-semibold text-[#121316] bg-white border border-[#d0ceca] hover:bg-neutral-50 rounded-md transition-colors"
            >
              Verified Capability Matrix
            </a>
          </div>

          <div className="mt-8 p-4 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-900 leading-relaxed max-w-3xl">
            <strong>Development Notice:</strong> EAK is an early prototype under active open-source development. Every check reports with fail-closed integrity; gaps are transparently disclosed in all reports. Nothing EAK produces is claimed as manufacturing-ready without human-in-the-loop review.
          </div>
        </div>
      </section>

      {/* SECTION A: What is EAK? */}
      <Section id="what-is-eak">
        <SectionHeader
          eyebrow="Core Architecture"
          title="What is Electronics Agent Kit?"
          description="EAK is not a chatbot wrapper. It is an AI-native electronics engineering workstation built in Rust and Tauri with live terminal-to-EDA synchronization."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#585c65] text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#121316]">One Verifiable Design Model</h3>
            <p>
              In conventional CAD tools, schematics, netlists, footprints, and PCB copper geometries live in disconnected files. When an AI proposes a change, desynchronization between representations causes fatal physical design bugs.
            </p>
            <p>
              EAK solves this by keeping schematic, PCB, and terminal AI agents synchronized against <strong>one authoritative design model</strong>. A coding agent in the terminal edits the circuit through typed commands, while schematic and PCB canvas views update live in front of you.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#121316]">Fail-Closed Validation Engine</h3>
            <p>
              AI agents in EAK never write directly to final hardware state without verification. Every incoming proposal passes through deterministic validation engines checking electrical rules (ERC) and design rules (DRC).
            </p>
            <p>
              Checks are computed purely by EAK&apos;s own deterministic engines, never estimated by neural networks. Unknown or incomplete checks report strictly as unknown, never as passing.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION B: Non-Negotiable Architecture Principles */}
      <Section id="principles" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="Architectural Integrity"
          title="Non-Negotiable Engineering Principles"
          description="Enforced at compile-time and through the kernel commit pipeline."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 'P1',
              title: 'One Verifiable Design Model',
              desc: 'Schematics, netlists, and PCB layouts share one authoritative design model.',
            },
            {
              id: 'P2',
              title: 'Live Terminal-to-EDA Sync',
              desc: 'Terminal commands update the schematic and PCB views live, preserving viewport and selection.',
            },
            {
              id: 'P3',
              title: 'Fail-Closed ERC & DRC Gates',
              desc: 'Checks are computed by deterministic engines, never by LLMs. Incomplete checks report fail-closed.',
            },
            {
              id: 'P4',
              title: 'Native, Vendor-Neutral Library',
              desc: "EAK's own component format is the source of truth, with KiCad import adapters for interchange.",
            },
            {
              id: 'P5',
              title: 'Multi-Provider Flexibility',
              desc: 'Bring your own CLI coding agent (Claude Code, etc.); API keys remain securely in the OS keyring.',
            },
            {
              id: 'P6',
              title: 'Local-First Architecture',
              desc: 'Projects are plain folders on disk. Zero mandatory cloud accounts or external telemetry.',
            },
          ].map((principle) => (
            <div key={principle.id} className="p-6 bg-white border border-[#e6e5e0] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#ff5500] block mb-2">{principle.id}</span>
              <h4 className="text-base font-bold text-[#121316] mb-1">{principle.title}</h4>
              <p className="text-sm text-[#585c65] leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION C: Verified Capability Matrix */}
      <Section id="capabilities">
        <SectionHeader
          eyebrow="Verifiable Truth"
          title="Current Engineering Capability Matrix"
          description="In alignment with corporate integrity standards, we strictly report verified implementation statuses directly from the codebase. We never claim incomplete functionality as production-ready."
        />

        <div className="overflow-x-auto border border-[#e6e5e0] rounded-xl bg-white shadow-2xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f5f4ef] text-xs font-mono uppercase text-[#585c65] border-b border-[#e6e5e0]">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Capability Domain / Module</th>
                <th className="py-3.5 px-4 sm:px-6">Scope & Verified Implementation</th>
                <th className="py-3.5 px-4 sm:px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e6e5e0]">
              {EAK_CAPABILITIES.map((cap, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-medium text-[#121316]">
                    <div>{cap.name}</div>
                    <span className="text-[11px] font-mono text-[#8b909a]">{cap.category}</span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#585c65] max-w-md text-xs sm:text-sm">
                    {cap.description}
                  </td>
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                    {getStatusBadge(cap.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* SECTION D: Master Implementation Roadmap */}
      <Section id="roadmap" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="Development Trajectory"
          title="Master Implementation Roadmap"
          description="Dependency-driven development stages with concrete verification gates."
        />

        <div className="space-y-6">
          {ROADMAP_STAGES.map((stage) => (
            <div
              key={stage.stage}
              className="p-6 bg-white border border-[#e6e5e0] rounded-xl shadow-2xs flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#ff5500]">
                    STAGE 0{stage.stage}
                  </span>
                  <span className="text-xs font-mono text-[#8b909a]">|</span>
                  <span className="text-xs font-mono text-[#585c65] font-semibold">{stage.gate}</span>
                </div>
                <h3 className="text-lg font-bold text-[#121316]">{stage.title}</h3>
                <p className="text-sm text-[#585c65] max-w-2xl leading-relaxed">{stage.description}</p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {stage.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 text-xs font-mono bg-neutral-100 text-[#585c65] rounded"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">{getStatusBadge(stage.status)}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION E: GitHub Repository CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121417] text-white border-t border-neutral-800">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Auditable, Open-Source Electronics Engineering
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            The EAK prototype source code, documentation RFCs, and test suites are openly accessible on GitHub under NijoP/electronics-agent-kit-new-prototype.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#121316] bg-white hover:bg-neutral-100 rounded-md transition-colors"
            >
              <GitFork className="w-4 h-4 text-[#ff5500]" />
              <span>Clone & Test on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact?category=Electronics%20%26%20PCB%20Design"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-colors"
            >
              <span>Discuss Custom EDA Integration</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
