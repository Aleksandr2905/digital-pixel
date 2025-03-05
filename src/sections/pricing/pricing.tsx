'use client';

import { PricingCard } from '@/components/ui/pricing-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { pricingData } from '@/utils';
import { useDevice } from '@/hooks';

export const Pricing = () => {
  const { isMobile, isDesktop } = useDevice();
  const slides = pricingData.map((card, index) => (
    <PricingCard card={card} key={index} />
  ));

  return (
    <section
      id="portfolio"
      className="container py-10 xl:py-[100px] flex flex-col gap-10"
    >
      <h2>Тарифи навчання</h2>
      {isMobile && <CustomSwiper section="pricing">{slides}</CustomSwiper>}
      {isDesktop && <ul className="flex items-center gap-5">{slides}</ul>}
    </section>
  );
};
