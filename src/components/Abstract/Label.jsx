import Image from "next/image";
import React from "react";

const Label = ({ LabelText }) => {
  return (
    <div className="flex items-center gap-3 text-[#445C6D] text-base font-medium">
      <span>{LabelText}</span>
      <div className="max-w-[18px] cursor-pointer">
        <Image src="InfoIcon.svg" alt="" width={1000} height={0} />
      </div>
    </div>
  );
};

export default Label;
