'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import type { LandingCopy } from '@/lib/copy/landing';
import { SPRING } from '../motion';
import { Action } from '../primitives';

/**
 * Hero centrado con la captura de producto justo debajo, asomando por el borde
 * inferior del viewport para invitar al scroll sin necesidad de un cartel.
 * El enfasis del titular va en la sans de marca en morado; la serif italica se
 * reserva para los titulares de seccion, que es donde marca ritmo.
 */
export function Hero({ copy }: { copy: LandingCopy['hero'] }) {
  const reduce = useReducedMotion();

  // Entrada escalonada al cargar. Cada elemento sale 20px por debajo.
  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0.001, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING, delay },
  });

  return (
    <section className="relative overflow-hidden px-4 pt-28 sm:px-6 md:pt-32">
      {/* Un solo halo, muy abierto y detras de todo. Sin neon. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[1100px] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(closest-side, var(--lv-halo), transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[840px] text-center">
          <motion.p {...item(0.05)} className="mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--lv-line)] bg-[var(--lv-card)] px-4 py-2 text-[13px] text-[var(--text-1)]">
              <span className="lv-pulse h-1.5 w-1.5 rounded-full bg-[#34c77b]" />
              {copy.badge}
            </span>
          </motion.p>

          <motion.h1
            {...item(0.12)}
            className="lv-display text-balance text-[clamp(2.6rem,7vw,4.75rem)] text-[var(--text-0)]"
          >
            {copy.title.lead}
            <br />
            <span className="text-[var(--lv-accent-text)]">{copy.title.accent}</span>
          </motion.h1>

          <motion.p
            {...item(0.19)}
            className="mx-auto mt-7 max-w-[560px] text-[17px] leading-relaxed text-[var(--text-1)]"
          >
            {copy.description}
          </motion.p>

          <motion.div {...item(0.26)} className="mt-9">
            <Action href="/contact">{copy.cta}</Action>
          </motion.div>
        </div>

        {/* Marco de la captura. La imagen se corta abajo a proposito. */}
        <motion.div
          initial={reduce ? false : { opacity: 0.001, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.34 }}
          className="relative mx-auto mt-16 max-w-[1080px] md:mt-20"
        >
          <div className="relative overflow-hidden rounded-t-[var(--lv-radius-frame)] border border-t-[var(--line-strong)] border-x-[var(--lv-line)] bg-[var(--lv-card)] p-2 shadow-[var(--lv-shadow-feature)]">
            {/* TODO(imagenes): sustituir por la captura real del panel, 1400x1080. */}
            <Image
              src="/product/hero-producto.webp"
              alt={copy.imageAlt}
              width={1400}
              height={1080}
              priority
              className="w-full rounded-t-[28px]"
            />
          </div>

          <FloatingCards copy={copy.floats} reduce={!!reduce} />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Tarjetas superpuestas sobre la captura. Son las que dan sensacion de producto
 * vivo. Se ocultan por debajo de md porque ahi no hay sitio y estorban.
 * Contenido de muestra: los valores son de ejemplo, no metricas reales.
 */
function FloatingCards({ copy, reduce }: { copy: LandingCopy['hero']['floats']; reduce: boolean }) {
  const float = (delay: number) => ({
    initial: reduce ? false : { opacity: 0.001, y: 16, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { ...SPRING, delay },
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <motion.div
        {...float(0.6)}
        className="absolute left-[3%] top-[26%] rounded-2xl border border-[var(--lv-line)] bg-[var(--surface-1)]/95 px-4 py-3 shadow-[var(--lv-shadow-card)] backdrop-blur"
      >
        <p className="flex items-center gap-2 text-[12px] font-semibold text-[var(--text-0)]">
          <span className="lv-pulse h-1.5 w-1.5 rounded-full bg-[#34c77b]" />
          {copy.live}
        </p>
        <div className="mt-2 flex items-end gap-[3px]">
          {[9, 15, 7, 18, 11, 20, 8, 14, 6, 16].map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-[var(--lv-accent-fill)]"
              style={{ height: `${h}px`, opacity: 0.4 + (h / 20) * 0.6 }}
            />
          ))}
        </div>
        <p className="mt-2 text-[11px] text-[var(--text-2)]">{copy.caption}</p>
      </motion.div>

      <motion.div
        {...float(0.75)}
        className="absolute right-[4%] top-[46%] rounded-2xl border border-[var(--lv-line)] bg-[var(--surface-1)]/95 px-4 py-3 shadow-[var(--lv-shadow-card)] backdrop-blur"
      >
        <p className="text-[20px] font-semibold leading-none text-[var(--text-0)]">{copy.metric}</p>
        <p className="mt-1.5 text-[11px] text-[var(--text-2)]">{copy.metricLabel}</p>
      </motion.div>
    </div>
  );
}
