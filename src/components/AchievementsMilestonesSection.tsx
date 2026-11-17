import Image from 'next/image';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_MILESTONES } from '@/lib/data';

export function AchievementsMilestonesSection() {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e4dc] bg-[#faf9f5]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e6e4dc] text-[#da552f] text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Select Programs & Grants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Achievements & Milestones
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] leading-relaxed font-sans">
            Recognized by premier acceleration programs and state innovation initiatives to advance artificial intelligence and physical hardware engineering.
          </p>
        </div>

        {/* 2-Column Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS_MILESTONES.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-[#e6e4dc] hover:border-[#d4d1c6] rounded-2xl p-8 transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header row: Logo & Category Badge */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#f2f0e8]">
                  <div className="h-10 flex items-center">
                    {item.id === 'nvidia-inception' ? (
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-32">
                          <Image
                            src="/brand/nvidia-full.svg"
                            alt="NVIDIA Official Logo"
                            fill
                            className="object-contain object-left"
                            sizes="130px"
                          />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#888780]">/ INCEPTION</span>
                      </div>
                    ) : (
                      <div className="relative h-9 w-40">
                        <Image
                          src="/brand/ksum-logo.svg"
                          alt="Kerala Startup Mission Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="160px"
                        />
                      </div>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider rounded-md bg-[#faf9f5] border border-[#e6e4dc] text-[#5a5a55]">
                    <CheckCircle2 className="w-3 h-3 text-[#da552f]" />
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#141413] group-hover:text-[#da552f] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#888780]">
                    Organization: {item.organization}
                  </p>
                  <p className="pt-2 text-sm text-[#5a5a55] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer link */}
              <div className="pt-6 mt-6 border-t border-[#f2f0e8] flex items-center justify-between">
                <span className="text-xs font-mono text-[#888780]">{item.category}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#141413] group-hover:text-[#da552f] transition-colors"
                >
                  <span>Verify Program</span>
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
