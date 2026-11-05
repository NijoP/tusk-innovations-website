import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';
import { Mail, Phone, ArrowUpRight, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Corporate Office',
  description:
    'Contact TUSK INNOVATIONS GLOBAL PRIVATE LIMITED for enterprise partnerships, research collaborations, or investor inquiries.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Direct Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            Contact TUSK INNOVATIONS
          </h1>
          <p className="text-lg text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            Reach out to our executive team regarding technical evaluation, commercial partnerships, research inquiries, or investor relations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section id="contact-info">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Official Registered Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#121316] mb-2">Corporate Headquarters</h2>
              <p className="text-sm text-[#585c65] leading-relaxed">
                TUSK INNOVATIONS GLOBAL PRIVATE LIMITED is an incorporated engineering technology company headquartered in Kerala, India.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-white border border-[#e6e5e0] rounded-lg space-y-2">
                <span className="text-[#8b909a] block">REGISTERED OFFICE:</span>
                <p className="text-[#121316] font-sans leading-relaxed text-sm">
                  {COMPANY_DETAILS.address}
                </p>
                <div className="pt-2">
                  <a
                    href={COMPANY_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#ff5500] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#e6e5e0] rounded-lg space-y-2">
                <span className="text-[#8b909a] block">COMMUNICATIONS:</span>
                <p className="flex items-center gap-2 text-sm font-sans text-[#121316]">
                  <Mail className="w-4 h-4 text-[#ff5500]" />
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:underline">
                    {COMPANY_DETAILS.email}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-sm font-sans text-[#121316]">
                  <Phone className="w-4 h-4 text-[#ff5500]" />
                  <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </p>
              </div>

              <div className="p-4 bg-white border border-[#e6e5e0] rounded-lg space-y-1">
                <span className="text-[#8b909a] block">STATUTORY IDENTIFIERS:</span>
                <p><span className="text-[#8b909a]">CIN:</span> <strong className="text-[#121316]">{COMPANY_DETAILS.cin}</strong></p>
                <p><span className="text-[#8b909a]">LEGAL:</span> {COMPANY_DETAILS.legalName}</p>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#e6e5e0] rounded-lg p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#121316] mb-1">Send an Inquiry</h2>
            <p className="text-xs text-[#585c65] mb-6">
              Inquiries are routed directly to our executive engineering office.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Jane Doe"
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hardware Systems Inc."
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@organization.com"
                  className="w-full px-3.5 py-2 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                  Subject / Area of Interest *
                </label>
                <select
                  className="w-full px-3.5 py-2 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50 text-[#121316]"
                >
                  <option>EAK Developer Preview & Early Access</option>
                  <option>Commercial & Technical Partnership</option>
                  <option>Incubator / Grant / Startup India Inquiries</option>
                  <option>Academic Research Collaboration</option>
                  <option>General Corporate Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, evaluation interest, or query..."
                  className="w-full px-3.5 py-2 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-semibold uppercase text-white bg-[#121316] hover:bg-neutral-800 rounded-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
