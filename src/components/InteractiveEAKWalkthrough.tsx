'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layers, ShieldCheck, CheckCircle2, FileText, Database, Wrench } from 'lucide-react';

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
    id: 'pcb',
    label: 'PCB Layout & Routing',
    icon: Layers,
    title: 'Multi-Layer High-Density PCB Routing Engine',
    badge: 'Verified E2E Capture',
    description:
      'High-speed multi-layer trace routing with clearance halos, interactive via placement, ground pour zone refills, and real-time net connectivity checking.',
    image: '/assets/eak/pcb/eak-pcb-routing.png',
    alt: 'EAK PCB Layout Workspace with 4 Copper Layers and Auto-Routed Tracks',
    features: [
      '4-layer high-density routing with impedance control parameters',
      'Dynamic airwire rendering and net highlight inspection',
      'Deterministic clearance checking avoiding unrouted nets',
    ],
  },
  {
    id: 'layers',
    label: 'Stackup Manager',
    icon: Wrench,
    title: 'Multi-Layer Stackup & Copper Allocation',
    badge: 'Verified E2E Capture',
    description:
      'Configurable substrate layer stackups supporting 2, 4, 6, and 8+ copper layers. Visualizes top/bottom copper, dielectric prepreg, and internal ground planes.',
    image: '/assets/eak/pcb/eak-pcb-4layers.png',
    alt: 'EAK PCB Layer Stackup Manager Showing 4 Copper Layers',
    features: [
      'Top/Bottom signal layers with internal reference ground planes',
      'Individual layer visibility, locking, and copper pour assignment',
      'Direct mapping to standard fabhouse stackup specifications',
    ],
  },
  {
    id: 'dfm',
    label: 'DFM Verification',
    icon: ShieldCheck,
    title: 'Automated DFM & Electrical Rules Check (ERC/DRC)',
    badge: 'Verified E2E Capture',
    description:
      'Zero-tolerance clearance DRC and Design-for-Manufacturing audits. Generates tabular finding reports before committing fabrication packages.',
    image: '/assets/eak/visualization/eak-dfm-verification.png',
    alt: 'EAK DFM Verification Matrix and Fabrication Preparation Table',
    features: [
      'Automated DRC clearance checks with explicit violation lists',
      'Design for Assembly (DFA) component boundary verification',
      'Distributor catalog validation for component availability',
    ],
  },
  {
    id: 'export',
    label: 'Fabrication Export',
    icon: FileText,
    title: 'Production Gerber & Manufacturing Export Pipeline',
    badge: 'Verified E2E Capture',
    description:
      'Generates 18 production-ready fabrication files including RS-274X Gerbers, NC drill coordinates, centroid pick-and-place files, and verified BOMs.',
    image: '/assets/eak/visualization/eak-manufacturing-export.png',
    alt: 'EAK Manufacturing Export Dialog Generating Complete Gerber and BOM Bundles',
    features: [
      'Complete RS-274X Gerber layer packages (.gtl, .gbl, .gbo, etc.)',
      'IPC-D-356 electrical test netlists & NC drill files',
      'Consolidated BOM with manufacturer part numbers',
    ],
  },
  {
    id: 'library',
    label: 'Component Library',
    icon: Database,
    title: 'Structured Component Catalog & Parts Discovery',
    badge: 'Verified E2E Capture',
    description:
      'Native vendor-neutral structured component repository with verified pin matrices, parametric footprint mappings, and KiCad library asset interchange.',
    image: '/assets/eak/workspace/eak-component-library.png',
    alt: 'EAK Component Library and Parametric Search Interface',
    features: [
      'Parametric search across passive and active component packages',
      'Transactional KiCad (.kicad_sym and .kicad_mod) import',
      'Zero vendor lock-in with open structured JSON models',
    ],
  },
];

export function InteractiveEAKWalkthrough() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

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
            <span className="text-[#888780] hidden sm:inline">• EAK Desktop Engineering Workstation</span>
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
