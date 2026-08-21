'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { LanguageSelector } from './LanguageSelector';
import { ResourcesDropdown } from './ResourcesDropdown';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { language, bgColor, borderColor, secondaryBgColor, hoverBgColor } = useLayout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const t = translations[language];
  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className="sticky top-0 z-50 border-b transition-colors duration-300"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4 lg:gap-8 flex-1">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-allyvox.svg"
              alt="AllyVox Logo"
              width={160}
              height={72}
              priority
              className="w-auto h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            <a
              href="/solutions"
              className="text-base font-medium transition-all duration-200 hover:text-[var(--brand-accent)]"
              style={{ color: isActive('/solutions') ? 'var(--brand-accent)' : undefined }}
            >
              {t.nav.solutions}
            </a>
            <a
              href="/pricing"
              className="text-base font-medium transition-all duration-200 hover:text-[var(--brand-accent)]"
              style={{ color: isActive('/pricing') ? 'var(--brand-accent)' : undefined }}
            >
              {t.nav.pricing}
            </a>
            <a
              href="/contact"
              className="text-base font-medium transition-all duration-200 hover:text-[var(--brand-accent)]"
              style={{ color: isActive('/contact') ? 'var(--brand-accent)' : undefined }}
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
          <LanguageSelector />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 rounded-lg transition-all duration-200"
            style={{ backgroundColor: secondaryBgColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
          >
            <svg aria-hidden className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
