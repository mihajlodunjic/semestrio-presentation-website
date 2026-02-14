import { useEffect, useState } from 'react';
import { cn } from '../lib/cn';

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export function BrandLogo({ className, imageClassName, textClassName, showText = true }: BrandLogoProps) {
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setErrored(false);
  }, []);

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      {!errored ? (
        <img
          src="/logo.png"
          alt="Semestrio logo"
          className={cn('h-8 w-8 rounded-md object-contain', imageClassName)}
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500/20 text-xs font-bold text-brand-700">
          S
        </span>
      )}
      {showText ? <span className={cn('text-base font-semibold text-primary', textClassName)}>Semestrio</span> : null}
    </div>
  );
}
