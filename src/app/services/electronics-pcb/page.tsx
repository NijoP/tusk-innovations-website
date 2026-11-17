import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Activity, CheckCircle2, ShieldCheck, Wrench, FileSpreadsheet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electronics & PCB Engineering Services | TUSK Innovations',
  description:
    'Comprehensive electronics engineering from circuit schematics to high-density multi-layer PCB design, embedded firmware, electrical validation, and manufacturing coordination.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/services/electronics-pcb',
  },
};

const HARDWARE_CAPABILITIES = [
  {
    icon: Activity,
    title: 'Circuit Design & Schematic Engineering',
    description:
      'Rigorous analog, digital, and mixed-signal schematic design with deterministic electrical rule checking, power budget analysis, and component selection.',
  },
  {
    icon: Layers,
    title: 'Multi-Layer PCB Layout & Routing',
    description:
      'High-speed, multi-layer PCB layouts (2 to 8+ layers) with impedance control, differential pair routing, length matching, and thermal relief modeling.',
  },
  {
    icon: Cpu,
    title: 'Embedded Systems & Firmware',
    description:
      'Bare-metal and RTOS firmware engineering for ARM Cortex-M, ESP32, STM32, and custom MCU platforms with low-latency peripherals and power optimization.',
  },
  {
    icon: ShieldCheck,
    title: 'Design for Manufacturing (DFM/DFA)',
    description:
      'Proactive fabrication analysis ensuring trace widths, annular rings, clearances, and panelization comply strictly with standard assembly constraints.',
  },
  {
    icon: FileSpreadsheet,
    title: 'BOM Preparation & Sourcing Assistance',
    description:
      'Comprehensive Bill of Materials generation with active lifecycle checks, second-source alternatives, and component procurement assistance.',
  },
  {
    icon: Wrench,
    title: 'Rapid Prototyping & Lab Bring-up',
    description:
      'Physical prototype board bring-up, oscilloscopic signal verification, power rail testing, thermal validation, and hardware debugging.',
  },
];

const SPEC_STANDARDS = [
  { label: 'Layer Counts', value: '1 to 8+ Layers (FR4, Aluminum, High-Tg)' },
  { label: 'Minimum Trace / Space', value: '4 mil / 4 mil (High-density routing)' },
  { label: 'Validation Protocols', value: 'Automated ERC, Clearance DRC, Signal Integrity' },
  { label: 'Fabrication Deliverables', value: 'Gerber RS-274X, Drill files, IPC-D-356, Centroid, BOM' },
  { label: 'Microcontroller Architectures', value: 'ARM Cortex (M0/M4/M7), STM32, ESP32, RISC-V' },
  { label: 'Protocols Supported', value: 'CAN, SPI, I2C, UART, USB, BLE, Wi-Fi, Ethernet' },
];

export default function ElectronicsPCBPage() {
  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#5a5a55] dark:text-neutral-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da552f] dark:bg-[#ff5500]" />
          Solutions / Hardware Engineering
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.1] max-w-4xl">
          Electronics & PCB Engineering. From Concept to Verified Hardware.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed max-w-3xl">
          We design reliable electronic hardware, high-density printed circuit boards, and robust embedded systems. Every trace, footprint, and firmware module is engineered with mathematical precision.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <span>Discuss Your Hardware Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#141413] dark:text-white bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 rounded-full transition-all"
          >
            <span>All Services</span>
          </Link>
        </div>
      </section>

      {/* Engineering Showcase Visuals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-4 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            Engineering Validation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            Actual Board Layouts & DFM Verification
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 max-w-2xl">
            Real outputs from our electronics engineering pipeline—multi-layer routing, automated DRC/ERC checking, and auditable manufacturing packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="relative aspect-16/10 bg-[#0a0c0f]">
              <Image
                src="/assets/electronics/pcb-macro-4layer.jpg"
                alt="4-Layer High-Density PCB Routing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono font-semibold text-[#da552f] dark:text-[#ff5500] uppercase">Multi-Layer Routing</span>
              <h3 className="text-lg font-serif font-bold text-[#141413] dark:text-white">High-Density Signal &amp; Power Routing</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Controlled impedance differential pairs, ground planes, decoupling loops, and optimized thermal vias for high-performance operation.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="relative aspect-16/10 bg-[#0a0c0f]">
              <Image
                src="/assets/eak/eak-dfm-fabrication-view.jpg"
                alt="Automated DFM &amp; Electrical Rules Check"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono font-semibold text-[#da552f] dark:text-[#ff5500] uppercase">Zero-Tolerance DRC</span>
              <h3 className="text-lg font-serif font-bold text-[#141413] dark:text-white">Design for Manufacturing (DFM) Verification</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Deterministic rule checks guaranteeing zero net shorts, zero unrouted nets, correct annular rings, and full fabrication compatibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            Comprehensive Hardware Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            What We Deliver Across the Hardware Lifecycle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HARDWARE_CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 hover:border-[#d4d1c6] dark:hover:border-neutral-700 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f5f4ee] dark:bg-neutral-800 flex items-center justify-center text-[#da552f] dark:text-[#ff5500]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#141413] dark:text-white">{cap.title}</h3>
                <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specifications & Fabrication Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            Standards & Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            Engineering Quality Parameters
          </h2>
        </div>

        <div className="bg-white dark:bg-[#121418] rounded-2xl border border-[#e6e4dc] dark:border-neutral-800 divide-y divide-[#f2f0e8] dark:divide-neutral-800 overflow-hidden">
          {SPEC_STANDARDS.map((spec, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono font-medium text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">{spec.label}</span>
              <span className="text-sm font-semibold text-[#141413] dark:text-white font-mono">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
          Have an Electronics or PCB Project?
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] dark:text-neutral-400 max-w-xl mx-auto">
          From schematic conception to production-ready Gerbers and board bring-up, talk to our engineering team.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <span>Request Hardware Engineering Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
