'use client';

import { usePathname } from 'next/navigation';
import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import type { MobileMenuProps } from '@/components/types';

export function MobileMenu({ resourcesOpen, onToggleResources }: MobileMenuProps) {
  const { language, bgColor, borderColor, textColor, secondaryBgColor, hoverBgColor } = useLayout();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const t = translations[language];

  return (
    <div
      id="mobile-menu"
      className="lg:hidden border-t transition-colors duration-300"
      style={{
        backgroundColor: bgColor,
        borderColor,
      }}
    >
      <div className="px-4 sm:px-6 py-4 space-y-3">
        <a
          href="/solutions"
          className="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
          style={{ backgroundColor: secondaryBgColor, color: isActive('/solutions') ? 'var(--brand-accent)' : textColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
        >
          {t.nav.solutions}
        </a>
        <a
          href="/pricing"
          className="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
          style={{ backgroundColor: secondaryBgColor, color: isActive('/pricing') ? 'var(--brand-accent)' : textColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
        >
          {t.nav.pricing}
        </a>
        <a
          href="/contact"
          className="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
          style={{ backgroundColor: secondaryBgColor, color: isActive('/contact') ? 'var(--brand-accent)' : textColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
        >
          {t.nav.contact}
        </a>
        <button
          onClick={onToggleResources}
          className="w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-between"
          style={{ backgroundColor: secondaryBgColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
        >
          {t.nav.resources}
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {/* Mobile Resources Dropdown */}
        {resourcesOpen && (
          <div className="pl-3 space-y-2">
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
              style={{ backgroundColor: secondaryBgColor, color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
            >
              {t.healthcare}
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
              style={{ backgroundColor: secondaryBgColor, color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
            >
              {t.realestate}
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
              style={{ backgroundColor: secondaryBgColor, color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
            >
              {t.blog}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
