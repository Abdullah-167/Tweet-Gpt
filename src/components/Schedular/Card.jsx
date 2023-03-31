import Image from "next/image";
import React from "react";
import Inputs from "../Abstract/Inputs";
import ButtonContained from "../Abstract/ButtonContained";

const Card = () => {
  return (
    <div className="px-3 sm:px-2 py-10 flex justify-center w-full">
      <div>
        <div>
          <div className="bg-white px-8 rounded-xl py-6 mb-10">
            <div>
              <h1 className=" text-3xl text-[#153648] pb-4">Input a Topic</h1>
              <div className="flex md:flex-row flex-col gap-5 items-stretch h-full max-h-full ">
                <div className="w-full">
                  <Inputs placeholder={"Ics Cream"} showSuggestion={true} />
                </div>
                <div className="min-w-[130px]">
                  <ButtonContained BtnText={"Generate"} padding={"16px 40px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
          {cards.map((item, index) => {
            return (
              <div
                className="bg-white p-5 rounded-xl w-full haji duration-300 cursor-pointer"
                key={index}
              >
                <span>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={23}
                    height={0}
                    className="pb-3"
                  />
                </span>
                <h4 className="text-xs text-[#738391] pb-3 pt-3 border-t border-b border-[#F2F2FF]">
                  {item.text}
                </h4>
                <div className="flex justify-between gap-5 mt-3">
                  <span className="text-xs rounded-full text-[#0FAFF5] border border-[#0FAFF5] py-1 px-4 cursor-pointer">
                    {item.btnText}
                  </span>
                  <span className="btn-bg text-xs rounded-full text-[#0FAFF5]  py-1 px-4 cursor-pointer">
                    {item.btnText2}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

const cards = [
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
  {
    img: "bot.svg",
    alt: "alt",
    text: "Appropriately empower inexpensive growth strategies whereas extensible architectures...",
    btnText: "Edit & Tweet",
    btnText2: "Add to Queue",
  },
];
