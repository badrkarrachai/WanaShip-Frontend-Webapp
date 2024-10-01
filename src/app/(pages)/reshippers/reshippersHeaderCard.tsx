"use client";
import WaSearchInput from "@/app/components/common/searchInput";
import WaSelect from "@/app/components/common/select";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { DateRangePicker } from "@nextui-org/date-picker";
import {
  CircleUserRound,
  NotepadText,
  PlusCircle,
  Search,
  Users,
} from "lucide-react";
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
  const claimedOptions = [
    { key: "Claimed", label: "Claimed" },
    { key: "Unclaimed", label: "Unclaimed" },
  ];
  return (
    <>
      <Card
        shadow="sm"
        className={` flex justify-between relative cards-dark `}
      >
        <CardHeader className="pt-8 pl-8 pr-4 flex justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Users className="text-gray-700 sm:block hidden" size={20} />
            <h1 className="font-bold text-gray-700 text-2xl min-w-[11rem]">
              {title}
            </h1>
          </div>
        </CardHeader>
        <hr className="w-full h-0 dark:border-WaBorderDark my-4 " />
        <CardBody className="pb-8 pl-8 pr-4 flex flex-row flex-wrap gap-4">
          <WaSearchInput
            startContent={<Search className="text-gray-500" size={16} />}
            size="lg"
            palaceholder="Find Reshipper"
            className="sm:max-w-md"
          />
          <WaSelect
            items={claimedOptions}
            label="Type"
            placeholder="Select"
            className=" sm:max-w-40"
          />
          <WaSelect
            items={statusOptions}
            label="Country"
            placeholder="Select"
            className="sm:max-w-xs"
          />
          <WaSelect
            items={statusOptions}
            label="Status"
            placeholder="Select"
            className="sm:max-w-xs"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default HeaderCard;
