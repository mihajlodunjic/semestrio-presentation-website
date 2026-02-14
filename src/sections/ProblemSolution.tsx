import { CheckCircle2, CircleAlert } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const problems = [
  'Upisi i uplate se prate rucno',
  'Nejasno ko ima pravo na koje materijale',
  'Sezone se mesaju, ucenici traze pristup od prosle godine',
  'Materijali su rasuti po linkovima i folderima',
];

const solutions = [
  'Jasan tok upisa: PENDING -> ACTIVE',
  'Pristup samo uz aktivan upis i efektivnu licencu',
  'Materijali organizovani po lekcijama',
  'Skola kao tenant: izolacija podataka',
];

export function ProblemSolution() {
  return (
    <section id="problem" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Problem i resenje"
            title="Od rasutih procesa do jasne operativne rutine"
            subtitle="Semestrio uvodi red u upise, pristup sadrzaju i sezonska pravila rada skola i edukativnih centara."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-6 sm:p-7">
              <h3 className="text-xl font-semibold">Problem danas</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted sm:text-base">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleAlert size={18} className="mt-0.5 shrink-0 text-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full p-6 sm:p-7">
              <h3 className="text-xl font-semibold">Semestrio resava</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted sm:text-base">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
