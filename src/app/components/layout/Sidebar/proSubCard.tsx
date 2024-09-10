import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

interface SidebarCardProps {
  isSidebarCollapsed: boolean;
}

const SidebarCard: React.FC<SidebarCardProps> = ({ isSidebarCollapsed }) => {
  return (
    <>
      {!isSidebarCollapsed && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Card
              shadow="sm"
              className="mb-4 rounded-xl mx-4 dark:border dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-10"
            >
              <CardBody className="flex flex-col gap-3 p-3 w-full">
                <h3 className="font-medium text-lg min-w-[10.5rem]">
                  Pro Subscription
                </h3>
                <p className="text-gray-500">
                  Get exclusive access to premium features and services.
                </p>
                <Button className="py-4 px-6 text-gray-900 clickable-dark bg-[#e6e6e6] font-medium">
                  Get Pro Now
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default SidebarCard;
