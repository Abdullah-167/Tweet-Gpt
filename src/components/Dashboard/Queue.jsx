import React from "react";
import GradientBtn from "../Abstract/Button";
import { ImPencil2 } from "react-icons/im";
import Label from "../Abstract/Label";
const Queue = () => {
  return (
    <div className="bg-white rounded-xl p-3 md:p-5 m-5 my-0 md:my-10">
      <div>
        <h3 className="text-2xl text-primary pt-3 pb-7">Queue</h3>
        <div className="flex xl:flex-row flex-col justify-between items-end mb-2">
          <div className="flex xl:flex-row flex-col justify-center gap-5 xl:gap-10">
            <div>
              <Label LabelText="Next Tweet goin to post" />
              <p className="bg-[#F2F2FF] text-sm px-5 py-5 lg:py-3 rounded-lg w-full xl:max-w-[540px] mt-2">
                Progressively conceptualize holistic best practices whereas
                excellent imperatives. Phosfluorescently procrastinate
                alternative......
              </p>
            </div>
            <div>
              <Label LabelText="Schedule" />
              <p className="bg-[#F2F2FF] text-sm px-5 py-[22px] rounded-lg w-full mt-2">
                2023-03-17 5:00 p
              </p>
            </div>
          </div>
          <div className="w-full xl:max-w-[226px] xl:mt-0 mt-7">
            <GradientBtn
              icon={<ImPencil2 />}
              BtnText={"Edit Queue"}
              show={"flex"}
              padding={"18px 30px"}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Queue;
