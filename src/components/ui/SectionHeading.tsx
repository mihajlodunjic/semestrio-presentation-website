import { type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  actions?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  actions,
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={cn(isCentered ? 'text-center' : 'text-left', className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">{subtitle}</p> : null}
      {actions ? <div className="mt-6">{actions}</div> : null}
    </div>
  );
}
