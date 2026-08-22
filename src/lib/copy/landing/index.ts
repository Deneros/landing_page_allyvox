import { es } from './es';
import { en } from './en';

export type { LandingCopy, Titled, FeatureCard, PricingPlan } from './types';

export const landingCopy = { es, en } as const;
