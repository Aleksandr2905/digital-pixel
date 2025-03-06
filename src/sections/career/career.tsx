'use client';

import { useState } from 'react';
import { Slider } from '@/components/common/slider';
import { careerSlides } from '@/utils';

export const Career = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="services"
      className="container  overflow-hidden  py-10 xl:py-[100px] flex flex-col gap-7 xl:gap-10"
    >
      <h2>Центр кар`єри</h2>
      <ul className="relative">
        {careerSlides.map((slide, index) => (
          <Slider
            section="career"
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
