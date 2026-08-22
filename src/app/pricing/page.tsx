'use client';

import { useState } from 'react';
import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { BRAND_COLOR } from '@/lib/constants';
import { images } from '@/lib/images';
import { PricingCard } from '@/components/cards/PricingCard';
import { ComparisonTable, ComparisonRow } from '@/components/sections/ComparisonTable';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { CTAButton } from '@/components/ui/CTAButton';
import { DotPattern } from '@/components/ui/DotPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PricingPage() {
  const { language, bgColor, altBgColor, textColor, mutedText, secondaryBgColor, borderColor } = useLayout();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'enterprise' | null>(null);

  const t = translations[language].pricingPage;
  const isAnnual = billingPeriod === 'annual';

  // Build plan data from translations — prices switch based on billing period
  const plans = {
    starter: {
      name: t.starterName,
      description: t.starterDescription,
      price: isAnnual ? t.starterAnnualPrice : t.starterPrice,
      period: isAnnual ? t.starterAnnualPeriod : t.starterPeriod,
      desc: t.starterDesc,
      features: [t.starterFeature1, t.starterFeature2, t.starterFeature3, t.starterFeature4],
      button: t.starterButton,
    },
    professional: {
      name: t.professionalName,
      description: t.professionalDescription,
      price: isAnnual ? t.professionalAnnualPrice : t.professionalPrice,
      period: isAnnual ? t.professionalAnnualPeriod : t.professionalPeriod,
      desc: t.professionalDesc,
      features: [t.professionalFeature1, t.professionalFeature2, t.professionalFeature3, t.professionalFeature4],
      button: t.professionalButton,
    },
    enterprise: {
      name: t.enterpriseName,
      description: t.enterpriseDescription,
      price: isAnnual ? t.enterpriseAnnualPrice : t.enterprisePrice,
      period: isAnnual ? t.enterpriseAnnualPeriod : t.enterprisePeriod,
      desc: t.enterpriseDesc,
      features: [t.enterpriseFeature1, t.enterpriseFeature2, t.enterpriseFeature3, t.enterpriseFeature4],
      button: t.enterpriseButton,
    },
  };

  // Build comparison rows from translations
  const comparisonRows: ComparisonRow[] = [
    { feature: t.comparisonRow1Feature, starter: t.comparisonRow1Starter, professional: t.comparisonRow1Professional, enterprise: t.comparisonRow1Enterprise },
    { feature: t.comparisonRow2Feature, starter: t.comparisonRow2Starter, professional: t.comparisonRow2Professional, enterprise: t.comparisonRow2Enterprise },
    { feature: t.comparisonRow3Feature, starter: t.comparisonRow3Starter, professional: t.comparisonRow3Professional, enterprise: t.comparisonRow3Enterprise },
    { feature: t.comparisonRow4Feature, starter: true, professional: true, enterprise: true },
    { feature: t.comparisonRow5Feature, starter: false, professional: true, enterprise: true },
    { feature: t.comparisonRow6Feature, starter: false, professional: true, enterprise: true },
    { feature: t.comparisonRow7Feature, starter: false, professional: true, enterprise: true },
  ];

  return (
    <div style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <section className="relative isolate w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <DotPattern color="#302289" accentColor="#9138d5" spacing={18} opacity={0.19} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up" delay={100}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{ color: textColor, fontFamily: 'Raleway' }}
            >
              {t.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <p
              className="text-lg sm:text-xl mb-8 max-w-xl mx-auto"
              style={{ color: mutedText }}
            >
              {t.heroSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <CTAButton className="px-8 py-3.5 glow-hover">
              {t.heroCta}
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section
        className="relative isolate py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: altBgColor }}
      >
        <DotPattern color="#9138d5" accentColor="#2e8dff" spacing={20} opacity={0.14} />
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: textColor, fontFamily: 'Raleway' }}
              >
                {t.pricingTitle}
              </h2>
              <p
                className="text-base max-w-md mx-auto mb-8"
                style={{ color: mutedText }}
              >
                {t.pricingSubtitle}
              </p>

              {/* Billing Toggle */}
              <div
                className="inline-flex p-1 rounded-lg"
                style={{ backgroundColor: secondaryBgColor, border: `1px solid ${borderColor}` }}
              >
                <button
                  type="button"
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider transition-all duration-500 ${billingPeriod === 'monthly' ? 'glow-soft' : ''}`}
                  style={{
                    backgroundColor: billingPeriod === 'monthly' ? BRAND_COLOR : 'transparent',
                    color: billingPeriod === 'monthly' ? 'white' : mutedText,
                  }}
                >
                  {t.monthly}
                </button>
                <button
                  type="button"
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2.5 rounded-md text-xs font-medium tracking-wider transition-all duration-500 flex items-center gap-2 ${billingPeriod === 'annual' ? 'glow-soft' : ''}`}
                  style={{
                    backgroundColor: billingPeriod === 'annual' ? BRAND_COLOR : 'transparent',
                    color: billingPeriod === 'annual' ? 'white' : mutedText,
                  }}
                >
                  {t.annual}
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: billingPeriod === 'annual' ? 'rgba(255,255,255,0.2)' : 'rgba(145,56,213,0.15)',
                      color: billingPeriod === 'annual' ? 'white' : 'var(--brand-accent)',
                    }}
                  >
                    {t.annualBadge}
                  </span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollReveal variant="fade-up" delay={0}>
              <PricingCard
                planName={plans.starter.name}
                planDescription={plans.starter.description}
                price={plans.starter.price}
                period={plans.starter.period}
                description={plans.starter.desc}
                features={plans.starter.features}
                buttonText={plans.starter.button}
                isSelected={selectedPlan === 'starter'}
                onSelect={() => setSelectedPlan('starter')}
              />
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <PricingCard
                planName={plans.professional.name}
                planDescription={plans.professional.description}
                price={plans.professional.price}
                period={plans.professional.period}
                description={plans.professional.desc}
                features={plans.professional.features}
                buttonText={plans.professional.button}
                isHighlighted
                isSelected={selectedPlan === 'professional'}
                onSelect={() => setSelectedPlan('professional')}
              />
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <PricingCard
                planName={plans.enterprise.name}
                planDescription={plans.enterprise.description}
                price={plans.enterprise.price}
                period={plans.enterprise.period}
                description={plans.enterprise.desc}
                features={plans.enterprise.features}
                buttonText={plans.enterprise.button}
                isSelected={selectedPlan === 'enterprise'}
                onSelect={() => setSelectedPlan('enterprise')}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: textColor, fontFamily: 'Raleway' }}
              >
                {t.comparisonTitle}
              </h2>
              <p
                className="text-base"
                style={{ color: mutedText }}
              >
                {t.comparisonSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal variant="fade-up" delay={200}>
            <ComparisonTable
              rows={comparisonRows}
              starterPrice={plans.starter.price}
              professionalPrice={plans.professional.price}
              enterprisePrice={plans.enterprise.price}
              starterLabel={t.comparisonStarter}
              professionalLabel={t.comparisonProfessional}
              enterpriseLabel={t.comparisonEnterprise}
              periodLabel={isAnnual ? t.comparisonPeriodLabelAnnual : t.comparisonPeriodLabel}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <ScrollReveal variant="scale" duration={800}>
        <TestimonialSection
          quote={t.testimonialQuote}
          authorName={t.testimonialAuthor}
          authorTitle={t.testimonialTitle}
          authorImage={images.avatarSarahJohnson}
          rating={5}
        />
      </ScrollReveal>

      {/* CTA Section */}
      <section
        className="relative isolate py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <DotPattern color="#302289" accentColor="#76f6f5" spacing={16} opacity={0.23} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 whitespace-pre-line"
              style={{ color: textColor, fontFamily: 'Raleway', lineHeight: 1.2 }}
            >
              {t.ctaTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: mutedText }}
            >
              {t.ctaSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <CTAButton className="px-8 py-3.5 glow-hover">
              {t.ctaButton}
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}