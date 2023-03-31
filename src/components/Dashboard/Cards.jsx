import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="w-full px-4 py-10">
      <div className="flex justify-between items-center gap-4 pt-0 pb-10">
        <h1 className="text-[#153648] hidden md:block text-2xl md:text-3xl font-semibold">
          Analytics
        </h1>
        <div className="">
          <div class="relative">
            <select
              class="cursor-pointer block appearance-none w-full bg-gray-200 text-[#445C6D] py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Last 7 Days</option>
              <option>Last 14 Days</option>
              <option>Last 28 Days</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  xl:grid-cols-4 gap-3">
        {card.map((item, index) => {
          return (
            <div
              className="bg-white rounded-xl  px-5 py-5"
              key={index}
            >
              <div className="flex justify-between items-center">
                <span>
                  <Image src={item.img} width={30} height={0} alt={item.alt} />
                </span>
                <span className="text-[#737791] text-[12px]">{item.date}</span>
              </div>
              <div className="flex justify-between gap-2 pt-5">
                <div>
                  <h2 className="text-sm min-w-[102px] text-[#737791] font-medium">
                    {item.heading1}
                  </h2>
                  <p className="text-2xl font-bold text-black mt-2">
                    {item.heading2}
                  </p>
                  <div className="mt-3">
                    <div className="flex gap-5">
                      <Image src={item.arrow} alt="" width={30} height={0} />
                      <span className="text-[#10B981] text-sm">{item.num}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 pl-3">
                  <Image src={item.layerImg} alt="" width={110} height={0} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

const card = [
  {
    img: "pesrson.svg",
    heading1: "Follower Growth",
    heading2: "00",
    date: "Since: March 1",
    alt: "img",
    arrow: "arrow.svg",
    num: "00%",
    layerImg: "layer.svg",
  },
  {
    img: "pesrson.svg",
    heading1: "Follower Growth",
    heading2: "00",
    date: "Since: March 1",
    alt: "img",
    arrow: "arrow.svg",
    num: "00%",
    layerImg: "layer.svg",
  },
  {
    img: "pesrson.svg",
    heading1: "Follower Growth",
    heading2: "00",
    date: "Since: March 1",
    alt: "img",
    arrow: "arrow.svg",
    num: "00%",
    layerImg: "layer.svg",
  },
  {
    img: "pesrson.svg",
    heading1: "Follower Growth",
    heading2: "00",
    date: "Since: March 1",
    alt: "img",
    arrow: "arrow.svg",
    num: "00%",
    layerImg: "layer.svg",
  },
];
