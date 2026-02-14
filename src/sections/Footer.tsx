import { BrandLogo } from '../components/BrandLogo';
import { Container } from '../components/ui/Container';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const footerLinks = [
  { href: '#home', label: 'Početna' },
  { href: '#how', label: 'Kako radi' },
  { href: '#features', label: 'Funkcionalnosti' },
  { href: '#roles', label: 'Za koga' },
  { href: '#pricing', label: 'Cenovnik' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
];

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-surface py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLogo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Semestrio je platforma u oblaku za organizaciju nastave, upisa i kontrole pristupa u školama i edukativnim centrima.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">Navigacija</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition-colors hover:text-primary hover:underline hover:decoration-brand-500" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">Pravno</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
              <button
                type="button"
                className="text-left transition-colors hover:text-primary hover:underline hover:decoration-brand-500"
                onClick={() => onOpenLegal('privacy')}
              >
                Politika privatnosti
              </button>
              <button
                type="button"
                className="text-left transition-colors hover:text-primary hover:underline hover:decoration-brand-500"
                onClick={() => onOpenLegal('terms')}
              >
                Uslovi korišćenja
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted">© {new Date().getFullYear()} Semestrio. Sva prava zadržana.</p>
      </Container>
    </footer>
  );
}
