import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Frame1 from "../components/OverView/Frame1";
import Frame2 from "../components/Transactions/Frame2";

const HomePage = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex flex-col flex-1 overflow-y-auto gap-8 p-8 bg-[#FAFAFA]">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
