import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { LandingCopy } from '@/lib/copy/landing';
import { Action, Heading, Section } from '../primitives';
import { Rise, RiseGroup, RiseItem } from '../motion';

/**
 * Tres pasos. La tarjeta central se eleva sobre las laterales para romper la
 * fila plana de tres iguales; en movil el desnivel desaparece y se apilan.
 */
export function HowItWorks({ copy }: { copy: LandingCopy['howItWorks'] }) {
  return (
    <Section>
      <Rise className="mx-auto max-w-[720px] text-center">
        <Heading title={copy.title} className="text-[clamp(2rem,4.6vw,3.5rem)]" />
      </Rise>

      <RiseGroup className="mt-14 grid items-end gap-5 md:grid-cols-3" stagger={0.1}>
        {copy.steps.map((step, i) => (
          <RiseItem key={step.num} className={i === 1 ? 'md:-mt-12' : ''}>
            <article className="flex h-full flex-col overflow-hidden rounded-[var(--lv-radius-card)] border border-[var(--lv-line)] bg-[var(--lv-card)]">
              <div className="relative h-[240px] overflow-hidden md:h-[280px]">
                {/* TODO(imagenes): captura real del paso, 820x620. */}
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={820}
                  height={620}
                  loading="lazy"
                  className="absolute left-5 top-5 w-[110%] max-w-none rounded-tl-[14px]"
                />
              </div>

              <div className="flex flex-col gap-2.5 border-t border-[var(--lv-line-soft)] p-7">
                <span className="text-[13px] tabular-nums text-[var(--text-2)]">{step.num}</span>
                <h3 className="text-[23px] font-semibold tracking-[-0.02em] text-[var(--text-0)]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-1)]">{step.description}</p>
              </div>
            </article>
          </RiseItem>
        ))}
      </RiseGroup>

      <Rise className="mt-12 flex flex-wrap items-center justify-center gap-6" delay={0.1}>
        <Action href="/contact">{copy.ctaPrimary}</Action>
        <Link
          href="#demo"
          className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--lv-accent-text)] transition-colors hover:text-[var(--lv-accent-fill-hover)]"
        >
          {copy.ctaSecondary}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </Rise>
    </Section>
  );
}
