'use client';

import Image from 'next/image';
import { useLayout } from '@/lib/context';
import { CTAButton } from '@/components/ui/CTAButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DotPattern } from '@/components/ui/DotPattern';
import type { HeroSectionProps } from '../types';

export function HeroSection({
  title,
  description,
  imageSrc,
  primaryButtonText,
  secondaryButtonText
}: HeroSectionProps) {
  const { bgColor, textColor, mutedText } = useLayout();

  return (
    <section className="relative isolate w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: bgColor }}>
      <DotPattern className="opacity-60" />
      
      {/* Background Image with Gradient Fade */}
      {imageSrc && (
        <div className="absolute inset-0 hidden md:block overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 w-3/5 h-full hero-image-fade">
            <Image
              src={imageSrc}
              alt="Hero Background"
              fill
              className="w-full h-full object-cover"
              style={{ objectPosition: 'right center' }}
              priority
            />
          </div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className={`${imageSrc ? 'max-w-2xl' : 'max-w-3xl mx-auto text-center'}`}>
          {/* Text Content */}
          <div>
            <ScrollReveal variant="fade-up">
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 sm:mb-8 tracking-tight ${!imageSrc ? 'text-center' : ''}`}
                style={{
                  fontFamily: 'Raleway',
                  color: textColor,
                  fontSize: !imageSrc ? '72px' : undefined,
                  lineHeight: !imageSrc ? '1.2' : undefined,
                  letterSpacing: !imageSrc ? '-0.72px' : undefined,
                }}
              >
                {title}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <p
                className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 ${!imageSrc ? 'text-center' : ''}`}
                style={{
                  color: mutedText,
                  fontSize: !imageSrc ? '18px' : undefined,
                }}
              >
                {description}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <div className={`flex flex-col sm:flex-row gap-4 ${!imageSrc ? 'justify-center' : ''}`}>
                <CTAButton className="sm:px-10 sm:py-3.5 glow-hover">
                  {primaryButtonText}
                </CTAButton>
                {secondaryButtonText && (
                  <SecondaryButton className="sm:px-10 sm:py-3.5">
                    {secondaryButtonText}
                  </SecondaryButton>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
