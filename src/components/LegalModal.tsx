import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';

interface LegalModalProps {
  open: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

const MODAL_COPY = {
  privacy: {
    title: 'Politika privatnosti',
    body: 'Stranica je u pripremi. Ovaj placeholder će biti zamenjen punim dokumentom uskoro.',
  },
  terms: {
    title: 'Uslovi korišćenja',
    body: 'Stranica je u pripremi. Ovaj placeholder će biti zamenjen punim dokumentom uskoro.',
  },
};

export function LegalModal({ open, onClose, type }: LegalModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const copy = MODAL_COPY[type];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="w-full max-w-lg rounded-2xl border border-surface bg-card p-6" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 id="legal-modal-title" className="text-xl font-semibold">
            {copy.title}
          </h3>
          <Button variant="ghost" className="h-8 w-8 rounded-full p-0" onClick={onClose} aria-label="Zatvori modal">
            <X size={18} />
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">{copy.body}</p>
      </div>
    </div>
  );
}
