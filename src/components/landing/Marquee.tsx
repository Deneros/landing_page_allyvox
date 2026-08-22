'use client';

import type { ReactNode } from 'react';

/**
 * Cinta infinita. La pista lleva la lista duplicada y el keyframe la desplaza
 * exactamente -50%, asi el salto es invisible. La copia va aria-hidden para
 * que un lector de pantalla no lea todo dos veces.
 *
 * Se pausa al pasar el cursor y se detiene con prefers-reduced-motion, ambos
 * resueltos en CSS (ver .lv-marquee-track en globals.css).
 */
export function Marquee({
  children,
  duration = 40,
  className = '',
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`lv-marquee lv-marquee-mask overflow-hidden ${className}`}>
      <div
        className="lv-marquee-track flex w-max"
        style={{ '--lv-marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
