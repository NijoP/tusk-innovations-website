import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { HeroEngineeringBackground } from '@/components/HeroEngineeringBackground';
import { InteractiveCapabilities } from '@/components/InteractiveCapabilities';
import { InteractiveEAKWalkthrough } from '@/components/InteractiveEAKWalkthrough';
import { InteractiveDevelopmentTimeline } from '@/components/InteractiveDevelopmentTimeline';
import { AchievementsMilestonesSection } from '@/components/AchievementsMilestonesSection';
import { CompanyRegistrationsSection } from '@/components/CompanyRegistrationsSection';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { GuidedProjectEnquiry } from '@/components/GuidedProjectEnquiry';

export const metadata: Metadata = {
  title: 'TUSK Innovations | AI Solutions & Electronics Engineering',
  description:
    'TUSK Innovations builds intelligent AI solutions and engineers electronic products from concept to final delivery. Selected for NVIDIA Inception and KSUM Idea Grant.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in',
  },
};

export default function HomePage() {
  return (
    <div className="bg-[#faf9f5] text-[#141413] min-h-screen">
      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#e6e4dc]">
        <HeroEngineeringBackground />

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e6e4dc] bg-white/90 backdrop-blur-md shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#da552f] animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-[#5a5a55]">
              TUSK Innovations Global Pvt. Ltd.
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-[#141413] leading-[1.08] max-w-4xl mx-auto">
            Engineering What&apos;s Next.
          </h1>

          {/* Supporting Headline & Description */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-lg sm:text-2xl font-serif text-[#141413] tracking-tight">
              Intelligent Software. Advanced Electronics. Complete Solutions.
            </p>
            <p className="text-base sm:text-lg text-[#5a5a55] font-sans leading-relaxed">
              TUSK Innovations builds intelligent AI solutions and engineers electronic products from concept to final delivery.
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#da552f]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#what-we-build"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#141413] bg-white border border-[#e6e4dc] hover:bg-[#f5f4ee] rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
            >
              <span>Explore What We Build</span>
            </Link>
          </div>

          {/* Distinctive Hero Visual Composition */}
          <div className="pt-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#e6e4dc] bg-white p-2.5 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[#f2f0e8] text-xs font-mono text-[#888780]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#da552f]" />
                  <span className="text-[#141413] font-semibold">TUSK Engineering Workstation</span>
                  <span className="hidden sm:inline text-[#888780]">/ AI-Native Hardware Environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-semibold">
                    ERC: Pass (0 errors)
                  </span>
                  <span className="hidden sm:inline">Layers: 4</span>
                </div>
              </div>
              <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-[#0a0c0f] mt-3">
                <Image
                  src="/assets/eak/schematic/eak-schematic-editor.png"
                  alt="TUSK Electronics Engineering & AI Environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Minimal Trust Strip */}
          <div className="pt-8 border-t border-[#e6e4dc]/80 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#5a5a55]">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#da552f]" />
                NVIDIA Inception
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                KSUM Idea Grant
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                DPIIT Recognised
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                MCA Incorporated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE BUILD (INTERACTIVE CAPABILITY EXPLORATION)
          ========================================================================= */}
      <section id="what-we-build" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc]">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] uppercase tracking-wider">
            Interactive Capability Exploration
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413]">
            What We Build
          </h2>
          <p className="text-base text-[#5a5a55] font-sans">
            Explore our three core engineering pillars. Select a capability to inspect our technical scope and studio assets.
          </p>
        </div>

        <InteractiveCapabilities />
      </section>

      {/* =========================================================================
          SECTION 3 — FLAGSHIP PRODUCT (INTERACTIVE EAK WALKTHROUGH)
          ========================================================================= */}
      <section id="flagship-product" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc]">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] bg-white text-[#da552f]">
            <Sparkles className="w-3.5 h-3.5" />
            Flagship Product Walkthrough
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413] leading-tight">
            Electronics Engineering, Reimagined.
          </h2>

          <p className="text-base sm:text-lg text-[#5a5a55] leading-relaxed font-sans">
            An AI-native engineering workstation bringing intelligent agents, schematic design and PCB engineering into one verifiable environment.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/electronics-agent-kit"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
            >
              <span>Explore EAK Product Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium text-[#141413] bg-white border border-[#e6e4dc] hover:bg-[#f5f4ee] rounded-full transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#888780]" />
            </a>
          </div>
        </div>

        <InteractiveEAKWalkthrough />
      </section>

      {/* =========================================================================
          SECTION 4 — SELECTED WORK (EDITORIAL ENGINEERING PORTFOLIO)
          ========================================================================= */}
      <section id="selected-work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc]">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] uppercase tracking-wider">
            Verified Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413]">
            Selected Work
          </h2>
          <p className="text-base text-[#5a5a55] font-sans">
            Real hardware prototypes, physical PCB layouts, and intelligent software systems engineered inside TUSK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group bg-white border border-[#e6e4dc] hover:border-[#d4d1c6] rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all">
            <div className="relative aspect-16/10 bg-[#0a0c0f] overflow-hidden">
              <Image
                src="/assets/electronics/pcb-macro-4layer.jpg"
                alt="4-Layer PCB Routing & Signal Integrity"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-8 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-[#da552f]">Hardware Engineering</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">4-Layer High-Speed PCB Layout</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                High-density multi-layer routing with controlled impedance differential traces, ground pour zones, and thermal management.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white border border-[#e6e4dc] hover:border-[#d4d1c6] rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all">
            <div className="relative aspect-16/10 bg-[#0a0c0f] overflow-hidden">
              <Image
                src="/assets/embedded-systems/electronics-workbench.jpg"
                alt="Electronics Engineering Bench Bring-Up"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-8 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-[#da552f]">Embedded Systems</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">ARM Cortex Microcontroller Bring-Up</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                Lab bench testing with real digital oscilloscopes, custom power rail regulators, and low-latency bare-metal firmware drivers.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group bg-white border border-[#e6e4dc] hover:border-[#d4d1c6] rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all">
            <div className="relative aspect-16/10 bg-[#0a0c0f] overflow-hidden">
              <Image
                src="/assets/ai-solutions/ai-automation-dashboard.jpg"
                alt="Autonomous Agent Orchestration Platform"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-8 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-[#da552f]">AI &amp; Systems Software</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">Enterprise AI Orchestration Platform</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                Multi-agent workflow coordinator executing automated data extraction, reconciliation, and CRM updates with fail-closed safeguards.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group bg-white border border-[#e6e4dc] hover:border-[#d4d1c6] rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all">
            <div className="relative aspect-16/10 bg-[#0a0c0f] overflow-hidden">
              <Image
                src="/assets/product-development/prototype-lab-validation.jpg"
                alt="End-to-End Product Engineering Prototype"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-8 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-[#da552f]">Product Delivery</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">Complete Hardware Prototype Delivery</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                Custom CNC aluminum chassis enclosure, integrated PCB with status LEDs, and production-ready manufacturing packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — SERVICES
          ========================================================================= */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc]">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] uppercase tracking-wider">
            Client Engagements
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413]">
            Dedicated Services
          </h2>
          <p className="text-base text-[#5a5a55] font-sans">
            Specialized engineering partnerships from tactical components to complete commercial deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#e6e4dc] space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#da552f] font-semibold uppercase">Service 01</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">AI Solutions for Businesses</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                Custom AI applications, autonomous agents, and deterministic process automation engineered around your company&apos;s operational bottlenecks.
              </p>
            </div>
            <Link
              href="/services/ai-solutions"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#da552f] transition-colors pt-2"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#e6e4dc] space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#da552f] font-semibold uppercase">Service 02</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">Electronics &amp; PCB Engineering</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                Complete circuit design, multi-layer high-speed PCB layouts, embedded firmware (ARM, STM32, ESP32), and manufacturing preparation.
              </p>
            </div>
            <Link
              href="/services/electronics-pcb"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#da552f] transition-colors pt-2"
            >
              <span>Explore Electronics Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#e6e4dc] space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#da552f] font-semibold uppercase">Service 03</span>
              <h3 className="text-xl font-serif font-bold text-[#141413]">Complete Product Development</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">
                Full-cycle technical ownership: requirements discovery, system architecture, hardware-software co-design, testing, and verified handover.
              </p>
            </div>
            <Link
              href="/services/product-development"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#da552f] transition-colors pt-2"
            >
              <span>Explore Product Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — HOW WE WORK (INTERACTIVE DEVELOPMENT TIMELINE)
          ========================================================================= */}
      <section id="approach" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc]">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] uppercase tracking-wider">
            Interactive Development Timeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#141413]">
            How We Work
          </h2>
          <p className="text-base text-[#5a5a55] font-sans">
            A milestone-driven engineering sequence eliminating ambiguity. Select any stage to inspect deliverables and real lab evidence.
          </p>
        </div>

        <InteractiveDevelopmentTimeline />
      </section>

      {/* =========================================================================
          SECTION 7 — ACHIEVEMENTS & MILESTONES
          ========================================================================= */}
      <AchievementsMilestonesSection />

      {/* =========================================================================
          SECTION 8 — COMPANY REGISTRATIONS & RECOGNITIONS
          ========================================================================= */}
      <CompanyRegistrationsSection />

      {/* =========================================================================
          SECTION 9 — FAQ
          ========================================================================= */}
      <HomeFAQSection />

      {/* =========================================================================
          SECTION 10 — FINAL PROJECT CONSULTATION (GUIDED ENQUIRY)
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-serif tracking-tight text-[#141413]">
            What Are You Building Next?
          </h2>
          <p className="text-base sm:text-lg text-[#5a5a55] max-w-xl mx-auto font-sans leading-relaxed">
            Let&apos;s turn your engineering challenge into a working solution. Use our guided enquiry to initiate a confidential consultation.
          </p>
        </div>

        <GuidedProjectEnquiry />
      </section>
    </div>
  );
}
