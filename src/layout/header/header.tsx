'use client';

import { BurgerMenu } from '@/components/common/burger-menu';
import { Logo } from '@/components/ui/logo';
import { Navigation } from '@/components/ui/navigation';
import { useDevice } from '@/hooks';

export const Header = () => {
  const { isMobile, isDesktop } = useDevice();
  return (
    <header className="container fixed top-0 left-0 right-0 flex items-center justify-between py-[18px] xl:py-5">
      {isDesktop && <Navigation />}

      {isMobile && (
        <>
          <Logo />
          <BurgerMenu />
        </>
      )}
    </header>
  );
};
