"use client";
import { DatePickerWithRange } from "@/app/components/common/dateTimePicker";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { CalendarDays, PlusCircle, Settings2 } from "lucide-react";
import { FC } from "react";

interface topSectionProps {}

const DashboardTopSection: FC<topSectionProps> = ({}) => {
  function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return greeting;
  }
  return (
    <>
      <div className="flex sm:my-0 my-5 flex-wrap items-center justify-center sm:justify-between gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium text-center sm:text-start">
            {getGreeting()}, Badr
          </h1>
          <p className="text-gray-500 text-center sm:text-start">
            Today is <span className="text-WaBlue">16 May, 2024,</span> Welcome
            to your dashboard, keep track of your shipments and payments.
          </p>
        </div>

        <div className="flex gap-2">
          <Dropdown>
            <DropdownTrigger className="py-6 px-6 text-gray-900 clickable-dark bg-[#e6e6e6] font-medium ">
              <Button variant="bordered">
                <PlusCircle size={20} className="text-gray-600" /> Add New
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="newParcel">Expected Parcel</DropdownItem>
              <DropdownItem key="newAddress">Address</DropdownItem>
              <DropdownItem key="newReshipper">Reshipper</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DatePickerWithRange
            triggetElement={
              <Button className="py-6 px-6 text-gray-900 clickable-dark bg-[#e6e6e6] font-medium ">
                <CalendarDays size={20} className="text-gray-600" /> Date
              </Button>
            }
          />
          <Button className="py-6 px-0 text-gray-900 clickable-dark bg-[#e6e6e6] font-medium ">
            <Settings2 size={20} className="text-gray-600" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default DashboardTopSection;
