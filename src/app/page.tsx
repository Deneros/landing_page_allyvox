'use client';

import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';
import { images } from '@/lib/images';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { TwoColumnSection } from '@/components/sections/TwoColumnSection';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { CTAButton } from '@/components/ui/CTAButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  const { language, bgColor, altBgColor } = useLayout();
  const t = translations[language];

  // Testimonials data
  const testimonials = [
    {
      quote: t?.testimonial?.quote || 'Amazing product that transformed our business.',
      author: t?.testimonial?.author || 'Marcus Chen',
      title: t?.testimonial?.title || 'VP Sales, TechFlow Inc',
      avatar: images.avatarImage,
    },
    {
      quote: t?.testimonial2?.quote || 'Excellent service and support. Highly recommended!',
      author: t?.testimonial2?.author || 'John Martinez',
      title: t?.testimonial2?.title || 'Product Manager, Digital Solutions',
      avatar: images.avatarImage,
    },
    {
      quote: t?.testimonial3?.quote || 'The best investment we made for our team this year.',
      author: t?.testimonial3?.author || 'Emma Wilson',
      title: t?.testimonial3?.title || 'Director, Creative Studios',
      avatar: images.avatarImage,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
        imageSrc={images.placeholderImage}
        primaryButtonText={t.hero.startTrial}
        secondaryButtonText={t.hero.scheduleDemo}
      />

      {/* Why Section */}
      <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: altBgColor }}>
        <div className="w-full max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionHeader
              tagline={t.why.tagline}
              title={t.why.title}
              description={t.why.description}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: t.why.feature1, description: t.why.feature1Desc },
              { title: t.why.feature2, description: t.why.feature2Desc },
              { title: t.why.feature3, description: t.why.feature3Desc },
            ].map((feature, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 150}>
                <FeatureCard
                  icon="✓"
                  title={feature.title}
                  description={feature.description}
                  variant="default"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: bgColor }}>
        <div className="w-full max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionHeader
              tagline={t.process.tagline}
              title={t.process.title}
              description={t.process.description}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: t.process.step1, description: t.process.step1Desc },
              { title: t.process.step2, description: t.process.step2Desc },
              { title: t.process.step3, description: t.process.step3Desc },
            ].map((step, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 150}>
                <FeatureCard
                  icon={String(index + 1)}
                  title={step.title}
                  description={step.description}
                  variant="numbered"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built Section */}
      <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: altBgColor }}>
        <div className="w-full max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionHeader
              tagline={t.built.tagline}
              title={t.built.title}
              description={t.built.description}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: '⚙', title: t.built.feature1, description: t.built.feature1Desc },
              { icon: '📱', title: t.built.feature2, description: t.built.feature2Desc },
              { icon: '📊', title: t.built.feature3, description: t.built.feature3Desc },
            ].map((feature, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 150}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="default"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: bgColor }}>
        <div className="w-full max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up">
            <TwoColumnSection
              tagline={t.integration.tagline}
              title={t.integration.title}
              description={t.integration.description}
              features={[
                t.integration.feature1,
                t.integration.feature2,
                t.integration.feature3,
              ]}
              buttonText={t.hero.startTrial}
              imageSrc={images.placeholderImage1}
              imagePosition="right"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ backgroundColor: altBgColor }}
      >
        <ScrollReveal variant="scale" duration={800}>
          <TestimonialCarousel testimonials={testimonials} autoRotateInterval={5000} />
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: bgColor }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full max-w-4xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <SectionHeader
                title={t.cta.title}
                description={t.cta.description}
              />
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton className="sm:px-10 sm:py-3.5 glow-hover">
                  {t.hero.startTrial}
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
