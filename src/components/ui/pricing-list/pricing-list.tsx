'use client';

import { PricingCard } from '@/components/ui/pricing-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { pricingData } from '@/utils';
import { useDevice } from '@/hooks';

export const PricingList = () => {
  const { isMobile, isDesktop } = useDevice();
  const slides = pricingData.map((card, index) => (
    <PricingCard card={card} key={index} />
  ));
  return (
    <>
      {isMobile && <CustomSwiper section="pricing">{slides}</CustomSwiper>}
      {isDesktop && <div className="flex items-center gap-5">{slides}</div>}
    </>
  );
};
