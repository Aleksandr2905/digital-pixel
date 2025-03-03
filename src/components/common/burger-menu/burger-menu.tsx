'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Logo } from '../../ui/logo';
import { Navigation } from '@/components/ui/navigation';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-backdrop z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <button
        className="relative z-50 flex h-4 w-5 items-center justify-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="flex flex-col justify-center items-center w-5 h-4">
          <span
            className={clsx(
              'h-0.5 w-5 bg-white animation',
              isOpen && 'rotate-45 translate-y-1.5'
            )}
          />
          <span
            className={clsx(
              'h-0.5 w-5 bg-white animation my-1',
              isOpen ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={clsx(
              'h-0.5 w-5 bg-white animation',
              isOpen && '-rotate-45 -translate-y-1.5'
            )}
          />
        </div>
      </button>

      <div
        id="mobile-menu"
        className={clsx(
          'fixed top-0 left-0 bottom-0 z-50 flex flex-col gap-6 w-[189px] bg-bg-gray p-4 rounded-r-3xl transform animation',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <Logo menu />
        <Navigation onClick={() => setIsOpen(!isOpen)} />
      </div>
    </>
  );
};
