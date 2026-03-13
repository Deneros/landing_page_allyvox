'use client';

import { BRAND_COLOR, BRAND_COLOR_ACCENT, BRAND_COLOR_HOVER } from '@/lib/constants';
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
        background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_ACCENT} 100%)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND_COLOR_HOVER} 0%, ${BRAND_COLOR} 100%)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_ACCENT} 100%)`;
      }}
    >
      {children}
    </button>
  );
}
