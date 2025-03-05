type ReviewCardMobProps = {
  review: {
    review: string;
    author: string;
    position: string;
  };
};

export const ReviewCardMob = ({ review }: ReviewCardMobProps) => {
  return (
    <div className="mx-auto p-7 w-[340px] h-[261px] rounded-[40px] bg-black bg-[url(/icons/frame.svg)] bg-no-repeat bg-center font-jost text-white">
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
  );
};
