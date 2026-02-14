import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';
import type { ThemeMode } from '../lib/theme';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      onClick={onToggle}
      className="h-10 w-10 rounded-full p-0"
      aria-label={theme === 'light' ? 'Ukljuci dark mode' : 'Ukljuci light mode'}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
}
