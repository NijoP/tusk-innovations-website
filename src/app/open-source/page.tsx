import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, GitBranch, Terminal, ShieldAlert, CheckCircle2, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

export const metadata: Metadata = {
  title: 'Open Source & Community Engineering | TUSK Innovations',
  description:
    'Contribute to Electronics Agent Kit (EAK), our open-prototype AI electronics workstation. Built with Rust, Tauri, React, and TypeScript under the MIT / Apache-2.0 dual license.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/open-source',
  },
};

const STACK = [
  { layer: 'Core Kernel', tech: 'Rust 2021', role: 'Deterministic fold loops, typed physical units, and compile-time clean architecture.' },
  { layer: 'Desktop Shell', tech: 'Tauri v2', role: 'Secure, lightweight local desktop runtime with low memory footprint and zero browser bloat.' },
  { layer: 'Client Editor', tech: 'React 19 & TypeScript', role: 'Interactive 2D schematic canvas, multi-layer PCB layout editor, and terminal shell.' },
  { layer: 'Verification', tech: 'Rust DRC/ERC Engines', role: 'Deterministic mathematical clearance checks and net connectivity algorithms.' },
];

export default function OpenSourcePage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen text-[#141413]">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] bg-white text-[#da552f] mb-6">
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Open Source Initiative</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] leading-[1.1] max-w-4xl">
          Built in the Open. Verifiable by Design.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] font-sans leading-relaxed max-w-3xl">
          We believe engineering tools must be transparent and verifiable. Electronics Agent Kit is an open-source prototype licensed under MIT / Apache-2.0.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/NijoP/electronics-agent-kit-new-prototype/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#141413] bg-white border border-[#e6e4dc] hover:bg-[#f5f4ee] rounded-full transition-all"
          >
            <span>Report an Issue</span>
          </a>
        </div>
      </section>

      {/* Technology Stack Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Engineering Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Modern Typed Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#e6e4dc] space-y-2">
              <span className="text-xs font-mono font-bold text-[#da552f]">{item.layer}</span>
              <h3 className="text-lg font-serif font-bold text-[#141413]">{item.tech}</h3>
              <p className="text-xs text-[#5a5a55] leading-relaxed">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Installation Instructions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Local Setup
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            Installation &amp; Developer Quickstart
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55]">
            Prerequisites: Rust (stable toolchain), Node.js (v20+), and pnpm / npm.
          </p>
        </div>

        <div className="bg-[#141413] text-[#f5f4ee] rounded-2xl p-6 sm:p-8 font-mono text-xs overflow-x-auto shadow-md space-y-4">
          <div className="text-[#888780] pb-3 border-b border-[#282725] flex justify-between">
            <span># Clone and run the EAK desktop shell</span>
            <span>bash / powershell</span>
          </div>
          <pre className="leading-relaxed">
{`# 1. Clone the official prototype repository
git clone https://github.com/NijoP/electronics-agent-kit-new-prototype.git
cd electronics-agent-kit-new-prototype

# 2. Install workspace dependencies
pnpm install

# 3. Build and launch the Tauri desktop application with live reload
pnpm tauri dev

# 4. Run Rust unit tests and compile-time invariant validation
cargo test --workspace`}
          </pre>
        </div>
      </section>

      {/* Contribution Guidelines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
            How to Contribute
          </h2>
        </div>

        <div className="space-y-4 text-sm text-[#5a5a55] leading-relaxed">
          <p>
            We welcome contributions to EAK across physical circuit solvers, auto-routing algorithms, KiCad format parsers, and schematic UI components.
          </p>
          <ul className="space-y-2 text-xs font-mono text-[#141413]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Fork the repo and create a feature branch (<code className="text-[#da552f]">feat/my-feature</code>).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ensure all Cargo and TypeScript unit tests pass (<code className="text-[#da552f]">cargo test</code>).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Submit a concise Pull Request with test coverage and reproduction steps.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413]">
          Join the Hardware Engineering Revolution.
        </h2>
        <p className="text-base sm:text-lg text-[#5a5a55] max-w-xl mx-auto">
          Star the project on GitHub, follow development milestones, or partner with TUSK on custom commercial deployments.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <a
            href="https://github.com/NijoP/electronics-agent-kit-new-prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Star on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
