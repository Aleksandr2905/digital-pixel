import Link from 'next/link';
import clsx from 'clsx';
import LogoIcon from '@/../public/icons/logo.svg';

type LogoProps = { menu?: boolean };

export const Logo = ({ menu }: LogoProps) => {
  return (
    <Link href="/" aria-label="logo">
      <LogoIcon
        width={52}
        height={18}
        className={clsx(
          'xl:w-[74px] xl:h-[29px]',
          menu ? 'w-[68px] h-[25px] text-black' : 'text-white'
        )}
      />
    </Link>
  );
};
