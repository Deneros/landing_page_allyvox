'use client';

import { useLayout } from '@/lib/context';
import type { IndustryCardProps } from '../types';

export function IndustryCard({ industry, index }: IndustryCardProps) {
  const { textColor, mutedText, secondaryBgColor, borderColor } = useLayout();

  const isEven = index % 2 === 0;

  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Icon/Title Section */}
      <div className={`${!isEven ? 'md:order-2' : ''}`}>
        <div
          className="w-20 h-20 mb-6 flex items-center justify-center text-4xl rounded-xl"
          style={{ backgroundColor: secondaryBgColor }}
        >
          {industry.icon}
        </div>
        <h3
          className="text-2xl sm:text-3xl font-semibold mb-4"
          style={{ color: textColor }}
        >
          {industry.title}
        </h3>
      </div>

      {/* Features Section */}
      <div className={`${!isEven ? 'md:order-1' : ''}`}>
        <h4
          className="text-xl sm:text-2xl font-medium mb-4"
          style={{ color: textColor }}
        >
          {industry.heading}
        </h4>
        <p
          className="text-base sm:text-lg mb-6"
          style={{ color: mutedText }}
        >
          {industry.description}
        </p>
        <div className="space-y-4">
          {industry.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border"
              style={{
                backgroundColor: secondaryBgColor,
                borderColor,
              }}
            >
              <h5 className="font-semibold mb-1" style={{ color: textColor }}>
                {feature.title}
              </h5>
              <p className="text-sm" style={{ color: mutedText }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
