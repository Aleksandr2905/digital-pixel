'use client';

import { useState, useEffect } from 'react';

type DeviceState = {
  isDesktop: boolean;
  isMobile: boolean;
};

export const useDevice = (): DeviceState => {
  const [device, setDevice] = useState<DeviceState>({
    isDesktop: false,
    isMobile: false,
  });

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 1280px)');
    const mobileMedia = window.matchMedia('(max-width: 1279px)');

    const updateDevice = () => {
      setDevice({
        isDesktop: desktopMedia.matches,
        isMobile: mobileMedia.matches,
      });
    };

    updateDevice();

    desktopMedia.addEventListener('change', updateDevice);
    mobileMedia.addEventListener('change', updateDevice);

    return () => {
      desktopMedia.removeEventListener('change', updateDevice);
      mobileMedia.removeEventListener('change', updateDevice);
    };
  }, []);

  return device;
};
