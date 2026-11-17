import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Cpu, Shield, GitCommit, Database, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Architecture & Technology Principles | TUSK Innovations',
  description:
    'Deep architectural breakdown of the Electronics Agent Kit (EAK) software system, compile-time Clean Architecture in Rust, and deterministic event-sourced engineering.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/technology',
  },
};

export default function TechnologyPage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen text-[#141413]">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] bg-white text-[#da552f] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da552f]" />
          Technical Publication &amp; System Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] leading-[1.1] max-w-4xl">
          The Engineering Foundations of EAK.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] font-sans leading-relaxed max-w-3xl">
          Solving the fundamental impedance mismatch between stochastic artificial intelligence and deterministic, physics-governed electronics hardware design.
        </p>

        {/* Quick jump navigation */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
          <a href="#architecture" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#architecture</a>
          <a href="#runtime" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#runtime</a>
          <a href="#state" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#state</a>
          <a href="#validation" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#validation</a>
          <a href="#isolation" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#isolation</a>
          <a href="#principles" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#principles</a>
          <a href="#docs" className="px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] hover:text-[#da552f] transition-colors">#docs</a>
        </div>
      </section>

      {/* 1. System Architecture */}
      <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 01 / Architectural Topology
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Compile-Time Enforced Clean Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed max-w-3xl">
            In conventional CAD systems, UI rendering, file serialization, and numerical calculations are deeply entangled. In EAK, dependency edges point strictly inward, enforced at compile time via the Rust Cargo workspace graph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white border border-[#e6e4dc] space-y-3">
            <span className="text-xs font-mono font-bold text-[#da552f]">Ring 0 — Kernel Core</span>
            <h3 className="text-base font-serif font-bold text-[#141413]">eak-units &amp; eak-domain</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Holds strongly-typed physical units (Volts, Amperes, Hertz, Ohms, millimeters), domain invariants, and port traits. Zero external crate dependencies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#e6e4dc] space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-700">Ring 1 — Orchestration &amp; FSM</span>
            <h3 className="text-base font-serif font-bold text-[#141413]">eak-runtime &amp; eak-compiler</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Executes deterministic fold loops, phase transition finite state machines, rule verification gates, and intermediate representation (IR) lowering.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#e6e4dc] space-y-3">
            <span className="text-xs font-mono font-bold text-sky-700">Ring 2 — Adapters &amp; UI</span>
            <h3 className="text-base font-serif font-bold text-[#141413]">eak-reasoning &amp; Tauri Shell</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Peripherals that adapt AI providers, KiCad symbols, SQLite storage, and desktop canvas editors into the kernel via strict port contracts.
            </p>
          </div>
        </div>

        {/* Code block */}
        <div className="bg-[#141413] text-[#f5f4ee] rounded-2xl p-6 sm:p-8 font-mono text-xs overflow-x-auto shadow-md">
          <div className="text-[#888780] pb-3 mb-3 border-b border-[#282725] flex justify-between">
            <span># Rust Cargo Invariant Enforcement</span>
            <span>Cargo.toml</span>
          </div>
          <pre className="leading-relaxed">
{`# eak-units (Ring 0) - Zero external dependencies
[package]
name = "eak-units"
version = "0.1.0"
edition = "2021"

[dependencies]
# Strictly zero crates. No serde, no tokio, no reqwest.

# eak-runtime (Ring 1) - Can only depend on Ring 0
[dependencies]
eak-units = { path = "../eak-units" }
eak-domain = { path = "../eak-domain" }
# FORBIDDEN: eak-reasoning (Ring 2) -> Compiler error if added!`}
          </pre>
        </div>
      </section>

      {/* 2. Deterministic Runtime */}
      <section id="runtime" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 02 / Execution Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Deterministic Runtime &amp; Fold Loop
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed max-w-3xl">
            Electronics cannot be designed via fuzzy approximations. A circuit either violates thermal dissipation limits or it doesn&apos;t. Two traces either short or they don&apos;t. EAK models the board as a fold over an ordered append-only log of typed events.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e6e4dc] space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#141413]">The Fold Function Contract</h3>
          <p className="text-xs sm:text-sm text-[#5a5a55] leading-relaxed">
            Given identical initial state <code className="bg-[#faf9f5] px-1.5 py-0.5 rounded border border-[#e6e4dc] font-mono text-[#da552f]">S_0</code> and event sequence <code className="bg-[#faf9f5] px-1.5 py-0.5 rounded border border-[#e6e4dc] font-mono text-[#da552f]">[E_1, E_2, ... E_n]</code>, the evaluated board state is bit-for-bit identical across any operating system (Linux, macOS, Windows) at any point in time:
          </p>
          <div className="p-4 bg-[#faf9f5] border border-[#e6e4dc] rounded-xl font-mono text-xs text-[#141413]">
            State_n = events.iter().fold(State::initial(), |state, event| state.apply(event))
          </div>
        </div>
      </section>

      {/* 3. Event-Sourced State */}
      <section id="state" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 03 / State Management
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Event-Sourced State with Zero Data Loss
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed max-w-3xl">
            Mutations are never destructive in-place writes. Every component drop, pin connection, track segment, or property update is recorded as an immutable event. This enables cryptographic revision audits, instant time-travel debugging, and multi-agent branches without merge conflicts.
          </p>
        </div>
      </section>

      {/* 4. Engineering Validation */}
      <section id="validation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 04 / Physical Constraints
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Fail-Closed Validation (ERC &amp; DRC)
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed max-w-3xl">
            Unlike code generation where compilers catch syntax errors, hardware design errors physically damage copper and silicon. EAK enforces fail-closed validation: if a physical rule check is indeterminate or unsupported, the gate fails closed and rejects the transition.
          </p>
        </div>
      </section>

      {/* 5. AI Provider Isolation */}
      <section id="isolation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 05 / Provider Agnostic
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            AI Provider Isolation &amp; Local Execution
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed max-w-3xl">
            The reasoning engine operates behind typed interfaces. The core kernel never knows whether an intent was emitted by an engineer typing in the CLI, a local quantized model running via Ollama, or an API call to Claude or OpenAI.
          </p>
        </div>
      </section>

      {/* 6. Hardware Principles */}
      <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 06 / Hardware Engineering Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            First-Principles Hardware Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[#e6e4dc] space-y-2">
            <h3 className="text-base font-serif font-bold text-[#141413]">Impedance &amp; Signal Integrity First</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Every high-speed signal must have a continuous, unviolated reference ground plane to prevent signal reflection and crosstalk.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#e6e4dc] space-y-2">
            <h3 className="text-base font-serif font-bold text-[#141413]">Thermal Dissipation by Design</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Thermal vias and copper polygons are calculated from component junction temperatures and ambient constraints before layout commitment.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Documentation & Reference */}
      <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Section 07 / Documentation &amp; Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            System Specifications &amp; Developer Guides
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55]">
            Comprehensive technical documentation is maintained in the open-source EAK repository on GitHub.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/NijoP/electronics-agent-kit-new-prototype/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <span>View Architecture Docs on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            href="/open-source"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#141413] bg-white border border-[#e6e4dc] hover:bg-[#f5f4ee] rounded-full transition-all"
          >
            <span>Open Source Guide</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
