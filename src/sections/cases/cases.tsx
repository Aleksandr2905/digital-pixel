import { CasesSlider } from '@/components/ui/cases-slider/cases-slider';

export const Cases = () => {
  return (
    <section className="container py-10 xl:py-[100px] flex flex-col gap-7 xl:gap-10">
      <h2>Кейси учнів</h2>
      <CasesSlider />
    </section>
  );
};
