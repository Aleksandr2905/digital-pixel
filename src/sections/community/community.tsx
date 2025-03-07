'use client';

import { Slider } from '@/components/common/slider';
import { communitySlides } from '@/utils';
import { useState } from 'react';

export const Community = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <section
      id="blog"
      className="container py-10 xl:py-[100px] flex flex-col gap-7 xl:gap-10"
    >
      <h2>Експертна спільнота</h2>
      <ul className="relative">
        {communitySlides.map((slide, index) => (
          <Slider
            section="community"
            key={index}
            active={activeSlide === index}
            index={index}
            image={slide.image}
            title={slide.title}
            description={slide.description}
            onPrev={() => setActiveSlide(0)}
            onNext={() => setActiveSlide(1)}
          />
        ))}
      </ul>
    </section>
  );
};
