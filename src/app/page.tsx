import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  GitFork,
  Brain,
  Rocket,
  CheckCircle2,
  Terminal,
  Activity,
  Award,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import { COMPANY_DETAILS, RECOGNITIONS } from '@/lib/data';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ServicesSection } from '@/components/ServicesSection';

export default function HomePage() {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-5xl text-center">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300/80 bg-white shadow-2xs mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-[#585c65]">
              TUSK INNOVATIONS GLOBAL PRIVATE LIMITED
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#121316] leading-[1.08] max-w-4xl mx-auto">
            Building Intelligent Technology. Engineering the Future.
          </h1>

          {/* Supporting Text */}
          <p className="mt-8 text-lg sm:text-xl text-[#585c65] max-w-3xl mx-auto leading-relaxed font-normal">
            TUSK Innovations develops AI-powered software, intelligent automation, electronics, and advanced engineering solutions. We turn ideas into working products through end-to-end design, development, testing, and delivery.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-colors shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#121316] bg-white border border-[#d0ceca] hover:bg-neutral-50 rounded-md transition-colors shadow-2xs"
            >
              <span>Explore Our Solutions</span>
            </Link>
          </div>

          {/* Trust / Credibility Badge Bar */}
          <div className="mt-16 pt-8 border-t border-[#e6e5e0]/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-3 bg-white/80 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">Global Accelerator</span>
              <span className="text-sm font-semibold text-[#121316]">NVIDIA Inception</span>
            </div>
            <div className="p-3 bg-white/80 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">State Innovation</span>
              <span className="text-sm font-semibold text-[#121316]">KSUM Idea Grant</span>
            </div>
            <div className="p-3 bg-white/80 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">National Recognition</span>
              <span className="text-sm font-semibold text-[#121316]">DPIIT-Recognised</span>
            </div>
            <div className="p-3 bg-white/80 border border-[#e6e5e0] rounded-md">
              <span className="block text-[11px] font-mono text-[#8b909a] uppercase">Core Discipline</span>
              <span className="text-sm font-semibold text-[#121316]">AI & Electronics</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ACHIEVEMENTS & RECOGNITIONS */}
      <AchievementsSection />

      {/* SECTION 3 — WHAT WE DO (THE 3 CORE PILLARS) */}
      <Section id="what-we-do" className="bg-[#faf9f6]">
        <div className="space-y-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] mt-2">
              Three Pillars of Modern Engineering.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#585c65] leading-relaxed">
              We bridge software intelligence with physical hardware fabrication. Our multidisciplinary engineering team solves complex problems across three integrated pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border border-[#e6e5e0] rounded-xl p-8 space-y-4 hover:border-[#121316]/30 transition-all duration-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#ff5500]/10 flex items-center justify-center text-[#ff5500]">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#121316]">AI & Software Systems</h3>
              <p className="text-sm text-[#585c65] leading-relaxed">
                We build intelligent AI solutions, autonomous agent pipelines, internal business automation tools, and secure cloud software that streamline operations and eliminate bottlenecks.
              </p>
              <ul className="pt-2 space-y-2 text-xs font-medium text-[#121316]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                  Custom AI application & agent development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                  Business workflow automation & intelligent tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                  LLM integrations, APIs & enterprise dashboards
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-[#e6e5e0] rounded-xl p-8 space-y-4 hover:border-[#121316]/30 transition-all duration-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#121316]">Electronics & Hardware</h3>
              <p className="text-sm text-[#585c65] leading-relaxed">
                We design and engineer electronic products, embedded systems, microcontrollers, and multi-layer high-speed PCB layouts from first schematic principles to verified boards.
              </p>
              <ul className="pt-2 space-y-2 text-xs font-medium text-[#121316]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Circuit design & schematic engineering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Multi-layer PCB layout & impedance routing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Embedded firmware & microcontroller systems
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#121417] text-white rounded-xl p-8 space-y-4 border border-neutral-800 shadow-lg relative ring-1 ring-[#ff5500]/40">
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-[#ff5500]">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">End-to-End Delivery</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We take projects from initial discovery and technical architecture through full design, development, laboratory testing, fabrication coordination, and final delivery.
              </p>
              <ul className="pt-2 space-y-2 text-xs font-medium text-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                  Concept feasibility & systems architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                  Unified software, AI & hardware co-design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                  Fabrication packages & client handover
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — FLAGSHIP PRODUCT (DARK TECHNICAL SHOWCASE) */}
      <Section id="flagship-eak" dark={true} className="tech-grid-dark">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#ff5500]/20 border border-[#ff5500]/40 text-[#ff5500] text-xs font-mono font-medium mb-4">
              <span>FLAGSHIP PRODUCT</span>
              <span>•</span>
              <span>OPEN SOURCE PROTOTYPE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Electronics Agent Kit (EAK)
            </h2>
            <p className="mt-3 text-xl font-mono text-[#ff5500]">
              Intent In. Manufactured Board Out.
            </p>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              An AI-native electronics engineering workstation where professional schematic and PCB editors share one verifiable design model with terminal AI agents. Built in Rust and Tauri with live terminal-to-EDA synchronization and fail-closed deterministic verification.
            </p>
          </div>

          {/* Real Implemented Capabilities Matrix Preview */}
          <div className="border border-neutral-800 bg-[#16181d] rounded-xl p-6 sm:p-8 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-white font-semibold">eak-runtime (Rust + Tauri)</span>
                <span className="text-neutral-500 hidden md:inline">| Clean Concentric Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-emerald-400">Fail-Closed Verification Active</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-4 bg-neutral-900/80 rounded-lg border border-neutral-800 space-y-2">
                <span className="text-[#ff5500] text-[11px] block font-bold uppercase tracking-wider">
                  01. LIVE TERMINAL-TO-EDA SYNC
                </span>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans">
                  A coding agent in the terminal workspace edits the design via typed commands; the schematic and multi-layer PCB canvases update live in front of you.
                </p>
              </div>
              <div className="p-4 bg-neutral-900/80 rounded-lg border border-neutral-800 space-y-2">
                <span className="text-emerald-400 text-[11px] block font-bold uppercase tracking-wider">
                  02. DETERMINISTIC ENGINE & DRC
                </span>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans">
                  Electrical rules check (ERC) gate runs before PCB synchronization; clearance and connectivity DRC with fail-closed gap reporting. Pure deterministic logic.
                </p>
              </div>
              <div className="p-4 bg-neutral-900/80 rounded-lg border border-neutral-800 space-y-2">
                <span className="text-sky-400 text-[11px] block font-bold uppercase tracking-wider">
                  03. 3D VISUALIZATION & BOM
                </span>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans">
                  Interactive 3D board rendering with copper geometry, vendor-neutral library schemas, KiCad asset interchange, and draft fabrication package export.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-neutral-400 text-xs font-sans">
                Early prototype; open source. Tested in CI across Linux, Windows, and macOS.
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/electronics-agent-kit"
                  className="text-xs font-mono font-semibold text-[#ff5500] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={COMPANY_DETAILS.eakRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors inline-flex items-center gap-1"
                >
                  <GitFork className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — OUR SERVICES & WORKFLOW */}
      <ServicesSection />

      {/* SECTION 6 — OUR ENGINEERING APPROACH */}
      <Section id="engineering-approach" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
              Engineering Doctrine
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121316] leading-tight">
              Rigorous verification over superficial shortcuts.
            </h2>
            <p className="text-base text-[#585c65] leading-relaxed">
              We reject superficial marketing claims in favor of foundational systems design. In both software and electronics, correctness and safety come from clean architectural boundaries and deterministic validation.
            </p>
            <div className="pt-2">
              <Link
                href="/technology"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121316] hover:text-[#ff5500] transition-colors group"
              >
                <span>Read our architectural breakdown</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#faf9f6] border border-[#e6e5e0] rounded-xl space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#ff5500]" />
              <h4 className="text-base font-bold text-[#121316]">Deterministic Authority</h4>
              <p className="text-xs text-[#585c65] leading-relaxed">
                AI proposes; deterministic physics, electrical rules, and invariant checks validate. The runtime is the source of truth, never an ungrounded model.
              </p>
            </div>

            <div className="p-6 bg-[#faf9f6] border border-[#e6e5e0] rounded-xl space-y-2">
              <Layers className="w-6 h-6 text-[#ff5500]" />
              <h4 className="text-base font-bold text-[#121316]">Clean Concentric Architecture</h4>
              <p className="text-xs text-[#585c65] leading-relaxed">
                Concentric ring dependency structure enforced at compile-time. Kernel cores remain isolated from peripheral adapters and external frameworks.
              </p>
            </div>

            <div className="p-6 bg-[#faf9f6] border border-[#e6e5e0] rounded-xl space-y-2">
              <Cpu className="w-6 h-6 text-[#ff5500]" />
              <h4 className="text-base font-bold text-[#121316]">High-Performance Foundations</h4>
              <p className="text-xs text-[#585c65] leading-relaxed">
                Built in modern Rust and native desktop environments for memory safety, deterministic concurrency, and lightning-fast local execution.
              </p>
            </div>

            <div className="p-6 bg-[#faf9f6] border border-[#e6e5e0] rounded-xl space-y-2">
              <Activity className="w-6 h-6 text-[#ff5500]" />
              <h4 className="text-base font-bold text-[#121316]">End-to-End Ownership</h4>
              <p className="text-xs text-[#585c65] leading-relaxed">
                Complete engineering lifecycle management from concept discovery and architectural modeling to production fabrication coordination.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7 — OPEN SOURCE SECTION */}
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
              We believe foundational engineering tools should be open, inspectable, and verifiable. Electronics Agent Kit is developed openly under the <strong>O&apos;Saasy license</strong> (free to use, modify, and self-host).
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Whether you are an electronics engineer, systems developer, or EDA researcher, explore our architecture documents, audit our invariant rules, and inspect our official public prototype repository.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={COMPANY_DETAILS.eakRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-[#121316] bg-white hover:bg-neutral-100 rounded-md transition-colors"
              >
                <GitFork className="w-4 h-4 text-[#ff5500]" />
                <span>NijoP/electronics-agent-kit-new-prototype</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/open-source"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-white border border-neutral-700 hover:bg-neutral-800 rounded-md transition-colors"
              >
                <span>Contribution & Architecture</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-6 rounded-xl font-mono text-xs text-neutral-300 space-y-3">
            <div className="text-neutral-500 pb-2 border-b border-neutral-800">
              # One-line install or build from source
            </div>
            <div className="text-neutral-400"># Windows (PowerShell):</div>
            <div className="text-emerald-400 break-all">
              irm https://raw.githubusercontent.com/NijoP/electronics-agent-kit-new-prototype/main/install.ps1 | iex
            </div>
            <div className="text-neutral-400 pt-1"># Clone repository:</div>
            <div className="text-sky-400 break-all">
              git clone https://github.com/NijoP/electronics-agent-kit-new-prototype.git
            </div>
            <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-800">
              Cross-platform: Windows, Linux, macOS. Built with Rust + Tauri.
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8 — CONTACT & PROJECT ENQUIRY CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121316] text-white border-t border-neutral-800">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="text-xs font-mono font-semibold text-[#ff5500] uppercase tracking-wider">
            Initiate Project Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Let’s engineer your next breakthrough.
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base sm:text-lg">
            Have a project, hardware challenge, or custom AI requirement? Share your goals with our engineering leads to discuss feasibility, architecture, and delivery timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-colors shadow-xs"
            >
              Start a Project Enquiry
            </Link>
            <a
              href={COMPANY_DETAILS.eakRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 rounded-md flex items-center justify-center gap-2 transition-colors"
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
