"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import { Tab, Tabs } from "@nextui-org/tabs";
import SmallCard1 from "./smallCard1";
import SmallCard2 from "./smallCard2";
import SmallCard3 from "./smallCard3";

const MultiCardsInOne = () => {
  return (
    <>
      <Card
        shadow="sm"
        className="flex gap-4 relative cards-dark w-full p-3 h-full "
      >
        <CardBody className="flex flex-col gap-5 p-4 w-full">
          <h3 className="font-medium text-lg min-w-[10.5rem]">Performance</h3>
          <Tabs
            aria-label="Options"
            className="w-full font-medium"
            classNames={{
              cursor: "bg-white dark:bg-gray-200",
              tabList: "bg-gray-100 dark:bg-gray-50",
            }}
            radius="full"
            fullWidth={true}
          >
            <Tab key="New Users" title="New Users">
              <SmallCard1
                name="Badr Karrachai."
                weeklyShippement="10 items"
                percent="2,15%"
                totalShippement="2,30K"
              />
            </Tab>
            <Tab key="Online Sales" title="Online Sales">
              <SmallCard2 />
            </Tab>
            <Tab key="Weekly Sales" title="Weekly Sales">
              <SmallCard3 />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default MultiCardsInOne;
