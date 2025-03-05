import { CommonCard } from '@/components/common/common-card';
import { CustomSwiper } from '@/components/common/custom-swiper';
import { speakersData } from '@/utils';

export const SpeakersSlider = () => {
  const slides = speakersData.map((speaker, index) => (
    <CommonCard image={speaker} key={index} />
  ));

  return <CustomSwiper section="speakers">{slides}</CustomSwiper>;
};
