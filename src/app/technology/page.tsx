import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import { GitCommit, Shield, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering & Technology',
  description:
    'Deep architectural breakdown of the Electronics Agent Kit (EAK) software system, Clean Architecture in Rust, and deterministic event-sourced engineering.',
};

export default function TechnologyPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Deep-Tech Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            The Engineering Foundations of EAK
          </h1>
          <p className="text-lg text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            How we solved the impedance mismatch between stochastic artificial intelligence and deterministic physics-governed electronics hardware design.
          </p>
        </div>
      </section>

      {/* SECTION 1: Clean Architecture Rings */}
      <Section id="clean-architecture">
        <SectionHeader
          eyebrow="Architectural Topology"
          title="Compile-Time Enforced Clean Architecture"
          description="Dependency edges point strictly inward. The kernel (eak-runtime) never depends on an adapter crate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4 text-base text-[#585c65] leading-relaxed">
            <p>
              In conventional CAD applications, user interface frameworks, file parsers, and physics simulations are deeply entangled. A change in the UI layer frequently ripples through calculation engines.
            </p>
            <p>
              In Electronics Agent Kit, Robert C. Martin’s concentric clean architecture is strictly guaranteed at compile time via the Rust Cargo workspace configuration:
            </p>
            <ul className="space-y-3 font-mono text-xs text-[#121316]">
              <li className="p-3 bg-white border border-[#e6e5e0] rounded">
                <span className="text-[#ff5500] font-bold">Ring 0 — Kernel Core:</span> eak-units, eak-domain, eak-ports. Holds physical unit types, domain invariants, and port traits. Zero external dependencies.
              </li>
              <li className="p-3 bg-white border border-[#e6e5e0] rounded">
                <span className="text-emerald-600 font-bold">Ring 1 — Orchestration & FSM:</span> eak-runtime, eak-engines, eak-compiler. Executes deterministic fold loops, phase finite state machines, and capability validation.
              </li>
              <li className="p-3 bg-white border border-[#e6e5e0] rounded">
                <span className="text-sky-600 font-bold">Ring 2 — Adapters & Peripherals:</span> eak-reasoning, eak-kicad, eak-store, Tauri desktop. Pluggable peripherals that adapt external tools into the kernel.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 bg-[#16181d] text-white p-6 sm:p-8 rounded-lg border border-neutral-800 font-mono text-xs">
            <div className="text-neutral-500 pb-3 border-b border-neutral-800">
              # Cargo Dependency Invariant (Compile-Time Enforced)
            </div>
            <pre className="text-neutral-300 py-4 overflow-x-auto leading-relaxed">
{`[workspace]
resolver = "2"
members = ["crates/*"]

# The Dependency Rule:
# Dependencies point ONLY inward toward eak-runtime.
# Cargo forbids dependency cycles, so the concentric
# ring structure is enforced at compile time.

eak-runtime ──► eak-ports ──► eak-domain ──► eak-units
     ▲
     │ (implements port traits)
┌────┴───────────────────────────┐
│ eak-reasoning (LLM Providers)  │
│ eak-kicad (CAD Interop)        │
│ eak-store (Append-Only SQLite) │
│ eak-desktop (Tauri v2 Spine)   │
└────────────────────────────────┘`}
            </pre>
            <div className="pt-3 border-t border-neutral-800 text-neutral-400 text-[11px]">
              No outer adapter can corrupt kernel state.
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: Event Sourcing & Canonical Truth */}
      <Section id="event-sourcing" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="State Machine"
          title="Event-Sourced Hardware State & Replayability"
          description="Every design fact is an immutable event with strict cryptographic lineage and origin provenance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <GitCommit className="w-6 h-6 text-[#ff5500] mb-3" />
            <h3 className="text-base font-semibold text-[#121316] mb-2">Immutable Event Stream</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Every pin connection, component substitution, and constraint assertion is recorded sequentially into an append-only log. State is never mutated in place.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Shield className="w-6 h-6 text-[#ff5500] mb-3" />
            <h3 className="text-base font-semibold text-[#121316] mb-2">Provenance Lineage</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Every committed fact is tagged with its provenance: human engineer, datasheet extraction, AI synthesis, or physical simulation derivation.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Cpu className="w-6 h-6 text-[#ff5500] mb-3" />
            <h3 className="text-base font-semibold text-[#121316] mb-2">Deterministic State Fold</h3>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Applying the event log sequentially through pure reducer functions yields identical engineering state on any machine, eliminating environment drift.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 3: Multi-Provider Reasoning Boundary */}
      <Section id="model-boundary" dark={true}>
        <SectionHeader
          eyebrow="AI Containment"
          title="The Multi-Provider Isolation Seam"
          description="EAK stays neutral across LLM vendors while protecting physical hardware from ungrounded token predictions."
          dark={true}
        />

        <div className="border border-neutral-800 bg-[#16181d] rounded-lg p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-sm leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white font-mono">
                Provider-Agnostic Interface
              </h3>
              <p>
                The `eak-reasoning` crate defines generic request/response traits. EAK connects seamlessly to NVIDIA NIM microservices, OpenAI models, Anthropic Claude, or local offline LLMs (via Ollama or vLLM).
              </p>
              <p>
                Switching model providers does not alter the core kernel or any physical invariant checker.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white font-mono">
                Why Seams are Crucial in Electronics
              </h3>
              <p>
                In web coding, a hallucinated import triggers an error stack trace. In electronics design, a hallucinated pin connection or inverted polarity capacitor causes physical smoke, destroyed ICs, and thousand-dollar board re-spins.
              </p>
              <p>
                By placing all LLM suggestions behind invariant test harnesses, EAK extracts the intelligence of foundation models while maintaining zero-tolerance physical safety.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
