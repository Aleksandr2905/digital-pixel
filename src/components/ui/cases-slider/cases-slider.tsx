import { CommonCard } from '@/components/common/common-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { casesData } from '@/utils';

export const CasesSlider = () => {
  const slides = casesData.map((speaker, index) => (
    <CommonCard image={speaker} key={index} />
  ));
  return <CustomSwiper section="cases">{slides}</CustomSwiper>;
};
