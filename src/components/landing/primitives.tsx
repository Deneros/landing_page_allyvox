import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Titled } from '@/lib/copy/landing';

/**
 * Titular de seccion. El enfasis va en serif italica, contra la sans de marca.
 * `onLight` invierte el color para los bloques claros incrustados.
 */
export function Heading({
  title,
  as: Tag = 'h2',
  className = '',
  onLight = false,
}: {
  title: Titled;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  onLight?: boolean;
}) {
  return (
    <Tag className={`lv-display text-balance ${onLight ? 'text-[var(--lv-block-text)]' : 'text-[var(--text-0)]'} ${className}`}>
      {title.lead}{' '}
      <span className={`lv-accent ${onLight ? 'lv-accent-on-light' : ''}`}>{title.accent}</span>
    </Tag>
  );
}

/** Pastilla de encabezado. Se usa tres veces en la pagina, no mas. */
export function Badge({ children, onLight = false }: { children: ReactNode; onLight?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] ${
        onLight
          ? 'border border-[var(--lv-block-line)] bg-[var(--lv-block-badge-bg)] text-[var(--lv-block-text)]'
          : 'border border-[var(--lv-line)] bg-[var(--lv-card)] text-[var(--text-1)]'
      }`}
    >
      {children}
    </span>
  );
}

type ButtonVariant = 'primary' | 'ghost' | 'onLight';

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--lv-accent-fill)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:bg-[var(--lv-accent-fill-hover)]',
  ghost:
    'border border-[var(--lv-line)] bg-[var(--lv-card)] text-[var(--text-0)] hover:border-[var(--line-strong)] hover:bg-[var(--lv-card-soft)]',
  onLight: 'bg-[var(--lv-block-btn-bg)] text-[var(--lv-block-btn-text)] hover:opacity-90',
};

/**
 * CTA. El estado :active hunde el boton un pixel para que el clic se sienta.
 * Todas las variantes cumplen contraste AA sobre su fondo.
 */
export function Action({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[var(--lv-radius-btn)] px-7 py-[15px] text-[15px] font-semibold transition-[background-color,border-color,transform] duration-200 active:translate-y-px ${BUTTON_STYLES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Envoltura de seccion. Un solo ancho de contenedor en toda la pagina. */
export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
