import { Check, X } from 'lucide-react';
import type { LandingCopy } from '@/lib/copy/landing';
import { Action, Heading, Section } from '../primitives';
import { Rise } from '../motion';

/**
 * Comparativa a dos columnas. La jerarquia la marca la elevacion, no el color:
 * la columna propia sube unos pixeles, tiene cabecera tintada y sombra; la
 * ajena queda hundida y con el texto atenuado. En movil se apilan y la nuestra
 * va primero, que es lo que importa leer.
 */
export function Comparison({ copy }: { copy: LandingCopy['comparison'] }) {
  return (
    <Section>
      <Rise className="mx-auto max-w-[720px] text-center">
        <Heading title={copy.title} className="text-[clamp(2rem,4.6vw,3.5rem)]" />
      </Rise>

      <div className="relative mt-14 grid gap-5 md:grid-cols-2 md:gap-8">
        <Rise
          delay={0.05}
          className="order-2 rounded-[var(--lv-radius-card)] border border-[var(--lv-line-soft)] bg-[var(--surface-1)]/50 md:order-1 md:mt-10"
        >
          <div className="border-b border-[var(--lv-line-soft)] px-7 py-9 md:px-9">
            <h3 className="lv-display text-[clamp(1.5rem,2.6vw,2rem)] text-[var(--text-2)]">
              {copy.others.title}
            </h3>
          </div>
          <ul className="flex flex-col gap-5 px-7 py-8 md:px-9">
            {copy.others.items.map((item) => (
              <li key={item} className="flex gap-3.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[var(--lv-line-soft)]">
                  <X className="h-3 w-3 text-[var(--text-2)]" strokeWidth={2.5} aria-hidden />
                </span>
                <span className="text-[15px] leading-relaxed text-[var(--text-2)]">{item}</span>
              </li>
            ))}
          </ul>
        </Rise>

        {/* Insignia V/S. Decorativa: la comparacion ya se entiende por el layout. */}
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-0)] px-3.5 py-2 text-[13px] font-semibold tracking-wide text-[var(--text-0)] md:block"
        >
          {copy.versus}
        </span>

        <Rise className="order-1 overflow-hidden rounded-[var(--lv-radius-card)] border border-[var(--line-strong)] bg-[var(--lv-card)] shadow-[var(--lv-shadow-feature)] md:order-2">
          <div
            className="border-b border-[var(--lv-line)] px-7 py-9 md:px-9"
            style={{
              background:
                'linear-gradient(135deg, rgba(169,61,232,0.24), rgba(85,38,180,0.14) 60%, transparent)',
            }}
          >
            <h3 className="lv-display text-[clamp(1.5rem,2.6vw,2rem)] text-[var(--text-0)]">
              {copy.ours.title}
            </h3>
          </div>
          <ul className="flex flex-col gap-5 px-7 py-8 md:px-9">
            {copy.ours.items.map((item) => (
              <li key={item} className="flex gap-3.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--lv-accent-fill)]">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                </span>
                <span className="text-[15px] leading-relaxed text-[var(--text-0)]">{item}</span>
              </li>
            ))}
          </ul>
        </Rise>
      </div>

      <Rise className="mt-12 text-center" delay={0.1}>
        <Action href="/contact">{copy.cta}</Action>
      </Rise>
    </Section>
  );
}
