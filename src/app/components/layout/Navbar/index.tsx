"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import React from "react";
import WaSearchInput from "../../common/searchInput";
import NotificationCard from "@/app/(pages)/dashboard/notificationCard";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full mb-7  ">
      {/* LEFT SIDE */}
      <div className="flex flex-1 items-center gap-5">
        <button
          className="px-3 py-3 bg-white border shadow-sm rounded-full hover:bg-blue-100 clickable-dark"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
        <WaSearchInput
          startContent={<Search className="text-gray-500" size={16} />}
          size="lg"
          palaceholder="Find something: Parcel, Reshippers, ..."
        />

        <hr className="w-0 h-7 border border-solid border-l border-gray-300 sm:mx-3" />
        <div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="cursor-pointer text-gray-500" size={24} />
            ) : (
              <Moon className="cursor-pointer text-gray-500" size={24} />
            )}
          </button>
        </div>
        <div className="relative">
          <Bell
            className="cursor-pointer text-gray-500"
            size={24}
            onClick={handleClick}
          />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-white dark:text-black bg-red-400 rounded-full">
            3
          </span>
        </div>
        {isOpen && <NotificationCard />}
      </div>
    </div>
  );
};

export default Navbar;
