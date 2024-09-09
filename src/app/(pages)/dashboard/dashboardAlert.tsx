import { Card, CardBody } from "@nextui-org/card";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/button";

interface AlertProps {
  title: string;
  description: string;
  iconAlert: LucideIcon;
}

const DashboardAlert = ({
  title,
  description,
  iconAlert: Icon,
}: AlertProps) => {
  return (
    <>
      <Card className="flex items-center relative cards-dark w-full p-3">
        <CardBody className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-row gap-4 items-center">
            <div className="p-4 flex-shrink-0 bg-WaBlack rounded-full dark:bg-gray-300">
              <Icon size={20} className="text-white dark:text-WaWhite" />
            </div>
            <div className="flex-shrink">
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-gray-500">{description}</p>
            </div>
          </div>
          <Button radius="full" className="bg-WaPurple text-WaWhite flex-shrink-0 sm:block hidden">
            <div className="px-3">View Details</div>
          </Button>
          <ArrowUpRight className="text-gray-500 w-6 h-6 absolute right-0 top-0 sm:hidden block" />
        </CardBody>
      </Card>
    </>
  );
};

export default DashboardAlert;
