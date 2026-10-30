import type { FeatureCard, LandingCopy } from '@/lib/copy/landing';
import { Heading, Section } from '../primitives';
import { Rise, RiseGroup, RiseItem } from '../motion';

/**
 * Rejilla de funcionalidades con ritmo: dos celdas grandes arriba y tres
 * pequenas debajo. Cinco tarjetas para cinco funcionalidades, sin huecos.
 *
 * La imagen se sangra por el borde derecho de la tarjeta (mas ancha que su
 * contenedor) para que se lea como una ventana a un producto que sigue mas
 * alla, en vez de como una miniatura centrada.
 */
export function Features({
  copy,
  ilustraciones,
}: {
  copy: LandingCopy['features'];
  /** Una por tarjeta, en el mismo orden que copy.cards. */
  ilustraciones: React.ReactNode[];
}) {
  const [first, second, ...small] = copy.cards;

  return (
    <Section>
      <Rise className="mx-auto max-w-[720px] text-center">
        <Heading title={copy.title} className="text-[clamp(2rem,4.6vw,3.5rem)]" />
        <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-relaxed text-[var(--text-1)]">
          {copy.description}
        </p>
      </Rise>

      <RiseGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.1}>
        <RiseItem>
          <Card card={first} imageHeight={372} ilustracion={ilustraciones[0]} />
        </RiseItem>
        <RiseItem>
          <Card card={second} imageHeight={372} ilustracion={ilustraciones[1]} />
        </RiseItem>
      </RiseGroup>

      <RiseGroup className="mt-5 grid gap-5 md:grid-cols-3" stagger={0.08}>
        {small.map((card, i) => (
          <RiseItem key={card.title}>
            <Card card={card} imageHeight={280} compact ilustracion={ilustraciones[i + 2]} />
          </RiseItem>
        ))}
      </RiseGroup>
    </Section>
  );
}

function Card({
  card,
  imageHeight,
  compact = false,
  ilustracion,
}: {
  card: FeatureCard;
  imageHeight: number;
  compact?: boolean;
  ilustracion: React.ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--lv-radius-card)] border border-[var(--lv-line)] bg-[var(--lv-card)] transition-colors duration-300 hover:border-[var(--line-strong)]">
      <div className="relative overflow-hidden" style={{ height: imageHeight }}>
        {ilustracion}
      </div>

      <div className={`flex flex-col gap-3 border-t border-[var(--lv-line-soft)] ${compact ? 'p-6' : 'p-7 md:p-8'}`}>
        <h3
          className={`font-semibold tracking-[-0.02em] text-[var(--text-0)] ${compact ? 'text-[19px]' : 'text-[23px]'}`}
        >
          {card.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-[var(--text-1)]">{card.description}</p>
      </div>
    </article>
  );
}
