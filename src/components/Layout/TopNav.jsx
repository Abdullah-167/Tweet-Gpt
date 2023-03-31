import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="flex md:hidden justify-between pt-14 px-4">
      <div className="flex self-center">
        <span className="bg-white w-14 h-14 p-2 flex justify-center items-center cursor-pointer">
          <RxHamburgerMenu className="w-10 h-10" />
        </span>
      </div>
      <Link href={"/dashboard"}>
        <div className="flex justify-end self-center">
          <Image
            src="logo.svg"
            alt="Logo"
            width={300}
            height={300}
            className="max-w-[210px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default TopNav;
