import React from "react";
import previous from "../../assets/icons/previous.png";
import next from "../../assets/icons/next.png";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-6 ">
      <div className="flex flex-row items-center gap-1.5 py-1.5 pl-1.5 pr-3 border-2 rounded hover:bg-grey">
        <div className="h-4.5 w-4.5 p-1.5">
            <img className="w-1.5" src={previous} alt="previous" />
        </div>
        <div className="flex items-center justify-center font-inter text-[#4D4D4D] text-[14px] font-medium">
            Previous
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 h-7 ">
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            1
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            ...
        </div>
        <div className="flex items-center justify-center  min-w-7 h-full font-inter text-white bg-[#146EB4] text-[14px] font-normal rounded">
            10
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            11
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            12
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            13
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            14
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            15
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            16
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            17
        </div>
        <div className="flex items-center justify-center min-w-7 h-full font-inter text-[#4D4D4D] text-[14px] font-normal hover:bg-grey hover:rounded">
            18
        </div>
      </div>
      <div className="flex flex-row items-center gap-1.5 py-1.5 pr-1.5 pl-3 border-2 rounded hover:bg-grey">
        <div className="flex items-center justify-center font-inter text-[#4D4D4D] text-[14px] font-medium">
            Next
        </div>
        <div className="h-4.5 w-4.5 p-1.5">
            <img className="w-1.5" src={next} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
