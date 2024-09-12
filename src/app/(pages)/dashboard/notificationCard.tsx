"use client";
import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import { X } from "lucide-react";
import { FC, useState } from "react";

interface NotificationCardProps {}

const NotificationCard: FC<NotificationCardProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed w-[30rem] p-5 bg-black right-0 top-0 flex flex-col gap-5  transition-all duration-300 overflow-hidden h-full shadow-md z-[100] bg-opacity-10 backdrop-blur-[23px] sm:backdrop-blur-lg border-r dark:border-WaBorderDark">
          <div className="flex justify-end p-2">
            <X className="cursor-pointer" onClick={handleClose} />
          </div>
          <span className="font-semibold text-xl">Notifications</span>
          <div className="flex flex-col gap-8 relative w-full p-3">
            <Tabs
              aria-label="Options"
              className="w-full font-medium"
              classNames={{
                cursor: "bg-white dark:bg-gray-200",
                tabList: "bg-gray-200 dark:bg-gray-50",
              }}
              radius="full"
              fullWidth={true}
            >
              <Tab key="Unread" title="Unread">
                <div className="flex flex-col gap-6">
                <NotificationContentCard  notificationTime="Today"/>
                <NotificationContentCard  notificationTime="Yesterday"/>
                <NotificationContentCard  notificationTime="Wednesday"/>
                </div>
              </Tab>
              <Tab key="Read" title="Read"></Tab>
              <Tab key="Archived" title="Archived"></Tab>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};

interface NotificationContentCardProps {
  notificationTime: string;
}

const NotificationContentCard: FC<NotificationContentCardProps> = ({notificationTime}) => {
  return (
    <>
      <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <span className="font-semibold text-[1rem] text-gray-500">{notificationTime}</span>
        <span className="font-semibold text-[1rem]">See All</span>
      </div>
      <Card className="w-full h-[8rem] bg-opacity-20 dark:bg dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-5" shadow="sm" isPressable={true}>

      </Card>
      </div>
    </>
  );
};

export default NotificationCard;
