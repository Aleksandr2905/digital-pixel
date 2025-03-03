'use client';

import { useEffect, useState } from 'react';
import { nav } from '@/utils';

const hrefArray = nav.map((i) => i.href);

export const useActiveSection = () => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      let currentActive = null;

      const offset = window.innerHeight / 2;

      for (const section of hrefArray) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + scrollTop - offset;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            currentActive = section;
            break;
          }
        }
      }

      setActive(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return active;
};
