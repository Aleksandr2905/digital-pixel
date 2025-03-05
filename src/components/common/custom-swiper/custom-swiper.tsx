'use client';

import { Children, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowLarge from '@/../public/icons/arrow-large.svg';
import clsx from 'clsx';
import { useDevice } from '@/hooks';

export type CustomSwiperProps = {
  children: ReactNode | ReactNode[];
  section: string;
};

export const CustomSwiper = ({ children, section }: CustomSwiperProps) => {
  const { isDesktop } = useDevice();
  const slides = Children.toArray(children);

  const pricing = section === 'pricing';
  const reviews = section === 'reviews';
  const reviewsDesktop = isDesktop && reviews;

  return (
    <div className="relative">
      <Swiper
        initialSlide={pricing ? 1 : 0}
        loop={true}
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={reviewsDesktop ? 3 : 1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.swiper-button-prev-${section}`,
          nextEl: `.swiper-button-next-${section}`,
        }}
        className={clsx(
          reviews &&
            'bg-[url(/images/reviews/bg-mobile.webp)] bg-[length:100%_290px] bg-center bg-no-repeat xl:bg-none',
          reviewsDesktop ? 'w-[1064px] bg-black rounded-[40px]' : 'w-full'
        )}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div
        className={clsx(
          'relative z-50 w-[375px] flex justify-between mx-auto',
          pricing && 'text-black',
          reviews && 'text-white xl:w-[1064px]'
        )}
      >
        <button
          type="button"
          className={clsx(
            `swiper-button-prev-${section} absolute`,
            pricing && '-left-2.5 top-[-270px]',
            reviews && 'left-0 top-[-176px] xl:left-2'
          )}
        >
          {(pricing || reviews) && <ArrowLarge className="rotate-180" />}
        </button>
        <button
          type="button"
          className={clsx(
            `swiper-button-next-${section} absolute`,
            pricing && 'right-3 top-[-270px]',
            reviews && 'right-0 top-[-176px] xl:right-2'
          )}
        >
          {(pricing || reviews) && <ArrowLarge />}
        </button>
      </div>
    </div>
  );
};
