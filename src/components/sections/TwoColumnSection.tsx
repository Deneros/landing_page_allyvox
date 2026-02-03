'use client';

import Image from 'next/image';
import { useLayout } from '@/lib/context';
import { CTAButton } from '@/components/ui/CTAButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BRAND_COLOR } from '@/lib/constants';
import type { TwoColumnSectionProps } from '../types';

export function TwoColumnSection({
  imageSrc,
  imagePosition = 'right',
  tagline,
  title,
  description,
  features = [],
  buttonText,
  onButtonClick
}: TwoColumnSectionProps) {
  const { textColor, mutedText } = useLayout();

  const isImageLeft = imagePosition === 'left';

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Image Section */}
      {imageSrc && (
        <ScrollReveal variant={isImageLeft ? 'fade-right' : 'fade-left'} delay={200}>
          <div className={`relative h-75 sm:h-100 md:h-125 rounded-lg overflow-hidden placeholder-image ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollReveal>
      )}

      {/* Text Content */}
      <div className={isImageLeft ? 'md:order-2' : 'md:order-1'}>
        {tagline && (
          <ScrollReveal variant="fade-up">
            <p
              className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: mutedText }}
            >
              {tagline}
            </p>
          </ScrollReveal>
        )}
        <ScrollReveal variant="fade-up" delay={100}>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 leading-tight tracking-tight"
            style={{ fontFamily: 'Raleway', color: textColor }}
          >
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={200}>
          <p
            className="text-base sm:text-lg md:text-xl mb-8"
            style={{ color: mutedText }}
          >
            {description}
          </p>
        </ScrollReveal>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={300 + index * 100}>
                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0" style={{ color: BRAND_COLOR }}>✓</span>
                  <span className="text-base sm:text-lg" style={{ color: textColor }}>
                    {feature}
                  </span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        {buttonText && (
          <ScrollReveal variant="fade-up" delay={500}>
            <CTAButton onClick={onButtonClick} className="sm:px-10 sm:py-3.5 glow-hover">
              {buttonText}
            </CTAButton>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
