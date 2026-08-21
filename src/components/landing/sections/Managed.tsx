'use client';

import Image from 'next/image';
import { useReducedMotion } from 'motion/react';
import type { LandingCopy } from '@/lib/copy/landing';
import { Action, Badge, Heading } from '../primitives';
import { Rise, RiseGroup, RiseItem } from '../motion';

/**
 * Bloque de contraste. La pagina es oscura, asi que este recuadro claro
 * incrustado con radio grande corta el scroll y marca "esto es otra cosa".
 * Se usa el mismo recurso en Demo y en el CTA final, y en ningun sitio mas:
 * repetirlo mas veces lo convertiria en ruido.
 */

/** Posiciones en el viewBox 1000x520. Cuatro a cada lado, en espejo. */
const NODES = [
  { slug: 'whatsapp', name: 'WhatsApp', x: 130, y: 72 },
  { slug: 'hubspot', name: 'HubSpot', x: 74, y: 208 },
  { slug: 'zapier', name: 'Zapier', x: 74, y: 344 },
  { slug: 'make', name: 'Make', x: 130, y: 470 },
  { slug: 'googlecalendar', name: 'Google Calendar', x: 870, y: 72 },
  { slug: 'n8n', name: 'n8n', x: 926, y: 208 },
  { slug: 'notion', name: 'Notion', x: 926, y: 344 },
  { slug: 'airtable', name: 'Airtable', x: 870, y: 470 },
];

const CENTER = { x: 500, y: 260 };

export function Managed({ copy }: { copy: LandingCopy['managed'] }) {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[var(--lv-radius-block)] bg-[var(--lv-block)] px-5 py-20 sm:px-8 md:py-24">
        <Rise className="mx-auto max-w-[680px] text-center">
          <Badge onLight>{copy.badge}</Badge>
          <Heading title={copy.title} onLight className="mt-7 text-[clamp(2rem,4.6vw,3.4rem)]" />
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-relaxed text-[var(--lv-block-muted)]">
            {copy.description}
          </p>
          <div className="mt-9">
            <Action href="/contact" variant="onLight">
              {copy.cta}
            </Action>
          </div>
        </Rise>

        <Constellation reduce={!!reduce} />
      </div>
    </section>
  );
}

/**
 * Constelacion de integraciones. Los conectores son curvas de Bezier del nodo
 * al centro; encima corre un segundo trazo con dasharray animado que simula el
 * flujo de datos. La animacion es puramente decorativa, por eso todo el bloque
 * va aria-hidden y los nombres de marca viven en el alt de cada logo.
 */
function Constellation({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-[1000px]" style={{ aspectRatio: '1000 / 520' }}>
      <svg
        viewBox="0 0 1000 520"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden
        focusable="false"
      >
        {NODES.map((node, i) => {
          const midX = (node.x + CENTER.x) / 2;
          const d = `M ${node.x} ${node.y} C ${midX} ${node.y}, ${midX} ${CENTER.y}, ${CENTER.x} ${CENTER.y}`;
          return (
            <g key={node.slug}>
              <path d={d} stroke="var(--lv-block-line)" strokeWidth="1.5" />
              {!reduce && (
                <path
                  d={d}
                  stroke="var(--lv-block-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="lv-beam"
                  style={
                    {
                      '--lv-beam-delay': `${i * 0.45}s`,
                      '--lv-beam-duration': `${3.6 + (i % 3) * 0.5}s`,
                    } as React.CSSProperties
                  }
                />
              )}
            </g>
          );
        })}
      </svg>

      <RiseGroup className="absolute inset-0" stagger={0.07}>
        {NODES.map((node) => (
          // El contenedor posiciona y centra; la animacion vive dentro, para que
          // el transform del centrado y el de la entrada no se pisen.
          <div
            key={node.slug}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(node.x / 1000) * 100}%`, top: `${(node.y / 520) * 100}%` }}
          >
            <RiseItem className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--lv-block-line)] bg-white shadow-[0_10px_30px_-18px_rgba(23,16,46,0.5)] sm:h-14 sm:w-14 md:h-16 md:w-16">
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG externo de tamano fijo. */}
              <img
                src={`https://cdn.simpleicons.org/${node.slug}`}
                alt={node.name}
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
                className="h-1/2 w-1/2 object-contain"
              />
            </RiseItem>
          </div>
        ))}
      </RiseGroup>

      <div
        className="absolute left-1/2 top-1/2 flex w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[var(--lv-block-line)] bg-white px-4 py-3 shadow-[0_18px_44px_-20px_rgba(85,38,180,0.55)] sm:w-[150px] md:w-[180px]"
      >
        <Image src="/brand/allyvox.svg" alt="AllyVox" width={120} height={54} className="w-full" />
      </div>
    </div>
  );
}
