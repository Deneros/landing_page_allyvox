/**
 * Contrato de copy de la home.
 *
 * Convencion de titulares: `lead` va en la sans de marca y `accent` en serif
 * italica. Ese contraste es el gesto tipografico que sostiene toda la pagina,
 * asi que todas las secciones lo exponen igual.
 */

export interface Titled {
  lead: string;
  accent: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  /** Ruta dentro de /public. Placeholder hasta que lleguen las capturas reales. */
  image: string;
  alt: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  billing: string;
  description: string;
  cta: string;
  /** Nota bajo el boton. Vacia si el plan no la necesita. */
  note: string;
  /** Encabezado de la lista, del tipo "Todo lo de Inicio, mas:". */
  inherits: string;
  features: string[];
  featured: boolean;
}

export interface LandingCopy {
  hero: {
    badge: string;
    title: Titled;
    description: string;
    cta: string;
    imageAlt: string;
    /** Tarjetas flotantes sobre la captura. */
    floats: { live: string; caption: string; metric: string; metricLabel: string };
  };

  logos: {
    title: string;
    /** Nombre visible de cada marca de la cinta. */
    items: string[];
  };

  features: {
    title: Titled;
    description: string;
    /** Las dos primeras se pintan grandes, las tres siguientes pequenas. */
    cards: FeatureCard[];
  };

  capabilities: {
    items: string[];
  };

  stats: {
    title: Titled;
    description: string;
    items: { value: string; label: string }[];
  };

  managed: {
    badge: string;
    title: Titled;
    description: string;
    cta: string;
  };

  comparison: {
    title: Titled;
    versus: string;
    others: { title: string; items: string[] };
    ours: { title: string; items: string[] };
    cta: string;
  };

  howItWorks: {
    title: Titled;
    steps: { num: string; title: string; description: string; image: string; alt: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
  };

  pricing: {
    title: Titled;
    description: string;
    plans: PricingPlan[];
    addons: { title: Titled; link: string; items: { title: string; description: string }[] };
  };

  demo: {
    badge: string;
    title: Titled;
    description: string;
    play: string;
    imageAlt: string;
  };

  faq: {
    title: Titled;
    items: { q: string; a: string }[];
    still: { title: string; description: string; cta: string };
  };

  finalCta: {
    title: Titled;
    description: string;
    cta: string;
  };
}
