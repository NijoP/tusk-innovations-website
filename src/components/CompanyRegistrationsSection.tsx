import Image from 'next/image';
import { ArrowUpRight, Building2, ShieldCheck, FileCheck } from 'lucide-react';
import { COMPANY_REGISTRATIONS } from '@/lib/data';

export function CompanyRegistrationsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'mca':
        return <Building2 className="w-4 h-4 text-[#da552f]" />;
      case 'dpiit':
        return <ShieldCheck className="w-4 h-4 text-sky-700" />;
      default:
        return <FileCheck className="w-4 h-4 text-emerald-700" />;
    }
  };

  return (
    <section id="registrations" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e4dc] bg-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] uppercase tracking-wider">
            Statutory & Ecosystem Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Company Registrations & Recognitions
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed font-sans">
            Factual statutory incorporation and government innovation accreditations establishing the institutional legitimacy of TUSK Innovations.
          </p>
        </div>

        {/* 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_REGISTRATIONS.map((reg) => (
            <div
              key={reg.id}
              className="bg-[#faf9f5] border border-[#e6e4dc] hover:border-[#d4d1c6] rounded-2xl p-6 transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Authority Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#e6e4dc]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white border border-[#e6e4dc]">
                      {getIcon(reg.logoType)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#141413] block">{reg.authority}</span>
                      <span className="text-[10px] font-mono text-[#888780]">{reg.fullName}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#5a5a55] border border-[#e6e4dc] uppercase font-semibold">
                    {reg.badge}
                  </span>
                </div>

                {/* Visual / Statutory Identifier */}
                <div className="py-1">
                  {reg.logoType === 'dpiit' ? (
                    <div className="flex items-center gap-3 py-1">
                      <div className="relative h-7 w-24">
                        <Image
                          src="/brand/startup-india.png"
                          alt="Startup India Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="100px"
                        />
                      </div>
                      <div className="relative h-6 w-16 border-l border-[#e6e4dc] pl-2">
                        <Image
                          src="/brand/dpiit-footer.svg"
                          alt="DPIIT Government of India"
                          fill
                          className="object-contain object-left"
                          sizes="70px"
                        />
                      </div>
                    </div>
                  ) : reg.logoType === 'ksum' ? (
                    <div className="relative h-7 w-32 py-1">
                      <Image
                        src="/brand/ksum-logo.svg"
                        alt="Kerala Startup Mission"
                        fill
                        className="object-contain object-left"
                        sizes="130px"
                      />
                    </div>
                  ) : (
                    <div className="text-xs font-mono font-bold text-[#141413] bg-white border border-[#e6e4dc] p-2.5 rounded-lg">
                      <span className="text-[10px] text-[#888780] block font-normal">CIN (Statutory Identity)</span>
                      U62011KL2026PTC106386
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#5a5a55] leading-relaxed">
                  {reg.description}
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-4 border-t border-[#e6e4dc] flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-[#888780]">{reg.statutoryDetail}</span>
                <a
                  href={reg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#141413] hover:text-[#da552f] transition-colors"
                >
                  <span>Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
