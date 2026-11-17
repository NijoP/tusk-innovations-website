import Image from 'next/image';
import { ArrowUpRight, Building2, ShieldCheck, FileCheck } from 'lucide-react';
import { COMPANY_REGISTRATIONS } from '@/lib/data';

export function CompanyRegistrationsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'mca':
        return <Building2 className="w-5 h-5 text-[#ff5500]" />;
      case 'dpiit':
        return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      default:
        return <FileCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="registrations" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Statutory & Ecosystem Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]">
            Company Registrations & Recognitions
          </h2>
          <p className="text-base sm:text-lg text-[#585c65] leading-relaxed">
            Factual statutory incorporation and government innovation accreditations establishing the institutional legitimacy of TUSK Innovations.
          </p>
        </div>

        {/* 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_REGISTRATIONS.map((reg) => (
            <div
              key={reg.id}
              className="bg-white border border-[#e6e5e0] hover:border-[#121316]/30 rounded-xl p-7 transition-all duration-200 hover:shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Authority Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#e6e5e0]">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-neutral-100">
                      {getIcon(reg.logoType)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#121316] block">{reg.authority}</span>
                      <span className="text-[10px] font-mono text-[#8b909a]">{reg.fullName}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-[#585c65] border border-neutral-200 uppercase font-semibold">
                    {reg.badge}
                  </span>
                </div>

                {/* Visual / Statutory Identifier */}
                <div className="py-2">
                  {reg.logoType === 'dpiit' ? (
                    <div className="flex items-center gap-3 py-1">
                      <div className="relative h-8 w-28">
                        <Image
                          src="/brand/startup-india.png"
                          alt="Startup India Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="120px"
                        />
                      </div>
                      <div className="relative h-7 w-20 border-l border-neutral-300 pl-2">
                        <Image
                          src="/brand/dpiit-header.png"
                          alt="DPIIT Government of India Emblem"
                          fill
                          className="object-contain object-left"
                          sizes="90px"
                        />
                      </div>
                    </div>
                  ) : reg.logoType === 'ksum' ? (
                    <div className="relative h-8 w-32 py-1">
                      <Image
                        src="/brand/ksum-logo.svg"
                        alt="Kerala Startup Mission Official Logo"
                        fill
                        className="object-contain object-left"
                        sizes="130px"
                      />
                    </div>
                  ) : (
                    <div className="p-2.5 bg-neutral-50 rounded border border-neutral-200/80 font-mono text-xs">
                      <span className="text-[#8b909a] block text-[10px] uppercase">Corporate Identifier</span>
                      <strong className="text-[#121316] text-xs font-semibold">{reg.statutoryDetail}</strong>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#585c65] leading-relaxed">
                  {reg.description}
                </p>
              </div>

              {/* Reference Link */}
              <div className="pt-3 border-t border-[#e6e5e0]/60">
                <a
                  href={reg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#121316] hover:text-[#ff5500] transition-colors"
                >
                  <span>Official Authority Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
