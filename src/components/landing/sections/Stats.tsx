import type { LandingCopy } from '@/lib/copy/landing';
import { Heading, Section } from '../primitives';
import { Rise, RiseGroup, RiseItem } from '../motion';

/**
 * Banda de metricas. Un solo contenedor con reparto asimetrico: el discurso
 * ocupa la mitad izquierda y las cifras se agrupan a la derecha.
 *
 * Las dos cifras son hechos de producto (cobertura horaria y canales), no
 * metricas de traccion: no afirmamos volumen de clientes que no tenemos.
 */
export function Stats({ copy }: { copy: LandingCopy['stats'] }) {
  return (
    <Section>
      <Rise>
        <div className="grid gap-10 rounded-[var(--lv-radius-block)] border border-[var(--lv-line)] bg-[var(--lv-card)] p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-14 md:p-12">
          <div className="max-w-[440px]">
            <Heading title={copy.title} className="text-[clamp(1.75rem,3.2vw,2.5rem)]" />
            <p className="mt-5 text-[16px] leading-relaxed text-[var(--text-1)]">{copy.description}</p>
          </div>

          <RiseGroup className="grid gap-4 sm:grid-cols-2" stagger={0.1} delay={0.1}>
            {copy.items.map((stat) => (
              <RiseItem
                key={stat.value}
                className="rounded-[var(--lv-radius-card)] border border-[var(--lv-line-soft)] bg-[var(--lv-card-soft)] p-7 md:w-[230px]"
              >
                <p className="lv-display text-[44px] text-[var(--text-0)]">{stat.value}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-1)]">{stat.label}</p>
              </RiseItem>
            ))}
          </RiseGroup>
        </div>
      </Rise>
    </Section>
  );
}
