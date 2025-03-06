import Image from 'next/image';
import PlayIcon from '@/../public/icons/play-circle.svg';
import ArrowMiddle from '@/../public/icons/arrow-middle.svg';

type EducationCardProps = {
  image: {
    img: string;
    alt: string;
  };
  section: string;
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

export const EducationCard = ({
  image,
  section,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: EducationCardProps) => {
  const { img, alt } = image;

  return (
    <div className="flex flex-col gap-6 py-7 px-[23px] rounded-[40px] bg-bg-secondary font-jost xl:flex-row xl:justify-between xl:py-[41px] xl:px-8">
      <div className="flex flex-col gap-4 xl:p-6 xl:rounded-[40px] xl:bg-[#383838CC] xl:gap-5">
        <Image
          src={img}
          width={278}
          height={174}
          alt={alt}
          className="w-auto rounded-[20px] bg-[#606060CC] py-4 px-3 xl:p-0 xl:rounded-2xl xl:w-[467px] xl:h-[322px] xl:bg-transparent"
        />

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center h-[29px] bg-[#414141] rounded-[40px] text-white text-xs font-medium leading-[1.2] xl:text-xl xl:leading-[1.2] xl:h-[46px] xl:gap-[29px] xl:text-black xl:bg-white animation hover:bg-white hover:text-black xl:hover:bg-gray xl:hover:text-white"
        >
          <PlayIcon />
          Смотреть видео
        </a>
      </div>
      <div className="rounded-[20px] bg-white p-5 flex flex-col text-black h-[225px] xl:rounded-[40px] xl:gap-12 xl:w-[417px] xl:h-[436px] xl:px-[43px] xl:py-[29px]">
        <p className="text-base font-extrabold leading-[1.2] mb-2.5 xl:text-[32px]">
          Знакомитесь с платформой
        </p>
        <p className="text-xs font-normal leading-[1.2] xl:text-base xl:leading-[1.2]">
          Lorem ipsum dolor sit amet consectetur. Felis amet consectetur
          sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum
          sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis
          mauris faucibus. Aliquam vehicula gravida fermentum in sodales
          fringilla mi at. Turpis volutpat parturient elit blandit proin magna
          pretium vestibulum elit. A massa adipiscing pellentesque tempor ac
          vel.
        </p>
        <div className="flex items-center gap-2 mx-auto mt-auto xl:mx-0">
          <button
            type="button"
            className={`swiper-button-prev-${section}`}
            onClick={onPrev}
          >
            <ArrowMiddle className="rotate-180" />
          </button>
          <span className="text-xs font-medium leading-[1.2] tabular-nums xl:text-sm xl:leading-[1.2]">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className={`swiper-button-next-${section}`}
            onClick={onNext}
          >
            <ArrowMiddle />
          </button>
        </div>
      </div>
    </div>
  );
};
