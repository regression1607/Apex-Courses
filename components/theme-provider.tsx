import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

export function ThemeProvider({ children, defaultTheme = 'light', storageKey = 'theme' }: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme={defaultTheme} attribute="class" storageKey={storageKey}>
      {children}
    </NextThemesProvider>
  );
}