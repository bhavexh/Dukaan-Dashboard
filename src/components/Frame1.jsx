import React from "react";
import dropdown2 from "../assets/icons/dropdown2.png";

const Frame1 = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="font-inter text-black text-[20px] font-medium">
          OverView
        </div>
        <div className="flex flex-row items-center gap-1.5 px-3.5 border-2 rounded">
          <div className="font-inter text-[#4D4D4D] text-[16px] font-normal"> Last Month</div>
          <div className="h-3 w-3 flex items-center">
            <img src={dropdown2} alt="dropdown" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="basis-1/2 p-5 mr-2.5 bg-white rounded-lg">
          <div className="flex flex-col item-start space-y-4">
            <div className="font-inter text-[#4D4D4D] text-[16px] font-regular">
              Online Orders
            </div>
            <div className="font-inter text-black text-[32px] font-medium">
              231
            </div>
          </div>
        </div>
        <div className="basis-1/2 p-5 ml-2.5 bg-white rounded-lg">
          <div className="flex flex-col item-start space-y-4">
            <div className="font-inter text-[#4D4D4D] text-[16px] font-regular">
              Amount received
            </div>
            <div className="font-inter text-black text-[32px] font-medium">
            ₹23,92,312.19
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
