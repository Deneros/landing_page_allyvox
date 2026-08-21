'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

/**
 * Curva de entrada. Estos valores estan tomados del sitio de referencia:
 * spring stiffness 400 / damping 80 / mass 1, desplazamiento de 20px y
 * opacidad de 0.001 a 1. No es una aproximacion, es la misma configuracion.
 */
export const SPRING = { type: 'spring', stiffness: 400, damping: 80, mass: 1 } as const;

const VIEWPORT = { once: true, amount: 0.2 } as const;

type Tag = 'div' | 'section' | 'li' | 'span' | 'h2' | 'p';

interface RiseProps {
  children: ReactNode;
  className?: string;
  /** Retraso en segundos para escalonar hermanos a mano. */
  delay?: number;
  /** Direccion de entrada. El sitio de referencia usa 20 hacia arriba casi siempre. */
  from?: 'below' | 'above';
  as?: Tag;
}

/**
 * Entrada al aparecer en pantalla. Solo transform y opacity, para no salir
 * del compositor. Con prefers-reduced-motion el contenido nace en su sitio.
 */
export function Rise({ children, className, delay = 0, from = 'below', as = 'div' }: RiseProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const y = from === 'below' ? 20 : -20;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0.001, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </Tag>
  );
}

/** Contenedor que escalona a sus hijos. Los hijos deben ser <RiseItem>. */
export function RiseGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
  };

  return (
    <Tag className={className} variants={container} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
      {children}
    </Tag>
  );
}

export function RiseItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0.001, y: 20 },
    visible: { opacity: 1, y: 0, transition: SPRING },
  };

  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
