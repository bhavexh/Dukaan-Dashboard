import React from "react";
import NavTop from "./NavTop";
import NavBottom from "./NavBottom";

const Navbar = () => {
  return (
    <div className="hidden md:flex flex-col h-screen w-56 bg-blue px-2 py-4">
      <div className="flex-auto">
        <NavTop />
      </div>
      <div className="px-2">
        <NavBottom />
      </div>
    </div>
  );
};

export default Navbar;
