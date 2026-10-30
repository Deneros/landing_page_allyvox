'use client';

import { useLayout } from '@/lib/context';
import { landingCopy } from '@/lib/copy/landing';
import {
  IlustracionAgentes,
  IlustracionAnalisis,
  IlustracionCrm,
  IlustracionIntegraciones,
  IlustracionMemoria,
} from '@/components/landing/ilustraciones';
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
 * tabla de planes, demo, acordeon y cierre.
 *
 * Las funcionalidades van ilustradas y no capturadas: el orden de las
 * ilustraciones debe seguir al de copy.features.cards.
 */
export default function Home() {
  const { language } = useLayout();
  const copy = landingCopy[language];

  return (
    <main>
      <Hero copy={copy.hero} />
      <LogoWall copy={copy.logos} />
      <Features
        copy={copy.features}
        ilustraciones={[
          <IlustracionAgentes key="agentes" />,
          <IlustracionCrm key="crm" />,
          <IlustracionMemoria key="memoria" />,
          <IlustracionAnalisis key="analisis" />,
          <IlustracionIntegraciones key="integraciones" />,
        ]}
      />
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
