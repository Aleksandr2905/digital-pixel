import { educationData } from '@/utils';
import { EducationCard } from '../education-card';
import { CustomSwiper } from '@/components/common/custom-swiper';

export const EducationSlider = () => {
  const slides = educationData.map((item, index) => (
    <EducationCard image={item} key={index} />
  ));
  return <CustomSwiper section="education">{slides}</CustomSwiper>;
};
