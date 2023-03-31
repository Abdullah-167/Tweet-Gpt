import Image from "next/image";
import React from "react";

const IconBtn = ({
  BtnText = "Text Here",
  fontSize = "16px",
  weight = "500",
  padding,
}) => {
  return (
    <button
      className="flex justify-center rounded-md cursor-pointer w-full py-1.5 sm:py-3.5 text-center items-center gap-5 hover:shadow duration-200 login-btn text-white"
      style={{
        padding: padding,
      }}
    >
      <Image src="logo.svg" alt="" width={100} height={100}/>
    </button>
  );
};

export default IconBtn;
