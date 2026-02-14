import { Check } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const roleCards = [
  {
    title: 'Vlasnik / direktor',
    badge: 'Vlasnik',
    subtitle: 'Uvid u upise, licence i ključna pravila rada škole.',
    rights: ['Pregled upisa i pristupa', 'Uvid u licence i iskorišćenost paketa', 'Kontrola osnovnih pravila škole'],
  },
  {
    title: 'Administracija škole',
    badge: 'Administracija',
    subtitle: 'Kursevi, grupe, lekcije, materijali i aktiviranje upisa.',
    rights: ['Kreiranje kurseva i grupa', 'Objava lekcija i materijala', 'Potvrda uplata i aktiviranje upisa'],
  },
  {
    title: 'Učenik',
    badge: 'Učenik',
    subtitle: 'Vidi svoje upise i materijale samo kada ima pravo pristupa.',
    rights: ['Pregled svojih upisa i statusa', 'Pristup lekcijama po pravilima', 'Linkovi i materijali na jednom mestu'],
  },
];

export function Roles() {
  return (
    <section id="roles" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Za koga"
            title="Uloge koje prate realne odgovornosti"
            subtitle="Svaka uloga dobija jasna prava bez preklapanja odgovornosti."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {roleCards.map((role, index) => (
            <Reveal key={role.title} delay={index * 0.05}>
              <Card className="h-full p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <Badge>{role.badge}</Badge>
                <h3 className="mt-4 text-xl font-semibold">{role.title}</h3>
                <p className="mt-3 text-sm text-muted">{role.subtitle}</p>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {role.rights.map((right) => (
                    <li key={right} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
