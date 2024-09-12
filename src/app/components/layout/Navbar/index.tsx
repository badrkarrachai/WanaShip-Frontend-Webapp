"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // Local state for notification visibility

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  const toggleNotificationVisibility = () => {
    setIsNotificationVisible(!isNotificationVisible); // Toggle visibility state
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex flex-1 items-center gap-5">
        <button
          className="px-3 py-3 bg-white border shadow-sm rounded-full hover:bg-blue-100 clickable-dark"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full">
          <input
            type="search"
            placeholder="Find something: Parcel, Reshippers, ..."
            className="pl-10 pr-4 py-3 w-full border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-WaPurple clickable-dark"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Search className="text-gray-500" size={16} />
          </div>
        </div>
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
            onClick={toggleNotificationVisibility} // Toggle NotificationCard visibility on click
          />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-white dark:text-black bg-red-400 rounded-full">
            3
          </span>
        </div>
      </div>

      {/* Render NotificationCard based on the local state */}
      {isNotificationVisible && <NotificationCard />}
    </div>
  );
};

export default Navbar;
