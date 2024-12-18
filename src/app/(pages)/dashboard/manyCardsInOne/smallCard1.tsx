"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
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
      <div className="flex flex-col gap-4">
        <Card shadow="sm" className="flex items-center p-4 inner-card-dark">
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
                <Button className="rounded-full font-medium text-WaBlack flex items-center dark:text-black clickable-dark bg-[#e6e6e6]">
                  View All
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          shadow="sm"
          className="flex flex-row justify-between p-5 md:px-10 lg:px-16 items-center w-full dark:border dark:border-WaBorderDark dark:bg-slate-50 dark:bg-opacity-10"
        >
          <div>
            <span className="text-gray-500 font-medium text-xs">
              DIGITAL PRODUCT
            </span>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[#FFF5F5] dark:bg-opacity-85 rounded-full p-1">
                <ArrowDown color="#B70000" size={16} />
              </div>
              <div className="font-semibold text-3xl">8.523</div>
            </div>
          </div>
          <div>
            <span className="text-gray-500 font-medium text-xs">
              DIGITAL PRODUCT
            </span>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[#D1FADF] dark:bg-opacity-85 rounded-full p-1">
                <ArrowUp color="#05841A" size={16} />
              </div>
              <div className="font-semibold text-3xl">8.523</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default SmallCard1;
