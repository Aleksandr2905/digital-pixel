'use client';

import Image from 'next/image';
import Link from 'next/link';
import imgMain from '@/../public/images/hero/hero-main.webp';
import avatars from '@/../public/images/hero/avatars.webp';
import circle from '@/../public/images/hero/circle-hero.webp';
import { useDevice } from '@/hooks';

export const Hero = () => {
  const { isMobile, isDesktop } = useDevice();
  return (
    <section
      id="home"
      className="bg-[url(/images/hero/bg-hero-mobile.webp)] xl:bg-[url(/images/hero/bg-hero-desktop.webp)] h-[700px] xl:h-[737px] bg-no-repeat bg-cover bg-right-top rounded-b-[72px]"
    >
      <div className="container pt-20 pb-[51px] h-full flex flex-col justify-between xl:pt-[200px] xl:pb-[143px] xl:flex-row">
        <div className="flex flex-col items-center justify-between xl:w-[511px] xl:justify-normal">
          <div className="w-[309px] mx-auto flex flex-col items-center gap-5 xl:w-auto xl:items-start">
            <h1 className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-center text-gray text-sm font-normal font-jost leading-[1.2] px-3 xl:px-0 xl:text-lg xl:leading-[1.2] xl:text-start xl:w-[474px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
              molestiae dolorum tempora ut accusamus cupiditate! Nesciunt
              tempora reiciendis libero voluptate!
            </p>
          </div>
          {isDesktop && (
            <Link
              href="/"
              className="button flex xl:py-4 xl:px-8 justify-center items-center rounded-[40px] bg-white xl:mt-20 xl:text-lg xl:leading-[1.2] xl:font-semibold xl:mr-auto"
            >
              Зарегистрироваться
            </Link>
          )}
        </div>
        <div className="flex flex-col items-center relative xl:w-[494px]">
          <Image
            src={imgMain}
            alt="hero image"
            priority
            className="w-[192px] h-[203px] relative z-[2] xl:absolute xl:left-0 xl:top-[-90px] xl:w-[494px] xl:h-[494px]"
          />
          <Image
            src={circle}
            alt="circle"
            className="w-[306px] h-[333px] absolute top-[-89px] left-[-16px] xl:w-[423px] xl:h-[450px] xl:left-[-93px] xl:top-[-90px]"
          />
          <div className="flex flex-col items-center gap-[13px] mt-[41px] mb-[38px] xl:flex-row xl:gap-8 xl:m-0 xl:mt-auto xl:ml-auto">
            <Image
              src={avatars}
              alt="avatars"
              className="w-[88px] h-[25px] xl:w-[168px] xl:h-12 xl:relative xl:z-[2]"
            />
            <p className="w-[205px] text-gray text-center font-jost font-normal text-[10px] leading-[1.2] xl:text-base xl:leading-[1.2]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
          </div>
          {isMobile && (
            <Link
              href="#contact"
              className="button flex w-[202px] h-[38px] justify-center items-center rounded-[40px] bg-white"
            >
              Зарегистрироваться
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
