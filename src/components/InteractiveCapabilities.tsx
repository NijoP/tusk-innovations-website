'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Rocket, CheckCircle2, Shield, Zap } from 'lucide-react';

interface CapabilityPillar {
  id: string;
  tabLabel: string;
  icon: typeof Bot;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
}

const PILLARS: CapabilityPillar[] = [
  {
    id: 'ai-software',
    tabLabel: 'AI & Software',
    icon: Bot,
    title: 'Intelligent Enterprise AI & Software Systems',
    subtitle: 'From Autonomous Agent Workflows to Core Business Automation',
    description:
      'We architect bespoke artificial intelligence systems that solve concrete operational bottlenecks. Our agents plan, reason, invoke domain APIs, and execute high-friction processes with verifiable precision.',
    image: '/assets/ai-solutions/ai-automation-dashboard.jpg',
    imageAlt: 'TUSK AI Orchestration Dashboard & Intelligent Agent Network',
    tag: 'Enterprise Intelligence',
    highlights: [
      'Multi-agent tool orchestration & automated decision pipelines',
      'Retrieval-augmented domain knowledge graphs (RAG)',
      'Enterprise workflow automation eliminating manual reconciliation',
      'Secure, fail-closed LLM adapters with zero data leakage',
    ],
    ctaText: 'Explore AI Solutions',
    ctaHref: '/services/ai-solutions',
  },
  {
    id: 'electronics-hardware',
    tabLabel: 'Electronics & Hardware',
    icon: Cpu,
    title: 'High-Density Multi-Layer PCB & Embedded Systems',
    subtitle: 'From Mathematical Schematics to Tested Physical Boards',
    description:
      'Complete hardware engineering from circuit simulation to high-speed multi-layer PCB design, impedance control, bare-metal microcontroller firmware, and rapid bring-up in our lab.',
    image: '/assets/electronics/pcb-macro-4layer.jpg',
    imageAlt: '4-Layer High-Density PCB with Precision Routing Traces',
    tag: 'Hardware Engineering',
    highlights: [
      '1 to 8+ layer PCB stackup design with impedance control',
      'Automated Design for Manufacturing (DFM) verification',
      'ARM Cortex-M, STM32 & ESP32 low-latency RTOS firmware',
      'Vendor-neutral BOM preparation & component sourcing assistance',
    ],
    ctaText: 'Explore Electronics Engineering',
    ctaHref: '/services/electronics-pcb',
  },
  {
    id: 'product-development',
    tabLabel: 'Product Development',
    icon: Rocket,
    title: 'End-to-End Product Engineering & Delivery',
    subtitle: 'From Initial Concept to Factory-Floor Reality',
    description:
      'Our signature full-cycle engineering offering. We take complete ownership of your product—unifying AI software, physical circuit design, firmware, lab testing, and manufacturing coordination under one roof.',
    image: '/assets/product-development/prototype-lab-validation.jpg',
    imageAlt: 'Industrial Engineering Prototype in Lab Validation',
    tag: 'Flagship Service',
    highlights: [
      'Single point of accountability across software and hardware',
      'Milestone-gated discovery, architecture, and prototype validation',
      'Production-ready Gerber RS-274X, BOM, and assembly packages',
      'Post-delivery iteration, firmware lifecycle, and field maintenance',
    ],
    ctaText: 'Explore Product Development',
    ctaHref: '/services/product-development',
  },
];

export function InteractiveCapabilities() {
  const [activeTab, setActiveTab] = useState(PILLARS[0].id);
  const activePillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];
  const Icon = activePillar.icon;

  return (
    <div className="space-y-8">
      {/* Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#f5f4ee] rounded-full border border-[#e6e4dc] max-w-xl mx-auto">
        {PILLARS.map((pillar) => {
          const isActive = pillar.id === activeTab;
          const TabIcon = pillar.icon;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveTab(pillar.id)}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-white text-[#141413] shadow-sm border border-[#e6e4dc]'
                  : 'text-[#5a5a55] hover:text-[#141413]'
              }`}
            >
              <TabIcon className={`w-4 h-4 ${isActive ? 'text-[#da552f]' : 'text-[#888780]'}`} />
              <span>{pillar.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Asymmetric Content & Visual Composition */}
      <div className="bg-white rounded-3xl border border-[#e6e4dc] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Editorial Information */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide border border-[#e6e4dc] bg-[#faf9f5] text-[#da552f]">
              <Icon className="w-3.5 h-3.5" />
              <span>{activePillar.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#141413] leading-snug">
              {activePillar.title}
            </h3>

            <p className="text-xs font-mono text-[#888780] uppercase tracking-wider">
              {activePillar.subtitle}
            </p>

            <p className="text-sm text-[#5a5a55] font-sans leading-relaxed pt-2">
              {activePillar.description}
            </p>

            <div className="pt-4 border-t border-[#f2f0e8] space-y-2.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#da552f]">
                Engineering Deliverables
              </span>
              <ul className="space-y-2 text-xs text-[#5a5a55]">
                {activePillar.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href={activePillar.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <span>{activePillar.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Framed High-Resolution Visual */}
        <div className="lg:col-span-6 bg-[#0a0c0f] relative min-h-[380px] lg:min-h-full flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-[#e6e4dc]">
          <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src={activePillar.image}
              alt={activePillar.imageAlt}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
