'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { type Language } from './translations';

const LANGUAGE_KEY = 'language';
const LANGUAGE_EVENT = 'allyvox:language-change';
/** Espanol es el idioma principal del producto; el ingles es la traduccion. */
const DEFAULT_LANGUAGE: Language = 'es';

interface LayoutContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  bgColor: string;
  altBgColor: string;
  textColor: string;
  mutedText: string;
  borderColor: string;
  secondaryBgColor: string;
  hoverBgColor: string;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

/**
 * El idioma se lee de localStorage con useSyncExternalStore en vez de
 * useState + useEffect. Asi el servidor renderiza siempre el snapshot por
 * defecto, el cliente reconcilia en la hidratacion, y no hay un setState
 * en efecto provocando un render en cascada.
 */
function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(LANGUAGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(LANGUAGE_EVENT, onChange);
  };
}

function getSnapshot(): Language {
  const stored = window.localStorage.getItem(LANGUAGE_KEY);
  return stored === 'en' || stored === 'es' ? stored : DEFAULT_LANGUAGE;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

export function LayoutProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sincroniza el atributo lang del documento con el idioma activo.
  // Va en un efecto y no dentro de setLanguage porque el idioma tambien
  // puede venir de localStorage en la primera carga o de otra pestana:
  // en esos casos setLanguage nunca se llama y el lang se quedaria en 'es'
  // con el contenido en ingles. Los lectores de pantalla eligen la voz a
  // partir de ese atributo.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    window.localStorage.setItem(LANGUAGE_KEY, next);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }, []);

  // Apuntan a los tokens en vez de copiar sus valores. Antes eran hexadecimales
  // duplicados de globals.css, y al aplicarse como estilo en linea ganaban a
  // cualquier tema definido en CSS: la barra y el pie se quedaban oscuros
  // aunque la pagina pidiera la paleta clara. Como var() se resuelve contra el
  // elemento, ahora siguen al tema que este activo en esa rama del arbol.
  const value: LayoutContextType = {
    language,
    setLanguage,
    bgColor: 'var(--surface-0)',
    altBgColor: 'var(--theme-bg-alt)',
    textColor: 'var(--text-0)',
    mutedText: 'var(--text-1)',
    borderColor: 'var(--line-strong)',
    secondaryBgColor: 'var(--surface-2)',
    hoverBgColor: 'var(--surface-3)',
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider');
  }
  return context;
}
