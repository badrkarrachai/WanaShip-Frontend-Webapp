"use client";
import WaSelect from "@/app/components/common/select";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/react";
import { LucideIcon, NotepadText, PlusCircle } from "lucide-react";
import { FC } from "react";

interface headerCardProps {
  title: string;
}

const HeaderCard: FC<headerCardProps> = ({ title }) => {
  const statusOptions = [
    { key: "pending", label: "Pending" },
    { key: "shipped", label: "Shipped" },
    { key: "delivered", label: "Delivered" },
  ];
  const parcelPerPageOptions = [
    { key: "5", label: "5" },
    { key: "10", label: "10" },
    { key: "15", label: "15" },
    { key: "20", label: "20" },
  ];
  return (
    <>
      <Card
        shadow="sm"
        className={` flex justify-between relative cards-dark `}
      >
        <CardHeader className="pt-8 pl-8 pr-4 flex justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <NotepadText className="text-gray-700 sm:block hidden" size={20} />
            <h1 className="font-bold text-gray-700 text-2xl min-w-[11rem]">
              {title}
            </h1>
          </div>
          <Button className="py-6 sm:px-6 text-gray-50 dark:text-gray-900 bg-WaPurple font-medium  ">
            <PlusCircle size={20} className="" /> Add Parcel
          </Button>
        </CardHeader>
        <hr className="w-full h-0 dark:border-WaBorderDark my-4 " />
        <CardBody className="pb-8 pl-8 pr-4 flex flex-row flex-wrap gap-4">
          <DateRangePicker
            label="Date"
            defaultValue={{
              start: parseDate("2024-04-01"),
              end: parseDate("2024-04-08"),
            }}
            size="sm"
            classNames={{
              inputWrapper: "clickable-dark",
              segment: "text-gray-500",
              input: "text-gray-900",
            }}
            className="sm:max-w-xs"
          />

          <WaSelect
            items={statusOptions}
            label="Status"
            placeholder="Select"
            className="sm:max-w-xs"
          />
          <WaSelect
            items={parcelPerPageOptions}
            label="Parcel per page"
            placeholder="Select"
            defaultSelectedKeys={["15"]}
            className="sm:max-w-40 "
          />
        </CardBody>
      </Card>
    </>
  );
};

export default HeaderCard;
