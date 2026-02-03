'use client';

import { useLayout } from '@/lib/context';
import { BRAND_COLOR } from '@/lib/constants';
import { Star } from 'lucide-react';

export interface TestimonialSectionProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  rating?: number;
}

export function TestimonialSection({
  quote,
  authorName,
  authorTitle,
  rating = 5,
}: TestimonialSectionProps) {
  const { altBgColor, textColor, mutedText } = useLayout();

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: altBgColor }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={BRAND_COLOR}
              style={{ color: BRAND_COLOR }}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="text-xl sm:text-2xl font-medium leading-relaxed mb-8"
          style={{ color: textColor }}
        >
          {quote}
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            <span className="text-white font-semibold text-lg">
              {authorName.charAt(0)}
            </span>
          </div>
          <div className="text-left">
            <p
              className="font-semibold"
              style={{ color: textColor }}
            >
              {authorName}
            </p>
            <p
              className="text-sm"
              style={{ color: mutedText }}
            >
              {authorTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}