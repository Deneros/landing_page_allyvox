'use client';

import { useState } from 'react';
import { BRAND_COLOR, BRAND_COLOR_HOVER } from '@/lib/constants';

interface ContactFormProps {
  labels: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
  };
}

export function ContactForm({ labels }: ContactFormProps) {
  const [isHovered, setIsHovered] = useState(false);

  const inputBg = 'var(--theme-input-bg)';
  const inputBorder = 'var(--theme-input-border)';
  const labelColor = 'var(--text-0)';
  const formBg = 'var(--surface-2)';

  return (
    <form
      className="w-full rounded-2xl p-8"
      style={{ backgroundColor: formBg }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-5">
        {/* First and Last Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              style={{ color: labelColor }}
            >
              {labels.firstName}
            </label>
            <input
              type="text"
              placeholder={labels.firstNamePlaceholder}
              className="w-full h-12 px-4 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${inputBorder}`,
                color: labelColor,
              }}
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              style={{ color: labelColor }}
            >
              {labels.lastName}
            </label>
            <input
              type="text"
              placeholder={labels.lastNamePlaceholder}
              className="w-full h-12 px-4 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${inputBorder}`,
                color: labelColor,
              }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            className="block text-sm font-medium"
            style={{ color: labelColor }}
          >
            {labels.email}
          </label>
          <input
            type="email"
            placeholder={labels.emailPlaceholder}
            className="w-full h-12 px-4 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
            style={{
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              color: labelColor,
            }}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            className="block text-sm font-medium"
            style={{ color: labelColor }}
          >
            {labels.phone}
          </label>
          <input
            type="tel"
            placeholder={labels.phonePlaceholder}
            className="w-full h-12 px-4 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
            style={{
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              color: labelColor,
            }}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            className="block text-sm font-medium"
            style={{ color: labelColor }}
          >
            {labels.message}
          </label>
          <textarea
            placeholder={labels.messagePlaceholder}
            rows={4}
            className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
            style={{
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              color: labelColor,
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 rounded-lg text-base font-semibold text-white transition-colors duration-200"
          style={{
            backgroundColor: isHovered ? BRAND_COLOR_HOVER : BRAND_COLOR,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {labels.submit}
        </button>
      </div>
    </form>
  );
}
