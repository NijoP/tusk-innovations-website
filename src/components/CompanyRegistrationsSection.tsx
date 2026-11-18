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
    <section id="registrations" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-[#0c0e12] transition-colors duration-200">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Statutory & Ecosystem Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            Company Registrations & Recognitions
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 leading-relaxed font-sans">
            Factual statutory incorporation and government innovation accreditations establishing the institutional legitimacy of TUSK Innovations.
          </p>
        </div>

        {/* 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_REGISTRATIONS.map((reg) => (
            <div
              key={reg.id}
              className="bg-[#faf9f5] dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 hover:border-[#d4d1c6] dark:hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-5 sm:space-y-6"
            >
              <div className="space-y-4">
                {/* Authority Header */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-3 border-b border-[#e6e4dc] dark:border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-[#e6e4dc] dark:border-neutral-700 shrink-0">
                      {getIcon(reg.logoType)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#141413] dark:text-white block">{reg.authority}</span>
                      <span className="text-[10px] font-mono text-[#888780] dark:text-neutral-400">{reg.fullName}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-neutral-800 text-[#5a5a55] dark:text-neutral-300 border border-[#e6e4dc] dark:border-neutral-700 uppercase font-semibold shrink-0">
                    {reg.badge}
                  </span>
                </div>

                {/* Visual / Statutory Identifier */}
                <div className="py-1">
                  {reg.logoType === 'dpiit' ? (
                    <div className="flex items-center gap-3 py-1 bg-white/80 dark:bg-white px-2 py-1 rounded-md">
                      <div className="relative h-6 w-24">
                        <Image
                          src="/brand/startup-india.png"
                          alt="Startup India Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="100px"
                        />
                      </div>
                      <div className="relative h-6 w-16 border-l border-neutral-300 pl-2">
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
                    <div className="relative h-7 w-32 py-1 bg-white/80 dark:bg-white px-2 rounded-md">
                      <Image
                        src="/brand/ksum-logo.svg"
                        alt="Kerala Startup Mission"
                        fill
                        className="object-contain object-left"
                        sizes="130px"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="relative h-7 w-36 py-1 bg-white dark:bg-white px-2 rounded-md">
                        <Image
                          src="/brand/mca-logo.svg"
                          alt="Ministry of Corporate Affairs Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="140px"
                        />
                      </div>
                      <div className="text-xs font-mono font-bold text-[#141413] dark:text-white bg-white dark:bg-neutral-800/80 border border-[#e6e4dc] dark:border-neutral-700 p-2.5 rounded-lg break-all">
                        <span className="text-[10px] text-[#888780] dark:text-neutral-400 block font-normal">CIN (Statutory Identity)</span>
                        U62011KL2026PTC106386
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#5a5a55] dark:text-neutral-300 leading-relaxed">
                  {reg.description}
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-4 border-t border-[#e6e4dc] dark:border-neutral-800 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-[#888780] dark:text-neutral-500">{reg.statutoryDetail}</span>
                <a
                  href={reg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#141413] dark:text-neutral-200 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors"
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
