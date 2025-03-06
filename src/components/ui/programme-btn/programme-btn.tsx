'use client';

import { useState } from 'react';
import ArrowIcon from '@/../public/icons/arrow-small.svg';
import PlusIcon from '@/../public/icons/plus.svg';
import FrameIcon from '@/../public/icons/rectangle.svg';
import { modules } from '@/utils';

type ProgrammeBtnProps = {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};
export const ProgrammeBtn = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: ProgrammeBtnProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative font-jost mt-[15px] mb-6 xl:my-9">
      <div>
        <p className="rounded-[28px] outline outline-black  py-2.5 px-3 text-xs font-medium leading-[1.2] xl:text-lg xl:leading-[1.2] xl:py-1 xl:px-[17px] xl:w-[468px] xl:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>

      {/* Navigation numbers */}
      <div className="relative z-[2] text-white flex justify-between items-center px-2.5 w-[225px] mx-auto">
        <p className="font-poppins font-extrabold text-[10px] leading-none">
          {currentPage}
        </p>
        <div className="flex items-center gap-5">
          <button onClick={onPrev} aria-label="button prev slide">
            <ArrowIcon className="rotate-y-180" />
          </button>
          <button onClick={toggleExpand} aria-label="button open/close">
            <PlusIcon />
          </button>
          <button onClick={onNext} aria-label="button next slide">
            <ArrowIcon />
          </button>
        </div>
        <p className="font-poppins font-extrabold text-[10px] leading-none">
          {totalPages}
        </p>
        <FrameIcon className="absolute top-0 left-0 z-[-1]" />
      </div>

      <div
        className={`absolute left-0 right-0 z-[150] transition-all duration-500 ease-in-out ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          top: '100%',
          maxHeight: isExpanded ? '100vh' : '0',
        }}
      >
        <div className="h-[100vh] overflow-y-auto xl:h-auto xl:overflow-y-hidden relative z-[150]">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="border border-black bg-white mb-2 py-[22px] px-[11px] xl:py-4 xl:px-2.5 rounded-2xl  xl:mx-auto xl:w-[466px] transition-all duration-300 ease-in-out transform"
              style={{
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'translateY(0)' : 'translateY(-20px)',
                transitionDelay: isExpanded
                  ? `${index * 100}ms`
                  : `${(modules.length - index - 1) * 50}ms`,
              }}
            >
              <h2 className="!text-lg !font-bold !leading-[1.2] mb-2 xl:!text-[22px]">
                {module.title}
              </h2>
              <p className="text-[#585454] text-[10px] font-normal mb-4 xl:text-sm xl:leading-[1.2] xl:mb-3">
                {module.description}
              </p>
              <div>
                <p className="text-[10px] font-semibold leading-[1.2] mb-2.5 xl:text-base xl:leading-[1.2]">
                  Что будем изучать и делать:
                </p>
                <div className="flex justify-center gap-1.5">
                  <button className="bg-black text-white text-[8px] font-medium leading-none px-4 py-1.5 rounded-[28px] xl:text-xs xl:leading-normal">
                    Apps Development
                  </button>
                  <button className="bg-black text-white text-[8px] font-medium leading-none px-4 py-1.5 rounded-[28px] xl:text-xs xl:leading-normal">
                    SEO Services
                  </button>
                  <button className="bg-black text-white text-[8px] font-medium leading-none px-4 py-1.5 rounded-[28px] xl:text-xs xl:leading-normal">
                    Data Analysis
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border border-black bg-white rounded-[40px] h-[46px] flex items-center justify-center xl:w-[466px] xl:mx-auto">
            <button
              onClick={() => setIsExpanded(false)}
              className="font-medium"
            >
              Згорнути
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
