'use client';

import { useState } from 'react';
import { useLayout } from '@/lib/context';
import { BRAND_COLOR } from '@/lib/constants';
import type { FeatureCardProps } from '../types';

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
  hoverScale = true
}: FeatureCardProps) {
  const { bgColor, secondaryBgColor, borderColor, textColor, mutedText } = useLayout();
  const [hovered, setHovered] = useState(false);

  const cardBg = hovered ? secondaryBgColor : bgColor;
  const iconBg = BRAND_COLOR;

  return (
    <div
      className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-lg border transition-all duration-500 card-glow-hover
                  ${hoverScale ? 'hover:scale-[1.03]' : ''}`}
      style={{
        backgroundColor: cardBg,
        borderColor: hovered ? BRAND_COLOR : borderColor,
        color: textColor,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`${variant === 'numbered' ? 'w-14 h-14' : 'w-12 h-12'} mb-6 flex items-center justify-center rounded-full icon-container transition-all duration-500
                    ${variant === 'numbered' ? 'text-xl font-bold text-white' : 'text-lg font-bold'}
                    ${hovered ? 'glow-soft' : ''}`}
        style={{
          backgroundColor: iconBg,
          color: 'white',
        }}
      >
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: textColor }}>
        {title}
      </h3>
      <p className="text-sm sm:text-base" style={{ color: mutedText }}>
        {description}
      </p>
    </div>
  );
}
