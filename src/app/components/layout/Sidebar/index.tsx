"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  ChevronRight,
  CircleDollarSign,
  Headset,
  LayoutDashboard,
  LogOut,
  LucideIcon,
  MapPin,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SidebarProSubCard from "./proSubCard";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
  iconClassName?: string;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
  iconClassName,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed
            ? "justify-center py-3 "
            : "justify-start px-8 py-3 mx-4 rounded-xl hover:rounded-xl"
        }
         hover:bg-gray-50 dark:hover:bg-slate-700 gap-3 transition-colors  ${
           isActive
             ? `bg-white shadow-sm shadow-gray-200 text-grey-900 ${
                 isCollapsed ? "border-y" : "dark:border"
               } dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-10 dark:shadow-none`
             : "text-gray-450"
         }
      }`}
      >
        <Icon
          className={`w-6 h-6 ${
            isActive ? "text-WaPurple" : "text-gray-600"
          } ${iconClassName}`}
        />

        <span
          className={`${isCollapsed ? "hidden" : "block"} ${
            isActive ? "text-WaPurple" : ""
          } font-medium`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 ml-[-1px] md:w-16" : "w-72"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40 bg-opacity-10 backdrop-blur-[35px] sm:backdrop-blur-lg border-r dark:border-WaBorderDark`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-4" : "px-8"
        }`}
      >
        <Image
          src="https://imagizer.imageshack.com/img922/2748/4JY9zX.png"
          alt="WanaShip-logo"
          width={30}
          height={30}
          className="rounded"
        />
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-bold text-2xl `}
        >
          WanaShip
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-white border shadow-sm rounded-full hover:bg-blue-100 clickable-dark"
          onClick={toggleSidebar}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div
        className={`flex-grow mt-9 ${
          isSidebarCollapsed ? "gap-4" : "gap-4"
        } flex flex-col`}
      >
        {/* FIRST ROW */}
        <div className=" flex flex-col gap-2">
          {!isSidebarCollapsed && (
            <h3 className="text-gray-600 font-medium px-8 mx-4 ">MAIN</h3>
          )}
          <SidebarLink
            href="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/inventory"
            icon={Archive}
            label="Inventory"
            isCollapsed={isSidebarCollapsed}
          />
          {/* <SidebarLink
            href="/payments"
            icon={CircleDollarSign}
            label="Payments"
            isCollapsed={isSidebarCollapsed}
          /> */}
          <SidebarLink
            href="/reshippers"
            icon={Users}
            label="Reshippers"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/addresses"
            icon={MapPin}
            label="Addresses"
            isCollapsed={isSidebarCollapsed}
          />
        </div>

        {isSidebarCollapsed && (
          <hr className="w-7 h-0 border border-solid border-l border-gray-300 ml-[1.10rem] " />
        )}
        {/* THIRD ROW */}
        <div className="flex flex-col gap-2">
          {!isSidebarCollapsed && (
            <h3 className="text-gray-600 font-medium px-8 py-0 mx-4">OTHERS</h3>
          )}
          <SidebarLink
            href="/settings"
            icon={Settings}
            label="Settings"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/support"
            icon={Headset}
            label="Support"
            isCollapsed={isSidebarCollapsed}
          />
        </div>
      </div>

      {/* PRO SUBSCRIPTION AREA */}
      <SidebarProSubCard isSidebarCollapsed={isSidebarCollapsed} />

      {/* FOOTER */}
      <Image
        src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
        alt="WanaShip-logo"
        width={32}
        height={32}
        className={`${
          isSidebarCollapsed ? "block" : "hidden"
        } rounded-full mb-10 mx-4 cursor-pointer`}
      />
      <div
        className={`${
          isSidebarCollapsed ? "hidden" : "block"
        } bg-white  mb-9 cursor-pointer flex p-3 shadow-md justify-between mx-4 rounded-xl items-center light:border-none dark:border dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-10`}
      >
        {/* <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} WanaShip
        </p> */}
        <Image
          src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
          alt="WanaShip-logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-semibold text-sm truncate max-w-40">
            Badr Karrachai
          </div>
          <div className="text-[0.75rem] truncate max-w-40">
            Badrkarrachai1999@gmail.com
          </div>
        </div>
        <ChevronRight size={16} />
      </div>
    </div>
  );
};

export default Sidebar;
