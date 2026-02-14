import { CheckCircle2, Layers, ShieldCheck } from 'lucide-react';
import { RibbonBackground } from '../components/RibbonBackground';
import { Reveal } from '../components/motion/Reveal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';

function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const benefits = [
  { icon: Layers, text: 'Manje ručnog rada oko upisa i uplata' },
  { icon: ShieldCheck, text: 'Jasna pravila pristupa materijalima' },
  { icon: CheckCircle2, text: 'Školske godine bez konfuzije' },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-20 sm:pb-24 sm:pt-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
      <RibbonBackground className="-z-10" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Platforma u oblaku za škole</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Organizujte nastavu, upise i pristup materijalima - bez haosa.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Semestrio je platforma u oblaku za škole i edukativne centre: kursevi, grupe, lekcije, video/PDF materijali i licence po školskoj godini, sa jasnim pravilima pristupa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => scrollToId('contact')}>Zakažite demo</Button>
              <Button variant="secondary" onClick={() => scrollToId('pricing')}>
                Pogledajte cene
              </Button>
            </div>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-center gap-3 text-sm text-muted sm:text-base">
                  <benefit.icon size={18} className="text-brand-700" />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.08}>
            <Card className="relative overflow-hidden border-brand-gray-200 p-6 sm:p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/20 blur-2xl" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Pregled sistema</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-surface bg-soft p-4">
                  <p className="text-sm text-muted">Kursevi</p>
                  <p className="mt-2 text-2xl font-semibold">18</p>
                </div>
                <div className="rounded-xl border border-surface bg-soft p-4">
                  <p className="text-sm text-muted">Grupe</p>
                  <p className="mt-2 text-2xl font-semibold">42</p>
                </div>
                <div className="rounded-xl border border-surface bg-soft p-4">
                  <p className="text-sm text-muted">Lekcije</p>
                  <p className="mt-2 text-2xl font-semibold">236</p>
                </div>
                <div className="rounded-xl border border-surface bg-soft p-4">
                  <p className="text-sm text-muted">Upisi</p>
                  <div className="mt-2 flex items-center gap-2 text-sm font-medium">
                    <span className="rounded-full bg-brand-500/20 px-2 py-1 text-brand-700">NA ČEKANJU</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-600">AKTIVNO</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
