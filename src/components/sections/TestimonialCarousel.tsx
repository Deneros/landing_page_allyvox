'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useLayout } from '@/lib/context';
import { BRAND_COLOR } from '@/lib/constants';
import type { TestimonialCarouselProps } from '../types';

export function TestimonialCarousel({
  testimonials,
  autoRotateInterval = 5000
}: TestimonialCarouselProps) {
  const { textColor, mutedText, secondaryBgColor, hoverBgColor } = useLayout();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoRotateInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Testimonials */}
        <div className="text-center min-h-[400px] flex flex-col items-center justify-center">
          {/* Stars */}
          <div className="mb-8 sm:mb-10 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill={BRAND_COLOR}
                color={BRAND_COLOR}
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-8 sm:mb-10 italic transition-opacity duration-500">
            {currentTestimonial.quote}
          </p>

          {/* Author */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <Image
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover transition-opacity duration-500"
            />
            <div>
              <p className="font-semibold text-base sm:text-lg" style={{ color: textColor }}>
                {currentTestimonial.author}
              </p>
              <p className="text-sm sm:text-base opacity-70" style={{ color: mutedText }}>
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12 sm:mt-16">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-2 sm:p-3 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: secondaryBgColor,
              color: textColor,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
            title="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: currentIndex === index ? '24px' : '12px',
                  height: '12px',
                  backgroundColor: currentIndex === index ? BRAND_COLOR : secondaryBgColor,
                }}
                title={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-2 sm:p-3 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: secondaryBgColor,
              color: textColor,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = secondaryBgColor)}
            title="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
