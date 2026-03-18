'use client';

import { useLayout } from '@/lib/context';
import { BRAND_COLOR, BRAND_COLOR_ACCENT, BRAND_COLOR_HOVER } from '@/lib/constants';
import { Check } from 'lucide-react';

export interface PricingCardProps {
  planName: string;
  planDescription: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onButtonClick?: () => void;
}

export function PricingCard({
  planName,
  planDescription,
  price,
  period,
  description,
  features,
  buttonText,
  isHighlighted = false,
  isSelected = false,
  onSelect,
  onButtonClick,
}: PricingCardProps) {
  const { bgColor, textColor, mutedText, borderColor } = useLayout();

  return (
    <div
      onClick={onSelect}
      className={`flex flex-col p-8 rounded-xl border transition-all duration-300 card-glow-hover cursor-pointer ${isHighlighted ? 'glow-soft' : ''} ${isSelected ? 'scale-105' : 'hover:scale-[1.02]'}`}
      style={{
        backgroundColor: bgColor,
        borderColor: isSelected ? BRAND_COLOR_ACCENT : isHighlighted ? BRAND_COLOR : borderColor,
        borderWidth: isSelected || isHighlighted ? 2 : 1,
        boxShadow: isSelected ? `0 0 0 2px ${BRAND_COLOR_ACCENT}33, 0 8px 32px ${BRAND_COLOR_ACCENT}22` : undefined,
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <p
          className="text-sm font-medium mb-1"
          style={{ color: mutedText }}
        >
          {planName}
        </p>
        <p
          className="text-sm"
          style={{ color: `${textColor}66` }}
        >
          {planDescription}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-end gap-1 mb-6">
        <span
          className="text-5xl font-bold"
          style={{ color: textColor, fontFamily: 'Raleway' }}
        >
          {price}
        </span>
        {period && (
          <span
            className="text-sm mb-2"
            style={{ color: `${textColor}66` }}
          >
            {period}
          </span>
        )}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: mutedText }}
      >
        {description}
      </p>

      {/* Features */}
      <div className="flex-1 space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check
              size={18}
              style={{ color: BRAND_COLOR }}
              className="flex-shrink-0"
            />
            <span
              className="text-sm"
              style={{ color: mutedText }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold glow-hover transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
        style={{
          backgroundColor: isHighlighted ? BRAND_COLOR : 'transparent',
          color: isHighlighted ? 'white' : BRAND_COLOR,
          border: isHighlighted ? 'none' : `2px solid ${BRAND_COLOR}`,
          backdropFilter: isHighlighted ? 'none' : 'blur(12px)',
          WebkitBackdropFilter: isHighlighted ? 'none' : 'blur(12px)',
        }}
        onMouseEnter={(e) => {
          if (isHighlighted) {
            e.currentTarget.style.backgroundColor = BRAND_COLOR_HOVER;
          } else {
            e.currentTarget.style.backgroundColor = `${BRAND_COLOR}10`;
          }
        }}
        onMouseLeave={(e) => {
          if (isHighlighted) {
            e.currentTarget.style.backgroundColor = BRAND_COLOR;
          } else {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}