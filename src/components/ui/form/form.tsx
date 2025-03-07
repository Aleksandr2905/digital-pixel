'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '@/../public/images/contact/contact.webp';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="bg-bg-gray backdrop-blur-[22px] rounded-[40px] py-[47px] px-[38px] flex flex-col gap-[18px] xl:gap-[86px] xl:flex-row xl:pt-[69px] xl:pb-10 xl:pl-[57px] xl:pr-[50px] bg-[url(/images/contact/contact-circle.webp)] bg-bottom xl:bg-right-bottom xl:bg-[length:550px_100px] bg-no-repeat">
      <div className="flex flex-col gap-4 font-jost xl:gap-6">
        <h2 className="text-black text-xl font-extrabold leading-[1.4] flex flex-col xl:!text-[32px]">
          Є питання? <span>Зв’яжіться з нами!</span>
        </h2>
        <p className="text-[#636363] text-xs font-normal leading-[1.2] xl:text-lg xl:leading-[1.2] xl:w-[455px]">
          Наша команда готова допомогти вам з будь-якими питаннями, які у вас
          можуть виникнути. Просто заповніть форму нижче і ми з вами зв’яжемось
          протягом 24 годин.
        </p>
        <Image
          src={img}
          alt="image"
          className="hidden xl:block xl:w-[184px] xl:h-[153px]"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 xl:space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше ім'я*"
          required
          className="w-full px-[14px] py-[11px] xl:py-4 xl:px-9 rounded-[40px] bg-white border-0 focus:outline-none focus:ring-1 focus:ring-gray text-black placeholder:text-[#C9C9C9] font-jost font-normal text-[10px] leading-[1.4] xl:text-sm xl:leading-[1.2] xl:h-[52px]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваш email*"
          required
          className="w-full px-[14px] py-[11px] xl:py-4 xl:px-9 rounded-[40px] bg-white border-0 focus:outline-none focus:ring-1 focus:ring-gray text-black placeholder:text-[#C9C9C9] font-jost font-normal text-[10px] leading-[1.4] xl:text-sm xl:leading-[1.2] xl:h-[52px]"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ваш номер телефону*"
          required
          className="w-full px-[14px] py-[11px] xl:py-4 xl:px-9 rounded-[40px] bg-white border-0 focus:outline-none focus:ring-1 focus:ring-gray text-black placeholder:text-[#C9C9C9] font-jost font-normal text-[10px] leading-[1.4] xl:text-sm xl:leading-[1.2] xl:h-[52px]"
        />
        <div className="text-[#414141] font-jost font-normal text-[10px] leading-[1.5] mt-1.5 xl:mt-[9px] xl:text-sm xl:leading-[1.2]">
          Залишаючи свої дані, я погоджуюся на обробку персональних даних
          відповідно до{' '}
          <Link href="/" className="underline animation hover:text-black">
            Політики конфіденційності
          </Link>
        </div>

        <button
          type="submit"
          className="w-[246px] h-[39px] bg-black text-white text-base font-medium leading-[1.2] rounded-[40px] flex justify-center items-center mx-auto mt-5 xl:mt-[25px] xl:h-[52px] xl:w-full xl:text-lg xl:leading-[1.2] animation hover:bg-white hover:text-black hover:outline-black hover:outline-1"
        >
          ВІДПРАВИТИ
        </button>
      </form>
    </div>
  );
};
