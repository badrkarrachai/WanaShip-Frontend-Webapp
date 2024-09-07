"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  ChevronRight,
  CircleDollarSign,
  Headset,
  LayoutDashboard,
  LucideIcon,
  MapPin,
  Menu,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-3 " : "justify-start px-8 py-3 mx-4 rounded-xl hover:rounded-xl"
        }
         hover:bg-gray-100 gap-3 transition-colors  ${
          isActive ? "bg-gray-200 text-black": "text-gray-800"
        }
      }`}
      >
        <Icon className={`w-6 h-6 ${isActive ? "text-WaPurple" : "text-gray-600"}`} />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
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
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <Image
          src="https://imagizer.imageshack.com/img922/2748/4JY9zX.png"
          alt="WanaShip-logo"
          width={30}
          height={30}
          className="rounded w-8"
        />
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-bold text-xl `}
        >
          WanaShip
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-12 gap-3 flex flex-col">
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
        <SidebarLink
          href="/reshippers"
          icon={User}
          label="Reshippers"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/addresses"
          icon={MapPin}
          label="Addresses"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={Settings}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/payments"
          icon={CircleDollarSign}
          label="Payments"
          isCollapsed={isSidebarCollapsed}
        /> 
        <SidebarLink
          href="/support"
          icon={Headset}
          label="Support"
          isCollapsed={isSidebarCollapsed}
        /> 
      </div>

      {/* FOOTER */}
      <Image
          src="https://imagizer.imageshack.com/img922/2748/4JY9zX.png"
          alt="WanaShip-logo"
          width={32}
          height={32}
          className={`${isSidebarCollapsed ? "block" : "hidden"} rounded-full mb-10 mx-4`}
        />
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10 flex p-3 shadow-md justify-between mx-4 rounded-xl items-center`}>
        {/* <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} WanaShip
        </p> */}
        <Image
          src="https://imagizer.imageshack.com/img922/2748/4JY9zX.png"
          alt="WanaShip-logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-semibold text-xs">Hanane Bouzaga</div>
          <div className="text-[0.65rem]">Hananebouzaga38@gmail.com</div>
        </div>
        <ChevronRight size={16}/>
      </div>
    </div>
  );
};

export default Sidebar;
