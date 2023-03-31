import React from "react";

const Button = ({
  BtnText,
  display,
  padding = "14px",
  icon,
  fontSize,
  align,
}) => {
  return (
    <button
      className="rounded-lg flex justify-center cursor-pointer w-full text-center items-center gap-5 hover:shadow duration-200 font-medium login-btn text-white"
      style={{
        padding: padding,
        textAlign: align,
      }}
    >
      <span
        style={{
          display: display,
          fontSize: fontSize,
        }}
      >
        {icon}
      </span>
      <span>{BtnText}</span>
    </button>
  );
};

export default Button;
