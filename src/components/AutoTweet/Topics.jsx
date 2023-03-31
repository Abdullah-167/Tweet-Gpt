import { useState } from "react";
import GradientBtn from "../Abstract/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { ImPencil2 } from "react-icons/im";
import Inputs from "../Abstract/Inputs";
import FrequencyModal from "./FrequencyModal";
import Image from "next/image";

const Topics = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(); // default top position of modal

  const handleButtonClick = (id) => {

    setSelected(id);
    // setShowModal(true);
  }

  return (
    <div className="relative mx-4">
      <div className="bg-white px-4 md:px-6 rounded-xl py-6 my-10">
        <div>
          <h1 className=" text-3xl text-[#153648] pb-4 font-medium">Topics</h1>
          {items.map((item, index) => {
            return (
              <div
                className="flex justify-between items-center gap-2 md:gap-7 py-3"
                key={index}
              >
                <div className="w-full">
                  <Inputs placeholder={item.text} />
                </div>
                <div className="relative">
                  <div
                    className="hidden md:flex md:max-w-[130px] md:min-w-[130px] mx-auto text-center cursor-pointer"
                    onClick={() => handleButtonClick(item.id)}
                  >
                    <GradientBtn
                      icon={item.btnIcon}
                      BtnText={item.buttonText}
                      display={"flex"}
                      justifyContent={"center"}
                      show={"flex"}
                      padding={"14px 26px"}
                    />

                  </div>
                  {item.id === selected &&
                    <div className={`absolute -top-5 sm:-top-1 right-[28px] md:right-56 z-50`}>
                      <FrequencyModal setSelected={setSelected} />
                    </div>
                  }
                </div>
                <div
                  className="max-w-[80px] flex md:hidden justify-center text-center login-btn p-4 rounded-xl cursor-pointer"
                  onClick={() => handleButtonClick(item.id)}
                >
                  <span className="text-2xl font-semibold text-white">{item.btnIcon}</span>
                </div>
              </div>
            );
          })}
        </div>



      </div>
      <div className="bg-white px-4 md:px-10 rounded-xl py-6 mt-10 mb-20">
        <h1 className="text-xl md:text-3xl font-medium text-[#153648] pb-5">
          Words to exclude:
        </h1>
        <div className="">
          <textarea
            placeholder="Bads Words, Hateful Words"
            className="bg-[#F8F8FF] border border-borderprimary rounded-lg h-full w-full outline-none text-secondary pt-6 pb-16 px-3 capitalize"
          />
        </div>
      </div>
    </div>
  );
};

export default Topics;

const items = [
  {
    id: 1,
    text: "Design Principles",
    btnIcon: <AiOutlinePlus />,
    buttonText: "ADD",
  },
  {
    id: 2,
    text: "cool software history tid bit",
    btnIcon: <ImPencil2 />,
    buttonText: "Config",
  },
  {
    id: 3,
    text: "Design Principles",
    btnIcon: <ImPencil2 />,
    buttonText: "Config",
  },
  {
    id: 4,
    text: "Design Principles",
    btnIcon: <ImPencil2 />,
    buttonText: "Config",
  },
];
