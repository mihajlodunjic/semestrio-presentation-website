import { CheckCircle2, Mail } from 'lucide-react';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Reveal } from '../components/motion/Reveal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Input } from '../components/ui/Input';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Textarea } from '../components/ui/Textarea';

interface ContactFormState {
  fullName: string;
  schoolName: string;
  email: string;
  students: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  schoolName?: string;
  email?: string;
  message?: string;
}

const initialState: ContactFormState = {
  fullName: '',
  schoolName: '',
  email: '',
  students: '',
  message: '',
};

function isEmailValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = window.setTimeout(() => setShowToast(false), 3500);
    return () => window.clearTimeout(timer);
  }, [showToast]);

  const benefits = useMemo(
    () => ['Brži onboarding škole i admin tima', 'Jasna pravila pristupa i sezonalnosti', 'Odgovaramo u roku od 24h'],
    [],
  );

  const onChange = (key: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ContactFormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = 'Ime i prezime je obavezno.';
    if (!form.schoolName.trim()) nextErrors.schoolName = 'Naziv škole/centra je obavezan.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email je obavezan.';
    } else if (!isEmailValid(form.email)) {
      nextErrors.email = 'Unesite validan email.';
    }
    if (!form.message.trim()) nextErrors.message = 'Poruka je obavezna.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    console.log('Semestrio contact form payload:', {
      ...form,
      students: form.students ? Number(form.students) : null,
    });

    setShowToast(true);
    setForm(initialState);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Kontakt"
            title="Spremni za demo prilagođen vašoj školi?"
            subtitle="Pošaljite nam osnovne informacije i vratićemo se sa predlogom sledećih koraka."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Card className="h-full p-6 sm:p-7">
              <h3 className="text-2xl font-semibold">Razgovarajmo o vašem modelu rada</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Semestrio je dizajniran za škole i edukativne centre koji žele jasan i održiv proces od upisa do pristupa materijalima.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-surface bg-soft p-4">
                <p className="text-sm text-muted">Email za direktan kontakt</p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                  <Mail size={16} className="text-brand-700" />
                  hello@semestrio.com
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <Card className="relative p-6 sm:p-7">
              {showToast ? (
                <div className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
                  Hvala! Javićemo se uskoro.
                </div>
              ) : null}

              <form className="grid gap-4" onSubmit={onSubmit} noValidate>
                <Input
                  id="fullName"
                  label="Ime i prezime"
                  value={form.fullName}
                  onChange={(event) => onChange('fullName', event.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                />
                {errors.fullName ? <p className="-mt-2 text-sm text-rose-600">{errors.fullName}</p> : null}

                <Input
                  id="schoolName"
                    label="Naziv škole / centra"
                  value={form.schoolName}
                  onChange={(event) => onChange('schoolName', event.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.schoolName ? 'true' : 'false'}
                />
                {errors.schoolName ? <p className="-mt-2 text-sm text-rose-600">{errors.schoolName}</p> : null}

                <Input
                  id="email"
                  type="email"
                  label="Email"
                  value={form.email}
                  onChange={(event) => onChange('email', event.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email ? <p className="-mt-2 text-sm text-rose-600">{errors.email}</p> : null}

                <Input
                  id="studentsCount"
                  type="number"
                  min={1}
                  max={2000}
                  label="Broj učenika (opciono)"
                  value={form.students}
                  onChange={(event) => onChange('students', event.target.value)}
                />

                <Textarea
                  id="message"
                  label="Poruka"
                  value={form.message}
                  onChange={(event) => onChange('message', event.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message ? <p className="-mt-2 text-sm text-rose-600">{errors.message}</p> : null}

                <Button type="submit" className="mt-2 w-full sm:w-auto">
                  Pošalji upit
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
