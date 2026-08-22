'use client';

import { type ReactNode } from 'react';
import { LayoutProvider } from '@/lib/context';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer';

function Shell({ children }: { children: ReactNode }) {
  // Fondo y texto salen de los tokens, no de un estilo en linea con valores
  // de JavaScript: duplicaban --surface-0 y --text-0, y al ir en linea ganaban
  // a cualquier tema definido en CSS. Con los tokens, la home puede pedir la
  // paleta clara y la barra y el pie la siguen.
  return (
    <div className="flex w-full flex-col bg-[var(--surface-0)] text-[var(--text-0)] transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

/**
 * Cascara de cliente. Existe para que layout.tsx pueda seguir siendo un
 * componente de servidor y exportar metadata: Next no permite exportar
 * metadata desde un archivo marcado con 'use client', y sin ella la pagina
 * se quedaba sin <title> ni meta description.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <LayoutProvider>
      <Shell>{children}</Shell>
    </LayoutProvider>
  );
}
