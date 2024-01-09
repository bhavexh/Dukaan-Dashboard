import React from "react";
import Logo from "../../assets/images/Logo.png";
import dropdown3 from "../../assets/icons/dropdown3.png";

const CompanyName = () => {
  return (
    <div className=" flex flex-row items-center mx-2 gap-3">
      <img className="flex-none h-10 w-10" src={Logo} alt="Logo" />
      <div className="flex-1 flex flex-col justify-between">
        <div className="font-inter text-white text-[15px] font-medium">Nishyan</div>
        <a href="#" className="font-inter text-grey text-[13px] underline underline-offset-2 font-normal">
          Visit Store
        </a>
      </div>
      <div className="flex items-center flex-none w-4 h-4 ">
        <img src={dropdown3} alt="dropdown" />
      </div>
    </div>
  );
};

export default CompanyName;
