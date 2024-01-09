import React from "react";
import Sort from "./Sort";
import Download from "./Download";
import Search from "../../assets/icons/Search.png";
import dropdown from "../../assets/icons/dropdown.png";
import vector from "../../assets/icons/vector.png";

const TableTopBar = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-10 flex flex-row justify-between">
        <div className="py-2.5 px-4 rounded-md border-2 ">
          <div className="flex flex-row items-center">
            <div className="h-4 w-4 mr-2">
              <img src={Search} alt="Search" />
            </div>
            <div className="w-48 font-inter text-[#808080] text-[14px] font-normal">
              Search by order ID...
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <Sort />
          <Download />
        </div>
      </div>
      <div className="h-10 px-3 py-2.5 bg-grey rounded flex flex-row">
        <div className="basis-1/2 flex flex-row gap-10 pr-5">
          <div className="flex-1 flex items-center font-inter text-[#4D4D4D] text-[14px] font-medium">
            Order ID
          </div>
          <div className="flex-1 flex flex-row items-center gap-1">
            <div className="font-inter text-[#4D4D4D] text-[14px] font-medium">
              Order Date
            </div>
            <div className="h-2 w-2 flex items-center">
              <img src={dropdown} alt="dropdown" />
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-row gap-10 pl-5">
          <div className="flex-1 flex flex-row-reverse items-center font-inter text-[#4D4D4D] text-[14px] font-medium">
            Order amount
          </div>
          <div className="flex-1 flex flex-row-reverse items-center gap-1">
            <div className="h-3.5 w-3.5 flex items-center">
              <img
                className="flex items-center justify-center"
                src={vector}
                alt="vector"
              />
            </div>
            <div className="font-inter text-[#4D4D4D] text-[14px] font-medium">
              Transaction fees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTopBar;
