'use client';

import Link from 'next/link';
import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { BRAND_COLOR } from '@/lib/constants';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { SocialLinks } from '@/components/sections/SocialLinks';

export function Footer() {
  const { language, altBgColor, borderColor, textColor, mutedText } = useLayout();
  const t = translations[language];

  return (
    <footer
      className="w-full border-t transition-colors duration-300"
      style={{
        backgroundColor: altBgColor,
        borderColor,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Logo Section */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight inline-block"
            style={{ fontFamily: 'Raleway' }}
          >
            <span style={{ color: BRAND_COLOR }}>Ally</span>
            <span>Vox</span>
          </Link>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base" style={{ color: textColor }}>
              {t.footer.product}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: t.nav.solutions, href: '/solutions' },
                { label: t.nav.pricing, href: '#' },
                { label: t.footer.integrations, href: '#' },
                { label: t.footer.apiRef, href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base transition-colors duration-200 hover:text-[#2b7a78]"
                    style={{ color: mutedText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base" style={{ color: textColor }}>
              {t.footer.documentation}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: t.footer.apiRef, href: '#' },
                { label: t.footer.integrations, href: '#' },
                { label: t.nav.contact, href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base transition-colors duration-200 hover:text-[#2b7a78]"
                    style={{ color: mutedText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base" style={{ color: textColor }}>
              {language === 'en' ? 'Legal' : 'Legal'}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: t.footer.privacyPolicy, href: '#' },
                { label: t.footer.termsService, href: '#' },
                { label: t.footer.cookieSettings, href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base transition-colors duration-200 hover:text-[#2b7a78]"
                    style={{ color: mutedText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div
          className="pt-8 sm:pt-10 border-t text-center text-sm"
          style={{ borderColor, color: mutedText }}
        >
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
