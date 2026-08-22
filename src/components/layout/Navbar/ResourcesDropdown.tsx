'use client';

import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import type { ResourcesDropdownProps } from '@/components/types';

export function ResourcesDropdown({ isOpen, onToggle, onClose }: ResourcesDropdownProps) {
  const { language, bgColor, borderColor, textColor, mutedText, secondaryBgColor, hoverBgColor } = useLayout();
  const t = translations[language];

  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="text-base font-medium flex items-center gap-2 transition-all duration-200 hover:text-[var(--brand-accent)] py-2"
      >
        {t.nav.resources}
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-[600px] rounded-lg shadow-xl transition-opacity duration-200 py-6 px-6 z-10"
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${borderColor}`,
          }}
          onMouseLeave={onClose}
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Industry Column */}
            <div>
              <h4 className="font-semibold text-sm mb-4" style={{ color: textColor }}>
                {t.industry}
              </h4>
              <div className="space-y-3">
                {[
                  { label: t.healthcare, desc: t.healthcareDesc },
                  { label: t.realestate, desc: t.realestateDesc },
                  { label: t.ecommerce, desc: t.ecommerceDesc },
                  { label: t.finance, desc: t.financeDesc },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
                    style={{
                      backgroundColor: secondaryBgColor,
                      color: textColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = hoverBgColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = secondaryBgColor;
                    }}
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs opacity-70">{item.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-sm mb-4" style={{ color: textColor }}>
                {t.features}
              </h4>
              <div className="space-y-3">
                {[
                  { label: t.useCases, desc: t.useCasesDesc },
                  { label: t.compliance, desc: t.complianceDesc },
                  { label: t.blog, desc: t.blogDesc },
                  { label: t.support, desc: t.supportDesc },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
                    style={{
                      backgroundColor: secondaryBgColor,
                      color: textColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = hoverBgColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = secondaryBgColor;
                    }}
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs opacity-70">{item.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t mt-6 pt-6" style={{ borderColor }}>
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  label: t.company,
                  items: [
                    { l: t.about, d: t.aboutDesc },
                    { l: t.developers, d: t.developersDesc },
                  ],
                },
                { label: t.integrations, items: [{ l: t.integrations, d: t.integrationsDesc }] },
                {
                  label: t.security,
                  items: [
                    { l: t.security, d: t.securityDesc },
                    { l: t.certifications, d: t.certificationsDesc },
                  ],
                },
              ].map((col, idx) => (
                <div key={idx}>
                  <h5 className="font-medium text-xs mb-3" style={{ color: mutedText }}>
                    {col.label}
                  </h5>
                  <div className="space-y-2">
                    {col.items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block text-xs transition-colors duration-200 hover:text-[var(--brand-accent)]"
                        style={{ color: textColor }}
                      >
                        {item.l}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
