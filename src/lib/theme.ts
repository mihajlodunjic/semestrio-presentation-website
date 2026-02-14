export type ThemeMode = 'light' | 'dark';

const THEME_KEY = 'semestrio-theme';

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function getInitialTheme(): ThemeMode {
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return 'light';
}

export function applyTheme(theme: ThemeMode): void {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  window.localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme(current: ThemeMode): ThemeMode {
  return current === 'light' ? 'dark' : 'light';
}

export function syncThemeWithSystemFallback(): ThemeMode {
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return systemPrefersDark() ? 'dark' : 'light';
}
