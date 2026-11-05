import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS, EAK_CAPABILITIES, ROADMAP_STAGES } from '@/lib/data';
import { ArrowUpRight, GitFork } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electronics Agent Kit (EAK) — Flagship Product',
  description:
    'Deep-dive into Electronics Agent Kit (EAK), an open-source, AI-native electronics engineering system and verified runtime.',
};

export default function EAKProductPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Implemented':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Implemented
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] text-xs font-mono font-medium mb-6">
            <span>FLAGSHIP PRODUCT</span>
            <span>•</span>
            <span>OPEN SOURCE RUNTIME</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#121316] leading-tight">
            Electronics Agent Kit (EAK)
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-mono text-[#ff5500]">
            Intent In. Engineering Model Out. Verified Engineering Artifacts Out.
          </p>
          <p className="mt-6 text-base sm:text-lg text-[#585c65] max-w-3xl leading-relaxed">
            EAK is an open-source, AI-native electronics engineering system and runtime. It maintains a canonical, provenance-rich engineering model, executes deterministic physics and DRC rules, validates AI proposals, and commits only verified hardware state.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#121316] hover:bg-neutral-800 rounded-md transition-colors"
            >
              <GitFork className="w-4 h-4 text-[#ff5500]" />
              <span>Inspect on GitHub (NijoP/electronics-agent-kit-proto)</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="#capabilities"
              className="px-5 py-3 text-sm font-semibold text-[#121316] bg-white border border-[#d0ceca] hover:bg-neutral-50 rounded-md transition-colors"
            >
              View Verified Capability Matrix
            </a>
          </div>
        </div>
      </section>

      {/* SECTION A: What is EAK? */}
      <Section id="what-is-eak">
        <SectionHeader
          eyebrow="Core Definition"
          title="What is Electronics Agent Kit?"
          description="EAK is not a chatbot wrapper. It is a full engineering runtime built from first principles in Rust."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#585c65] text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121316]">The Canonical Engineering Model</h3>
            <p>
              Unlike conventional desktop EDA software where state is scattered across loose text files and schematic sheets, EAK maintains a centralized, event-sourced canonical engineering model.
            </p>
            <p>
              This canonical model contains: intent, requirements, constraints, decisions, assumptions, evidence, components, pins, nets, topology, schematic representations, PCB layout geometry, physical verification results, and complete revision provenance.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#121316]">The Seam Between AI and Physics</h3>
            <p>
              In EAK, AI models never directly mutate authoritative hardware state. Instead, models propose capabilities through a strictly validated seam.
            </p>
            <p>
              The EAK kernel applies deterministic engineering rules — pure functions checking Ohm’s law, voltage drop limits, differential pair geometry, and pin electrical types. Only proposals that satisfy all invariants are committed to the event log.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION B: Non-Negotiable Architecture Principles */}
      <Section id="principles" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="Architectural Integrity"
          title="Non-Negotiable Principles"
          description="Enforced at compile-time and through the kernel commit pipeline."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 'P1',
              title: 'EAK Runtime is the Source of Truth',
              desc: 'No external CAD tool, editor, or filesystem holds authoritative engineering state.',
            },
            {
              id: 'P2',
              title: 'External Formats are Never Truth',
              desc: '.kicad_pcb, .kicad_sch, .json, and .yaml are import/export formats only.',
            },
            {
              id: 'P3',
              title: 'AI Never Writes Directly to State',
              desc: 'All AI mutations must pass through the kernel’s validated capability seam.',
            },
            {
              id: 'P4',
              title: 'Deterministic Rules Stay Deterministic',
              desc: 'Physics, geometry, and connectivity rules are pure, reproducible functions.',
            },
            {
              id: 'P5',
              title: 'Provenance is Mandatory',
              desc: 'Every fact knows its exact origin: human input, datasheet excerpt, or AI inference.',
            },
            {
              id: 'P6',
              title: 'Engineering State is Replayable',
              desc: 'Event log + deterministic fold reconstructs the exact project state on any machine.',
            },
            {
              id: 'P7',
              title: 'Physical Quantities Remain Typed',
              desc: 'Units, tolerances, and thermal deratings are first-class types (eak-units).',
            },
            {
              id: 'P8',
              title: 'UI is an Editor Projection',
              desc: 'The desktop IDE reads from the kernel and proposes actions through the kernel seam.',
            },
            {
              id: 'P9',
              title: 'Clean Concentric Architecture',
              desc: 'Ring dependency structure enforced by Cargo workspace topology. No circular dependencies.',
            },
          ].map((principle) => (
            <div key={principle.id} className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
              <span className="font-mono text-xs font-bold text-[#ff5500] block mb-2">{principle.id}</span>
              <h4 className="text-base font-semibold text-[#121316] mb-1">{principle.title}</h4>
              <p className="text-sm text-[#585c65] leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION C & D: Technical Architecture & Crate Topology */}
      <Section id="architecture" dark={true}>
        <SectionHeader
          eyebrow="Repository Architecture"
          title="Cargo Workspace Crate Topology"
          description="EAK is structured into modular Rust crates with strict inward dependency edges toward eak-runtime."
          dark={true}
        />

        <div className="border border-neutral-800 bg-[#15171c] rounded-lg p-6 sm:p-8 font-mono text-xs text-neutral-300">
          <div className="pb-4 border-b border-neutral-800 flex items-center justify-between">
            <span className="text-[#ff5500] font-bold">CARGO WORKSPACE: 13 SPECIALIZED CRATES</span>
            <span className="text-neutral-500">Rust 1.74+ • Edition 2021</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-bold block">CORE KERNEL RING</span>
              <ul className="space-y-2 text-neutral-400">
                <li><strong className="text-white">eak-units:</strong> Typed physical quantities & tolerances</li>
                <li><strong className="text-white">eak-domain:</strong> Entities, opaque EntityId, invariants</li>
                <li><strong className="text-white">eak-ports:</strong> Abstract port traits & EventLog seam</li>
                <li><strong className="text-white">eak-runtime:</strong> KERNEL: state/fold, FSM, replay engine</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-sky-400 font-bold block">DOMAIN ENGINES RING</span>
              <ul className="space-y-2 text-neutral-400">
                <li><strong className="text-white">eak-engines:</strong> Planning, Schematic, PCB, DRC rules</li>
                <li><strong className="text-white">eak-compiler:</strong> Requirement IR & Engineering IR lowering</li>
                <li><strong className="text-white">eak-phases:</strong> FSM instances for each design phase</li>
                <li><strong className="text-white">eak-assets:</strong> Footprints, 3D bodies, symbol libraries</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-purple-400 font-bold block">ADAPTERS & PERIPHERALS RING</span>
              <ul className="space-y-2 text-neutral-400">
                <li><strong className="text-white">eak-reasoning:</strong> Multi-provider LLM adapters (NVIDIA/OpenAI)</li>
                <li><strong className="text-white">eak-store:</strong> Append-only JSONL log & SQLite engine</li>
                <li><strong className="text-white">eak-kicad:</strong> Bidirectional KiCad import/export adapter</li>
                <li><strong className="text-white">eak-dashboard:</strong> Observability, telemetry & metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION E: Verified Capability Table */}
      <Section id="capabilities">
        <SectionHeader
          eyebrow="Verifiable Truth"
          title="Current Engineering Capability Matrix"
          description="In alignment with corporate governance standards, we clearly label current implementation statuses. We never present planned features as completed software."
        />

        <div className="overflow-x-auto border border-[#e6e5e0] rounded-lg bg-white shadow-2xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f5f4ef] text-xs font-mono uppercase text-[#585c65] border-b border-[#e6e5e0]">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Capability Domain / Module</th>
                <th className="py-3.5 px-4 sm:px-6">Scope / Technical Evidence</th>
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

      {/* SECTION F: Master Implementation Roadmap */}
      <Section id="roadmap" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="Development Trajectory"
          title="Master Implementation Roadmap"
          description="Dependency-driven stages with measurable exit gates per the canonical RFCs."
        />

        <div className="space-y-6">
          {ROADMAP_STAGES.map((stage) => (
            <div
              key={stage.stage}
              className="p-6 bg-white border border-[#e6e5e0] rounded-lg shadow-2xs flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#ff5500]">
                    STAGE 0{stage.stage}
                  </span>
                  <span className="text-xs font-mono text-[#8b909a]">|</span>
                  <span className="text-xs font-mono text-[#585c65] font-semibold">{stage.gate}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#121316]">{stage.title}</h3>
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

      {/* SECTION G: Open-Source Repository CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121417] text-white border-t border-neutral-800">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Auditable, Reproducible Electronics Engineering
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
            The EAK prototype source code, documentation RFCs, and test suites are openly accessible on GitHub under NijoP/electronics-agent-kit-proto.
          </p>
          <div className="pt-2">
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#121316] bg-white hover:bg-neutral-100 rounded-md transition-colors"
            >
              <GitFork className="w-4 h-4 text-[#ff5500]" />
              <span>Clone & Test on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
