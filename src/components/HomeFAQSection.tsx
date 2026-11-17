'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What does TUSK Innovations do?',
    answer:
      'TUSK Innovations is an independent AI and engineering startup based in Kerala, India. We build intelligent software systems, engineer custom electronic hardware and multi-layer PCBs, and deliver end-to-end products from initial concept to verified physical delivery.',
  },
  {
    question: 'Does TUSK build custom AI solutions?',
    answer:
      'Yes. We engineer bespoke artificial intelligence systems including autonomous agents, business process automation pipelines, domain knowledge graphs (RAG), and intelligent enterprise dashboards tailored to your exact operational requirements.',
  },
  {
    question: 'Does TUSK offer PCB design?',
    answer:
      'Yes. Our hardware engineering services cover complete circuit schematics, high-speed multi-layer PCB layout (2 to 8+ layers), impedance control, design for manufacturing (DFM) verification, BOM preparation, and assembly coordination.',
  },
  {
    question: 'Can TUSK deliver a complete electronic product?',
    answer:
      'Yes. Through our flagship End-to-End Product Development offering, we take full responsibility for the entire product lifecycle: technical architecture, concurrent software and hardware engineering, prototype bring-up, lab testing, and manufacturing release.',
  },
  {
    question: 'What is Electronics Agent Kit?',
    answer:
      'Electronics Agent Kit (EAK) is our flagship open-prototype AI workstation. It unites intelligent software agents, interactive schematic editing, and deterministic multi-layer PCB layout into a single verifiable engineering environment.',
  },
  {
    question: 'How can a company start a project with TUSK?',
    answer:
      'You can reach out through our project enquiry form or email tuskinnovationsglobal@gmail.com. We schedule a technical discovery call under NDA, review your technical requirements and constraints, and deliver a detailed engineering milestone proposal.',
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e4dc] dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0a0c0f] transition-colors duration-200">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-medium text-[#da552f] dark:text-[#ff5500] uppercase tracking-wider">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#141413] dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a55] dark:text-neutral-400 font-sans">
            Direct, transparent answers regarding our engineering services, capabilities, and project delivery model.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#da552f]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#141413] dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f5f4ee] dark:bg-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#da552f] dark:bg-[#ff5500] text-white' : 'text-[#888780] dark:text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5a5a55] dark:text-neutral-300 leading-relaxed border-t border-[#f5f4ee] dark:border-neutral-800 animate-in fade-in-50 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
