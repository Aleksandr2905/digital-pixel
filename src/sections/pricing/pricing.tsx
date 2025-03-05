import { PricingList } from '@/components/ui/pricing-list';

export const Pricing = () => {
  return (
    <section
      id="portfolio"
      className="container py-10 xl:py-[100px] flex flex-col gap-10"
    >
      <h2>Тарифи навчання</h2>
      <PricingList />
    </section>
  );
};
