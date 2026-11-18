import Image from 'next/image';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_MILESTONES } from '@/lib/data';

export function AchievementsMilestonesSection() {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e4dc] dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0a0c0f] transition-colors duration-200">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#da552f] dark:text-[#ff5500] text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Select Programs & Grants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            Achievements & Milestones
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 leading-relaxed font-sans">
            Recognized by premier acceleration programs and state innovation initiatives to advance artificial intelligence and physical hardware engineering.
          </p>
        </div>

        {/* 2-Column Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ACHIEVEMENTS_MILESTONES.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 hover:border-[#d4d1c6] dark:hover:border-neutral-700 rounded-2xl p-5 sm:p-8 transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Header row: Logo & Category Badge */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-4 border-b border-[#f2f0e8] dark:border-neutral-800">
                  <div className="h-10 flex items-center bg-white/90 dark:bg-white px-2 py-1 rounded-md">
                    {item.id === 'nvidia-inception' ? (
                      <div className="flex items-center gap-2">
                        <div className="relative h-7 w-28">
                          <Image
                            src="/brand/nvidia-full.svg"
                            alt="NVIDIA Official Logo"
                            fill
                            className="object-contain object-left"
                            sizes="120px"
                          />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-neutral-600">/ INCEPTION</span>
                      </div>
                    ) : (
                      <div className="relative h-7 w-36">
                        <Image
                          src="/brand/ksum-logo.svg"
                          alt="Kerala Startup Mission Official Logo"
                          fill
                          className="object-contain object-left"
                          sizes="150px"
                        />
                      </div>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider rounded-md bg-[#faf9f5] dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 text-[#5a5a55] dark:text-neutral-300">
                    <CheckCircle2 className="w-3 h-3 text-[#da552f] dark:text-[#ff5500]" />
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#141413] dark:text-white group-hover:text-[#da552f] dark:group-hover:text-[#ff5500] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#888780] dark:text-neutral-500">
                    Organization: {item.organization}
                  </p>
                  <p className="pt-2 text-xs sm:text-sm text-[#5a5a55] dark:text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer link */}
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#f2f0e8] dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-[#888780] dark:text-neutral-500">{item.category}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#141413] dark:text-neutral-200 group-hover:text-[#da552f] dark:group-hover:text-[#ff5500] transition-colors py-1"
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
