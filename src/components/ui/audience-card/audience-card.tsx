import { audienceData } from '@/utils';

export const AudienceCard = () => {
  return (
    <div className="bg-bg-black py-6 px-7 rounded-[40px] backdrop-blur-[22px] flex flex-col gap-6 text-white xl:flex-row xl:pt-[47px] xl:pb-[46px] xl:pl-[35px] xl:pr-[23px] xl:gap-5">
      <div className="flex flex-col gap-[18px] py-6 pl-[18px] pr-[15px] h-[152px] xl:w-[480px] xl:h-[370px] xl:p-[27px_22px_25px] xl:gap-[87px] rounded-[20px] border border-white bg-light-black">
        <h2 className="flex flex-col gap-2.5 !leading-[0.7] xl:!tracking-[-2px] xl:gap-5 xl:pt-[21px]">
          Trusted By Worldwide <span>Clients Since 1</span>
        </h2>
        <p className="font-jost text-[11px] font-normal leading-[1.2] xl:text-base xl:leading-[1.2] xl:w-[446px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
          molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
          reiciendis libero voluptate!
        </p>
      </div>
      <ul className="flex flex-wrap gap-[24px_18px] xl:gap-4">
        {audienceData.map(({ id, title, description }) => (
          <li
            key={id}
            className="flex flex-col gap-3 py-6 px-3 rounded-[20px] font-jost leading-[1.2] w-[139px] h-[108px] border border-[#919191] xl:px-4 xl:w-[244px] xl:h-[176px]"
          >
            <h4 className="text-base font-extrabold xl:mt-[18px] xl:text-[28px] xl:font-bold xl:leading-[0.93]">
              {title}
            </h4>
            <p className="text-[10px] w-[119px] xl:w-[188px] xl:text-base xl:leading-[1.2]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
