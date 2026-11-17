'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Terminal, Layers, Activity, Cpu, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface WalkthroughTab {
  id: string;
  label: string;
  icon: typeof Terminal;
  title: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

const TABS: WalkthroughTab[] = [
  {
    id: 'workspace',
    label: 'Main Workspace',
    icon: Cpu,
    title: 'Unified Local-First Desktop Shell',
    badge: 'Verified E2E Capture',
    description:
      'A single desktop shell integrating terminal agents with live 2D schematic and PCB viewports. Changes made in the CLI reflect instantly on the canvas with zero file reload latency.',
    image: '/assets/eak/workspace/eak-main-workspace.png',
    alt: 'EAK Main Workspace with Dual Schematic and PCB Viewports',
    features: [
      'Synchronized split-screen schematic and PCB layout',
      'Event-sourced design model with append-only revision logging',
      'Local-first Rust runtime (Tauri v2) with zero cloud telemetry',
    ],
  },
  {
    id: 'schematic',
    label: 'Schematic Editor',
    icon: Activity,
    title: 'Interactive Circuit Schematic Canvas',
    badge: 'Verified E2E Capture',
    description:
      'Drag-and-drop components, click-to-place with rotation, automatic junction dots, net labels, and multi-level undo/redo directly connected to the kernel.',
    image: '/assets/eak/schematic/eak-schematic-editor.png',
    alt: 'EAK Interactive Schematic Editor with Placed Resistors and Wire Connections',
    features: [
      'Bidirectional KiCad (.kicad_sym) symbol library interchange',
      'Deterministic Electrical Rules Check (ERC) before PCB push',
      'Real-time connectivity net extraction and wire routing',
    ],
  },
  {
    id: 'pcb',
    label: 'PCB Engine',
    icon: Layers,
    title: 'Multi-Layer High-Density PCB Layout',
    badge: 'Verified E2E Capture',
    description:
      'Full layer stackup management (1 to 8+ layers), manual track routing with clearance halos, interactive via placement, and dynamic copper zone refills.',
    image: '/assets/eak/pcb/eak-pcb-routing.png',
    alt: 'EAK PCB Layout Workspace with 4 Copper Layers and Auto-Routed Tracks',
    features: [
      '4-layer high-density routing with impedance control parameters',
      'Dynamic airwire rendering and net highlight inspection',
      'Heuristic auto-route preview for rapid layout exploration',
    ],
  },
  {
    id: 'terminal',
    label: 'AI Terminal',
    icon: Terminal,
    title: 'Autonomous Coding & Design Agent',
    badge: 'Verified E2E Capture',
    description:
      'A conversational coding agent operates within the terminal pane. The agent executes typed runtime commands, proposes schematic adjustments, and triggers rule checks with fail-closed safeguards.',
    image: '/assets/eak/terminal/eak-ai-assistant.png',
    alt: 'EAK AI Terminal Assistant with Offline Interpreter and Accept/Reject Workflow',
    features: [
      'Offline deterministic command interpreter & tool orchestration',
      'Proposal preview with explicit Accept / Reject canvas confirmation',
      'Provider-agnostic interface (Ollama, Claude, OpenAI or local models)',
    ],
  },
  {
    id: 'dfm',
    label: 'DFM & Verification',
    icon: ShieldCheck,
    title: 'Automated DFM & Fabrication Package Generator',
    badge: 'Verified E2E Capture',
    description:
      'Zero-tolerance clearance DRC and Design-for-Manufacturing audits. Generates industry-standard RS-274X Gerbers, NC drill coordinates, centroid pick-and-place files, and BOMs.',
    image: '/assets/eak/visualization/eak-dfm-verification.png',
    alt: 'EAK DFM Verification Matrix and Fabrication Preparation Table',
    features: [
      'Automated DRC clearance checks with explicit violation lists',
      'Fabrication bundle generator: Gerbers, drill files, CPL, BOM',
      'Distributor catalog component validation and lifecycle verification',
    ],
  },
];

export function InteractiveEAKWalkthrough() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];
  const Icon = currentTab.icon;

  return (
    <div className="space-y-8">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#f5f4ee] rounded-full border border-[#e6e4dc] max-w-2xl mx-auto">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-white text-[#141413] shadow-sm border border-[#e6e4dc]'
                  : 'text-[#5a5a55] hover:text-[#141413]'
              }`}
            >
              <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#da552f]' : 'text-[#888780]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Screen Frame with Real Screenshot */}
      <div className="rounded-3xl border border-[#e6e4dc] bg-white p-4 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden space-y-6">
        {/* Frame Topbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f2f0e8] text-xs font-mono text-[#888780]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#da552f]" />
            <span className="text-[#141413] font-semibold">{currentTab.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-200">
              {currentTab.badge}
            </span>
            <span className="text-[#888780] hidden sm:inline">• EAK v0.1.3 Desktop App</span>
          </div>
        </div>

        {/* Real Screenshot Viewport */}
        <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-[#0a0c0f] border border-neutral-800 shadow-inner">
          <Image
            src={currentTab.image}
            alt={currentTab.alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 1200px) 100vw, 1100px"
            priority
          />
        </div>

        {/* Caption & Key Feature Badges */}
        <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-[#5a5a55] leading-relaxed max-w-2xl font-sans">
            {currentTab.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {currentTab.features.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#faf9f5] border border-[#e6e4dc] text-[#141413]"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
