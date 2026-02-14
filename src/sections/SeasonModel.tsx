import { Dot } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const bullets = [
  'Licenca predstavlja jednu školsku godinu (npr. 2025/26).',
  'Učenik ima trajan nalog, ali svake godine pravi novi upis.',
  'Pristup sadržaju postoji samo uz aktivan upis i važeću licencu.',
  'Aktiviranje upisa je moguće kada licenca počne da važi i u okviru limita paketa.',
  'Rezultat je manje konfuzije i manje zahteva za pristup \"od prošle godine\".',
];

export function SeasonModel() {
  return (
    <section id="season" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Diferencijator"
            title="Licence po školskoj godini = red u poslovnoj logici"
            subtitle="Jasna pravila pristupa kroz školske godine, bez mešanja generacija."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Card className="h-full p-6 sm:p-7">
              <ul className="space-y-4 text-sm text-muted sm:text-base">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start">
                    <Dot className="mt-0.5 shrink-0 text-brand-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.08}>
            <Card className="h-full border-brand-gray-200 bg-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-700">Info panel</p>
              <h3 className="mt-3 text-xl font-semibold">Nalog nije isto što i upis</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Nalog je trajan identitet učenika. Upis određuje pravo pristupa u konkretnoj školskoj godini.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
