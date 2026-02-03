'use client';

import { useLayout } from '@/lib/context';
import { useHover } from '@/hooks';
import type { SecondaryButtonProps } from '../types';

export function SecondaryButton({
  children,
  onClick,
  className = ''
}: SecondaryButtonProps) {
  const { borderColor, secondaryBgColor, hoverBgColor, textColor } = useLayout();
  const { isHovered, onMouseEnter, onMouseLeave } = useHover(secondaryBgColor, hoverBgColor);

  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 border rounded-lg text-base font-medium glow-hover
                  transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] ${className}`}
      style={{
        borderColor,
        backgroundColor: isHovered.backgroundColor,
        color: textColor,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
