"use client";
import { Card, CardBody} from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FC } from "react";

interface SmallCard1Props {
    name: string;
    weeklyShippement: string;
    percent: string;
    totalShippement: string;
  }
  
  const SmallCard1: FC<SmallCard1Props> = ({
    name,
    weeklyShippement,
    percent,
    totalShippement,
  }) => {
    return (
      <>
        <Card
          shadow="sm"
          className="flex items-center p-4 dark:border dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-10"
        >
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
                  <h2 className="font-bold text-4xl">{totalShippement}</h2>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="bg-[#D1FADF] dark:bg-opacity-85 rounded-full p-[0.05rem]">
                    <ArrowUp color="#05841A" size={16} />
                  </div>
                  <div className=" text-[#05841A] text-base">{percent}</div>
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
        {/* <p className="text-center mt-6 px-2 sm:px-10 text-gray-500">
          <b className="text-gray-700">Increased 25%</b> more emails marketing to
          reach your user acquisition target to reach your monthly target.
        </p> */}
      </>
    );
  };
  export default SmallCard1;
  