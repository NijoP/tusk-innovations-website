import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering & AI Services | TUSK Innovations',
  description:
    'Comprehensive engineering solutions: Custom AI systems for businesses, high-density multi-layer PCB design, embedded systems, and end-to-end product development.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/services',
  },
};

const SERVICES = [
  {
    id: 'ai-solutions',
    icon: Bot,
    title: 'AI Solutions for Businesses',
    tagline: 'Intelligent Software, Autonomous Agents & Process Automation',
    description:
      'We architect, build, and deploy custom artificial intelligence systems that solve concrete operational bottlenecks, automate repetitive workflows, and empower businesses with intelligent decision-making.',
    href: '/services/ai-solutions',
    highlights: [
      'Custom AI applications & LLM adapters',
      'Autonomous multi-agent orchestration',
      'Enterprise workflow & RPA automation',
      'Domain knowledge retrieval (RAG)',
      'Intelligent operational dashboards',
    ],
  },
  {
    id: 'electronics-pcb',
    icon: Cpu,
    title: 'Electronics & PCB Engineering',
    tagline: 'Circuit Schematics, Multi-Layer Boards & Embedded Firmware',
    description:
      'High-reliability electronics engineering from circuit schematics to high-density multi-layer PCB designs, embedded microcontroller firmware, electrical validation, and manufacturing coordination.',
    href: '/services/electronics-pcb',
    highlights: [
      'Circuit design & schematic engineering',
      'Multi-layer high-density PCB layouts',
      'ARM Cortex, STM32 & ESP32 firmware',
      'Design for Manufacturing (DFM) verification',
      'BOM preparation & component sourcing assistance',
    ],
  },
  {
    id: 'product-development',
    icon: Rocket,
    title: 'End-to-End Product Development',
    tagline: 'From Initial Idea to Final Delivery',
    description:
      'Our signature full-cycle engineering offering. We take complete ownership of your product journey—unifying AI software, physical circuit design, embedded controllers, prototyping, and manufacturing handoff.',
    href: '/services/product-development',
    highlights: [
      'Concept feasibility & system architecture',
      'Unified software, AI, and hardware co-design',
      'Rapid prototype bring-up & lab testing',
      'Production fabrication package delivery',
      'Post-delivery iteration & technical support',
    ],
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#5a5a55] dark:text-neutral-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da552f] dark:bg-[#ff5500]" />
          Engineering Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.1] max-w-4xl">
          Engineered for Rigorous Technical Demands.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed max-w-3xl">
          TUSK Innovations provides focused engineering capabilities across modern artificial intelligence, high-reliability electronics, and complete product development.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        {SERVICES.map((srv, index) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 hover:border-[#d4d1c6] dark:hover:border-neutral-700 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#f2f0e8] dark:border-neutral-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f4ee] dark:bg-neutral-800 flex items-center justify-center text-[#da552f] dark:text-[#ff5500]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#888780] dark:text-neutral-500">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#141413] dark:text-white">
                      {srv.title}
                    </h2>
                  </div>
                </div>
                <Link
                  href={srv.href}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#141413] dark:text-white bg-[#f5f4ee] dark:bg-neutral-800 hover:bg-[#eae8de] dark:hover:bg-neutral-700 rounded-full transition-all self-start sm:self-center"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-base text-[#5a5a55] dark:text-neutral-300 leading-relaxed max-w-3xl">
                {srv.description}
              </p>

              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#da552f] dark:text-[#ff5500]">
                  Key Deliverables & Scope
                </span>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5a5a55] dark:text-neutral-300">
                  {srv.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      {/* Conversion Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6 border-t border-[#e6e4dc] dark:border-neutral-800">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
          Have a Project in Mind?
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] dark:text-neutral-400 max-w-xl mx-auto">
          Talk to our engineering leads. We provide honest technical assessments, clear milestone budgets, and structured delivery paths.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <span>Start a Project Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
