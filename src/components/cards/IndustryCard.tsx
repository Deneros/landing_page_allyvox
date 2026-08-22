'use client';

import Image from 'next/image';
import { useLayout } from '@/lib/context';
import type { IndustryCardProps } from '../types';

export function IndustryCard({ industry, index }: IndustryCardProps) {
  const { textColor, mutedText, secondaryBgColor, borderColor, hoverBgColor } = useLayout();

  const isEven = index % 2 === 0;

  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Image/Title Section */}
      <div className={`${!isEven ? 'md:order-2' : ''}`}>
        <div
          className="w-full rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 mb-6"
          style={{
            boxShadow: '0 10px 40px rgba(145, 56, 213, 0.2)',
            minHeight: '400px',
          }}
        >
          {industry.image ? (
            <Image
              src={industry.image}
              alt={industry.title}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-6xl"
              style={{ backgroundColor: secondaryBgColor }}
            >
              {industry.icon}
            </div>
          )}
        </div>
        <h3
          className="text-2xl sm:text-3xl font-semibold"
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
              className="p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:translate-x-2 hover:shadow-md"
              style={{
                backgroundColor: secondaryBgColor,
                borderColor,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverBgColor;
                e.currentTarget.style.borderColor = 'var(--brand-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = secondaryBgColor;
                e.currentTarget.style.borderColor = borderColor;
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
