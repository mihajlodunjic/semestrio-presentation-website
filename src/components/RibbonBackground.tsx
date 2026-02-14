import { cn } from '../lib/cn';

interface RibbonBackgroundProps {
  className?: string;
}

export function RibbonBackground({ className }: RibbonBackgroundProps) {
  return (
    <svg
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbonGradient" x1="120" y1="50" x2="1080" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--brand-yellow-500)" />
          <stop offset="1" stopColor="var(--brand-gray-500)" />
        </linearGradient>
      </defs>
      <path
        d="M120 110C290 35 420 95 550 210C700 340 845 380 1080 300"
        stroke="url(#ribbonGradient)"
        strokeWidth="80"
        strokeLinecap="round"
        opacity="0.1"
      />
      <path
        d="M170 470C350 560 570 530 740 400C880 290 1020 240 1130 250"
        stroke="url(#ribbonGradient)"
        strokeWidth="70"
        strokeLinecap="round"
        opacity="0.06"
      />
    </svg>
  );
}
