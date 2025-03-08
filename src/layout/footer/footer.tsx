import { ContactInformation } from '@/components/ui/contact-information';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black rounded-t-[72px] w-[393px] xl:w-[1280px] mx-auto">
      <div className="w-[393px] mx-auto p-[37px] text-white font-jost xl:w-[1064px] xl:px-0 xl:py-10 xl:flex xl:justify-between xl:items-end">
        <div className="flex flex-col gap-7 mb-[34px] xl:mb-0">
          <Logo />
          <p className="w-[253px] text-xs font-normal leading-[1.42] xl:text-base xl:leading-[1.44]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus facere
          </p>
          <p className="hidden xl:mt-[66px] xl:text-base xl:font-normal xl:leading-[1.42] xl:block">
            © 2024 Created by: Martin
          </p>
        </div>
        <div className="flex justify-between items-end xl:flex-col xl:gap-[66px] xl:inline-flex xl:items-start">
          <ContactInformation />
          <div className="inline-flex flex-col gap-[14px] text-sm font-normal leading-[1.42] xl:text-base xl:leading-[1.44] xl:flex-row xl:gap-8">
            <Link href="/" className="animation hover:text-gray">
              Terms of Use
            </Link>
            <Link href="/" className="animation hover:text-gray">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="mt-[26px] text-sm font-normal leading-[1.42] xl:hidden">
          © 2024 Created by: Martin
        </p>
      </div>
    </footer>
  );
};
