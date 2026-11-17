import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { EAK_CAPABILITIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Electronics Agent Kit (EAK) | AI-Native Electronics Engineering Workstation',
  description:
    'Electronics Agent Kit (EAK) is an AI-native electronics engineering workstation bringing intelligent agents, schematic design, and PCB engineering into one verifiable environment.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/electronics-agent-kit',
  },
};

const CAPABILITY_STATUSES: {
  name: string;
  category: string;
  status: 'Implemented' | 'Implemented in Beta' | 'Partially Implemented' | 'Planned';
  description: string;
}[] = [
  {
    name: 'Live Terminal-to-EDA Synchronization',
    category: 'Workstation & Shell',
    status: 'Implemented',
    description:
      'A coding agent in the terminal workspace edits design files via typed commands; the schematic and PCB views update live in real-time, preserving camera orientation and selection.',
  },
  {
    name: 'Typed Deterministic Engine with Fail-Closed Validation',
    category: 'Kernel & Physics',
    status: 'Implemented',
    description:
      'Every change is a typed runtime command on one canonical design model. Invariant validation (ERC/DRC) is computed by deterministic engines, never guessed by neural models. Unknown checks report fail-closed.',
  },
  {
    name: 'Interactive Schematic Design & Editing',
    category: 'Schematic Engine',
    status: 'Implemented',
    description:
      'Drag-and-drop component placement, click-to-place with rotation, automatic junction dots, wires, net labels, no-connect markers, mirror, and multi-level undo/redo.',
  },
  {
    name: 'PCB Layout, Layer Manager & Net Highlighting',
    category: 'PCB Engine',
    status: 'Implemented in Beta',
    description:
      'Board outlines, footprint placement, tracks, vias, zone refills with dynamic connectivity recomputation, net highlighting, and comprehensive multi-layer stackup management.',
  },
  {
    name: 'Electrical Rules Check (ERC) & Design Rules Check (DRC)',
    category: 'Verification',
    status: 'Implemented in Beta',
    description:
      'Automated ERC verification required before PCB synchronization; clearance and connectivity DRC with explicit finding reports and gap disclosures.',
  },
  {
    name: 'Native 3D PCB Visualization',
    category: '3D Rendering',
    status: 'Implemented in Beta',
    description:
      'Interactive 3D board rendering with substrate layers, copper geometry, drill holes, and component body projections for visual spatial inspection.',
  },
  {
    name: 'Automated Placement & Routing (Auto-Route)',
    category: 'PCB Engine',
    status: 'Partially Implemented',
    description:
      "Native auto-place heuristics and EAK's built-in routing engine. Functional in developer preview for rapid board layout exploration.",
  },
  {
    name: 'Circuit Simulation Engine (ngspice)',
    category: 'Verification & Physics',
    status: 'Partially Implemented',
    description:
      'Embedded SPICE engine for transient, AC, and DC operating point verification directly from the schematic netlist.',
  },
  {
    name: 'Autonomous End-to-End Board Synthesis',
    category: 'Autonomous Agents',
    status: 'Planned',
    description:
      'Zero-touch pipeline from high-level natural language functional specification directly to verified, DRC-clean, production-ready fabrication packages.',
  },
];

const ROADMAP_MILESTONES = [
  {
    stage: 'Stage 01',
    title: 'Deterministic Kernel & Schematic Core',
    status: 'Completed',
    desc: 'Event-sourced design model, typed command bus, canvas schematic editor, and zero-hallucination fail-closed ERC.',
  },
  {
    stage: 'Stage 02',
    title: 'PCB Engine & Multi-Layer Layout',
    status: 'Active Beta',
    desc: 'Interactive 2D canvas, multi-layer routing, clearance DRC, KiCad symbol/footprint importer, and 3D board projection.',
  },
  {
    stage: 'Stage 03',
    title: 'Heuristic Auto-Routing & DFM Verification',
    status: 'In Development',
    desc: 'Autonomous trace routing heuristics, design-for-manufacturing checks, and automated Gerber RS-274X export pipeline.',
  },
  {
    stage: 'Stage 04',
    title: 'Cloud Fabrication Integration & Team Workspaces',
    status: 'Planned',
    desc: 'Automated BOM procurement assistance, direct fabhouse API exports, and multi-user collaborative hardware design.',
  },
];

export default function EAKProductPage() {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'Implemented':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60';
      case 'Implemented in Beta':
        return 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800/60';
      case 'Partially Implemented':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/60';
      default:
        return 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700';
    }
  };

  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      {/* =========================================================================
          HERO & ACTUAL WORKSTATION SCREENSHOT
          ========================================================================= */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#da552f] dark:text-[#ff5500]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Technology Prototype</span>
            <span className="text-[#888780] dark:text-neutral-500">•</span>
            <span className="text-[#5a5a55] dark:text-neutral-400">Open Source on GitHub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.06]">
            Electronics Engineering, Reimagined.
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#da552f] dark:text-[#ff5500] tracking-tight">
            Intent In. Manufactured Board Out.
          </p>

          <p className="text-base sm:text-lg text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed max-w-3xl">
            Electronics Agent Kit (EAK) is an AI-native engineering workstation bringing intelligent software agents, interactive schematic editing, and deterministic PCB layout into one verifiable environment.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#status"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#141413] dark:text-white bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 rounded-full transition-all"
            >
              <span>View Capability Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Development Prototype Warning */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60 text-xs font-mono text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Development Status Disclosure: </strong>
              EAK is actively developed as a working prototype. Core schematic editing, live agent synchronization, and DRC validation are functional; advanced automated routing and simulation are in active development.
            </div>
          </div>
        </div>

        {/* Primary Product Hero Screenshot */}
        <div className="mt-12 rounded-3xl border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-[#121418] p-3 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="flex items-center justify-between pb-3 px-2 border-b border-[#f2f0e8] dark:border-neutral-800 text-xs font-mono text-[#888780] dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#da552f] dark:bg-[#ff5500]" />
              <span className="text-[#141413] dark:text-white font-semibold">EAK Desktop Shell</span>
              <span>/ live_workspace.rs</span>
            </div>
            <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded text-[11px] font-semibold border border-emerald-200 dark:border-emerald-800/60">
              Live Bidirectional Sync Active
            </span>
          </div>
          <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-[#0a0c0f] mt-3">
            <Image
              src="/assets/eak/eak-ai-eda-terminal.jpg"
              alt="Electronics Agent Kit AI-Assisted EDA Workstation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT EAK DOES (THE CORE ARCHITECTURE)
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-4 max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            The Problem &amp; Innovation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            Bridging AI Agents and Physical Reality.
          </h2>
          <p className="text-base text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
            Legacy electronic design software relies on disjointed legacy interfaces, manual calculators, and disconnected verification tools. EAK re-architects this stack from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="w-12 h-12 rounded-xl bg-[#f5f4ee] dark:bg-neutral-800 flex items-center justify-center text-[#da552f] dark:text-[#ff5500]">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#141413] dark:text-white">Unified Design Model</h3>
            <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              Terminal agents and graphical editors do not use separate files. They execute typed runtime commands against one single source of truth.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="w-12 h-12 rounded-xl bg-[#f5f4ee] dark:bg-neutral-800 flex items-center justify-center text-[#da552f] dark:text-[#ff5500]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#141413] dark:text-white">Fail-Closed Physics</h3>
            <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              Neural models propose changes, but deterministic mathematical checkers validate them. Clearances, connectivity, and rules are never hallucinated.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="w-12 h-12 rounded-xl bg-[#f5f4ee] dark:bg-neutral-800 flex items-center justify-center text-[#da552f] dark:text-[#ff5500]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#141413] dark:text-white">Auditable Artifacts</h3>
            <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
              Export standard RS-274X Gerbers, NC drill files, centroid placement tables, and consolidated BOMs ready for any standard fabrication house.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC INTERFACE CAPABILITIES GALLERY
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Verified Functionality
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            Workstation Capabilities
          </h2>
          <p className="text-base text-[#5a5a55] dark:text-neutral-400">
            Authentic screenshots from the running EAK application interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="relative aspect-16/10 bg-[#0a0c0f]">
              <Image
                src="/assets/electronics/pcb-macro-4layer.jpg"
                alt="High-Density Multi-Layer PCB Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-[#da552f] dark:text-[#ff5500]">PCB Engine</span>
              <h3 className="text-lg font-serif font-bold text-[#141413] dark:text-white">Multi-Layer PCB Layout &amp; Routing</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Full layer stackup manager, trace routing, via placement, and dynamic zone flood refills with real-time connectivity validation.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="relative aspect-16/10 bg-[#0a0c0f]">
              <Image
                src="/assets/eak/eak-dfm-fabrication-view.jpg"
                alt="Automated Optical Inspection and DFM Verification"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-[#da552f] dark:text-[#ff5500]">Deterministic Verification</span>
              <h3 className="text-lg font-serif font-bold text-[#141413] dark:text-white">Automated DFM &amp; Electrical Rules Check</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Clearance DRC, annular ring checks, unconnected net audits, and fail-closed validation before committing board changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPABILITY STATUS MATRIX (SECTION 5 SPECIFICATION)
          ========================================================================= */}
      <section id="status" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-4 max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            Engineering Transparency
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            Verified Capability Matrix
          </h2>
          <p className="text-base text-[#5a5a55] dark:text-neutral-400">
            Every feature status is audited against the active codebase. We distinguish between fully implemented capabilities, beta preview modules, and planned roadmap items.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121418] rounded-2xl border border-[#e6e4dc] dark:border-neutral-800 divide-y divide-[#f2f0e8] dark:divide-neutral-800 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          {CAPABILITY_STATUSES.map((cap, idx) => (
            <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-serif font-bold text-[#141413] dark:text-white">{cap.name}</h3>
                  <span className="text-[10px] font-mono text-[#888780] dark:text-neutral-400 bg-[#faf9f5] dark:bg-neutral-800 px-2 py-0.5 rounded border border-[#e6e4dc] dark:border-neutral-700">
                    {cap.category}
                  </span>
                </div>
                <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">{cap.description}</p>
              </div>
              <span
                className={`self-start sm:self-center shrink-0 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getBadgeStyle(
                  cap.status
                )}`}
              >
                {cap.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          DEVELOPMENT ROADMAP
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            Development Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#da552f] dark:text-[#ff5500]">{m.stage}</span>
                <h3 className="text-base font-serif font-bold text-[#141413] dark:text-white">{m.title}</h3>
                <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">{m.desc}</p>
              </div>
              <div className="pt-2 text-[11px] font-mono font-semibold text-[#888780] dark:text-neutral-400">
                Status: <span className="text-[#141413] dark:text-white">{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          OPEN SOURCE & GITHUB CTA
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
          Contribute to Electronics Agent Kit
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] dark:text-neutral-400 max-w-xl mx-auto">
          EAK is an open initiative. Explore the repository, test the prototype, inspect the Rust and TypeScript implementation, and file feedback on GitHub.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-[#141413] dark:text-white bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 rounded-full transition-all"
          >
            <span>Discuss Custom Hardware Deployment</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
