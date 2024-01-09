import React from "react";
import Home from "../../assets/icons/Home.png";
import Orders from "../../assets/icons/Order.png";
import Products from "../../assets/icons/Products.png";
import Delivery from "../../assets/icons/Delivery.png";
import Marketing from "../../assets/icons/Marketing.png";
import Analytics from "../../assets/icons/Analytics.png";
import Payments from "../../assets/icons/Payments.png";
import Tools from "../../assets/icons/Tools.png";
import Discounts from "../../assets/icons/Discount.png";
import Audience from "../../assets/icons/Audience.png";
import Appearance from "../../assets/icons/Appearance.png";
import Plugins from "../../assets/icons/Plugins.png";

const Pages = () => {
  return (
    <div className="flex flex-col gap-y-1 mt-6">
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Home} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Home</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Orders} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Orders</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Products} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Products</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Delivery} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Delivery</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Marketing} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Marketing</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Analytics} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Analytics</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Payments} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Payments</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Tools} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Tools</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Discounts} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Discounts</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Audience} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Audience</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Appearance} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Appearance</div>
      </div>
      <div className="flex flex-row gap-3 py-2 pl-4 hover:bg-[#353C53] hover:rounded">
        <div className="w-5 h-5">
          <img src={Plugins} alt="Home" />
        </div>
        <div className="font-inter text-grey text-[13px] font-medium">Plugins</div>
      </div>
    </div>
  );
};

export default Pages;
