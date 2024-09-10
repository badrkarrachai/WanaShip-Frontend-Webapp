"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FC } from "react";

interface MultiCardsInOneProps {
  title: string;
}

const MultiCardsInOne = ({ title }: MultiCardsInOneProps) => {
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
              <SmallCard1
                name="Badr Karrachai."
                weeklyShippement="10 items"
                percent="2,15%"
                totalShippement="2,30K"
              />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

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
                <h2 className="font-bold text-4xl">{totalShippement}</h2>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="bg-[#D1FADF] dark:bg-opacity-85 rounded-full p-[0.05rem]">
                  <ArrowUp color="#05841A" size={16} />
                </div>
                <div className=" text-[#05841A] text-base">{percent}</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

interface SmallCard2Props {}

const SmallCard2: FC<SmallCard2Props> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <Card className="flex flex-row gap-16 justify-center items-center p-5 w-full">
          <div>
            <span className="text-gray-500 font-medium text-xs">
              DIGITAL PRODUCT
            </span>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[#FFF5F5] dark:bg-opacity-85 rounded-full p-1">
                <ArrowDown color="#B70000" size={16} />
              </div>
              <div className="font-bold text-4xl">8.523</div>
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
              <div className="font-bold text-4xl">8.523</div>
            </div>
          </div>
        </Card>
        <Card className="flex flex-row gap-16 justify-center items-center p-5 w-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row justify-between items-start">
              <div>
                <span className="text-gray-500 font-medium text-xs">
                  TOTAL Online Sales
                </span>
                <h2 className="font-bold text-4xl">256k</h2>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="bg-[#D1FADF] dark:bg-opacity-85 rounded-full p-[0.05rem]">
                  <ArrowUp color="#05841A" size={16} />
                </div>
                <div className=" text-[#05841A] text-base">25%</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MultiCardsInOne;
