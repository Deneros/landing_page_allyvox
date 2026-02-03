'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { BRAND_COLOR } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { ResourcesDropdown } from './ResourcesDropdown';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { language, theme, bgColor, borderColor, secondaryBgColor, hoverBgColor } = useLayout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const t = translations[language];

  return (
    <nav
      className="sticky top-0 z-50 border-b transition-colors duration-300"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4 lg:gap-8 flex-1">
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold tracking-tight"
            style={{ fontFamily: 'Raleway' }}
          >
            <span style={{ color: BRAND_COLOR }}>Ally</span>
            <span>Vox</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            <a
              href="/solutions"
              className="text-base font-medium transition-all duration-200 hover:text-[#2b7a78]"
            >
              {t.nav.solutions}
            </a>
            <a
              href="/pricing"
              className="text-base font-medium transition-all duration-200 hover:text-[#2b7a78]"
            >
              {t.nav.pricing}
            </a>
            <a
              href="/contact"
              className="text-base font-medium transition-all duration-200 hover:text-[#2b7a78]"
            >
              {t.nav.contact}
            </a>

            <ResourcesDropdown
              isOpen={resourcesDropdownOpen}
              onToggle={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
              onClose={() => setResourcesDropdownOpen(false)}
            />
          </div>
        </div>

        {/* Theme Toggle, Language Selector, and Mobile Menu Button */}
        <div className="flex gap-3 items-center lg:gap-4">
          <ThemeToggle />
          <LanguageSelector />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-all duration-200"
            style={{ backgroundColor: secondaryBgColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          resourcesOpen={resourcesDropdownOpen}
          onToggleResources={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
        />
      )}
    </nav>
  );
}
