'use client';

import { useLayout } from '@/lib/context';
import { landingCopy } from '@/lib/copy/landing';
import {
  Capabilities,
  Comparison,
  Demo,
  Faq,
  Features,
  FinalCta,
  Hero,
  HowItWorks,
  LogoWall,
  Managed,
  Pricing,
  Stats,
} from '@/components/landing/sections';

/**
 * Home.
 *
 * Doce secciones, cada una con una familia de layout distinta:
 * hero centrado, cinta, rejilla 2+3, cinta de capacidades, banda asimetrica,
 * recuadro claro, comparativa a dos columnas, tres pasos escalonados,
 * tabla de planes, recuadro con captura, acordeon y cierre.
 */
export default function Home() {
  const { language } = useLayout();
  const copy = landingCopy[language];

  return (
    <main>
      <Hero copy={copy.hero} />
      <LogoWall copy={copy.logos} />
      <Features copy={copy.features} />
      <Capabilities copy={copy.capabilities} />
      <Stats copy={copy.stats} />
      <Managed copy={copy.managed} />
      <Comparison copy={copy.comparison} />
      <HowItWorks copy={copy.howItWorks} />
      <Pricing copy={copy.pricing} />
      <Demo copy={copy.demo} />
      <Faq copy={copy.faq} />
      <FinalCta copy={copy.finalCta} />
    </main>
  );
}
