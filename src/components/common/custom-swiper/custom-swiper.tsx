'use client';

import { Children, ReactNode, forwardRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowLarge from '@/../public/icons/arrow-large.svg';
import { useDevice } from '@/hooks';

export type CustomSwiperProps = {
  children: ReactNode | ReactNode[];
  section: string;
  onSlideChange?: (swiper: SwiperType) => void;
  onSwiper?: (swiper: SwiperType) => void;
};

export const CustomSwiper = forwardRef<SwiperRef, CustomSwiperProps>(
  ({ children, section, onSlideChange, onSwiper }, ref) => {
    const { isDesktop } = useDevice();
    const slides = Children.toArray(children);

    const pricing = section === 'pricing';
    const reviews = section === 'reviews';
    const reviewsDesktop = isDesktop && reviews;

    return (
      <div className="relative">
        <Swiper
          ref={ref}
          initialSlide={pricing ? 1 : 0}
          loop={true}
          modules={[Pagination, Navigation]}
          spaceBetween={reviews ? 0 : 500}
          slidesPerView={reviewsDesktop ? 3 : 1}
          pagination={(pricing || reviews) && { clickable: true }}
          navigation={{
            prevEl: `.swiper-button-prev-${section}`,
            nextEl: `.swiper-button-next-${section}`,
          }}
          onSlideChange={onSlideChange}
          onSwiper={onSwiper}
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
        {(pricing || reviews) && (
          <div
            className={clsx(
              'relative z-50 w-[375px] flex justify-between mx-auto',
              pricing && 'text-black',
              reviews && 'text-white xl:w-[1064px]'
            )}
          >
            <button
              type="button"
              aria-label="button prev slide"
              className={clsx(
                `swiper-button-prev-${section} absolute`,
                pricing && '-left-2.5 top-[-270px]',
                reviews && 'left-0 top-[-176px] xl:left-2'
              )}
            >
              <ArrowLarge className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="button next slide"
              className={clsx(
                `swiper-button-next-${section} absolute`,
                pricing && 'right-3 top-[-270px]',
                reviews && 'right-0 top-[-176px] xl:right-2'
              )}
            >
              <ArrowLarge />
            </button>
          </div>
        )}
      </div>
    );
  }
);

CustomSwiper.displayName = 'CustomSwiper';
