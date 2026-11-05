import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Layers, GitFork, FileCode2 } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300/80 bg-white shadow-2xs mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-[#585c65]">
              TUSK INNOVATIONS GLOBAL PRIVATE LIMITED
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#121316] leading-[1.08] max-w-4xl mx-auto">
            Engineering Intelligence for the Next Generation of Electronics.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#585c65] max-w-2xl mx-auto leading-relaxed font-normal">
            Developing intelligent engineering software systems to simplify complex electronics development workflows from requirement intent to verified fabrication.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/electronics-agent-kit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-colors shadow-xs"
            >
              <span>Explore Electronics Agent Kit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/technology"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#121316] bg-white border border-[#d0ceca] hover:bg-neutral-50 rounded-md transition-colors shadow-2xs"
            >
              <span>Explore Our Engineering</span>
            </Link>
          </div>

          {/* Verification Badge Bar */}
          <div className="mt-16 pt-8 border-t border-[#e6e5e0]/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-3 bg-white/70 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">Flagship System</span>
              <span className="text-sm font-semibold text-[#121316]">Electronics Agent Kit</span>
            </div>
            <div className="p-3 bg-white/70 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">Primary Language</span>
              <span className="text-sm font-semibold text-[#121316]">Rust & TypeScript</span>
            </div>
            <div className="p-3 bg-white/70 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">State Architecture</span>
              <span className="text-sm font-semibold text-[#121316]">Deterministic Event Log</span>
            </div>
            <div className="p-3 bg-white/70 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">EDA Interoperability</span>
              <span className="text-sm font-semibold text-[#121316]">KiCad & Native Engine</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPANY INTRODUCTION */}
      <Section id="company">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
              Company Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#121316] leading-tight">
              Bridging modern computing intelligence with physical electronics engineering.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#585c65] text-base leading-relaxed">
            <p>
              <strong className="text-[#121316]">TUSK INNOVATIONS GLOBAL PRIVATE LIMITED</strong> is a deep-tech engineering software company focused on building deterministic platforms that make high-complexity hardware workflows accessible, structured, and rigorously verifiable.
            </p>
            <p>
              Electronics design has historically suffered from fragmented tools: schematics live in one software, component specs are locked in PDF datasheets, physical routing occurs in another tool, and verification happens through manual inspection. 
            </p>
            <p>
              The company’s flagship initiative is <strong>Electronics Agent Kit (EAK)</strong> — an AI-assisted engineering runtime that formalizes electronic hardware design into a single canonical source of truth with provable guarantees.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#121316] hover:text-[#ff5500] transition-colors group"
              >
                <span>Read more about our mission & corporate profile</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — FLAGSHIP PRODUCT (DARK TECHNICAL SHOWCASE) */}
      <Section id="flagship-eak" dark={true} className="tech-grid-dark">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#ff5500]/20 border border-[#ff5500]/40 text-[#ff5500] text-xs font-mono font-medium mb-4">
              <span>FLAGSHIP PRODUCT</span>
              <span>•</span>
              <span>STAGE 1 PREVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Electronics Agent Kit (EAK)
            </h2>
            <p className="mt-3 text-xl font-mono text-[#ff5500]">
              Intent In. Manufactured Board Out.
            </p>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
              Electronics Agent Kit is an open-source, AI-assisted electronics engineering system being developed to connect component research, datasheet analysis, schematic synthesis, engineering physics verification, and PCB design in a unified deterministic environment.
            </p>
          </div>

          {/* Interactive Architecture Blueprint Block */}
          <div className="border border-neutral-800 bg-[#16181d] rounded-lg p-6 sm:p-8 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-white font-semibold">eak-runtime (Kernel v0.1.0)</span>
                <span className="text-neutral-500">| Clean Architecture Concentric Rings</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <span>crates/eak-runtime</span>
                <span>•</span>
                <span className="text-emerald-400">Deterministic Commit Path</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-4 bg-neutral-900/80 rounded border border-neutral-800">
                <span className="text-[#ff5500] text-[11px] block mb-2 font-bold uppercase tracking-wider">
                  01. INCOMING PROPOSALS
                </span>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans">
                  AI providers (NVIDIA, OpenAI, Local models) and engineers submit mutations through a strict capability seam. <strong>AI never writes directly into authoritative state.</strong>
                </p>
              </div>
              <div className="p-4 bg-neutral-900/80 rounded border border-neutral-800">
                <span className="text-emerald-400 text-[11px] block mb-2 font-bold uppercase tracking-wider">
                  02. DETERMINISTIC GATE
                </span>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans">
                  The Rust kernel runs invariant checks: physical unit validation (`eak-units`), ERC net rules, and footprint pin constraints. Pure deterministic logic.
                </p>
              </div>
              <div className="p-4 bg-neutral-900/80 rounded border border-neutral-800">
                <span className="text-sky-400 text-[11px] block mb-2 font-bold uppercase tracking-wider">
                  03. CANONICAL EVENT LOG
                </span>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans">
                  Only verified state is folded into the append-only event stream. UI (Tauri desktop) and EDA adapters (KiCad) project the live stream with 100% replayability.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-neutral-400 text-xs">
                <span>Kernel: <strong className="text-white">13 Workspace Crates</strong></span>
                <span>•</span>
                <span>Tests: <strong className="text-white">Deterministic Invariants</strong></span>
                <span>•</span>
                <span>Desktop Spine: <strong className="text-white">Tauri v2 + React</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/electronics-agent-kit"
                  className="px-4 py-2 bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-semibold rounded transition-colors"
                >
                  Explore EAK Details
                </Link>
                <a
                  href={COMPANY_DETAILS.eakRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded border border-neutral-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — THE ENGINEERING PROBLEM */}
      <Section id="problem">
        <SectionHeader
          eyebrow="The Engineering Bottleneck"
          title="Electronics development is held back by fragmented, manual pipelines."
          description="While software engineering has evolved with unified version control, automated CI/CD testing, and modern compilation, electronics hardware design remains stubbornly fragmented."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Fragmented EDA Workflows',
              desc: 'Schematics, board layouts, bill of materials, and simulation operate in distinct silos with loose file synchronization.',
            },
            {
              title: 'Manual Datasheet Ingestion',
              desc: 'Engineers spend hundreds of hours scanning hundreds of pages of PDF specifications to hand-extract electrical limits and pinout tables.',
            },
            {
              title: 'Pin & Net Mapping Errors',
              desc: 'Translating high-pin-count microcontrollers and FPGAs to peripheral buses frequently leads to expensive board respins due to manual miswiring.',
            },
            {
              title: 'Repetitive Schematic Preparation',
              desc: 'Standard bypass networks, level shifters, power regulators, and communication stubs are rebuilt manually from scratch on every project.',
            },
            {
              title: 'Late-Stage Verification Failures',
              desc: 'Design rule checking (DRC) and electrical rules checks (ERC) often catch critical flaws only after complete layout, requiring full redesigns.',
            },
            {
              title: 'Unchecked AI Hallucinations',
              desc: 'Applying generic LLM chat interfaces to hardware causes fabrication disasters because chatbots lack physical constraint validation.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#e6e5e0] rounded-lg shadow-2xs hover:border-[#d0ceca] transition-colors"
            >
              <span className="font-mono text-xs text-[#8b909a] block mb-2">0{idx + 1}.</span>
              <h3 className="text-base font-semibold text-[#121316] mb-2">{item.title}</h3>
              <p className="text-sm text-[#585c65] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5 — THE EAK APPROACH */}
      <Section id="workflow" className="bg-[#f5f4ef]">
        <SectionHeader
          eyebrow="The Connected Pipeline"
          title="The EAK Engineering Workflow"
          description="EAK structures hardware design into a coherent, verified pipeline. Important: EAK is under active development; each stage is being implemented step-by-step with rigorous verification gates."
        />

        <div className="relative border-l-2 border-[#d0ceca] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {[
            {
              step: 'Stage 1',
              title: 'Product Intent & Requirements',
              desc: 'Capture high-level device specifications, power budgets, target interfaces, and mechanical form-factor constraints.',
            },
            {
              step: 'Stage 2',
              title: 'Engineering Interpretation',
              desc: 'EAK lower-level compiler converts intent into structured Engineering IR with concrete electrical boundaries.',
            },
            {
              step: 'Stage 3',
              title: 'Component Research & Parametric Matching',
              desc: 'Search parametric databases and datasheets to select components with active inventory, matching pinouts, and compatible tolerances.',
            },
            {
              step: 'Stage 4',
              title: 'Datasheet Specification Review',
              desc: 'Extract voltage levels, operating temperature limits, decoupling recommendations, and high-speed routing constraints into verified facts.',
            },
            {
              step: 'Stage 5',
              title: 'Schematic Preparation & Synthesis',
              desc: 'Compile hierarchical netlists, generate schematic symbols, and establish interconnect topology.',
            },
            {
              step: 'Stage 6',
              title: 'Deterministic Electrical Checks',
              desc: 'Automated ERC and physics checks verify voltage drops, impedance targets, pin directionality, and power rails.',
            },
            {
              step: 'Stage 7',
              title: 'PCB Design & Manufacturing Export',
              desc: 'Physical component placement, constraint routing, KiCad bidirectional sync, and compilation of verified Gerbers, drills, and BOM.',
            },
          ].map((stage, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#ff5500] border-4 border-[#f5f4ef]"></div>
              <span className="font-mono text-xs font-semibold text-[#ff5500] uppercase tracking-wider">
                {stage.step}
              </span>
              <h3 className="text-lg font-semibold text-[#121316] mt-1">{stage.title}</h3>
              <p className="text-sm text-[#585c65] mt-1 max-w-2xl leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 6 — TECHNOLOGY */}
      <Section id="technology">
        <SectionHeader
          eyebrow="Technical Foundation"
          title="Built on Serious Systems Engineering"
          description="We avoid superficial web wrappers. EAK is grounded in compiled systems programming, deterministic data structures, and native desktop integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Cpu className="w-6 h-6 text-[#ff5500] mb-4" />
            <h3 className="text-base font-semibold text-[#121316] mb-1">Rust Kernel</h3>
            <p className="text-xs font-mono text-[#8b909a] mb-3">Cargo Workspace • 13 Crates</p>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Provides memory safety, zero-cost abstractions, and strict compile-time ring dependency guarantees.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <Layers className="w-6 h-6 text-[#ff5500] mb-4" />
            <h3 className="text-base font-semibold text-[#121316] mb-1">Tauri Desktop Spine</h3>
            <p className="text-xs font-mono text-[#8b909a] mb-3">Tauri v2 • Native IPC</p>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Native desktop binary streaming kernel events (`EventRecord`) with minimal memory footprint and instant local responsiveness.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <ShieldCheck className="w-6 h-6 text-[#ff5500] mb-4" />
            <h3 className="text-base font-semibold text-[#121316] mb-1">Strict Capability Seams</h3>
            <p className="text-xs font-mono text-[#8b909a] mb-3">Deterministic Validation</p>
            <p className="text-sm text-[#585c65] leading-relaxed">
              AI proposals are isolated behind pure-function invariant checkers. Physics, geometry, and connectivity rules remain deterministic.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#e6e5e0] rounded-lg">
            <FileCode2 className="w-6 h-6 text-[#ff5500] mb-4" />
            <h3 className="text-base font-semibold text-[#121316] mb-1">KiCad Sync Adapter</h3>
            <p className="text-xs font-mono text-[#8b909a] mb-3">Peripheral Edge Adapter</p>
            <p className="text-sm text-[#585c65] leading-relaxed">
              Leverages KiCad as an edge implementation for schematic and PCB rendering while retaining canonical truth in the EAK runtime.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff5500] hover:underline"
          >
            <span>Inspect our full 16-part architectural documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* SECTION 7 — OPEN SOURCE */}
      <Section id="open-source" dark={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
              Open Source First
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Open Engineering for the Global Electronics Community
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              We believe foundational engineering tools should be open, inspectable, and verifiable. Electronics Agent Kit is developed openly under the <strong>MIT OR Apache-2.0</strong> license.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Whether you are an electronics design engineer, Rust developer, or EDA researcher, explore our architecture documents, audit our invariant rules, and track our public prototype repository.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={COMPANY_DETAILS.eakRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-[#121316] bg-white hover:bg-neutral-100 rounded-md transition-colors"
              >
                <GitFork className="w-4 h-4 text-[#ff5500]" />
                <span>NijoP/electronics-agent-kit-proto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/open-source"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-white border border-neutral-700 hover:bg-neutral-800 rounded-md transition-colors"
              >
                <span>Contribution Guidelines</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-6 rounded-lg font-mono text-xs text-neutral-300 space-y-3">
            <div className="text-neutral-500 pb-2 border-b border-neutral-800">
              # Clone and verify the EAK Rust workspace locally
            </div>
            <div className="text-emerald-400">
              $ git clone https://github.com/NijoP/electronics-agent-kit-proto.git
            </div>
            <div className="text-neutral-400">
              $ cd electronics-agent-kit-proto/eak
            </div>
            <div className="text-sky-400">
              $ cargo check --workspace
            </div>
            <div className="text-sky-400">
              $ cargo test --workspace
            </div>
            <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-800">
              Licensed under MIT or Apache-2.0. Clean architecture verified.
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8 — COMPANY VISION */}
      <Section id="vision">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Long-Term Vision
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] leading-tight">
            Building the engineering tools behind tomorrow’s electronics.
          </h2>
          <p className="text-base sm:text-lg text-[#585c65] leading-relaxed">
            As intelligent software systems advance, electronic design tools must transition from passive drafting canvases to active engineering partners. TUSK INNOVATIONS is committed to establishing the software foundation that will allow future engineering teams to design, simulate, verify, and fabricate electronic devices with unprecedented velocity and rigorous safety.
          </p>
        </div>
      </Section>

      {/* SECTION 9 — CONTACT CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121316] text-white border-t border-neutral-800">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let’s build better engineering systems.
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base">
            Reach out to discuss technology partnerships, early evaluation access, or academic and developer collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-colors"
            >
              Contact TUSK
            </Link>
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <span>Explore EAK on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
