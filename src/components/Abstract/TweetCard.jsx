import React from "react";
import Image from "next/image";

const TweetCard = () => {
  return (
    <div className="bg-white max-w-[516px] py-6 px-4 md:px-10 rounded-xl">
      <div className="flex justify-between items-center gap-2">
        <div className="max-w-[25px] md:max-w-[33px]">
          <Image src="avatar.svg" alt="Logo" width={1000} height={0} />
        </div>
        <div className="bg-[#F2F9FB] flex items-center justify-center min-w-[120px] md:min-w-[138px] md:text-base text-sm font-medium py-2.5 text-center rounded-md cursor-pointer text-[#445C6D]">
          <span>Add Schedule</span>
        </div>
      </div>
      <p className="text-[#738391] py-8 md:text-base text-sm">
        When you know a coworker is unhappy, the first step is to see if they
        need help.
      </p>
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="w-full cursor-pointer max-w-[30px] md:max-w-[33px]">
            <Image src="like.svg" alt="Logo" width={1000} height={0} />
          </div>
          <div className="w-full cursor-pointer max-w-[30px] md:max-w-[33px]">
            <Image src="dislike.svg" alt="Logo" width={1000} height={0} />
          </div>
        </div>
        <div className="bg-[#11AEF5] min-w-[120px] md:min-w-[144px] py-1.5 text-center rounded-md cursor-pointer text-white text-lg font-medium">
          <span>Tweet Now</span>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
