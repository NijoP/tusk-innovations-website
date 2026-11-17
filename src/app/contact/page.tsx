'use client';

import { useState } from 'react';
import { COMPANY_DETAILS } from '@/lib/data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'AI Solutions & Software Automation',
  'Autonomous AI Agents & RAG',
  'Electronics & Multi-Layer PCB Design',
  'Embedded Systems & Firmware',
  'End-to-End Product Development',
  'Technical Consultation & Feasibility',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: CATEGORIES[0],
    description: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Enquiry - ${formData.category}] ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Project Category: ${formData.category}\n` +
      `Contact Name: ${formData.name}\n` +
      `Company / Organisation: ${formData.company || 'Not specified'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not specified'}\n\n` +
      `Project Overview & Technical Requirements:\n${formData.description}\n`
    );

    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#da552f] dark:text-[#ff5500] mb-6">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Engineering Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.1] max-w-4xl">
          Start a Project with TUSK.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed max-w-3xl">
          Whether you need a custom AI agent pipeline, a high-density 4-layer PCB design, or a complete product engineered from concept to factory release—we are ready to discuss your requirements under NDA.
        </p>
      </section>

      {/* Main Grid: Form & Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121418] p-8 sm:p-10 rounded-3xl border border-[#e6e4dc] dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#141413] dark:text-white">
              Project Details
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-lg font-serif font-bold text-emerald-900 dark:text-emerald-200">
                  Enquiry Prepared
                </h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  Your mail client has been opened with your project details addressed to {COMPANY_DETAILS.email}. If it did not open automatically, you can email us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] dark:border-neutral-700 bg-[#faf9f5] dark:bg-neutral-900 text-sm text-[#141413] dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] dark:border-neutral-700 bg-[#faf9f5] dark:bg-neutral-900 text-sm text-[#141413] dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] dark:border-neutral-700 bg-[#faf9f5] dark:bg-neutral-900 text-sm text-[#141413] dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] dark:border-neutral-700 bg-[#faf9f5] dark:bg-neutral-900 text-sm text-[#141413] dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">
                    Project Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] dark:border-neutral-700 bg-[#faf9f5] dark:bg-neutral-900 text-sm text-[#141413] dark:text-white focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c} className="bg-white dark:bg-neutral-900 text-black dark:text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-[#5a5a55] dark:text-neutral-400 uppercase tracking-wider">
                    Project Description &amp; Technical Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Briefly describe what you want to build, target timelines, and any known hardware or software specifications..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] dark:border-neutral-700 bg-[#faf9f5] dark:bg-neutral-900 text-sm text-[#141413] dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#141413] dark:text-white">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#888780] dark:text-neutral-400 uppercase tracking-wider">Corporate Email</span>
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-sm font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1.5 text-[#888780] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white rounded transition-colors"
                      title="Copy email"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1 border-t border-[#f2f0e8] dark:border-neutral-800 pt-4">
                  <span className="text-[11px] font-mono text-[#888780] dark:text-neutral-400 uppercase tracking-wider">Direct Phone</span>
                  <p>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors font-mono"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </p>
                </div>

                <div className="space-y-1 border-t border-[#f2f0e8] dark:border-neutral-800 pt-4">
                  <span className="text-[11px] font-mono text-[#888780] dark:text-neutral-400 uppercase tracking-wider">Registered Corporate Office</span>
                  <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed">
                    {COMPANY_DETAILS.address}
                  </p>
                </div>

                <div className="space-y-1 border-t border-[#f2f0e8] dark:border-neutral-800 pt-4 text-xs font-mono text-[#888780] dark:text-neutral-400">
                  <p><strong className="text-[#141413] dark:text-white">CIN:</strong> {COMPANY_DETAILS.cin}</p>
                  <p><strong className="text-[#141413] dark:text-white">LEGAL:</strong> {COMPANY_DETAILS.legalName}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f5f4ee] dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 space-y-2 text-xs text-[#5a5a55] dark:text-neutral-400">
              <div className="flex items-center gap-2 font-mono font-bold text-[#141413] dark:text-white uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>NDA &amp; Confidentiality</span>
              </div>
              <p className="leading-relaxed">
                All client discussions, technical specifications, and proprietary intellectual property are held under strict mutual confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
