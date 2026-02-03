'use client';

import { useLayout } from '@/lib/context';

export function ThemeToggle() {
  const { theme, setTheme, secondaryBgColor, hoverBgColor } = useLayout();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg transition-all duration-200 hidden sm:flex"
      style={{ backgroundColor: secondaryBgColor }}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
