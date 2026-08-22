import type { LandingCopy } from '@/lib/copy/landing';
import { Action, Heading } from '../primitives';
import { Rise } from '../motion';

/** Cierre. Tercer y ultimo uso del recuadro claro incrustado. */
export function FinalCta({ copy }: { copy: LandingCopy['finalCta'] }) {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      <div className="relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-[var(--lv-radius-block)] bg-[var(--lv-block)] px-5 py-24 text-center sm:px-8 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(169,61,232,0.18), transparent)',
          }}
        />

        <Rise className="relative mx-auto max-w-[720px]">
          <Heading title={copy.title} onLight className="text-[clamp(2.1rem,5vw,3.75rem)]" />
          <p className="mx-auto mt-6 max-w-[440px] text-[17px] leading-relaxed text-[var(--lv-block-muted)]">
            {copy.description}
          </p>
          <div className="mt-10">
            <Action href="/contact" variant="onLight">
              {copy.cta}
            </Action>
          </div>
        </Rise>
      </div>
    </section>
  );
}
