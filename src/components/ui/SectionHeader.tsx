'use client';

import { useLayout } from '@/lib/context';
import type { SectionHeaderProps } from '../types';

export function SectionHeader({
  tagline,
  title,
  description,
  align = 'center'
}: SectionHeaderProps) {
  const { textColor, mutedText } = useLayout();

  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const containerClass = align === 'center' ? 'max-w-3xl mx-auto' : '';

  return (
    <div className={`${alignClass} ${containerClass} mb-12 sm:mb-16`}>
      {tagline && (
        <p
          className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider"
          style={{ color: mutedText }}
        >
          {tagline}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium mb-6 sm:mb-8 leading-tight tracking-tight"
        style={{ fontFamily: 'Raleway', color: textColor }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-base sm:text-lg md:text-xl"
          style={{ color: mutedText }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
