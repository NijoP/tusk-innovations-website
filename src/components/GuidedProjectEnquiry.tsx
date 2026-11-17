'use client';

import { useState } from 'react';
import { COMPANY_DETAILS } from '@/lib/data';
import { ArrowRight, ArrowLeft, CheckCircle2, Send, Bot, Cpu, Rocket, ShieldCheck } from 'lucide-react';

const PROJECT_TYPES = [
  {
    id: 'ai-software',
    title: 'AI Solutions & Software Automation',
    desc: 'Autonomous agent pipelines, LLM integration, business process automation, and intelligent dashboards.',
    icon: Bot,
  },
  {
    id: 'electronics-pcb',
    title: 'Electronics & PCB Engineering',
    desc: 'Circuit schematics, high-density multi-layer PCB design (2-8+ layers), embedded firmware, and DFM audits.',
    icon: Cpu,
  },
  {
    id: 'product-development',
    title: 'Complete Product Development',
    desc: 'End-to-end engineering from concept architecture to prototype bring-up and manufacturing delivery.',
    icon: Rocket,
  },
];

const PROJECT_STAGES = [
  { id: 'concept', label: 'Concept & Feasibility', desc: 'Napkin sketch, early brief, or technical problem statement.' },
  { id: 'architecture', label: 'Architecture & Schematics', desc: 'Preliminary schematics or system specification in progress.' },
  { id: 'prototype', label: 'Prototype Redesign & Bring-Up', desc: 'Working prototype needs high-density redesign or firmware.' },
  { id: 'manufacturing', label: 'Production & DFM Release', desc: 'Ready for Gerber generation, DFM review, and fabrication.' },
];

export function GuidedProjectEnquiry() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0].id);
  const [selectedStage, setSelectedStage] = useState(PROJECT_STAGES[0].id);
  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('1 to 3 months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeObj = PROJECT_TYPES.find((t) => t.id === selectedType);
    const stageObj = PROJECT_STAGES.find((s) => s.id === selectedStage);

    const subject = encodeURIComponent(`[Project Consultation] ${typeObj?.title} - ${company || name}`);
    const body = encodeURIComponent(
      `--- GUIDED PROJECT ENQUIRY ---\n\n` +
      `Project Category: ${typeObj?.title}\n` +
      `Current Development Stage: ${stageObj?.label}\n` +
      `Target Timeline: ${timeline}\n\n` +
      `Client Information:\n` +
      `Name: ${name}\n` +
      `Company / Organization: ${company || 'Not specified'}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not specified'}\n\n` +
      `Technical Requirements & Scope:\n${description}\n`
    );

    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#e6e4dc] p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-3xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#f2f0e8] mb-8 text-xs font-mono">
        <span className="text-[#da552f] font-bold uppercase tracking-wider">
          Guided Project Discovery
        </span>
        <div className="flex items-center gap-1.5 text-[#888780]">
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step === s
                  ? 'bg-[#141413] text-white'
                  : step > s
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-[#f5f4ee] text-[#888780]'
              }`}
            >
              {s}
            </span>
          ))}
          <span className="ml-1">Step {step} of 3</span>
        </div>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-2xl font-serif font-bold text-emerald-950">
            Enquiry Prepared for Transmission
          </h3>
          <p className="text-sm text-emerald-800 max-w-md mx-auto">
            Your email application has opened with your project brief addressed to {COMPANY_DETAILS.email}. Our engineering leads review all submissions within 24 hours under NDA.
          </p>
        </div>
      ) : (
        <div>
          {/* STEP 1: What do you want to build? */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#141413]">
                  1. What would you like to build?
                </h3>
                <p className="text-xs text-[#5a5a55] mt-1">
                  Select the engineering domain that best matches your project requirements.
                </p>
              </div>

              <div className="space-y-3">
                {PROJECT_TYPES.map((t) => {
                  const isSelected = selectedType === t.id;
                  const TypeIcon = t.icon;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedType(t.id)}
                      className={`w-full p-4 sm:p-5 rounded-2xl text-left border flex items-start gap-4 transition-all duration-200 ${
                        isSelected
                          ? 'border-[#da552f] bg-[#faf9f5] ring-1 ring-[#da552f]/30 shadow-xs'
                          : 'border-[#e6e4dc] bg-white hover:bg-[#faf9f5]'
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl shrink-0 ${
                          isSelected ? 'bg-[#da552f] text-white' : 'bg-[#f5f4ee] text-[#888780]'
                        }`}
                      >
                        <TypeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-serif font-bold text-[#141413]">{t.title}</h4>
                        <p className="text-xs text-[#5a5a55] mt-1 leading-relaxed">{t.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
                >
                  <span>Continue to Project Stage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: What stage is the project in? */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#141413]">
                  2. What stage is the project in?
                </h3>
                <p className="text-xs text-[#5a5a55] mt-1">
                  Help us understand how far along your technical architecture is.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_STAGES.map((s) => {
                  const isSelected = selectedStage === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedStage(s.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'border-[#da552f] bg-[#faf9f5] ring-1 ring-[#da552f]/30'
                          : 'border-[#e6e4dc] bg-white hover:bg-[#faf9f5]'
                      }`}
                    >
                      <h4 className="text-sm font-serif font-bold text-[#141413]">{s.label}</h4>
                      <p className="text-xs text-[#5a5a55] mt-1">{s.desc}</p>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5a5a55]">
                  Target Delivery Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] bg-[#faf9f5] text-xs text-[#141413] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                >
                  <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
                  <option value="1 to 3 months">1 to 3 months (Standard prototyping)</option>
                  <option value="3 to 6 months">3 to 6 months (Full product cycle)</option>
                  <option value="Flexible / Exploration">Flexible / Exploratory</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5a55] hover:text-[#141413]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
                >
                  <span>Continue to Contact Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Project Description */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in-50 duration-200">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#141413]">
                  3. Contact Information &amp; Technical Scope
                </h3>
                <p className="text-xs text-[#5a5a55] mt-1">
                  We schedule an initial discovery call under mutual confidentiality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-semibold uppercase text-[#5a5a55]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] bg-[#faf9f5] text-xs text-[#141413] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-semibold uppercase text-[#5a5a55]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] bg-[#faf9f5] text-xs text-[#141413] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-semibold uppercase text-[#5a5a55]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Innovations"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] bg-[#faf9f5] text-xs text-[#141413] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-semibold uppercase text-[#5a5a55]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] bg-[#faf9f5] text-xs text-[#141413] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono font-semibold uppercase text-[#5a5a55]">
                  Technical Requirements &amp; Constraints *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline key operational constraints, target MCU architectures, mechanical bounds, or required AI integration..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] bg-[#faf9f5] text-xs text-[#141413] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#da552f]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5a55] hover:text-[#141413]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold text-[#faf9f5] bg-[#141413] hover:bg-[#282725] rounded-full transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Consultation</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
