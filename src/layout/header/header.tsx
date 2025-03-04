'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { BurgerMenu } from '@/components/common/burger-menu';
import { Logo } from '@/components/ui/logo';
import { Navigation } from '@/components/ui/navigation';
import { useDevice } from '@/hooks';

export const Header = () => {
  const { isMobile, isDesktop } = useDevice();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'backdrop-blur-md fixed top-0 left-0 right-0 z-[3] animation',
        isScrolled ? 'bg-black/50' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between py-[18px] xl:py-5 xl:justify-center">
        {isDesktop && <Navigation />}

        {isMobile && (
          <>
            <Logo />
            <BurgerMenu />
          </>
        )}
      </div>
    </header>
  );
};
