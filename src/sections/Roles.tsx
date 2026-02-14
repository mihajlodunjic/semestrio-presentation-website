import { Check } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const roleCards = [
  {
    title: 'SUPER_ADMIN',
    badge: 'Admin',
    subtitle: 'Upravlja školama i licencama, vidi sve.',
    rights: ['Upravljanje tenantima', 'Pregled svih licenci i sezona', 'Globalna kontrola pristupa'],
  },
  {
    title: 'SCHOOL_ADMIN',
    badge: 'Admin',
    subtitle: 'Kursevi/grupe/lekcije/materijali + odobravanje upisa.',
    rights: ['Kreiranje kurseva i grupa', 'Odobravanje uplata i upisa', 'Objava lekcija i materijala'],
  },
  {
    title: 'STUDENT',
    badge: 'Student',
    subtitle: 'Vidi svoje upise i sadržaj samo kad ima pravo pristupa.',
    rights: ['Pregled aktivnih upisa', 'Pristup lekcijama po pravilima', 'Jasan status svakog kursa'],
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
