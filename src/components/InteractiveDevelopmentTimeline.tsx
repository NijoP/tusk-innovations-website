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
    visual: '/assets/eak/eak-ai-eda-terminal.jpg',
    visualAlt: 'Circuit schematics design, pinout mapping, and system architecture',
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
    <div className="space-y-6 sm:space-y-10">
      {/* Interactive Step Navigator */}
      <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-5 gap-2.5 sm:gap-3 pb-1 sm:pb-0">
        {STAGES.map((s, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`min-w-[130px] sm:min-w-0 flex-1 shrink-0 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition-all duration-200 ${
                isActive
                  ? 'bg-white dark:bg-neutral-800 border-[#da552f] dark:border-[#ff5500] shadow-md ring-1 ring-[#da552f]/30 dark:ring-[#ff5500]/30'
                  : 'bg-[#f5f4ee] dark:bg-neutral-900 border-[#e6e4dc] dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800/80 text-[#5a5a55] dark:text-neutral-400'
              }`}
            >
              <div className="flex items-center justify-between pb-2">
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? 'text-[#da552f] dark:text-[#ff5500]' : 'text-[#888780] dark:text-neutral-500'
                  }`}
                >
                  {s.step}
                </span>
                {idx < activeStep ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#da552f] dark:bg-[#ff5500] animate-pulse' : 'bg-[#e6e4dc] dark:neutral-700'
                    }`}
                  />
                )}
              </div>
              <p
                className={`text-sm font-serif font-bold ${
                  isActive ? 'text-[#141413] dark:text-white' : 'text-[#5a5a55] dark:text-neutral-400'
                }`}
              >
                {s.name}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <div className="rounded-2xl sm:rounded-3xl border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-[#121418] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Info Pane */}
        <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#f5f4ee] dark:bg-neutral-800 text-[#da552f] dark:text-[#ff5500] text-xs font-mono font-bold flex items-center justify-center border border-[#e6e4dc] dark:border-neutral-700 shrink-0">
                {current.step}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#141413] dark:text-white">
                  {current.name}
                </h3>
                <p className="text-xs font-mono text-[#da552f] dark:text-[#ff5500]">{current.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-[#5a5a55] dark:text-neutral-300 leading-relaxed pt-1 sm:pt-2">
              {current.description}
            </p>

            <div className="pt-4 border-t border-[#f2f0e8] dark:border-neutral-800 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#da552f] dark:text-[#ff5500]">
                Milestone Deliverables &amp; Output
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5a5a55] dark:text-neutral-300">
                {current.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-[#f2f0e8] dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              className="py-1.5 px-3 rounded-lg text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Previous
            </button>
            <span className="text-[#888780] dark:text-neutral-500 font-medium">Stage {activeStep + 1} of 5</span>
            <button
              type="button"
              disabled={activeStep === STAGES.length - 1}
              onClick={() => setActiveStep(activeStep + 1)}
              className="py-1.5 px-3 rounded-lg text-[#da552f] dark:text-[#ff5500] hover:text-[#c24622] hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Right Stage Visual Pane */}
        <div className="lg:col-span-5 bg-[#0a0c0f] relative min-h-[240px] sm:min-h-[320px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#e6e4dc] dark:border-neutral-800">
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
