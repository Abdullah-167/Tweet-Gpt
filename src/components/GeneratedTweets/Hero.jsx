import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonContained from "../Abstract/ButtonContained";

const Hero = () => {
  return (
    <div className="w-full login-bg pb-12 rounded-b-[24px] md:rounded-b-[40px]">
      <div className="container">
        <div className="flex justify-between items-center pt-16 pb-4 gap-4">
          <div className="w-full">
            <Link href={"/"}>
              <Image src="logo-white.svg" alt="Logo" width={1000} height={1000} className="max-w-[130px] sm:max-w-[220px]" />
            </Link>
          </div>
          <Link href={"/login"}>
            <div className="bg-white py-2 sm:py-4 min-w-[82px] sm:min-w-[160px] text-center rounded-md cursor-pointer">
              <span>Log In</span>
            </div>
          </Link>
        </div>
        <div className="text-white text-center max-w-[780px] mx-auto">
          <h2 className=" text-sm sm:text-xl md:text-3xl font-medium md:font-semibold mt-4 mb-3 sm:mb-4 ">
            Tweet Like a Pro
          </h2>
          <h1 className="text-2xl md:text-5xl font-semibold md:font-bold mb-3 sm:mb-6">
            {" "}
            Let TweetGPT do the work for you
          </h1>
          <p className="text-[12px] sm:text-sm md:text-base">
            TweetGPT is an AI-powered tweet generator that helps users easily
            generate high-quality tweets with just a few clicks. With advanced
            natural language processing capabilities, TweetGPT can quickly
            analyze user inputs and provide relevant and engaging tweet
            suggestions. Say goodbye to writers block and hello to effortless
            tweeting with TweetGPT.
          </p>
          <div className="bg-white py-2 px-3 flex justify-between rounded-lg mt-10 sm:mt-16">
            <input
              type="text"
              placeholder="Write your prompt"
              className="bg-white outline-none text-black w-full text-sm md:text-lg capitalize md:ml-3"
            />
            <Link href={"/login"}>
              <div className="sm:min-w-[160px] min-w-[108px]">
                <ButtonContained
                  BtnText="Log In"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
