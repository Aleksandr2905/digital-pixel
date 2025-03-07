'use client';

import { useState, useRef } from 'react';
import { SwiperRef } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { CommonCard } from '@/components/common/common-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { casesData } from '@/utils';

export const CasesSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(casesData.length);

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

  const slides = casesData.map((item, index) => (
    <CommonCard
      image={item}
      key={index}
      section="cases"
      currentPage={currentPage}
      totalPages={totalPages}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  ));

  return (
    <CustomSwiper
      section="cases"
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiperInit}
    >
      {slides}
    </CustomSwiper>
  );
};
