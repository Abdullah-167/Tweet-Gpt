import { IoMdArrowDropdown } from "react-icons/io";
import ButtonContained from "../Abstract/ButtonContained";

const FrequencyModal = ({ setSelected }) => {
  return (
    <div className="mx-auto bg-white py-8 px-5 rounded-lg max-w-[239px] min-w-[239px] md:max-w-[336px] md:sm:min-w-[336px]  shadow-2xl">
      <div>
        <div className="modal_header_bg px-2 py-[7px] rounded-lg mb-6">
          <div className="flex justify-between items-center gap-4 ">
            <div className="">
              <div class="relative">
                <select
                  class="cursor-pointer block appearance-none w-full login-btn text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-state"
                >
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>
            <p className="text-primary pr-4">Frequency</p>
          </div>
        </div>
        {weekData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between text-[#738391] mb-3 px-4">
                <p className="text-lg">{item.title}</p>
                <input className="w-[18px]" type="checkbox" name="" id="" />
              </div>
            </div>
          );
        })}
        <div className="py-3" onClick={() => setSelected()}>
          <ButtonContained
            BtnText="Save"
            display={"flex"}
            justifyContent={"center"}
            padding={"14px 0px"}
          />
        </div>
      </div>
    </div>
  );
};

export default FrequencyModal;

const weekData = [
  {
    title: "Monday",
  },
  {
    title: "Tuesday",
  },
  {
    title: "Wednesday",
  },
  {
    title: "Thursday",
  },
  {
    title: "Friday",
  },
  {
    title: "Saturday",
  },
  {
    title: "Sunday",
  },
];
