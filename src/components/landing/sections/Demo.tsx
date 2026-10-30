import Image from 'next/image';
import { Play } from 'lucide-react';
import type { LandingCopy } from '@/lib/copy/landing';
import { Badge, Heading } from '../primitives';
import { Rise } from '../motion';

/**
 * Bloque de demo. Segundo uso del recuadro claro incrustado.
 * El boton de play es un placeholder: hoy no abre nada.
 * TODO(demo): enlazar al recorrido interactivo o al video cuando exista.
 */
export function Demo({ copy }: { copy: LandingCopy['demo'] }) {
  return (
    <section id="demo" className="px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[var(--lv-radius-block)] bg-[var(--lv-block)] px-5 pb-0 pt-20 sm:px-8 md:pt-24">
        <Rise className="mx-auto max-w-[680px] text-center">
          <Badge onLight>{copy.badge}</Badge>
          <Heading title={copy.title} onLight className="mt-7 text-[clamp(2rem,4.6vw,3.4rem)]" />
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-relaxed text-[var(--lv-block-muted)]">
            {copy.description}
          </p>
        </Rise>

        <Rise delay={0.1} className="relative mx-auto mt-14 max-w-[1080px]">
          <div className="overflow-hidden rounded-t-[28px] border border-b-0 border-[var(--lv-block-line)] bg-white p-2 shadow-[0_-20px_60px_-40px_rgba(23,16,46,0.6)]">
            {/* TODO(imagenes): captura real del panel, 2160x1160. */}
            <Image
              src="/product/demo-panel.webp"
              alt={copy.imageAlt}
              width={2160}
              height={1160}
              loading="lazy"
              className="w-full rounded-t-[20px]"
            />
          </div>

          <button
            type="button"
            className="group absolute left-1/2 top-[38%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-[var(--lv-block-btn-bg)] py-2 pl-2 pr-5 shadow-[0_18px_50px_-18px_rgba(23,16,46,0.65)] backdrop-blur transition-transform duration-300 hover:scale-[1.03] active:scale-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--lv-accent-fill)]">
              <Play className="h-4 w-4 translate-x-px fill-white text-white" aria-hidden />
            </span>
            <span className="text-[14px] font-semibold text-[var(--lv-block-btn-text)]">{copy.play}</span>
          </button>
        </Rise>
      </div>
    </section>
  );
}
