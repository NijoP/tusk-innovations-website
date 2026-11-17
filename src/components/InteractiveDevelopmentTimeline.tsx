'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Code2, Wrench, Rocket } from 'lucide-react';

interface TimelineStage {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  visual: string;
  visualAlt: string;
  icon: typeof Cpu;
}

const STAGES: TimelineStage[] = [
  {
    step: '01',
    name: 'Discover',
    subtitle: 'Requirements Discovery & Feasibility Audit',
    description:
      'We engage directly with your engineering leads to map functional objectives, thermal and environmental boundaries, target BOM costs, and compliance constraints.',
    deliverables: [
      'Functional Requirements Specification (FRS)',
      'Feasibility and component availability audit',
      'Preliminary Bill of Materials (BOM) target envelope',
      'Mutual non-disclosure agreement (NDA) execution',
    ],
    visual: '/assets/ai-solutions/ai-automation-dashboard.jpg',
    visualAlt: 'Requirements discovery and technical feasibility analysis',
    icon: Code2,
  },
  {
    step: '02',
    name: 'Design',
    subtitle: 'Deterministic Architecture & Schematics',
    description:
      'We formulate complete circuit schematics, system interconnect topologies, power delivery networks, and component pinout assignments with strict ERC validation.',
    deliverables: [
      'Analog, digital, and mixed-signal schematics',
      'System block diagrams and interconnect bus specs',
      'Verified component symbol and footprint mappings',
      'Hardware-software interface contracts',
    ],
    visual: '/assets/eak/schematic/eak-schematic-editor.png',
    visualAlt: 'Interactive circuit schematic engineering',
    icon: Cpu,
  },
  {
    step: '03',
    name: 'Build',
    subtitle: 'Multi-Layer PCB Layout & Systems Firmware',
    description:
      'Simultaneous development of high-density PCB layouts (2 to 8+ layers) with impedance matching, alongside bare-metal and RTOS firmware drivers for ARM Cortex and STM32.',
    deliverables: [
      'Multi-layer high-speed PCB trace routing',
      'Impedance-controlled stackups and thermal relief',
      'Low-latency microcontroller firmware codebase',
      'Cloud backend endpoints and diagnostic UI shells',
    ],
    visual: '/assets/electronics/pcb-macro-4layer.jpg',
    visualAlt: 'High-density multi-layer PCB layout and routing',
    icon: Wrench,
  },
  {
    step: '04',
    name: 'Validate',
    subtitle: 'Automated DRC & Lab Bench Bring-Up',
    description:
      'Rigorous physical hardware verification in our lab: automated clearance DRC audits, oscilloscopic signal integrity analysis, thermal stress checks, and firmware regression test suites.',
    deliverables: [
      'Automated ERC & Clearance DRC pass certificates',
      'Signal integrity and oscilloscope trace captures',
      'Hardware-in-the-loop (HIL) stress test reports',
      'Thermal imaging and power dissipation analysis',
    ],
    visual: '/assets/embedded-systems/electronics-workbench.jpg',
    visualAlt: 'Electronics bench bring-up and oscilloscopic validation',
    icon: ShieldCheck,
  },
  {
    step: '05',
    name: 'Deliver',
    subtitle: 'Production Fabrication Release & Handover',
    description:
      'We deliver verified, bench-tested physical hardware, full intellectual property ownership, auditable Gerber packages, and ongoing firmware iteration support.',
    deliverables: [
      'Bench-tested physical PCB assemblies',
      'Full manufacturing package (Gerber RS-274X, Drill, CPL, BOM)',
      'Complete Git repositories with reproducible build CI/CD',
      'Production handover and ongoing engineering support',
    ],
    visual: '/assets/product-development/prototype-lab-validation.jpg',
    visualAlt: 'Verified production prototype handover and packaging',
    icon: Rocket,
  },
];

export function InteractiveDevelopmentTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STAGES[activeStep];
  const StepIcon = current.icon;

  return (
    <div className="space-y-10">
      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {STAGES.map((s, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                isActive
                  ? 'bg-white border-[#da552f] shadow-md ring-1 ring-[#da552f]/30'
                  : 'bg-[#f5f4ee] border-[#e6e4dc] hover:bg-white text-[#5a5a55]'
              }`}
            >
              <div className="flex items-center justify-between pb-2">
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? 'text-[#da552f]' : 'text-[#888780]'
                  }`}
                >
                  {s.step}
                </span>
                {idx < activeStep ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#da552f] animate-pulse' : 'bg-[#e6e4dc]'
                    }`}
                  />
                )}
              </div>
              <p
                className={`text-sm font-serif font-bold ${
                  isActive ? 'text-[#141413]' : 'text-[#5a5a55]'
                }`}
              >
                {s.name}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <div className="rounded-3xl border border-[#e6e4dc] bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Info Pane */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#f5f4ee] text-[#da552f] text-xs font-mono font-bold flex items-center justify-center border border-[#e6e4dc]">
                {current.step}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#141413]">
                  {current.name}
                </h3>
                <p className="text-xs font-mono text-[#da552f]">{current.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-[#5a5a55] leading-relaxed pt-2">
              {current.description}
            </p>

            <div className="pt-4 border-t border-[#f2f0e8] space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#da552f]">
                Milestone Deliverables &amp; Output
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5a5a55]">
                {current.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-[#f2f0e8] flex items-center justify-between text-xs font-mono">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              className="text-[#5a5a55] hover:text-[#141413] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Previous Stage
            </button>
            <span className="text-[#888780]">Stage {activeStep + 1} of 5</span>
            <button
              type="button"
              disabled={activeStep === STAGES.length - 1}
              onClick={() => setActiveStep(activeStep + 1)}
              className="text-[#da552f] hover:text-[#c24622] font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next Stage →
            </button>
          </div>
        </div>

        {/* Right Stage Visual Pane */}
        <div className="lg:col-span-5 bg-[#0a0c0f] relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#e6e4dc]">
          <Image
            src={current.visual}
            alt={current.visualAlt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
