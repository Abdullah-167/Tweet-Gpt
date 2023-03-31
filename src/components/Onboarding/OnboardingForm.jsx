import React from "react";
import Image from "next/image";
import Label from "../Abstract/Label";
import Inputs from "../Abstract/Inputs";
import Link from "next/link";
import ButtonContained from "../Abstract/ButtonContained";

const OnboardingForm = () => {
  return (
    <div className="w-full py-10">
      <div className="container">
        <div>
          <Link href={"/"}>
            <div className="w-full">
              <Image src="logo.svg" alt="Logo" width={222} height={0} />
            </div>
          </Link>
          <div className="text-center text-[#170F49] pt-8 md:pt-6 pb-12">
            <h1 className="text-3xl md:text-5xl font-medium md:font-semibold text-center mb-4">
              Welcome to tweetGPT
            </h1>
            <h2 className="md:text-2xl text-base text-center">
              Help our Ai make better choices for you confirming the following
              info.
            </h2>
            <p className="text-base md:flex justify-center hidden">
              The more accurate, the more better experience will be
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 md:px-10 py-12 md:py-10">
          <div>
            <div className="mb-3">
              <Label LabelText="Topics I am interested in ( use comma to separate )" />
            </div>
            <Inputs placeholder="Write about your interests" />
          </div>
          <div className="mt-7">
            <div className="mb-3">
              <Label LabelText="I am a" />
            </div>
            <textarea
              name=""
              id=""
              cols="20"
              rows="3"
              placeholder="Write about your self"
              className="bg-bgprimary border border-borderprimary rounded-lg w-full outline-none px-5 py-5"
            ></textarea>
          </div>
          <div className="mt-7">
            <div className="mb-3">
              <Label LabelText="I usually tweet about" />
            </div>
            <Inputs placeholder="Write your prompt" />
          </div>
          <div className="flex sm:flex-row flex-col gap-5 py-4 mb-6">
            <div className="mt-5 w-full">
              <div className="mb-3">
                <Label LabelText="Email Address" />
              </div>
              <Inputs placeholder="Write your prompt" />
            </div>
            <div className="mt-5 w-full">
              <div className="mb-3">
                <Label LabelText="Time Zone" />
              </div>
              <Inputs placeholder="Select" />
            </div>
          </div>
          <Link href={"/dashboard"}>
            <button className="flex justify-center rounded-xl cursor-pointer w-full md:max-w-[448px] mx-auto py-3 sm:py-6 text-center items-center gap-5 hover:shadow duration-200 login-btn text-white text-xl font-medium">
              Lets Go
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
