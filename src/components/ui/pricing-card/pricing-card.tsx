import clsx from 'clsx';

export type PricingCardProps = {
  card: {
    title: string;
    description: string;
    modules: string;
    duration: string;
    monthlyPrice: string;
    fullPrice: string;
    originalPrice: string;
    discount: string;
    features: string[];
    isDark?: boolean;
  };
};

export const PricingCard = ({ card }: PricingCardProps) => {
  return (
    <li
      className={clsx(
        'px-6 rounded-[40px] font-jost m-auto',
        card.isDark
          ? 'bg-bg-dark-pricing py-[34px] w-[337px] text-white xl:px-[34px] xl:py-[58px] xl:w-[358px]'
          : 'bg-bg-gray py-4 w-[304px] text-black xl:px-[26px] xl:py-[45px] xl:w-[342px]'
      )}
    >
      <h4 className="text-[22px] font-medium leading-[1.2] mb-2 h-[21px] xl:h-auto">
        {card.title}
      </h4>
      <p className="text-sm font-normal leading-normal h-9 mb-4">
        {card.description}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-gray-pricing text-sm font-normal leading-normal h-9">
            {card.modules} за {card.duration}
          </p>
          <p
            className={clsx(
              'text-2xl font-medium leading-none',
              card.isDark ? 'text-blue-dark-pricing' : 'text-blue-pricing'
            )}
          >
            {card.monthlyPrice}{' '}
            <span className="text-sm font-normal">/місяць</span>
          </p>
          <p className="text-xs font-normal leading-[1.2]">
            <span className="line-through pr-3">{card.monthlyPrice}</span> на 24
            місяці
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-pricing text-sm font-normal leading-normal h-9">
            Одним платежом
          </p>
          <p
            className={clsx(
              'text-base font-medium leading-[1.2] tracking-[-1.28px] mt-[9px]',
              card.isDark ? 'text-blue-dark-pricing' : 'text-blue-pricing'
            )}
          >
            {card.fullPrice}
            <span className="text-xs font-medium leading-[1.2] ml-[15px] px-0.5 rounded-xl bg-yellow text-black">
              -{card.discount}
            </span>
          </p>

          <p className="text-xs font-normal leading-[1.2] line-through">
            {card.originalPrice}
          </p>
        </div>
      </div>
      <hr className="border-gray my-[15px]" />

      <ul className="space-y-2">
        {card.features.map((feature, index) => (
          <li
            key={index}
            className="flex text-[10px] font-normal leading-normal xl:text-base xl:leading-[1.2]"
          >
            <span className="mr-2">•</span>
            <p>{feature}</p>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={clsx(
          'w-full mt-3 h-[38px] rounded-[40px] animation border xl:mt-8 xl:h-[46px] xl:text-lg xl:font-semibold leading-[1.2]',
          card.isDark
            ? 'bg-gray text-black hover:border hover:border-gray hover:bg-black hover:text-gray'
            : 'border-black text-black hover:bg-black hover:text-white'
        )}
      >
        Вибрати
      </button>
    </li>
  );
};
