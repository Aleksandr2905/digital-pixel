type ReviewCardDesktopProps = {
  review: {
    review: string;
    author: string;
    position: string;
  };
};

export const ReviewCardDesktop = ({ review }: ReviewCardDesktopProps) => {
  return (
    <div className="mx-auto w-[336px] h-[217px] font-jost text-white ml-[18px] my-[56px] flex border-r border-white">
      <span className="text-[100px] mt-[15px]">“</span>
      <div className="pt-[33px]">
        <p className="p-[15px] mb-5 text-base font-normal leading-[1.2]">
          {review.review}
        </p>
        <p className="px-[15px] text-xl font-normal leading-none">
          {review.author}
        </p>
        <p className="px-[15px] text-xl italic font-extralight leading-none">
          {review.position}
        </p>
      </div>
    </div>
  );
};
