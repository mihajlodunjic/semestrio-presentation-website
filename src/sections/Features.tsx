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
    description: 'Struktura koja prati realan rad skole i raspored grupa.',
    icon: GraduationCap,
  },
  {
    title: 'Video i PDF materijali',
    description: 'Materijali su vezani za lekcije i lako dostupni pravim korisnicima.',
    icon: FileText,
  },
  {
    title: 'Draft / Published lekcije',
    description: 'Objavi tek kada je spremno, bez izlaska nepotpunog sadrzaja.',
    icon: Signal,
  },
  {
    title: 'Live link bez integracija',
    description: 'Dodaj Zoom, Meet ili Teams link direktno u lekciju.',
    icon: Link2,
  },
  {
    title: 'Upisi sa statusima',
    description: 'Jasni statusi PENDING/ACTIVE olaksavaju administraciju.',
    icon: Users,
  },
  {
    title: 'Sezonske licence',
    description: 'ACTIVE/SCHEDULED/PAUSED statusi drze poslovna pravila pod kontrolom.',
    icon: CalendarClock,
  },
  {
    title: 'Kontrola pristupa po pravilima',
    description: 'Pristup je uslovljen aktivnim upisom i efektivnom sezonom.',
    icon: Lock,
  },
  {
    title: 'Limit ucenika po licenci',
    description: 'Distinct brojanje ucenika bez dupliranja po predmetima.',
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
            title="Core funkcije fokusirane na operativnu stabilnost"
            subtitle="MVP obuhvata najvaznije procese koji najvise opterecuju administraciju skole."
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
              MVP je fokusiran na jednostavnost: bez placanja u aplikaciji, bez notifikacija i bez chat-a - stabilno i jasno.
            </p>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
