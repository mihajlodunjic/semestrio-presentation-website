import {
  CalendarClock,
  FileText,
  GraduationCap,
  Link2,
  Lock,
  PlayCircle,
  Signal,
  Users,
} from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const features = [
  {
    title: 'Kursevi, grupe i lekcije',
    description: 'Struktura koja prati realan rad škole i raspored grupa.',
    icon: GraduationCap,
  },
  {
    title: 'Video i PDF materijali',
    description: 'Materijali su vezani za lekcije i lako dostupni pravim korisnicima.',
    icon: FileText,
  },
  {
    title: 'Nacrt / Objavljeno',
    description: 'Objavite lekciju tek kada je spremna, bez izlaska nepotpunog sadržaja.',
    icon: Signal,
  },
  {
    title: 'Online čas (link)',
    description: 'Samo nalepite link za čas (Zoom/Meet/Teams) direktno u lekciju.',
    icon: Link2,
  },
  {
    title: 'Upisi sa statusima',
    description: 'Jasan status upisa: na čekanju / aktivan.',
    icon: Users,
  },
  {
    title: 'Licence po školskoj godini',
    description: 'Licenca može biti aktivna, planirana ili pauzirana, uz jasna pravila.',
    icon: CalendarClock,
  },
  {
    title: 'Kontrola pristupa po pravilima',
    description: 'Pristup je vezan za aktivan upis i važeću licencu.',
    icon: Lock,
  },
  {
    title: 'Limit učenika po licenci',
    description: 'Broji se jedinstveni broj učenika (svaki učenik se računa jednom).',
    icon: PlayCircle,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Funkcionalnosti"
            title="Ključne funkcije za uredno vođenje škole"
            subtitle="Semestrio pokriva procese koji najviše opterećuju administraciju škole: upise, lekcije, materijale i pravila pristupa."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.03}>
              <Card className="h-full p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <feature.icon size={20} className="text-brand-700" />
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <Card className="mt-8 border-brand-gray-200 bg-soft p-5 sm:p-6">
            <p className="text-sm text-muted sm:text-base">
              Semestrio je fokusiran na stabilno vođenje osnovnih procesa. Dodatne opcije (online plaćanje, notifikacije, chat) uvodimo po potrebi.
            </p>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
