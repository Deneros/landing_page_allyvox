import { Plus } from 'lucide-react';
import type { LandingCopy } from '@/lib/copy/landing';
import { Action, Heading, Section } from '../primitives';
import { Rise, RiseGroup, RiseItem } from '../motion';

/**
 * FAQ a dos columnas: el titular queda fijo a la izquierda mientras la lista
 * corre a la derecha, asi el contexto no se pierde al bajar.
 *
 * Se usa <details>/<summary> nativo: abre y cierra sin JavaScript, funciona con
 * teclado y lo anuncia el lector de pantalla sin ARIA a mano. El icono gira via
 * el selector [open] del hermano.
 */
export function Faq({ copy }: { copy: LandingCopy['faq'] }) {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <Rise className="md:sticky md:top-28 md:self-start">
          <Heading title={copy.title} className="text-[clamp(2rem,4vw,3.1rem)]" />
        </Rise>

        <div>
          <RiseGroup className="flex flex-col gap-3" stagger={0.06}>
            {copy.items.map((item) => (
              <RiseItem key={item.q}>
                <details className="group rounded-[var(--lv-radius-card)] border border-[var(--lv-line-soft)] bg-[var(--lv-card)] transition-colors duration-300 open:border-[var(--lv-line)] hover:border-[var(--lv-line)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[16px] font-semibold text-[var(--text-0)] [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-3)] transition-transform duration-300 ease-[var(--ease-out)] group-open:rotate-45">
                      <Plus className="h-4 w-4 text-[var(--lv-accent-text)]" aria-hidden />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 pr-14 text-[15px] leading-relaxed text-[var(--text-1)]">
                    {item.a}
                  </p>
                </details>
              </RiseItem>
            ))}
          </RiseGroup>

          <Rise delay={0.1} className="mt-6">
            <div className="flex flex-wrap items-center justify-between gap-5 rounded-[var(--lv-radius-card)] border border-dashed border-[var(--lv-line)] px-6 py-6">
              <div>
                <p className="text-[16px] font-semibold text-[var(--text-0)]">{copy.still.title}</p>
                <p className="mt-1.5 text-[14px] text-[var(--text-1)]">{copy.still.description}</p>
              </div>
              <Action href="/contact" variant="ghost" className="px-6 py-3 text-[14px]">
                {copy.still.cta}
              </Action>
            </div>
          </Rise>
        </div>
      </div>
    </Section>
  );
}
