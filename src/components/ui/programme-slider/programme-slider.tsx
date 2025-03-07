'use client';

import { useRef, useState } from 'react';
import { SwiperRef } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { CommonCard } from '@/components/common/common-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { programmeData } from '@/utils';

export const ProgrammeSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(programmeData.length);

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

  const slides = programmeData.map((item, index) => (
    <CommonCard
      image={item}
      key={index}
      section="programme"
      currentPage={currentPage}
      totalPages={totalPages}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  ));

  return (
    <CustomSwiper
      section="programme"
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiperInit}
    >
      {slides}
    </CustomSwiper>
  );
};
