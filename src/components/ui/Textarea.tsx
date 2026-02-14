import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, label, id, ...props },
  ref,
) {
  if (label) {
    return (
      <label htmlFor={id} className="flex w-full flex-col gap-2 text-sm font-medium text-primary">
        <span>{label}</span>
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'min-h-32 w-full rounded-xl border border-surface bg-card px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:ring-2 focus-visible:ring-brand-500',
            className,
          )}
          {...props}
        />
      </label>
    );
  }

  return (
    <textarea
      ref={ref}
      id={id}
      className={cn(
        'min-h-32 w-full rounded-xl border border-surface bg-card px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:ring-2 focus-visible:ring-brand-500',
        className,
      )}
      {...props}
    />
  );
});
