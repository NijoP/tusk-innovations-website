import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Rocket, Check } from 'lucide-react';
import { SERVICES_LIST, WORKFLOW_STEPS } from '@/lib/data';

interface ServicesSectionProps {
  showWorkflow?: boolean;
}

export function ServicesSection({ showWorkflow = true }: ServicesSectionProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-solutions':
        return <Brain className="w-6 h-6 text-[#ff5500]" />;
      case 'electronics-engineering':
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      default:
        return <Rocket className="w-6 h-6 text-[#ff5500]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl space-y-20">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Engineering &amp; Technology Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            From Concept to Creation. From Project to Delivery.
          </h2>
          <p className="text-base sm:text-lg text-[#585c65] leading-relaxed">
            We build intelligent software, AI-powered business solutions, electronics, and complete hardware products. From initial concept to engineering, development, testing, and final delivery.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-md transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className={`rounded-xl border p-8 flex flex-col justify-between transition-all duration-200 ${
                service.id === 'end-to-end'
                  ? 'bg-[#121417] text-white border-neutral-800 shadow-xl lg:-translate-y-2 relative ring-1 ring-[#ff5500]/50'
                  : 'bg-white text-[#121316] border-[#e6e5e0] hover:border-[#121316]/30 shadow-xs'
              }`}
            >
              {service.id === 'end-to-end' && (
                <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-[#ff5500] text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                  Flagship Offering
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${service.id === 'end-to-end' ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                    {getCategoryIcon(service.id)}
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-wider ${service.id === 'end-to-end' ? 'text-[#ff5500]' : 'text-[#8b909a]'}`}>
                    {service.id === 'end-to-end' ? 'Full Lifecycle' : 'Specialized Service'}
                  </span>
                </div>

                <div>
                  <h3 className={`text-2xl font-bold tracking-tight ${service.id === 'end-to-end' ? 'text-white' : 'text-[#121316]'}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-1 text-xs font-mono ${service.id === 'end-to-end' ? 'text-neutral-400' : 'text-[#ff5500]'}`}>
                    {service.subtitle}
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${service.id === 'end-to-end' ? 'text-neutral-300' : 'text-[#585c65]'}`}>
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-3 ${service.id === 'end-to-end' ? 'text-neutral-400' : 'text-[#8b909a]'}`}>
                    Key Engineering Capabilities
                  </span>
                  <ul className="space-y-2 text-xs">
                    {service.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${service.id === 'end-to-end' ? 'text-[#ff5500]' : 'text-emerald-600'}`} />
                        <span className={service.id === 'end-to-end' ? 'text-neutral-200' : 'text-[#585c65]'}>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <Link
                  href={`/contact?category=${encodeURIComponent(service.title)}`}
                  className={`inline-flex items-center justify-between w-full text-xs font-mono font-semibold uppercase tracking-wider py-2.5 px-3 rounded transition-colors ${
                    service.id === 'end-to-end'
                      ? 'bg-[#ff5500] text-white hover:bg-[#e04a00]'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-[#121316]'
                  }`}
                >
                  <span>Enquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION C: Detailed End-to-End Workflow */}
        {showWorkflow && (
          <div className="pt-12 border-t border-[#e6e5e0] space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-semibold text-[#ff5500] uppercase tracking-wider">
                End-to-End Product Development Workflow
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-[#121316]">
                From Concept to Creation. From Project to Delivery.
              </h3>
              <p className="text-sm sm:text-base text-[#585c65] leading-relaxed">
                Whether you come to us with an idea, an incomplete project, a technical challenge, or a complete product requirement — our 6-stage engineering process takes you from inception through verified delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKFLOW_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-[#e6e5e0] rounded-xl p-6 relative hover:border-[#ff5500]/50 transition-all duration-200 shadow-2xs group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-[#ff5500]">
                      0{step.step}
                    </span>
                    <span className="text-[11px] font-mono text-[#8b909a] uppercase">Stage {step.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#121316] group-hover:text-[#ff5500] transition-colors mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs font-medium text-[#121316] mb-3 leading-snug">
                    {step.summary}
                  </p>
                  <p className="text-xs text-[#585c65] leading-relaxed">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Workflow Bottom Callout */}
            <div className="p-8 bg-[#121417] text-white rounded-xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-xl font-bold">Have an Idea or Technical Challenge?</h4>
                <p className="text-sm text-neutral-400 max-w-xl">
                  Talk to our engineering leads. We take on complete projects, hardware prototypes, embedded controllers, and custom AI systems from concept to final delivery.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#121316] hover:bg-neutral-100 rounded-md transition-colors"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
