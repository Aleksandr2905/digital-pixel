import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

type SliderProps = {
  section: 'career' | 'community';
  active: boolean;
  index: number;
  image: StaticImageData;
  title: string;
  description: string;
  onPrev: () => void;
  onNext: () => void;
};

export const Slider = ({
  section,
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
        active ? 'block' : 'hidden absolute inset-0 pointer-events-none',

        section === 'community' &&
          index === 1 &&
          'bg-[url(/images/community/green-ellipse.webp)] bg-no-repeat bg-[length:300px_300px] bg-[10px_64px] xl:bg-[length:500px_500px] xl:bg-[530px_-50px]'
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
        alt={`${section} image ${index + 1}`}
        className={clsx(
          'object-cover  xl:absolute',
          {
            // Стилі для секції "career"
            'xl:w-[611px] xl:h-[437px] bg-[url(/images/career/violet-ellipse.webp)] bg-no-repeat bg-cover bg-[-22px_0px] xl:bg-[-97px_0px]':
              section === 'career',
            'w-[250px] h-[173px] xl:-right-[75px] xl:-bottom-[42px]':
              section === 'career' && index === 1,
            'w-[223px] h-[183px] xl:-right-12 xl:bottom-0':
              section === 'career' && index !== 1,
          },
          {
            // Стилі для секції "community"
            'xl:w-[337px] xl:h-[285px] w-[180px] h-[152px] xl:right-[67px] xl:bottom-[74px]':
              section === 'community' && index === 1,
            'xl:w-[611px] xl:h-[437px] w-[281px] h-[241px] absolute bottom-[58px] xl:-right-12 xl:bottom-0':
              section === 'community' && index !== 1,
          },
          'xl:absolute'
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
