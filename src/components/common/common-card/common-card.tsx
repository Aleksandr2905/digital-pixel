'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { services } from '@/utils';
import ArrowMiddle from '@/../public/icons/arrow-middle.svg';
import { ProgrammeBtn } from '@/components/ui/programme-btn/programme-btn';

type Service = {
  id: string;
  title: string;
  description: string;
};

type CommonCardProps = {
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

export const CommonCard = ({
  image,
  section,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: CommonCardProps) => {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const handleServiceClick = (service: Service) => {
    setActiveService(service);
  };
  const { img, alt } = image;

  return (
    <div className="flex flex-col justify-center rounded-[40px] bg-bg-gray px-5 py-10 text-black font-jost xl:flex-row xl:gap-10 xl:p-[50px] xl:pr-10">
      <Image
        src={img}
        alt={alt}
        width={313}
        height={350}
        className="border-2 border-black rounded-[20px] w-[313px] h-[350px] object-cover xl:w-[340px] xl:h-[481px]"
      />
      <div className="relative">
        <div className="relative mt-[18px] h-[141px] xl:h-[235px]">
          <div className="relative z-[1] ml-1 w-[305px] h-[138px] bg-white border border-black rounded-2xl px-9 py-10 mx-auto xl:p-[29px] xl:w-[582px] xl:ml-1.5 xl:h-[235px] xl:flex xl:flex-col xl:justify-center">
            <p className="text-sm font-extrabold leading-[1.2] mb-1 xl:mb-[18px] xl:text-[28px]">
              {activeService.title}
            </p>
            <p className="text-[10px] font-normal leading-[1.2] xl:text-lg xl:leading-[1.2] text-[#585454]">
              {activeService.description}
            </p>
          </div>
          <span className="absolute z-[0] top-[15px] left-0 bg-black w-[313px] h-[127px] rounded-[20px] xl:w-[594px] xl:h-[227px]"></span>
        </div>

        {section === 'programme' && (
          <ProgrammeBtn
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={onPrev}
            onNext={onNext}
          />
        )}

        <div className="flex flex-wrap justify-center gap-[3px] gap-y-3 mt-[15px] mb-10 xl:mt-[58px] xl:mb-[51px] xl:gap-3">
          {services.map((service) => (
            <button
              type="button"
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className={clsx(
                'px-2.5 py-1.5 rounded-[28px] text-[10px] font-medium leading-[1.2] border xl:text-lg xl:leading-[1.2] xl:px-4 animation hover:bg-black hover:text-white',
                activeService.id === service.id
                  ? 'bg-black text-white'
                  : 'border-black text-black'
              )}
            >
              {service.title}
            </button>
          ))}
        </div>

        {(section === 'cases' || section === 'speakers') && (
          <div className="flex items-center gap-2 justify-center">
            <button
              type="button"
              className={`swiper-button-prev-${section} animation xl:hover:text-white xl:hover:bg-black xl:hover:rounded-full`}
              onClick={onPrev}
              aria-label="button prev slide"
            >
              <ArrowMiddle className="rotate-180" />
            </button>
            <span className="text-xs font-medium leading-[1.2] tabular-nums xl:text-sm xl:leading-[1.2]">
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              className={`swiper-button-next-${section} animation xl:hover:text-white xl:hover:bg-black xl:hover:rounded-full`}
              onClick={onNext}
              aria-label="button next slide"
            >
              <ArrowMiddle />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
