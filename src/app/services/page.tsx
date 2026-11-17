import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Brain, Cpu, Rocket, ShieldCheck, Clock, Award } from 'lucide-react';
import { SERVICES_LIST, WORKFLOW_STEPS, COMPANY_DETAILS } from '@/lib/data';
import { Section } from '@/components/Section';
import { AchievementsSection } from '@/components/AchievementsSection';

export const metadata: Metadata = {
  title: 'Engineering & Technology Services | TUSK INNOVATIONS',
  description:
    'Comprehensive engineering services from TUSK INNOVATIONS: Custom AI Solutions for Businesses, Electronics & PCB Engineering, and End-to-End Product Development from concept to delivery.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] text-xs font-mono font-medium">
            <span>FULL-LIFECYCLE ENGINEERING</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#121316] leading-tight">
            Engineering Ideas Into Real-World Solutions.
          </h1>
          <p className="text-lg sm:text-xl text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            We build intelligent software, AI-powered business solutions, electronics, and complete hardware products — from initial concept to engineering, development, testing, and final delivery.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-colors shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#end-to-end-workflow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#121316] bg-white border border-[#d0ceca] hover:bg-neutral-50 rounded-md transition-colors shadow-2xs"
            >
              <span>Explore Our Workflow</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE 1: AI Solutions for Businesses */}
      <Section id="ai-solutions" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff5500]/10 text-[#ff5500] text-xs font-mono font-semibold">
              <Brain className="w-4 h-4" />
              <span>SERVICE OFFERING 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121316]">
              AI Solutions for Businesses
            </h2>
            <p className="text-base text-[#585c65] leading-relaxed">
              We engineer custom AI software, autonomous multi-tool agentic pipelines, and business automation workflows that drive measurable operational leverage.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?category=AI%20%26%20Software%20Solutions"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold uppercase text-white bg-[#121316] hover:bg-neutral-800 rounded transition-colors"
              >
                <span>Request AI Architecture Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#faf9f6] border border-[#e6e5e0] rounded-xl p-6 sm:p-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b909a] mb-4">
              Scope of Implementation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST[0].capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-[#e6e5e0]">
                  <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#121316]">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICE 2: Electronics & PCB Engineering */}
      <Section id="electronics-engineering" className="bg-[#f5f4ef]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 bg-white border border-[#e6e5e0] rounded-xl p-6 sm:p-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b909a] mb-4">
              Hardware Engineering Disciplines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST[1].capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#faf9f6] rounded-lg border border-[#e6e5e0]">
                  <Cpu className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#121316]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-700 text-xs font-mono font-semibold">
              <Cpu className="w-4 h-4" />
              <span>SERVICE OFFERING 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121316]">
              Electronics & PCB Engineering
            </h2>
            <p className="text-base text-[#585c65] leading-relaxed">
              From circuit schematic synthesis to multi-layer impedance-controlled PCB layout, firmware programming, component sourcing preparation, and manufacturing coordination.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?category=Electronics%20%26%20PCB%20Design"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold uppercase text-white bg-[#121316] hover:bg-neutral-800 rounded transition-colors"
              >
                <span>Initiate PCB / Hardware Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICE 3: End-to-End Product Development (Dark Showcase) */}
      <Section id="end-to-end-workflow" dark={true} className="tech-grid-dark">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff5500]/20 border border-[#ff5500]/40 text-[#ff5500] text-xs font-mono font-medium">
              <Rocket className="w-3.5 h-3.5" />
              <span>FLAGSHIP SERVICE OFFERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              End-to-End Product Development
            </h2>
            <p className="text-xl font-mono text-[#ff5500]">
              From Project Idea to Final Delivery.
            </p>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Clients can approach us with a raw idea, an incomplete prototype, a complex technical challenge, or an end-to-end product requirement. We take total ownership of the engineering lifecycle across software, artificial intelligence, and electronic hardware.
            </p>
          </div>

          {/* The 6-Stage Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-[#16181d] border border-neutral-800 rounded-xl space-y-3 relative group hover:border-[#ff5500]/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-bold text-[#ff5500]">
                    0{step.step}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    Stage {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff5500] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-neutral-300">
                  {step.summary}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {step.details}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Ready to transform your idea into a delivered product?
              </h3>
              <p className="text-sm text-neutral-400 max-w-xl">
                Submit your project specifications or schedule a technical discovery session with our engineering team.
              </p>
            </div>
            <Link
              href="/contact?category=Complete%20Product%20Development"
              className="shrink-0 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider bg-[#ff5500] hover:bg-[#e04a00] text-white rounded-md transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </Section>

      {/* Achievements Section Embed */}
      <AchievementsSection />
    </div>
  );
}
