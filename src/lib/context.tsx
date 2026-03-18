'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type Language } from './translations';

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

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = (localStorage.getItem('language') as Language) || 'en';
    setLanguageState(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Dark mode only — VoxAlly brand palette
  const bgColor = '#0d0a1e';
  const altBgColor = '#080615';
  const textColor = '#ffffff';
  const mutedText = 'rgba(255,255,255,0.65)';
  const borderColor = 'rgba(145, 56, 213, 0.25)';
  const secondaryBgColor = 'rgba(145, 56, 213, 0.08)';
  const hoverBgColor = 'rgba(145, 56, 213, 0.15)';

  return (
    <LayoutContext.Provider
      value={{
        language,
        setLanguage: setLanguageState,
        bgColor,
        altBgColor,
        textColor,
        mutedText,
        borderColor,
        secondaryBgColor,
        hoverBgColor,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider');
  }
  return context;
}
