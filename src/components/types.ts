import { ReactNode } from 'react';

// Button Component Types
export interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

// Header Component Types
export interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

// Card Component Types
export interface FeatureCardProps {
  icon: string | ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'numbered';
  hoverScale?: boolean;
}

export interface IndustryCardProps {
  industry: {
    id: string;
    icon: string;
    title: string;
    heading: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  index: number;
}

export interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
}

// Section Component Types
export interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
}

export interface TwoColumnSectionProps {
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
  tagline?: string;
  title: string;
  description: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export interface TestimonialCarouselProps {
  testimonials: Array<{
    quote: string;
    author: string;
    title: string;
    avatar: string;
  }>;
  autoRotateInterval?: number;
}

// Navbar Component Types
export interface ResourcesDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export interface MobileMenuProps {
  resourcesOpen: boolean;
  onToggleResources: () => void;
}
