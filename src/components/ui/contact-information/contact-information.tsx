import EmailIcon from '@/../public/icons/email.svg';
import MapIcon from '@/../public/icons/map.svg';

export const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-5 text-white font-jost">
      <p className="text-base font-bold leading-[1.44] xl:text-xl xl:font-semibold xl:leading-[1.45]">
        Contact Information
      </p>
      <div className="flex flex-col gap-[14px] text-xs font-normal leading-[1.42] xl:text-base xl:leading-[1.44]">
        <a
          href="mailto:example@support.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 animation hover:text-gray"
        >
          <EmailIcon width={18} height={18} className="xl:size-6" />
          example@support.com
        </a>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 animation hover:text-gray"
        >
          <MapIcon width={18} height={18} className="xl:size-6" />5 xyz st.,
          adc, vallhalla
        </a>
      </div>
    </div>
  );
};
