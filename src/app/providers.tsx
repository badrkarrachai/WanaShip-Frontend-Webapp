"use client";

import React, { useEffect } from "react";
import StoreProvider, { useAppSelector } from "./redux";

import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main className={`flex flex-col w-full h-full z-10 bg-gray-50 `}>
        <Background />
        <div
          className={`flex flex-col min-h-screen z-10 transition-all duration-300 px-5 sm:px-10 pt-7 ${
            isSidebarCollapsed ? "md:ml-[4rem]" : "md:ml-[18rem]"
          }`}
        >
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <StoreProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </StoreProvider>
    </NextUIProvider>
  );
};

export default Providers;
