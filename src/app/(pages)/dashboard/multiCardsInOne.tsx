"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

interface MultiCardsInOneProps {
  title: string;
  name: string;
  weeklyShippement: string;
  percent: string;
  totalShippement: string;
}

const MultiCardsInOne = ({
  title,
  name,
  weeklyShippement,
  percent,
  totalShippement,
}: MultiCardsInOneProps) => {
  return (
    <>
      <Card className="flex gap-4 relative cards-dark w-full p-3">
        <CardBody className="flex flex-col gap-5 p-4 w-full">
          <h3 className="font-medium text-lg min-w-[10.5rem]">{title}</h3>
          <Tabs
            aria-label="Options"
            className="w-full font-medium"
            classNames={{
              cursor: "bg-white dark:bg-gray-200",
              tabList: "bg-gray-100 ",
            }}
            radius="full"
            fullWidth={true}
          >
            <Tab key="New Users" title="New Users">
              <Card className="flex items-center p-4 shadow-md dark:border dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-10">
                <CardBody className="flex flex-col gap-4">
                  <div className="flex items-center gap-5">
                    <Image
                      src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
                      alt="WanaShip-logo"
                      width={90}
                      height={90}
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <span className="text-gray-500 font-medium text-xs">
                          RESHIPPER NAME
                        </span>
                        <h2 className="font-semibold text-2xl truncate max-w-60">
                          {name}
                        </h2>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 font-medium text-xs">
                          WEEKLY PURCHASE
                        </span>
                        <h2 className="font-semibold text-2xl truncate max-w-60">
                          {weeklyShippement}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <hr className="w-full h-0  dark:border-WaBorderDark" />
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-start">
                      <div>
                        <span className="text-gray-500 font-medium text-xs">
                          TOTAL NEW USERS
                        </span>
                        <h2 className="font-bold text-4xl">
                          {totalShippement}
                        </h2>
                      </div>
                      <div className="flex flex-row items-center gap-1">
                        <div className="bg-[#D1FADF] dark:bg-opacity-85 rounded-full p-[0.05rem]">
                          <ArrowUp color="#05841A" size={16} />
                        </div>
                        <div className=" text-[#05841A] text-base">
                          {percent}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <AvatarGroup isBordered max={4}>
                        <Avatar
                          classNames={{
                            base: "border-3 border-white dark:border-[#303345]",
                          }}
                          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />

                        <Avatar
                          classNames={{
                            base: "border-3 border-white dark:border-[#303345]",
                          }}
                          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                        />
                        <Avatar
                          classNames={{
                            base: "border-3 border-white dark:border-[#303345]",
                          }}
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                        <Avatar
                          classNames={{
                            base: "border-3 border-white dark:border-[#303345]",
                          }}
                          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                        />
                      </AvatarGroup>
                      <Button className="rounded-full bg-gray-100 font-medium text-WaBlack flex items-center dark:text-black dark:bg-slate-50 dark:bg-opacity-60">
                        View All
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Online Sales" title="Online Sales">
              <Card className="flex gap-2 items-center shadow-md">
                <CardBody className="flex flex-col  gap-10 justify-center items-center">
                  <div>
                    <div className="flex items-center gap-5">
                      <Image
                        src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
                        alt="WanaShip-logo"
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="text-gray-500">TOP RESHIPPER</span>
                          <h2>{name}</h2>
                        </div>
                        <div>
                          <span>WEEKLY PURCHASE</span>
                          <h2>{weeklyShippement}</h2>
                        </div>
                      </div>
                    </div>
                    <hr className="w-full h-0  dark:border-WaBorderDark " />
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-gray-500">TOTAL NEW USERS</span>
                        <h2>{totalShippement}</h2>
                      </div>
                      <div className="flex flex-col">
                        <div>{percent}</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Weekly Sales" title="Weekly Sales">
              <Card className="flex gap-2 items-center shadow-md">
                <CardBody className="flex flex-col  gap-10 justify-center items-center">
                  <div>
                    <div className="flex items-center gap-5">
                      <Image
                        src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
                        alt="WanaShip-logo"
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="text-gray-500">TOP RESHIPPER</span>
                          <h2>{name}</h2>
                        </div>
                        <div>
                          <span>WEEKLY PURCHASE</span>
                          <h2>{weeklyShippement}</h2>
                        </div>
                      </div>
                    </div>
                    <hr className="w-full h-0  dark:border-WaBorderDark " />
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-gray-500">TOTAL NEW USERS</span>
                        <h2>{totalShippement}</h2>
                      </div>
                      <div className="flex flex-col">
                        <div>{percent}</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default MultiCardsInOne;
