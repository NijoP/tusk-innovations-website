import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy and Data Protection standards of TUSK INNOVATIONS GLOBAL PRIVATE LIMITED.',
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Governance & Privacy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-[#8b909a]">
            Effective Date: November 2026 • Version 1.0
          </p>
        </div>
      </section>

      <Section id="privacy-content">
        <div className="mx-auto max-w-3xl prose prose-neutral text-base leading-relaxed text-[#585c65] space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#121316] mb-3">1. Corporate Identity</h2>
            <p>
              This Privacy Policy applies to the official digital web portal operated by <strong>TUSK INNOVATIONS GLOBAL PRIVATE LIMITED</strong> (CIN: {COMPANY_DETAILS.cin}), with registered office at {COMPANY_DETAILS.address}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121316] mb-3">2. Information Collection</h2>
            <p>
              We collect information strictly necessary to provide official company communications and evaluate collaborative partnerships:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Direct inquiries submitted through our official contact channels (e.g. name, organizational email, company affiliation).</li>
              <li>Standard technical server logs (IP address, browser type, referring pages) generated automatically for system security and audit purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121316] mb-3">3. Local-First Engineering Runtimes</h2>
            <p>
              Our open-source platform, Electronics Agent Kit (EAK), is architected as a local-first engineering runtime. When executing EAK prototypes locally on developer hardware, design data, event logs, and schematics remain on the engineer’s local storage and are not transmitted to corporate servers unless explicitly configured by the user.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121316] mb-3">4. Information Sharing & Security</h2>
            <p>
              We do not sell, rent, or lease corporate visitor data to third-party commercial marketing platforms. We enforce appropriate administrative, technical, and physical security measures to safeguard communication records against unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121316] mb-3">5. Official Contact</h2>
            <p>
              For privacy-related inquiries, data access requests, or official regulatory queries, contact our legal and compliance office at <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#ff5500] underline">{COMPANY_DETAILS.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
