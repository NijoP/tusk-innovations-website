'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layers, ShieldCheck, CheckCircle2, Terminal, Cpu, Wrench } from 'lucide-react';

interface WalkthroughTab {
  id: string;
  label: string;
  icon: typeof Layers;
  title: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

const TABS: WalkthroughTab[] = [
  {
    id: 'workstation',
    label: 'AI-Assisted Workstation',
    icon: Terminal,
    title: 'AI-Native EDA Shell & Automated Netlist Synthesis',
    badge: 'Hardware Design Studio',
    description:
      'Curved ultra-wide engineering environment integrating natural language design agents with real-time circuit schematic synthesis and live copper trace routing.',
    image: '/assets/eak/eak-ai-eda-terminal.jpg',
    alt: 'AI-Assisted Electronic Design Automation Workstation with Netlist Synthesis',
    features: [
      'Synchronized terminal agent & schematic synthesis',
      'Typed command bus with fail-closed validation',
      'Event-sourced design model with audit logging',
    ],
  },
  {
    id: 'pcb',
    label: 'Multi-Layer PCB Routing',
    icon: Layers,
    title: 'High-Density 4-Layer Trace Routing & Stackup',
    badge: 'Precision Hardware',
    description:
      'High-speed multi-layer trace routing with controlled impedance differential pairs, ground reference planes, gold-plated test pads, and thermal relief management.',
    image: '/assets/electronics/pcb-macro-4layer.jpg',
    alt: 'High-Density 4-Layer PCB with Precision Copper Traces and SMT Micro-Components',
    features: [
      '4-layer high-density routing with impedance control parameters',
      'Precision SMT component placement and annular ring rules',
      'Thermal vias and ground pour polygon optimization',
    ],
  },
  {
    id: 'dfm',
    label: 'DFM Optical Inspection',
    icon: ShieldCheck,
    title: 'Automated Optical Inspection (AOI) & DRC Validation',
    badge: 'Zero-Tolerance DRC',
    description:
      'Deterministic clearance checking and automated optical inspection verification. Every net, track clearance, and pad geometry is validated before fabrication release.',
    image: '/assets/eak/eak-dfm-fabrication-view.jpg',
    alt: 'Finished 4-Layer PCB Undergoing Automated Optical Inspection with Laser Guidance',
    features: [
      'Automated DRC clearance checks with explicit violation lists',
      'Design for Assembly (DFA) component boundary verification',
      'Zero-short netlist verification prior to Gerber export',
    ],
  },
  {
    id: 'soc',
    label: 'Silicon & SoC Integration',
    icon: Cpu,
    title: 'Advanced System-on-Chip (SoC) & High-Speed BGA Routing',
    badge: 'Component Engineering',
    description:
      'Multi-core silicon SoC processor integration with high-density ball grid array (BGA) escape routing, micro-vias, and high-frequency clock distribution.',
    image: '/assets/eak/eak-component-cad-model.jpg',
    alt: 'Multi-Core Silicon SoC Processor with Gold-Plated BGA Breakout Traces',
    features: [
      'High-density BGA breakout routing with micro-vias',
      'High-speed differential length matching & skew tuning',
      'Parametric footprint verification against manufacturer specs',
    ],
  },
  {
    id: 'bench',
    label: 'Hardware Lab Bring-Up',
    icon: Wrench,
    title: 'Lab Bench Prototyping & Oscilloscope Validation',
    badge: 'Physical Verification',
    description:
      'Comprehensive bench verification in our electronics lab: digital oscilloscopic waveform capture, power rail regulation, and hardware-in-the-loop stress testing.',
    image: '/assets/embedded-systems/electronics-workbench.jpg',
    alt: 'Electronics Engineering Workbench with Digital Oscilloscope and Test Hardware',
    features: [
      'Real-time signal integrity & jitter analysis on oscilloscopes',
      'Multi-rail power delivery network (PDN) ripple testing',
      'Firmware flashing, UART debugging, and RTOS bring-up',
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
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#f5f4ee] dark:bg-neutral-900 rounded-full border border-[#e6e4dc] dark:border-neutral-800 max-w-2xl mx-auto">
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
                  ? 'bg-white dark:bg-neutral-800 text-[#141413] dark:text-white shadow-sm border border-[#e6e4dc] dark:border-neutral-700'
                  : 'text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white'
              }`}
            >
              <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#da552f] dark:text-[#ff5500]' : 'text-[#888780] dark:text-neutral-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Screen Frame with High-Resolution Visual */}
      <div className="rounded-3xl border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-[#121418] p-4 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden space-y-6">
        {/* Frame Topbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f2f0e8] dark:border-neutral-800 text-xs font-mono text-[#888780] dark:text-neutral-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#da552f] dark:bg-[#ff5500]" />
            <span className="text-[#141413] dark:text-white font-semibold">{currentTab.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-200 dark:border-emerald-800/60">
              {currentTab.badge}
            </span>
            <span className="text-[#888780] dark:text-neutral-500 hidden sm:inline">• Electronics Agent Kit Architecture</span>
          </div>
        </div>

        {/* Studio Visual Viewport */}
        <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-[#0a0c0f] border border-neutral-800 shadow-inner">
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
          <p className="text-sm text-[#5a5a55] dark:text-neutral-300 leading-relaxed max-w-2xl font-sans">
            {currentTab.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {currentTab.features.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#faf9f5] dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#141413] dark:text-neutral-200"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
