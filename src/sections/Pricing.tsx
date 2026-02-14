import { useMemo, useState } from 'react';
import { RibbonBackground } from '../components/RibbonBackground';
import { Reveal } from '../components/motion/Reveal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Input } from '../components/ui/Input';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ToggleSwitch } from '../components/ui/ToggleSwitch';
import { PRICING_BY_CYCLE, type BillingCycle, type PlanId } from '../data/pricing';
import { calcTotal, formatEUR, getPlanForStudents } from '../lib/pricing';
import { cn } from '../lib/cn';

const PLAN_SUBTITLES: Record<PlanId, string> = {
  START: 'Za manje škole',
  GROWTH: 'Za rastuće centre',
  PRO: 'Za veće sisteme',
  ENTERPRISE: 'Za napredne potrebe',
};

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
          <div className="flex flex-col gap-4 rounded-2xl border border-surface bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <ToggleSwitch
              checked={isAnnual}
              onChange={(checked) => setCycle(checked ? 'ANNUAL_12M' : 'SEASONAL_5M')}
              leftLabel="Sezonska licenca (5 meseci)"
              rightLabel="Godišnja licenca (12 meseci)"
              ariaLabel="Promeni tip licence"
            />
            <p className="text-sm text-muted">
              Ukupno = veća vrednost između minimalne cene paketa i (broj učenika × cena po učeniku).
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {plans.map((plan, index) => {
            const cardPrice = plan.custom
              ? 'Po dogovoru'
              : isAnnual
                ? `${formatEUR(plan.perStudent ?? 0)} po učeniku godišnje`
                : `${formatEUR(plan.perStudent ?? 0)} po učeniku / 5 meseci`;

            return (
              <Reveal key={plan.id} delay={index * 0.04}>
                <Card
                  className={cn(
                    'flex h-full flex-col p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
                    plan.id === 'ENTERPRISE' && 'border-2 border-brand-500 bg-soft',
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{plan.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {PLAN_SUBTITLES[plan.id]}
                      </p>
                    </div>
                    {plan.id === 'ENTERPRISE' ? (
                      <span className="rounded-full border border-brand-600 px-2 py-1 text-xs font-semibold text-brand-700">
                        Kontaktirajte nas
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {plan.maxStudents === null ? 'Preko 300 učenika' : `Do ${plan.maxStudents} učenika`}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary">{cardPrice}</p>
                  <p className="mt-2 text-sm text-muted">
                    Minimalna cena: {plan.minPrice === null ? 'Po dogovoru' : formatEUR(plan.minPrice)}
                  </p>
                  <p className="mt-2 text-sm text-muted">Primer ukupne cene: {plan.exampleText}</p>
                  <Button
                    className="mt-auto w-full"
                    variant={plan.id === 'ENTERPRISE' ? 'secondary' : 'primary'}
                    onClick={scrollToContact}
                  >
                    {plan.id === 'ENTERPRISE' ? 'Zatražite ponudu' : 'Zakažite demo'}
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
                        {parsedStudents} x {formatEUR(recommendedPlan.perStudent ?? 0)} = {formatEUR(breakdown.perStudentTotal ?? 0)}
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
