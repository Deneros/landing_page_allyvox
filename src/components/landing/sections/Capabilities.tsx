import {
  AudioLines,
  BarChart3,
  CalendarCheck,
  MessageCircle,
  MessageSquare,
  RefreshCw,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { LandingCopy } from '@/lib/copy/landing';
import { Marquee } from '../Marquee';

/**
 * Cinta de capacidades. Va sin titular a proposito: es un respiro entre dos
 * secciones densas, y un encabezado mas la volveria otra seccion con peso.
 *
 * El orden de iconos sigue al orden del copy, asi que ambos arrays van
 * emparejados por indice.
 */
const ICONS: LucideIcon[] = [
  Zap,
  RefreshCw,
  BarChart3,
  AudioLines,
  MessageCircle,
  MessageSquare,
  CalendarCheck,
  Target,
];

export function Capabilities({ copy }: { copy: LandingCopy['capabilities'] }) {
  return (
    <section className="py-6 md:py-10">
      <Marquee duration={52}>
        {copy.items.map((label, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={label}
              className="mx-2.5 flex w-[210px] shrink-0 flex-col items-center gap-4 rounded-[var(--lv-radius-card)] border border-[var(--lv-line)] bg-[var(--lv-card)] px-6 py-7"
            >
              <Icon className="h-9 w-9 text-[var(--lv-accent-text)]" strokeWidth={1.5} aria-hidden />
              <span className="text-center text-[15px] text-[var(--text-1)]">{label}</span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
