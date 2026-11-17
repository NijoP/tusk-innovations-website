import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Zap, CheckCircle2, Workflow, Database, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Solutions for Businesses | TUSK Innovations',
  description:
    'Custom AI applications, autonomous agent systems, workflow automation, and enterprise AI tools built by TUSK Innovations. Problem-first engineering for real business outcomes.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/services/ai-solutions',
  },
};

const CAPABILITIES = [
  {
    icon: Bot,
    title: 'Custom AI Agents & Orchestration',
    description:
      'Multi-agent workflows that plan, reason, invoke external APIs, and execute complex domain-specific tasks without manual intervention.',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description:
      'End-to-end automation pipelines that replace manual data entry, document processing, reconciliation, and repetitive enterprise operations.',
  },
  {
    icon: Database,
    title: 'Domain Knowledge Graphs & RAG',
    description:
      'Deterministic retrieval-augmented generation and knowledge bases grounded exclusively in your proprietary internal documentation.',
  },
  {
    icon: Shield,
    title: 'Secure Enterprise LLM Integrations',
    description:
      'Isolated AI pipelines with strict data privacy, role-based access control, fail-closed safeguards, and on-premises or private cloud deployment options.',
  },
  {
    icon: Zap,
    title: 'Intelligent Dashboards & Operational Analytics',
    description:
      'Real-time operational visibility combining live business metrics with predictive insights, automated anomaly detection, and natural language query interfaces.',
  },
  {
    icon: Cpu,
    title: 'Bespoke Software Applications',
    description:
      'Production-grade full-stack web and desktop applications designed around your exact business requirements, built with modern typed stacks.',
  },
];

const CASE_PROBLEMS = [
  {
    problem: 'Manual Document & Report Extraction',
    solution:
      'Engineered an automated ingestion pipeline that parses heterogeneous invoices, technical specs, and audit reports into structured database records with 99.4% precision.',
    outcome: 'Eliminated 18 hours of manual data entry weekly and reduced processing latency from 48 hours to under 30 seconds.',
  },
  {
    problem: 'Fragmented Internal Operational Knowledge',
    solution:
      'Constructed a unified retrieval system across internal repositories, engineering tickets, and compliance documents with source-grounded verifiable answers.',
    outcome: 'Enabled instant cross-departmental answers without hallucinations, reducing support escalations by 65%.',
  },
  {
    problem: 'Repetitive Multi-Step Business Operations',
    solution:
      'Built a deterministic autonomous agent workflow coordinating CRM updates, inventory verification, customer notifications, and ERP status syncs.',
    outcome: 'Standardized operational throughput with zero missed steps and comprehensive audit logging.',
  },
];

export default function AISolutionsPage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen text-[#141413]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] bg-white text-[#5a5a55] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da552f]" />
          Solutions / AI & Intelligent Software
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] leading-[1.1] max-w-4xl">
          AI Solutions for Real Business Outcomes.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] font-sans leading-relaxed max-w-3xl">
          We architect, build, and deploy custom artificial intelligence systems that solve concrete operational bottlenecks, automate repetitive workflows, and empower businesses with intelligent decision-making.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <span>Discuss Your AI Requirements</span>
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

      {/* Focus: Problem First, Technology Second */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            We start with the problem, not the hype.
          </h2>
          <p className="text-base sm:text-lg text-[#5a5a55] max-w-3xl leading-relaxed">
            Most AI projects fail because organizations adopt models looking for problems to solve. We reverse this: we audit your existing business workflows, pinpoint high-friction bottlenecks, and engineer the simplest, most reliable solution—whether that requires a specialized LLM agent, a classical heuristics pipeline, or a unified data automation engine.
          </p>
        </div>

        {/* Representative Problem-Solution Matrix */}
        <div className="mt-12 space-y-6">
          {CASE_PROBLEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e6e4dc] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3"
            >
              <div className="flex items-center justify-between border-b border-[#f2f0e8] pb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#da552f]">
                  Operational Problem
                </span>
                <span className="text-xs font-mono text-[#888780]">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#141413]">{item.problem}</h3>
              <p className="text-sm text-[#5a5a55] leading-relaxed">
                <strong className="text-[#141413]">Engineering Solution: </strong>
                {item.solution}
              </p>
              <div className="pt-2 flex items-start gap-2 text-xs font-mono text-emerald-800 bg-emerald-50/60 p-3 rounded-lg border border-emerald-200/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Measurable Outcome: </strong>
                  {item.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core AI Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Core AI Engineering Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-[#e6e4dc] hover:border-[#d4d1c6] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f5f4ee] flex items-center justify-center text-[#da552f]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#141413]">{cap.title}</h3>
                <p className="text-sm text-[#5a5a55] leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
          Ready to Automate Your Business Operations?
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] max-w-xl mx-auto">
          Share your current workflow challenges. Our engineering team will assess feasibility and propose a deterministic technical path.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <span>Start a Project Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
