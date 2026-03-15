'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border transition-colors duration-200 ${
            openIndex === index
              ? 'bg-[#1A2234] border-[#0066FF]'
              : 'bg-[#1A2234] border-[#2D3748] hover:border-[#3D4A5C]'
          }`}
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-[#F8FAFC] pr-4">{item.question}</span>
            <span className={`flex-shrink-0 text-[#0066FF] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4 text-[#94A3B8] leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
