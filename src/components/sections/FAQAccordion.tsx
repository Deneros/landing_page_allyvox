'use client';

import { useState } from 'react';
import { useLayout } from '@/lib/context';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const { textColor, mutedText } = useLayout();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const itemBg = 'var(--surface-2)';

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl overflow-hidden transition-colors duration-200"
            style={{ backgroundColor: itemBg }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span
                className="text-base font-semibold"
                style={{ color: textColor }}
              >
                {item.question}
              </span>
              {isOpen ? (
                <ChevronDown size={16} style={{ color: textColor }} />
              ) : (
                <ChevronRight size={16} style={{ color: textColor }} />
              )}
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: mutedText }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
