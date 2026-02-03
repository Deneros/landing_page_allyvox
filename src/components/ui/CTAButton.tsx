'use client';

import { BRAND_COLOR, BRAND_COLOR_HOVER } from '@/lib/constants';
import type { CTAButtonProps } from '../types';

export function CTAButton({
  children,
  onClick,
  className = '',
  type = 'button'
}: CTAButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 text-white rounded-lg text-base font-medium glow-hover
                  transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] ${className}`}
      style={{
        backgroundColor: BRAND_COLOR,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = BRAND_COLOR_HOVER;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = BRAND_COLOR;
      }}
    >
      {children}
    </button>
  );
}
