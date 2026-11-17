import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Rocket, Code2, Cpu, Wrench, ShieldCheck, FileCheck, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'End-to-End Product Development | TUSK Innovations',
  description:
    'Full-cycle engineering from initial idea to final delivery. We unify AI software, embedded firmware, PCB engineering, and manufacturing coordination into one accountable delivery model.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/services/product-development',
  },
};

const STAGES = [
  {
    stage: '01',
    title: 'Discovery & Feasibility Audit',
    objective: 'Establish requirements, operational boundaries, and feasibility targets.',
    deliverables: [
      'Functional Requirements Specification (FRS)',
      'Operational environment & thermal constraints',
      'Target bill-of-materials (BOM) cost envelope',
      'Technical feasibility assessment report',
    ],
  },
  {
    stage: '02',
    title: 'Technical System Architecture',
    objective: 'Design deterministic topologies across hardware, software, and AI subsystems.',
    deliverables: [
      'System block diagram & interconnect topologies',
      'Hardware-software interface contract',
      'Component selection & lifecycle verification',
      'Security, data isolation & fail-closed design',
    ],
  },
  {
    stage: '03',
    title: 'Hardware & Software Engineering',
    objective: 'Simultaneous development of physical circuits and systems software.',
    deliverables: [
      'Complete circuit schematics & simulation models',
      'Multi-layer PCB layout & impedance matching',
      'Embedded firmware & RTOS driver development',
      'Cloud backend, API endpoints & client UI',
    ],
  },
  {
    stage: '04',
    title: 'Verification, DRC & Bench Integration',
    objective: 'Validate physical prototypes, electrical safety, and systems logic.',
    deliverables: [
      'Automated ERC & Clearance DRC audit reports',
      'Signal integrity & oscilloscopic trace verification',
      'Firmware unit & hardware-in-the-loop (HIL) tests',
      'Thermal stress & power consumption profiling',
    ],
  },
  {
    stage: '05',
    title: 'Production & Manufacturing Coordination',
    objective: 'Transition designs into physical production with auditable fabrication packages.',
    deliverables: [
      'Production Gerbers (RS-274X) & NC drill files',
      'Centroid pick-and-place files & assembly drawings',
      'Consolidated BOM with multi-vendor source options',
      'Fabrication coordination and assembly review',
    ],
  },
  {
    stage: '06',
    title: 'Final Delivery & Operational Handover',
    objective: 'Deliver verified hardware, reproducible source repositories, and training.',
    deliverables: [
      'Physical assembled & bench-tested hardware boards',
      'Full source code repositories with CI/CD scripts',
      'Manufacturing documentation & maintenance guides',
      'Post-delivery support, warranty & iteration roadmap',
    ],
  },
];

export default function ProductDevelopmentPage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen text-[#141413]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] bg-white text-[#5a5a55] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da552f]" />
          Flagship Engineering Service
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] leading-[1.1] max-w-4xl">
          From Initial Idea to Final Delivery.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] font-sans leading-relaxed max-w-3xl">
          We take complete ownership of your product engineering journey. Whether you arrive with a concept sketch, a technical brief, or an early prototype, we deliver a working, manufactured, production-grade reality.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <span>Start Your Product Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#141413] bg-white border border-[#e6e4dc] hover:bg-[#f5f4ee] rounded-full transition-all"
          >
            <span>All Services</span>
          </Link>
        </div>
      </section>

      {/* The Unified Delivery Model */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            The Unified Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            No finger-pointing between software and hardware.
          </h2>
          <p className="text-base sm:text-lg text-[#5a5a55] max-w-3xl leading-relaxed">
            Traditional product development fragments responsibility across industrial designers, software agencies, and PCB contractors. When issues arise, delays multiply. TUSK unifies the entire engineering stack under one multidisciplinary team with a single point of accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[#e6e4dc] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f5f4ee] flex items-center justify-center text-[#da552f]">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#141413]">Software & AI Stack</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Cloud backends, AI algorithms, cross-platform UI shells, and REST/WebSocket control interfaces engineered concurrently with hardware.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#e6e4dc] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f5f4ee] flex items-center justify-center text-[#da552f]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#141413]">Embedded Hardware</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              Custom schematics, multi-layer high-density PCB layouts, power delivery networks, and low-latency bare-metal/RTOS firmware.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#e6e4dc] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f5f4ee] flex items-center justify-center text-[#da552f]">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#141413]">Production Readiness</h3>
            <p className="text-xs text-[#5a5a55] leading-relaxed">
              DFM verification, vendor-neutral BOM sourcing assistance, fabrication auditing, and smooth client operational handover.
            </p>
          </div>
        </div>
      </section>

      {/* Six-Stage Process Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Structured Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Our 6-Stage Engineering Process
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] max-w-2xl">
            A disciplined, milestone-gated engineering methodology designed to de-risk projects early and deliver verified outcomes on time.
          </p>
        </div>

        <div className="space-y-8">
          {STAGES.map((s, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e6e4dc] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f2f0e8] pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#f5f4ee] text-[#da552f] text-xs font-mono font-bold flex items-center justify-center border border-[#e6e4dc]">
                    {s.stage}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#141413]">{s.title}</h3>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#888780]">
                  Gated Milestone
                </span>
              </div>

              <p className="text-sm text-[#5a5a55] leading-relaxed">
                <strong className="text-[#141413]">Objective: </strong>
                {s.objective}
              </p>

              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#da552f]">
                  Key Deliverables
                </span>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5a5a55]">
                  {s.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
          Let&apos;s Build Your Product Together.
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] max-w-xl mx-auto">
          Share your idea, timeline, and specifications. We will review your requirements under NDA and prepare a detailed engineering proposal.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
