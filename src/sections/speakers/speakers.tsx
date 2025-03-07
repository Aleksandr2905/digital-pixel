import { SpeakersSlider } from '@/components/ui/speakers-slider';

export const Speakers = () => {
  return (
    <section className="container py-10 xl:py-[100px] flex flex-col gap-7 xl:gap-10">
      <h2>Спікери курсу</h2>
      <SpeakersSlider />
    </section>
  );
};
