'use client';

import { translations } from '@/lib/translations';
import { useLayout } from '@/lib/context';
import { BRAND_COLOR, BRAND_COLOR_HOVER } from '@/lib/constants';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { ContactInfoCard } from '@/components/cards/ContactInfoCard';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { CTAButton } from '@/components/ui/CTAButton';
import { DotPattern } from '@/components/ui/DotPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function ContactPage() {
  const { language, theme, bgColor, altBgColor, textColor, mutedText } = useLayout();
  const t = translations[language].contactPage;

  const [transformHovered, setTransformHovered] = useState(false);
  const [needMoreHovered, setNeedMoreHovered] = useState(false);

  const faqItems = [
    { question: t.faq1Question, answer: t.faq1Answer },
    { question: t.faq2Question, answer: t.faq2Answer },
    { question: t.faq3Question, answer: t.faq3Answer },
    { question: t.faq4Question, answer: t.faq4Answer },
    { question: t.faq5Question, answer: t.faq5Answer },
  ];

  const contactInfoItems = [
    { type: 'email' as const, label: t.contactEmail, value: t.contactEmailValue },
    { type: 'phone' as const, label: t.contactPhone, value: t.contactPhoneValue },
    { type: 'address' as const, label: t.contactAddress, value: t.contactAddressValue },
  ];

  return (
    <div style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <section
        className="relative isolate w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <DotPattern color="#302289" accentColor="#9138d5" spacing={18} opacity={0.55} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <p
              className="text-sm font-medium mb-4"
              style={{ color: mutedText }}
            >
              {t.heroTagline}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{
                color: textColor,
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
              }}
            >
              {t.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{
                color: mutedText,
                lineHeight: '1.5',
              }}
            >
              {t.heroSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="sm:px-8 sm:py-3 glow-hover">
                {t.heroCTA}
              </CTAButton>
              <button
                type="button"
                className="px-8 py-3 rounded-lg text-base font-semibold transition-all duration-500 glow-hover hover:scale-[1.03]"
                style={{
                  backgroundColor: 'transparent',
                  color: textColor,
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                {t.heroSecondaryCTA}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transform Section */}
      <section
        className="relative isolate w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: altBgColor }}
      >
        <DotPattern color="#9138d5" accentColor="#76f6f5" spacing={20} opacity={0.45} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line"
              style={{
                color: textColor,
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
              }}
            >
              {t.transformTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <p
              className="text-lg mb-8 max-w-lg mx-auto"
              style={{
                color: mutedText,
                lineHeight: '1.5',
              }}
            >
              {t.transformSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <button
              type="button"
              className="px-7 py-3.5 rounded-lg text-base font-semibold text-white transition-all duration-500 glow-hover hover:scale-[1.03]"
              style={{
                backgroundColor: transformHovered ? BRAND_COLOR_HOVER : BRAND_COLOR,
              }}
              onMouseEnter={() => setTransformHovered(true)}
              onMouseLeave={() => setTransformHovered(false)}
            >
              {t.transformCTA}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="w-full py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <p
                className="text-sm font-medium mb-2"
                style={{ color: mutedText }}
              >
                {t.contactTagline}
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: textColor,
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}
              >
                {t.contactTitle}
              </h2>
              <p
                className="text-lg max-w-lg"
                style={{
                  color: mutedText,
                  lineHeight: '1.5',
                }}
              >
                {t.contactSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Info */}
            <ScrollReveal variant="fade-right" delay={100}>
              <div className="lg:w-80 shrink-0">
                <ContactInfoCard items={contactInfoItems} />
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal variant="fade-left" delay={200} className="flex-1">
              <ContactForm
                labels={{
                  firstName: t.formFirstName,
                  lastName: t.formLastName,
                  email: t.formEmail,
                  phone: t.formPhone,
                  message: t.formMessage,
                  submit: t.formSubmit,
                  firstNamePlaceholder: t.formFirstNamePlaceholder,
                  lastNamePlaceholder: t.formLastNamePlaceholder,
                  emailPlaceholder: t.formEmailPlaceholder,
                  phonePlaceholder: t.formPhonePlaceholder,
                  messagePlaceholder: t.formMessagePlaceholder,
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <ScrollReveal variant="scale" duration={800}>
        <TestimonialSection
          quote={t.testimonialQuote}
          authorName={t.testimonialAuthor}
          authorTitle={t.testimonialTitle}
          rating={5}
        />
      </ScrollReveal>

      {/* FAQ Section */}
      <section
        className="w-full py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: altBgColor }}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: textColor,
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}
              >
                {t.faqTitle}
              </h2>
              <p
                className="text-lg"
                style={{
                  color: mutedText,
                  lineHeight: '1.5',
                }}
              >
                {t.faqSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <ScrollReveal variant="fade-up" delay={200}>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* Need More Help Section */}
      <section
        className="relative isolate w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: altBgColor }}
      >
        <DotPattern color="#302289" accentColor="#76f6f5" spacing={16} opacity={0.6} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: textColor,
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
              }}
            >
              {t.needMoreTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <p
              className="text-lg mb-8"
              style={{
                color: mutedText,
                lineHeight: '1.5',
              }}
            >
              {t.needMoreSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <button
              type="button"
              className="px-7 py-3.5 rounded-lg text-base font-semibold text-white transition-all duration-500 glow-hover hover:scale-[1.03]"
              style={{
                backgroundColor: needMoreHovered ? BRAND_COLOR_HOVER : BRAND_COLOR,
              }}
              onMouseEnter={() => setNeedMoreHovered(true)}
              onMouseLeave={() => setNeedMoreHovered(false)}
            >
              {t.needMoreCTA}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section
        className="w-full py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <p
                className="text-sm font-medium mb-2"
                style={{ color: mutedText }}
              >
                {t.getInTouchTagline}
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: textColor,
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}
              >
                {t.getInTouchTitle}
              </h2>
              <p
                className="text-base"
                style={{
                  color: mutedText,
                  lineHeight: '1.5',
                }}
              >
                {t.getInTouchSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Info */}
            <ScrollReveal variant="fade-right" delay={100}>
              <div className="lg:w-96 shrink-0">
                <ContactInfoCard items={contactInfoItems} />
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal variant="fade-left" delay={200} className="flex-1">
              <div
                className="min-h-75 rounded-2xl flex flex-col items-center justify-center map-placeholder"
                style={{
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                }}
              >
                <MapPin
                  className="w-12 h-12 mb-4 animate-float"
                  style={{ color: 'var(--brand-color)' }}
                />
                <p
                  className="text-base"
                  style={{ color: mutedText }}
                >
                  {language === 'en' ? 'Map Placeholder' : 'Mapa'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
