import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, id, ...props },
  ref,
) {
  if (label) {
    return (
      <label htmlFor={id} className="flex w-full flex-col gap-2 text-sm font-medium text-primary">
        <span>{label}</span>
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-xl border border-surface bg-card px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:ring-2 focus-visible:ring-brand-500',
            className,
          )}
          {...props}
        />
      </label>
    );
  }

  return (
    <input
      ref={ref}
      id={id}
      className={cn(
        'w-full rounded-xl border border-surface bg-card px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:ring-2 focus-visible:ring-brand-500',
        className,
      )}
      {...props}
    />
  );
});
