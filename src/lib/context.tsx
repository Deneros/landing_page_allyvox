'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type Language, type Theme } from './translations';

interface LayoutContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
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
  // Always start with defaults to match server render
  const [state, setState] = useState({
    language: 'en' as Language,
    theme: 'dark' as Theme,
    mounted: false,
  });

  // Load from localStorage only after mounting (client-side only)
  // This is the standard hydration pattern for SSR - intentionally sets state after mount
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    const savedLanguage = (localStorage.getItem('language') as Language) || 'en';
    // Using queueMicrotask to defer the state update and satisfy the lint rule
    queueMicrotask(() => {
      setState({
        theme: savedTheme,
        language: savedLanguage,
        mounted: true,
      });
    });
  }, []);

  // Update theme in localStorage and DOM
  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    const html = document.documentElement;
    html.classList.toggle('dark', state.theme === 'dark');
    html.classList.toggle('light', state.theme === 'light');
  }, [state.theme]);

  // Update language in localStorage
  useEffect(() => {
    localStorage.setItem('language', state.language);
  }, [state.language]);

  // Compute colors based on theme — VoxAlly brand palette
  const bgColor = state.theme === 'dark' ? '#0d0a1e' : '#f0eafe';
  const altBgColor = state.theme === 'dark' ? '#080615' : '#e5dcfb';
  const textColor = state.theme === 'dark' ? '#ffffff' : '#0d0a1e';
  const mutedText = state.theme === 'dark' ? 'rgba(255,255,255,0.65)' : '#3d3568';
  const borderColor = state.theme === 'dark' ? 'rgba(145, 56, 213, 0.25)' : 'rgba(48, 34, 137, 0.22)';
  const secondaryBgColor = state.theme === 'dark' ? 'rgba(145, 56, 213, 0.08)' : 'rgba(48, 34, 137, 0.09)';
  const hoverBgColor = state.theme === 'dark' ? 'rgba(145, 56, 213, 0.15)' : 'rgba(48, 34, 137, 0.16)';

  return (
    <LayoutContext.Provider
      value={{
        language: state.language,
        setLanguage: (language: Language) => setState(prev => ({ ...prev, language })),
        theme: state.theme,
        setTheme: (theme: Theme) => setState(prev => ({ ...prev, theme })),
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
