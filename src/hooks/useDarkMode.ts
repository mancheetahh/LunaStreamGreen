import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'green';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('lunastream-theme') as Theme;
    if (stored === 'light' || stored === 'dark' || stored === 'green') {
      return stored;
    }
    // Default to system preference on first visit
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const isDark = theme === 'dark';
  const isGreen = theme === 'green';

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove('dark', 'green');
    
    // Add the appropriate theme class
    if (isDark) {
      root.classList.add('dark');
    } else if (isGreen) {
      root.classList.add('green');
    }
    
    // Store theme preference
    localStorage.setItem('lunastream-theme', theme);
  }, [isDark, isGreen, theme]);

  const toggleTheme = () => {
    setTheme(current => {
      if (current === 'light') return 'dark';
      if (current === 'dark') return 'green';
      return 'light';
    });
  };

  return { theme, isDark, isGreen, toggleTheme };
};