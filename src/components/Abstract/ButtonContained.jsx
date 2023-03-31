import React from "react";

const ButtonContained = ({
  BtnText = "Text Here",
  fontSize = "16px",
  weight = "500",
  padding,
}) => {
  return (
    <button
      className="flex justify-center rounded-md cursor-pointer w-full py-1.5 sm:py-3.5 text-center items-center gap-5 hover:shadow duration-200 login-btn text-white"
      style={{
        fontSize: fontSize,
        fontWeight: weight,
        padding: padding,
      }}
    >
      {BtnText}
    </button>
  );
};

export default ButtonContained;
