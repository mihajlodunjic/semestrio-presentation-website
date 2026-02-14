import { Check } from 'lucide-react';
import { useMemo, useState } from 'react';
import { RibbonBackground } from '../components/RibbonBackground';
import { Reveal } from '../components/motion/Reveal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Input } from '../components/ui/Input';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ToggleSwitch } from '../components/ui/ToggleSwitch';
import { PRICING_BY_CYCLE, type BillingCycle } from '../data/pricing';
import { calcTotal, formatEUR, getPlanForStudents } from '../lib/pricing';
import { cn } from '../lib/cn';

function scrollToContact(): void {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>('SEASONAL_5M');
  const [studentsInput, setStudentsInput] = useState('50');

  const isAnnual = cycle === 'ANNUAL_12M';
  const plans = PRICING_BY_CYCLE[cycle];

  const parsedStudents = Number(studentsInput);

  const validationError = useMemo(() => {
    if (studentsInput.trim().length === 0) {
      return 'Unesite broj učenika.';
    }
    if (!Number.isFinite(parsedStudents)) {
      return 'Broj učenika mora biti broj.';
    }
    if (parsedStudents <= 0) {
      return 'Broj učenika mora biti veći od 0.';
    }
    if (parsedStudents > 2000) {
      return 'Maksimalno podržano je 2000 učenika za kalkulator.';
    }
    return null;
  }, [parsedStudents, studentsInput]);

  const recommendedPlan = useMemo(() => {
    if (validationError) return null;
    return getPlanForStudents(parsedStudents, cycle);
  }, [cycle, parsedStudents, validationError]);

  const breakdown = useMemo(() => {
    if (!recommendedPlan || validationError) return null;
    return calcTotal(parsedStudents, recommendedPlan);
  }, [parsedStudents, recommendedPlan, validationError]);

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-24">
      <RibbonBackground className="opacity-60" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Cenovnik"
            title="Transparentno formiranje cene po broju učenika"
            subtitle="Izaberite trajanje licence i odmah procenite trošak po formuli koja je jasna i predvidiva."
          />
        </Reveal>

        <Reveal className="mt-8" delay={0.05}>
          <div className="flex flex-col items-center gap-3">
            <ToggleSwitch
              checked={isAnnual}
              onChange={(checked) => setCycle(checked ? 'ANNUAL_12M' : 'SEASONAL_5M')}
              leftLabel="Sezonska (5 mes.)"
              rightLabel="Godišnja (12 mes.)"
              ariaLabel="Promenite tip licence"
            />
            <p className="text-center text-sm text-muted">
              Ukupno = max(minimalna cena paketa, broj_učenika × cena_po_učeniku).
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => {
            const highlights = plan.custom
              ? ['Svi moduli uključeni', 'Email podrška']
              : [
                  `Min. cena: ${formatEUR(plan.minPrice ?? 0)}`,
                  `Primer: ${plan.exampleText.replace('->', '→')}`,
                  'Svi moduli uključeni',
                  'Email podrška',
                ];

            return (
              <Reveal key={plan.id} delay={index * 0.04} className="h-full">
                <Card
                  className={cn(
                    'flex h-full flex-col rounded-3xl border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
                    plan.id === 'ENTERPRISE' ? 'border-brand-500' : 'border-surface',
                  )}
                >
                  <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                  <p className="mt-3 text-xl text-muted">
                    {plan.maxStudents === null ? '300+ učenika' : `Do ${plan.maxStudents} učenika`}
                  </p>

                  {plan.custom ? (
                    <p className="mt-5 text-4xl font-bold leading-none">Po dogovoru</p>
                  ) : (
                    <div className="mt-5 flex items-end gap-2">
                      <p className="text-4xl font-bold leading-none">{formatEUR(plan.perStudent ?? 0)}</p>
                      <p className="pb-1 text-xl font-medium text-muted">/ učenik</p>
                    </div>
                  )}

                  <ul className="mt-7 min-h-[9.5rem] space-y-3">
                    {highlights.map((item) => (
                      <li key={`${plan.id}-${item}`} className="flex items-start gap-2 text-xl text-muted">
                        <Check size={16} className="mt-1 shrink-0 text-brand-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      'mt-auto w-full rounded-full py-3 text-lg font-semibold',
                      plan.id === 'ENTERPRISE'
                        ? 'border-none shadow-none'
                        : 'border border-surface bg-card shadow-none hover:bg-soft',
                    )}
                    variant={plan.id === 'ENTERPRISE' ? 'primary' : 'secondary'}
                    onClick={scrollToContact}
                  >
                    {plan.id === 'ENTERPRISE' ? 'Kontaktirajte nas' : 'Zatražite ponudu'}
                  </Button>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8" delay={0.08}>
          <Card className="p-6 sm:p-7">
            <h3 className="text-xl font-semibold">Kalkulator cene</h3>
            <div className="mt-5 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Input
                  id="students"
                  type="number"
                  min={1}
                  max={2000}
                  step={1}
                  inputMode="numeric"
                  label="Broj učenika"
                  value={studentsInput}
                  onChange={(event) => setStudentsInput(event.target.value)}
                  aria-invalid={validationError ? 'true' : 'false'}
                />
                {validationError ? <p className="mt-2 text-sm text-rose-600">{validationError}</p> : null}
              </div>

              <div className="rounded-2xl border border-surface bg-soft p-5 lg:col-span-7">
                <p className="text-sm text-muted">Preporučeni paket</p>
                <p className="mt-1 text-2xl font-semibold">{recommendedPlan ? recommendedPlan.name : '-'}</p>

                <div className="mt-4 space-y-2 text-sm text-muted">
                  {!recommendedPlan || !breakdown ? (
                    <p>Unesite validan broj učenika za izračunavanje.</p>
                  ) : breakdown.isCustom ? (
                    <>
                      <p>Izračunata cena: Po dogovoru</p>
                      <p>Za ENTERPRISE paket cena se definiše prema potrebama škole.</p>
                    </>
                  ) : (
                    <>
                      <p>
                        {parsedStudents} x {formatEUR(recommendedPlan.perStudent ?? 0)} ={' '}
                        {formatEUR(breakdown.perStudentTotal ?? 0)}
                      </p>
                      <p>minimalna cena = {formatEUR(breakdown.minPrice ?? 0)}</p>
                      <p className="font-semibold text-primary">ukupno = {formatEUR(breakdown.total ?? 0)}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
