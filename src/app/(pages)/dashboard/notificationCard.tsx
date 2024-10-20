"use client";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/tabs";
import { X } from "lucide-react";
import { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setNotificationBarCollapsed } from "@/state";

interface NotificationCardProps {}

const NotificationCard: FC<NotificationCardProps> = () => {
  const dispatch = useAppDispatch();
  const isNotificationBarCollapsed = useAppSelector(
    (state) => state.global.isNotificationBarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setNotificationBarCollapsed(!isNotificationBarCollapsed));
  };

  const notificationsTestData = [
    {
      period: "Today",
      notifications: [
        {
          title: "New Shipment",
          description: "You have a new shipment",
          time: "10:00 AM",
          image: "https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg",
        },
      ],
    },
    {
      period: "Older",
      notifications: [
        {
          title: "New Shipment",
          description: "You have a new shipment",
          time: "10:00 AM",
          image: "https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg",
        },
        {
          title: "New Shipment",
          description: "You have a new shipment",
          time: "10:00 AM",
          image: "https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg",
        },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isNotificationBarCollapsed && (
        <motion.div
          key="notification-sidebar"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed w-full sm:w-[30rem] p-5 bg-black sm:drop-blur-lg right-0 top-0 flex flex-col gap-4 overflow-hidden h-screen shadow-md bg-opacity-10 backdrop-blur-[35px] sm:backdrop-blur-lg border-r dark:border-WaBorderDark z-50"
        >
          <div className="flex justify-between p-2 items-center">
            <span className="font-semibold text-xl">Notifications</span>
            <button
              className="p-2 bg-white border shadow-sm rounded-full hover:bg-blue-100 clickable-dark"
              onClick={toggleSidebar}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-6 relative w-full p-3">
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
                  <NotificationContent
                    notificationsResponse={notificationsTestData}
                  />
                </div>
              </Tab>
              <Tab key="Read" title="Read"></Tab>
              <Tab key="Archived" title="Archived"></Tab>
            </Tabs>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface Notification {
  title: string;
  description: string;
  time: string;
  image: string;
}

interface NotificationsType {
  period: string;
  notifications: Notification[];
}

interface NotificationContentProps {
  notificationsResponse: NotificationsType[];
}

const NotificationContent: FC<NotificationContentProps> = ({
  notificationsResponse,
}) => {
  return (
    <>
      {notificationsResponse.map((notificationRes, i) => (
        <div key={i} className="flex flex-col gap-3">
          <span className="font-semibold text-[1rem] text-gray-500">
            {notificationRes.period}
          </span>
          {notificationRes.notifications.map((notification, j) => (
            <Card
              key={j}
              className="w-full h-[8rem] bg-opacity-5 dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-5"
              shadow="sm"
              isPressable={true}
            >
              <div className="flex p-7 gap-4  w-full relative">
                <X
                  className="absolute top-3 right-3 cursor-pointer"
                  size={19}
                />
                <div className="rounded-full h-2 w-2 bg-WaPurple absolute top-11 left-3"></div>
                <Image
                  src={notification.image}
                  alt="WanaShip-logo"
                  width={35}
                  height={35}
                  className="rounded-small bg-red-500"
                />
                <div className="flex flex-col gap-2 items-start">
                  <h6>{notification.title}</h6>
                  <p className="text-md">{notification.description}</p>
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};

export default NotificationCard;
