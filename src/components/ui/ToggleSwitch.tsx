import { cn } from '../../lib/cn';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftLabel: string;
  rightLabel: string;
  ariaLabel: string;
  className?: string;
}

export function ToggleSwitch({
  checked,
  onChange,
  leftLabel,
  rightLabel,
  ariaLabel,
  className,
}: ToggleSwitchProps) {
  return (
    <div
      className={cn(
        'inline-flex w-full max-w-[420px] items-center rounded-full border border-surface bg-soft p-1',
        className,
      )}
      role="group"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          'flex-1 rounded-full px-4 py-2 text-base font-semibold transition-all duration-200',
          !checked
            ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-[#111111] shadow-sm'
            : 'text-muted hover:text-primary',
        )}
        aria-pressed={!checked}
      >
        {leftLabel}
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          'flex-1 rounded-full px-4 py-2 text-base font-semibold transition-all duration-200',
          checked
            ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-[#111111] shadow-sm'
            : 'text-muted hover:text-primary',
        )}
        aria-pressed={checked}
      >
        {rightLabel}
      </button>
    </div>
  );
}
