'use client';

import { useRef, useState } from 'react';
import { SwiperRef } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { CommonCard } from '@/components/common/common-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { speakersData } from '@/utils';

export const SpeakersSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(speakersData.length);

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

  const slides = speakersData.map((item, index) => (
    <CommonCard
      image={item}
      key={index}
      section="speakers"
      currentPage={currentPage}
      totalPages={totalPages}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  ));

  return (
    <CustomSwiper
      section="speakers"
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiperInit}
    >
      {slides}
    </CustomSwiper>
  );
};
