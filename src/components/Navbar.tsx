import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { cn } from '../lib/cn';
import type { ThemeMode } from '../lib/theme';

const NAV_ITEMS = [
  { id: 'home', label: 'Početna' },
  { id: 'how', label: 'Kako radi' },
  { id: 'features', label: 'Funkcionalnosti' },
  { id: 'roles', label: 'Za koga' },
  { id: 'pricing', label: 'Cenovnik' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Kontakt' },
] as const;

const OBSERVED_SECTIONS = ['home', 'problem', 'how', 'features', 'roles', 'season', 'pricing', 'faq', 'contact'] as const;

function mapSectionToNav(sectionId: string): string {
  if (sectionId === 'problem') return 'home';
  if (sectionId === 'season') return 'roles';
  return sectionId;
}

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navLookup = useMemo<Set<string>>(() => new Set(NAV_ITEMS.map((item) => item.id)), []);

  useEffect(() => {
    const sections = OBSERVED_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const sectionId = visible[0].target.id;
        const mapped = mapSectionToNav(sectionId);
        if (navLookup.has(mapped)) {
          setActive(mapped);
        }
      },
      {
        threshold: [0.15, 0.4, 0.7],
        rootMargin: '-30% 0px -55% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navLookup]);

  const closeMenu = () => setOpen(false);

  const handleDemo = () => {
    closeMenu();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-surface bg-surface backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between gap-4">
        <a href="#home" className="focus-visible:ring-brand rounded-md" onClick={closeMenu}>
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Glavna navigacija">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'relative text-sm font-medium text-muted transition-colors hover:text-primary hover:underline hover:decoration-brand-500 hover:underline-offset-4',
                active === item.id && 'text-brand-700',
              )}
            >
              {item.label}
              <span
                className={cn(
                  'absolute -bottom-2 left-0 h-0.5 w-full origin-left bg-brand-500 transition-transform',
                  active === item.id ? 'scale-x-100' : 'scale-x-0',
                )}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button onClick={handleDemo}>Zakaži demo</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button variant="ghost" className="h-10 w-10 rounded-full p-0" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Otvori navigaciju">
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            'absolute left-5 right-5 top-[4.75rem] rounded-2xl border border-surface bg-card p-4 shadow-card transition-all lg:hidden',
            open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobilna navigacija">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-soft hover:text-primary',
                  active === item.id && 'bg-soft text-brand-700',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="mt-3 w-full" onClick={handleDemo}>
            Zakaži demo
          </Button>
        </div>
      </Container>
    </header>
  );
}
