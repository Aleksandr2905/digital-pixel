'use client';

import { Children, ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowLarge from '@/../public/icons/arrow-large.svg';
import ArrowMiddle from '@/../public/icons/arrow-middle.svg';
import clsx from 'clsx';
import { useDevice } from '@/hooks';

export type CustomSwiperProps = {
  children: ReactNode | ReactNode[];
  section: string;
};

export const CustomSwiper = ({ children, section }: CustomSwiperProps) => {
  const { isDesktop } = useDevice();
  const slides = Children.toArray(children);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(slides.length);

  const pricing = section === 'pricing';
  const reviews = section === 'reviews';
  const reviewsDesktop = isDesktop && reviews;
  const common = section === 'speakers' || section === 'cases';

  return (
    <div className="relative">
      <Swiper
        initialSlide={pricing ? 1 : 0}
        loop={true}
        modules={[Pagination, Navigation]}
        spaceBetween={reviews ? 0 : 16}
        slidesPerView={reviewsDesktop ? 3 : 1}
        pagination={(pricing || reviews) && { clickable: true }}
        navigation={{
          prevEl: `.swiper-button-prev-${section}`,
          nextEl: `.swiper-button-next-${section}`,
        }}
        onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
        onSwiper={(swiper) => setTotalPages(swiper.slides.length)}
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

      {common && (
        <div className="flex items-center gap-2 absolute bottom-10 left-[38%] z-10 xl:bottom-[69px] xl:left-[64%]">
          <button
            type="button"
            className={clsx(`swiper-button-prev-${section}`)}
          >
            <ArrowMiddle className="rotate-180" />
          </button>
          <span className="text-xs font-medium leading-[1.2] tabular-nums xl:text-sm xl:leading-[1.2]">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className={clsx(`swiper-button-next-${section} `)}
          >
            <ArrowMiddle />
          </button>
        </div>
      )}
    </div>
  );
};
