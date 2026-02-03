'use client';

import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { CTAButton } from '@/components/ui/CTAButton';

export function NewsletterSection() {
  const { language, textColor, mutedText, borderColor, bgColor } = useLayout();
  const t = translations[language];

  return (
    <div className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b" style={{ borderColor }}>
      <div className="max-w-2xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4" style={{ color: textColor }}>
          {t.nav.resources}
        </h3>
        <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: mutedText }}>
          {t.footer.newsletter}
        </p>
        <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="email"
            placeholder={t.footer.emailPlaceholder}
            className="flex-1 px-4 py-3 rounded-lg text-base transition-colors duration-200 border"
            style={{
              backgroundColor: bgColor,
              borderColor,
              color: textColor,
            }}
          />
          <CTAButton type="submit" className="sm:w-auto whitespace-nowrap">
            {t.footer.subscribe}
          </CTAButton>
        </form>
      </div>
    </div>
  );
}
