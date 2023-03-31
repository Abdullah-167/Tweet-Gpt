import React from "react";
import TweetCard from "../Abstract/TweetCard";
import ButtonContained from "../Abstract/ButtonContained";
import Link from "next/link";

const CommunityTweets = () => {
  return (
    <div className="w-full">
      <div className="container">
        <h2 className="text-[#445C6D] text-xl md:text-3xl font-semibold text-center py-16 md:py-16">
          Last Generated Tweets by the community
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 md:gap-7 lg:gap-12 max-w-[1070px] px-3 mx-auto">
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </div>
        <div></div>
        <Link href={"/schedular"}>
          <div className="w-full sm:max-w-[400px] mx-auto mt-14">
            <ButtonContained
              BtnText="Schedule"
              padding="14px 0px"
              fontSize="24px"
              weight="500"
            />
          </div>
        </Link>
        <p className="text-center text-[#445C6D] text-light mt-8 mb-8 md:text-base text-sm">
          All Right @ TwitterGPT. Copyright 2023
        </p>
      </div>
    </div>
  );
};

export default CommunityTweets;
