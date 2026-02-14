import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 to-brand-600 text-[#111111] shadow-glow hover:-translate-y-0.5 hover:brightness-105',
  secondary:
    'border border-surface text-primary bg-transparent hover:bg-soft',
  ghost: 'text-primary hover:bg-soft',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, type = 'button', variant = 'primary', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bg disabled:pointer-events-none disabled:opacity-60',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
});
