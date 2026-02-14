import { Reveal } from '../components/motion/Reveal';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { cn } from '../lib/cn';

const steps = [
  'Vaša škola dobija nalog i pristupni kod škole',
  'Administracija unosi kurseve → grupe → lekcije → materijale',
  'Učenik se registruje uz pristupni kod i prijavi kurs (upis je na čekanju)',
  'Administracija potvrdi uplatu → upis postaje aktivan (u važećoj školskoj godini i do limita)',
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Kako radi"
            title="Jasan tok od registracije do pristupa sadržaju"
            subtitle="Model je dizajniran da admin tim ima potpunu kontrolu, a učenik jednostavno iskustvo."
          />
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <ol className="grid gap-5 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className={cn(
                  'relative rounded-2xl border border-surface bg-card p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
                  'lg:min-h-[210px]',
                )}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-[#111111]">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
