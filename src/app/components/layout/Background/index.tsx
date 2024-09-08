import { useAppSelector } from "@/app/redux";
import React from "react";

const Background = () => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  return (
    <div className="w-full min-h-screen fixed inset-0 overflow-hidden ">
      <div className="bottom-5 absolute bg-gradient-to-tl from-fuchsia-700 to-cyan-300 w-[10%] h-[80%] dark:opacity-45 opacity-95 rounded-full blur-[150px] z-[1]" />
      <div className="top-[-20rem] right-52 absolute bg-[#F8D3D3] w-[30%] h-[30%] opacity-60 dark:opacity-30 rounded-full blur-[160px] z-[3]" />
      <div
        className={`${
          isSidebarCollapsed ? "md:ml-[4rem]" : "md:ml-[18rem]"
        } absolute w-full h-full -inset-0 transition-all duration-300 bg-WaBackground z-[2] dark:bg-WaBackgroundDark`}
      ></div>
    </div>
  );
};

export default Background;
