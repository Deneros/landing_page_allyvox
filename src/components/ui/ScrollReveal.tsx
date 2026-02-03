'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade'
  | 'scale'
  | 'slide-up'
  | 'blur';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 900,
  className = '',
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: once,
  });

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    };

    switch (variant) {
      case 'fade-up':
        return { ...base, transform: 'translateY(30px)' };
      case 'fade-down':
        return { ...base, transform: 'translateY(-30px)' };
      case 'fade-left':
        return { ...base, transform: 'translateX(30px)' };
      case 'fade-right':
        return { ...base, transform: 'translateX(-30px)' };
      case 'scale':
        return { ...base, transform: 'scale(0.97)' };
      case 'slide-up':
        return { ...base, transform: 'translateY(50px)' };
      case 'blur':
        return { ...base, filter: 'blur(8px)', transform: 'translateY(15px)' };
      case 'fade':
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
    filter: 'blur(0px)',
  });

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? { ...getInitialStyles(), ...getVisibleStyles() } : getInitialStyles()}
    >
      {children}
    </div>
  );
}

// Staggered children animation wrapper
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
  variant?: AnimationVariant;
  duration?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 120,
  baseDelay = 0,
  variant = 'fade-up',
  duration = 900,
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'translateY(0)'
              : variant === 'fade-up'
                ? 'translateY(30px)'
                : variant === 'fade-down'
                  ? 'translateY(-30px)'
                  : 'translateY(0)',
            transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${baseDelay + index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
