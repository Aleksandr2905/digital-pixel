import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

type SliderProps = {
  active: boolean;
  index: number;
  image: StaticImageData;
  title: string;
  description: string;
  onPrev: () => void;
  onNext: () => void;
};

export const Slider = ({
  active,
  index,
  image,
  title,
  description,
  onPrev,
  onNext,
}: SliderProps) => {
  const btnStyle =
    'py-1.5 px-2.5 xl:py-2 xl:px-4 rounded-[20px] border border-white animation hover:bg-white hover:text-black';

  return (
    <li
      className={clsx(
        'flex flex-col justify-between items-center px-4 py-8 bg-bg-black rounded-[40px] h-[379px] transition-opacity animation xl:h-[437px] xl:relative xl:justify-center xl:items-start xl:gap-10 xl:p-0 xl:pl-[52px] overflow-hidden',
        active ? 'block' : 'hidden absolute inset-0 pointer-events-none'
      )}
    >
      <div className="font-jost leading-[1.2] flex flex-col gap-[14px] xl:gap-3">
        <h4 className="text-white text-base font-extrabold xl:text-[28px]">
          {title}
        </h4>
        <p className="text-gray text-[10px] font-normal w-[288px] xl:text-base xl:leading-[1.2] xl:w-[486px]">
          {description}
        </p>
      </div>
      <Image
        src={image}
        alt="image career"
        className={clsx(
          ' object-cover xl:w-[611px] xl:h-[437px] xl:absolute bg-[url(/images/career/violet-ellipse.webp)] bg-no-repeat bg-cover bg-[-22px_0px] xl:bg-[-97px_0px]',
          index === 1
            ? 'w-[250px] h-[173px] xl:-right-[75px] xl:-bottom-[42px]'
            : 'w-[223px] h-[183px] xl:-right-12 xl:bottom-0'
        )}
      />
      <div className="flex gap-1 text-white text-[10px] font-jost font-medium leading-[1.2] xl:text-sm xl:leading-[1.2]">
        <button type="button" onClick={onPrev} className={btnStyle}>
          Востребованные профессии
        </button>
        <button type="button" onClick={onNext} className={btnStyle}>
          Практика на реальных задачах
        </button>
      </div>
    </li>
  );
};
