import { ReviewsList } from '@/components/ui/reviews-list';

export const Reviews = () => {
  return (
    <section
      id="pages"
      className="py-10  overflow-hidden relative z-0  xl:py-[100px] flex flex-col gap-10"
    >
      <h2 className="container">Відгуки</h2>
      <ReviewsList />
    </section>
  );
};
