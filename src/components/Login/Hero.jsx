import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full py-14">
      <div className="container">
        <div className="md:flex hidden justify-between gap-6">
          <div>
            <div className="lg:mb-56 mb-20">
              <Link href={"/"}>
                <Image src="logo.svg" alt="Logo" width={222} height={0} />
              </Link>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#153648] mb-4">Log in</h1>

              <p className="text-xl font-normal text-[#738391] mb-10">
                Log in to continue with TweetGPT
              </p>

              <Link href={"/onboarding"}>
                <div className="login-btn flex items-center gap-6 py-4 px-6 rounded-xl w-full min-w-[300px] lg:min-w-[400px] cursor-pointer">
                  <div>
                    <Image
                      src="twitterlogo.svg"
                      alt="Logo"
                      width={50}
                      height={0}
                    />
                  </div>
                  <span
                    className="text-xl lg:text-2xl font-medium text-white"
                    href=""
                  >
                    Login with Twitter
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <Link href={"/onboarding"}>
            <div className="login-bg rounded-[40px] w-full 2xl:min-w-[800px] max-w-[800px] 2xl:min-h-[800px] flex justify-center items-center">
              <div className="max-w-[630px] mx-auto 2xl:px-0 px-10 2xl:py-0 lg:py-48">
                <Image
                  src="/loginbg.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className=" object-cover"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* ncknk */}

        <div className="md:hidden block">
          <div className="">
            <div className="lg:mb-56 mb-20 w-full">
              <Image src="logo.svg" alt="Logo" width={200} height={0} />
            </div>
            <div className="login-mobile-bg rounded-xl py-20 px-3 shadow">
              <div>
                <h1 className="text-3xl font-semibold text-center text-[#153648] mb-4">
                  Log in
                </h1>
                <p className="text-sm font-normal text-center text-[#738391] mb-10">
                  Log in to continue with TweetGPT
                </p>
                <Link href={"/onboarding"}>
                  <div className="login-btn flex items-center gap-3 sm:gap-6 py-2 sm:py-3 px-3 sm:px-6 rounded-xl w-full sm:min-w-[300px] cursor-pointer">
                    <div className="">
                      <Image
                        src="twitterlogo.svg"
                        alt="Logo"
                        width={50}
                        height={0}
                      />
                    </div>
                    <span
                      className="text-lg sm:text-2xl font-medium text-white"
                      href=""
                    >
                      Login with Twitter
                    </span>
                  </div>
                </Link>
                <p className="text-center py-4 text-[#738391]">or</p>
                <Link href={"/onboarding"}>
                  <div className="login-btn flex items-center gap-3 sm:gap-6 py-2 sm:py-3 pr-3 pl-1.5 sm:pr-6 sm:pl-4 rounded-xl w-full sm:min-w-[300px] cursor-pointer">
                    <div className="">
                      <Image
                        src="googlelogo.svg"
                        alt="Logo"
                        width={65}
                        height={0}
                      />
                    </div>
                    <span
                      className="text-lg sm:text-2xl font-medium text-white"
                      href=""
                    >
                      Login with Google
                    </span>
                  </div>
                </Link>
              </div>

              <div className="pt-20">
                <Image
                  src="/loginbg.png"
                  alt="Logo"
                  width={1000}
                  height={0}
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
