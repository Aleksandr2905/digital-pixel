import { AudienceCard } from '@/components/ui/audience-card';

export const Audience = () => {
  return (
    <section
      id="about"
      className="container overflow-hidden py-10 xl:py-[100px] flex flex-col gap-10"
    >
      <h2>Кому буде корисний курс</h2>
      <AudienceCard />
    </section>
  );
};
