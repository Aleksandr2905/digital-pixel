import { EducationSlider } from '@/components/ui/education-slider';

export const Education = () => {
  return (
    <section className="container overflow-hidden py-10 xl:py-[100px] flex flex-col gap-7 xl:gap-10">
      <h2>Як проходить навчання</h2>
      <EducationSlider />
    </section>
  );
};
