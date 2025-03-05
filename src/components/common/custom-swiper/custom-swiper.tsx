'use client';

import { Children, ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowLarge from '@/../public/icons/arrow-large.svg';

export type CustomSwiperProps = {
  children: ReactNode | ReactNode[];
  section: string;
};

export const CustomSwiper = ({ children, section }: CustomSwiperProps) => {
  const slides = Children.toArray(children);

  const pricing = section === 'pricing';
  const reviews = section === 'reviews';

  return (
    <div className="relative">
      <Swiper
        initialSlide={1}
        loop={true}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.swiper-button-prev-${section}`,
          nextEl: `.swiper-button-next-${section}`,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-50 left-[-9px] top-[45%] w-[375px]">
        <button
          type="button"
          className={`swiper-button-prev-${section} absolute top-1/2 left-0`}
        >
          {(pricing || reviews) && <ArrowLarge className="rotate-180" />}
        </button>
        <button
          type="button"
          className={`swiper-button-next-${section} absolute top-1/2 right-0`}
        >
          {(pricing || reviews) && <ArrowLarge />}
        </button>
      </div>
    </div>
  );
};
