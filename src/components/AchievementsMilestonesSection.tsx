import Image from 'next/image';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_MILESTONES } from '@/lib/data';

export function AchievementsMilestonesSection() {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>SELECT PROGRAMS & SELECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]">
            Achievements & Milestones
          </h2>
          <p className="text-base sm:text-lg text-[#585c65] leading-relaxed">
            Selected for premier global acceleration programs and state innovation grants to advance artificial intelligence and physical electronics engineering.
          </p>
        </div>

        {/* 2-Column Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ACHIEVEMENTS_MILESTONES.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#faf9f6] border border-[#e6e5e0] hover:border-[#121316]/30 rounded-xl p-8 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header row: Logo & Category Badge */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#e6e5e0]">
                  <div className="h-12 flex items-center">
                    {item.id === 'nvidia-inception' ? (
                      <div className="flex items-center gap-3">
                        <div className="relative h-9 w-36">
                          <Image
                            src="/brand/nvidia-full.svg"
                            alt="NVIDIA Official Logo"
                            fill
                            className="object-contain object-left"
                            sizes="150px"
                          />
                        </div>
                        <span className="text-xs font-mono font-bold text-neutral-400">/ INCEPTION</span>
                      </div>
                    ) : (
                      <div className="relative h-10 w-44">
                        <Image
                          src="/brand/ksum-logo.svg"
                          alt="Kerala Startup Mission Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="180px"
                        />
                      </div>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider rounded-md bg-white border border-[#e6e5e0] text-[#585c65]">
                    <CheckCircle2 className="w-3 h-3 text-[#ff5500]" />
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#121316] group-hover:text-[#ff5500] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-[#8b909a]">
                    {item.organization}
                  </p>
                  <p className="mt-4 text-sm text-[#585c65] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action / Reference Link */}
              <div className="mt-8 pt-4 border-t border-[#e6e5e0]/60">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#121316] hover:text-[#ff5500] transition-colors"
                >
                  <span>Official Reference</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
