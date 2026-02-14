import { cn } from '../../lib/cn';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftLabel: string;
  rightLabel: string;
  ariaLabel: string;
}

export function ToggleSwitch({ checked, onChange, leftLabel, rightLabel, ariaLabel }: ToggleSwitchProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-surface bg-soft p-1">
      <span className={cn('px-3 text-sm font-medium', !checked ? 'text-primary' : 'text-muted')}>{leftLabel}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        onClick={() => onChange(!checked)}
        className="relative h-7 w-12 overflow-hidden rounded-full bg-brand-600 transition-colors"
      >
        <span
          className={cn(
            'absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform',
            checked ? 'translate-x-5' : 'translate-x-0',
          )}
        />
      </button>
      <span className={cn('px-3 text-sm font-medium', checked ? 'text-primary' : 'text-muted')}>{rightLabel}</span>
    </div>
  );
}
