import React, { useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
  inlineTheme?: Record<string, string>;
}

export function ThemeProvider({
  children,
  inlineTheme,
}: ThemeProviderProps) {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <div style={inlineTheme as React.CSSProperties}>
      {children}
    </div>
  );
}
