import { useState } from "react";
import Scheduled from "./Scheduled";
import Compose from "./Compose";
import { Editor } from "./RichText";
import Image from "next/image";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="hidden sm:block relative bg-white h-full max-w-full mx-5 xl:mx-0 xl:min-w-[384px] rounded-xl">
      <div className="relative sm:sticky top-0">
        <div className="flex justify-center gap-2 px-3 pt-10">
          {tabsData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`${activeTab === index
                  ? "bg-[#11AEF5] text-white"
                  : " bg-white text-[#11AEF5]"
                  } border border-[#11AEF5] w-full max-w-[124px] px-5 cursor-pointer py-2 rounded-md flex justify-center text-center `}
              >
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <div>
          {tabsData[activeTab].comp}
        </div>
        <div className="flex items-center justify-center gap-3 mt-9">
          <span>
            <button className="border-[2px] rounded-lg text-sm text-[#0FAFF5] py-[14px] px-8 border-[#0FAFF5] min-w-[265px]">Add to Queue</button>
          </span>
          <span className="cursor-pointer"><Image src='more-square.svg' width={63} height={63} alt="more-square" /></span>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

const tabsData = [
  {
    title: "Compose",
    comp: <Compose />,
  },
  {
    title: "Draft",
    comp: <Compose />,
  },
  {
    title: "Scheduled",
    comp: <Scheduled />,
  },
];
