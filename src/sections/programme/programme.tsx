import { ProgrammeSlider } from '@/components/ui/programme-slider';

export const Programme = () => {
  return (
    <section className="container py-10 xl:py-[100px] flex flex-col gap-7 xl:gap-10">
      <h2>Програма курсу</h2>
      <ProgrammeSlider />
    </section>
  );
};
