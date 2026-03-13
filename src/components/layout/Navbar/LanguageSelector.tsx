'use client';

import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { BRAND_COLOR } from '@/lib/constants';

export function LanguageSelector() {
  const { language, setLanguage, borderColor, textColor, hoverBgColor } = useLayout();
  const t = translations[language];

  return (
    <div className="hidden sm:flex gap-2 lg:gap-3">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 lg:px-5 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
          language === 'es' ? 'bg-[#302289] text-white' : 'border'
        }`}
        style={
          language === 'es'
            ? { backgroundColor: BRAND_COLOR, color: 'white' }
            : { borderColor, color: textColor }
        }
        onMouseEnter={(e) => {
          if (language !== 'es') {
            e.currentTarget.style.backgroundColor = hoverBgColor;
          }
        }}
        onMouseLeave={(e) => {
          if (language !== 'es') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        {t.nav.spanish}
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 lg:px-5 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
          language === 'en' ? 'bg-[#302289] text-white' : 'border'
        }`}
        style={
          language === 'en'
            ? { backgroundColor: BRAND_COLOR, color: 'white' }
            : { borderColor, color: textColor }
        }
        onMouseEnter={(e) => {
          if (language !== 'en') {
            e.currentTarget.style.backgroundColor = hoverBgColor;
          }
        }}
        onMouseLeave={(e) => {
          if (language !== 'en') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        {t.nav.english}
      </button>
    </div>
  );
}
