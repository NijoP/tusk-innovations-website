import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { HeroEngineeringBackground } from '@/components/HeroEngineeringBackground';
import { HeroRecognitionMarquee } from '@/components/HeroRecognitionMarquee';
import { InteractiveCapabilities } from '@/components/InteractiveCapabilities';
import { InteractiveDevelopmentTimeline } from '@/components/InteractiveDevelopmentTimeline';
import { AchievementsMilestonesSection } from '@/components/AchievementsMilestonesSection';
import { CompanyRegistrationsSection } from '@/components/CompanyRegistrationsSection';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { GuidedProjectEnquiry } from '@/components/GuidedProjectEnquiry';

export const metadata: Metadata = {
  title: 'TUSK Innovations | Official Website — AI & Electronics Engineering',
  description:
    'TUSK Innovations Global Private Limited is an AI and electronics engineering startup based in Kerala, India, building intelligent software, AI solutions, PCB designs and complete technology products.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in',
  },
  openGraph: {
    title: 'TUSK Innovations | Official Website — AI & Electronics Engineering',
    description:
      'TUSK Innovations Global Private Limited is an AI and electronics engineering startup based in Kerala, India, building intelligent software, AI solutions, PCB designs and complete technology products.',
    url: 'https://www.tuskinnovations.in',
    siteName: 'TUSK Innovations',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] text-[#141413] dark:text-[#f5f5f7] min-h-screen transition-colors duration-200">
      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#e6e4dc] dark:border-neutral-800">
        <HeroEngineeringBackground />

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e6e4dc] dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#da552f] dark:bg-[#ff5500] animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-[#5a5a55] dark:text-neutral-400">
              TUSK Innovations Global Pvt. Ltd.
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.08] max-w-4xl mx-auto">
            Engineering What&apos;s Next.
          </h1>

          {/* Supporting Headline & Description */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-lg sm:text-2xl font-serif text-[#141413] dark:text-neutral-200 tracking-tight">
              Intelligent Software. Advanced Electronics. Complete Solutions.
            </p>
            <p className="text-base sm:text-lg text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed">
              TUSK Innovations is the public brand of TUSK Innovations Global Private Limited, an independent AI and electronics engineering company based in Thiruvananthapuram, Kerala, India. We architect intelligent software and engineer physical electronic hardware from concept to verified production.
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#da552f]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#what-we-build"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#141413] dark:text-white bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
            >
              <span>Explore What We Build</span>
            </Link>
          </div>

          {/* Animated Official Logo Marquee */}
          <div className="pt-10 border-t border-[#e6e4dc]/80 dark:border-neutral-800/80 max-w-4xl mx-auto">
            <HeroRecognitionMarquee />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE BUILD (INTERACTIVE CAPABILITY EXPLORATION)
          ========================================================================= */}
      <section id="what-we-build" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Interactive Capability Exploration
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            What We Build
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 font-sans">
            Explore our three core engineering pillars. Select a capability to inspect our technical scope and studio assets.
          </p>
        </div>

        <InteractiveCapabilities />
      </section>

      {/* =========================================================================
          SECTION 3 — SERVICES
          ========================================================================= */}
      <section id="services" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Client Engagements
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            Dedicated Services
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 font-sans">
            Specialized engineering partnerships from tactical components to complete commercial deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#da552f] dark:text-[#ff5500] font-semibold uppercase">Service 01</span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#141413] dark:text-white">AI Solutions for Businesses</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Custom AI applications, autonomous agents, and deterministic process automation engineered around your company&apos;s operational bottlenecks.
              </p>
            </div>
            <Link
              href="/services/ai-solutions"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors pt-2"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#da552f] dark:text-[#ff5500] font-semibold uppercase">Service 02</span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#141413] dark:text-white">Electronics &amp; PCB Engineering</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Complete circuit design, multi-layer high-speed PCB layouts, embedded firmware (ARM, STM32, ESP32), and manufacturing preparation.
              </p>
            </div>
            <Link
              href="/services/electronics-pcb"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors pt-2"
            >
              <span>Explore Electronics Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#da552f] dark:text-[#ff5500] font-semibold uppercase">Service 03</span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#141413] dark:text-white">Complete Product Development</h3>
              <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                Full-cycle technical ownership: requirements discovery, system architecture, hardware-software co-design, testing, and verified handover.
              </p>
            </div>
            <Link
              href="/services/product-development"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors pt-2"
            >
              <span>Explore Product Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — HOW WE WORK (INTERACTIVE DEVELOPMENT TIMELINE)
          ========================================================================= */}
      <section id="approach" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Interactive Development Timeline
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            How We Work
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 font-sans">
            A milestone-driven engineering sequence eliminating ambiguity. Select any stage to inspect deliverables and real lab evidence.
          </p>
        </div>

        <InteractiveDevelopmentTimeline />
      </section>

      {/* =========================================================================
          SECTION 7 — ACHIEVEMENTS & MILESTONES
          ========================================================================= */}
      <AchievementsMilestonesSection />

      {/* =========================================================================
          SECTION 8 — COMPANY REGISTRATIONS & RECOGNITIONS
          ========================================================================= */}
      <CompanyRegistrationsSection />

      {/* =========================================================================
          SECTION 9 — FAQ
          ========================================================================= */}
      <HomeFAQSection />

      {/* =========================================================================
          SECTION 10 — FINAL PROJECT CONSULTATION (GUIDED ENQUIRY)
          ========================================================================= */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 sm:space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
            What Are You Building Next?
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed">
            Let&apos;s turn your engineering challenge into a working solution. Use our guided enquiry to initiate a confidential consultation.
          </p>
        </div>

        <GuidedProjectEnquiry />
      </section>
    </div>
  );
}
