'use client';

import { useLayout } from '@/lib/context';

export function ThemeToggle() {
  const { secondaryBgColor, hoverBgColor } = useLayout();

  // Dark mode only - ThemeToggle hidden/disabled
  return null;
}
