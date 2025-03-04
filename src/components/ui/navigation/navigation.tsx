import { useActiveSection } from '@/hooks';
import { nav } from '@/utils';
import clsx from 'clsx';
import Link from 'next/link';

type NavigationProps = {
  onClick?: () => void;
};
export const Navigation = ({ onClick }: NavigationProps) => {
  const section = useActiveSection();

  return (
    <nav>
      <ul className="flex flex-col gap-10 xl:flex-row xl:gap-2">
        {nav.map(({ href, name }) => {
          const isActive =
            section === null ? href === 'home' : section === href;
          return (
            <li key={name}>
              <Link
                onClick={onClick}
                href={`#${href}`}
                className={clsx(
                  'font-jost font-semibold text-xl leading-[1.2] flex gap-2 items-center py-2 px-3 w-[148px] h-[38px] rounded-[35px] xl:text-lg xl:leading-[1.2] xl:px-8 xl:w-max animation xl:hover:bg-white xl:hover:text-black',
                  isActive
                    ? 'bg-black text-white xl:bg-white xl:text-black'
                    : 'bg-transparent text-black xl:text-white'
                )}
              >
                {name}
                {isActive && (
                  <span className="relative before:size-5 before:block before:bg-white before:rounded-full xl:hidden">
                    <span className="absolute top-1.5 left-1.5 size-2 bg-black rounded-full"></span>
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
