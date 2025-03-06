'use client';

import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import type { SwiperRef } from 'swiper/react';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { EducationCard } from '../education-card';
import { educationData } from '@/utils';

export const EducationSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(educationData.length);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    setTotalPages(swiper.slides.length);
  };

  const slides = educationData.map((item, index) => (
    <EducationCard
      image={item}
      key={index}
      section="education"
      currentPage={currentPage}
      totalPages={totalPages}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  ));

  return (
    <CustomSwiper
      section="education"
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiperInit}
    >
      {slides}
    </CustomSwiper>
  );
};
