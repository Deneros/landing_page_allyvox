'use client';

import { useLayout } from '@/lib/context';
import { useHover } from '@/components/hooks/useHover';
import type { CapabilityCardProps } from '../types';

export function CapabilityCard({ icon, title, description }: CapabilityCardProps) {
  const { bgColor, secondaryBgColor, borderColor, textColor, mutedText } = useLayout();
  const { isHovered, onMouseEnter, onMouseLeave } = useHover(bgColor, secondaryBgColor);

  return (
    <div
      className="p-6 sm:p-8 rounded-lg border transition-all duration-500 card-glow-hover hover:scale-[1.03]"
      style={{
        backgroundColor: isHovered.backgroundColor,
        borderColor,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="text-4xl mb-4 transition-transform duration-500 hover:scale-105">{icon}</div>
      <h3
        className="text-xl sm:text-2xl font-semibold mb-3"
        style={{ color: textColor }}
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base" style={{ color: mutedText }}>
        {description}
      </p>
    </div>
  );
}
