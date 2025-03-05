'use client';

import { CustomSwiper } from '@/components/common/custom-swiper';
import { useDevice } from '@/hooks';
import { reviewsData } from '@/utils';
import { ReviewCardMob } from '../review-card-mob';
import { ReviewCardDesktop } from '../review-card-desktop';

export const ReviewsList = () => {
  const { isMobile, isDesktop } = useDevice();

  const slides = reviewsData.map((review, index) => (
    <ReviewCardMob review={review} key={index} />
  ));

  const duplicatedData = [...reviewsData, ...reviewsData];
  const slidesDesktop = duplicatedData.map((review, index) => (
    <ReviewCardDesktop review={review} key={index} />
  ));

  return (
    <>
      {isMobile && <CustomSwiper section="reviews">{slides}</CustomSwiper>}
      {isDesktop && (
        <CustomSwiper section="reviews">{slidesDesktop}</CustomSwiper>
      )}
    </>
  );
};
