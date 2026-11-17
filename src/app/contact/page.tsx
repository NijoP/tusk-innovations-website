'use client';

import { useState } from 'react';
import { Section } from '@/components/Section';
import { COMPANY_DETAILS } from '@/lib/data';
import { Mail, Phone, ArrowUpRight, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = [
  'AI & Software Solutions',
  'AI Agents & Automation',
  'Electronics & PCB Design',
  'Embedded Systems',
  'Complete Product Development',
  'Other Engineering Requirements',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    category: CATEGORIES[0],
    description: '',
    requirements: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Enquiry - ${formData.category}] ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Project Category: ${formData.category}\n` +
      `Contact Name: ${formData.name}\n` +
      `Company / Organisation: ${formData.company}\n` +
      `Email: ${formData.email}\n\n` +
      `Project Description:\n${formData.description}\n\n` +
      `Key Technical Requirements & Constraints:\n${formData.requirements}\n`
    );

    // Open mail client
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Direct Business & Project Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            Start a Project with TUSK INNOVATIONS
          </h1>
          <p className="text-lg text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            Reach out to our engineering leads regarding custom AI systems, electronics & PCB engineering, embedded solutions, or complete product development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section id="contact-info">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Official Registered Details & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#121316] mb-2">Corporate Headquarters</h2>
              <p className="text-sm text-[#585c65] leading-relaxed">
                TUSK INNOVATIONS GLOBAL PRIVATE LIMITED is an incorporated deep-tech engineering company headquartered in Thiruvananthapuram, Kerala, India.
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

              <div className="p-4 bg-white border border-[#e6e5e0] rounded-lg space-y-3">
                <span className="text-[#8b909a] block">COMMUNICATIONS:</span>
                <div className="flex items-center justify-between text-sm font-sans text-[#121316]">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#ff5500]" />
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:underline">
                      {COMPANY_DETAILS.email}
                    </a>
                  </p>
                  <button
                    onClick={copyEmail}
                    className="text-xs font-mono text-[#8b909a] hover:text-[#121316] inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
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

              {/* Recognition Accreditation Badges */}
              <div className="p-4 bg-[#faf9f6] border border-[#e6e5e0] rounded-lg space-y-2">
                <span className="text-[#8b909a] block">ACCREDITATIONS & RECOGNITION:</span>
                <div className="space-y-1 text-[11px] font-sans text-[#585c65]">
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#ff5500]" />
                    Part of the NVIDIA Inception Program
                  </p>
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Selected under Kerala Startup Mission Idea Grant
                  </p>
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-sky-600" />
                    DPIIT-Recognised Startup (Startup India)
                  </p>
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Recognised by Kerala Startup Mission
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#e6e5e0] rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xl font-bold text-[#121316]">Project Enquiry Form</h2>
              <span className="text-[11px] font-mono text-[#ff5500] font-semibold uppercase">Executive Response</span>
            </div>
            <p className="text-xs text-[#585c65] mb-6">
              Tell us about your project requirements. Enquiries are routed directly to our engineering leads.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                    Company / Organisation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Tech Solutions"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                  Project Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50 text-[#121316]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                  Project Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline the core objective, problem to solve, or product vision..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#585c65] mb-1.5">
                  Technical Requirements & Constraints
                </label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Mention components, target platform, power constraints, timeline, or interfaces..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#d0ceca] focus:outline-none focus:ring-1 focus:ring-[#ff5500] focus:border-[#ff5500] bg-neutral-50/50"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-mono font-semibold uppercase text-white bg-[#121316] hover:bg-[#ff5500] rounded-md transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Project Enquiry</span>
                </button>
              </div>

              {submitted && (
                <div className="mt-4 p-4 rounded-md bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
                  <p className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Enquiry Form Prepared
                  </p>
                  <p>
                    Your mail client has been opened with your enquiry details. If it did not open automatically, you can send your inquiry directly to{' '}
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="font-bold underline">
                      {COMPANY_DETAILS.email}
                    </a>.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
