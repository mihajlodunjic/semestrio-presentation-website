import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '../components/motion/Reveal';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQ_ITEMS } from '../data/faq';
import { cn } from '../lib/cn';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Najcesca pitanja skola i edukativnih centara"
            subtitle="Kratki odgovori na kljucne teme pre nego sto zakazemo demo."
          />
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={index * 0.02}>
                <Card className="overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold sm:px-6 sm:text-base"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-panel`}
                      id={`${item.id}-trigger`}
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={cn('shrink-0 text-muted transition-transform', isOpen && 'rotate-180')} size={18} />
                    </button>
                  </h3>
                  <div
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={`${item.id}-trigger`}
                    className={cn(
                      'grid transition-all duration-200',
                      isOpen ? 'grid-rows-[1fr] border-t border-surface' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 py-4 text-sm leading-relaxed text-muted sm:px-6">{item.answer}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
