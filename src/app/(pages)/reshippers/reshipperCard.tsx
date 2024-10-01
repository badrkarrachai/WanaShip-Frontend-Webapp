"use client";

import {
  Button,
  Card,
  CardBody,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Bookmark, Building2, Hash, MapPin, MonitorDot } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import ReshipperDetailsModal from "./reshipperDetails";

interface ReshipperBodyCardProps {
  Flag?: string;
}

const ReshipperBodyCard: FC<ReshipperBodyCardProps> = ({ Flag }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card
        shadow="sm"
        isPressable
        onPress={onOpen}
        className={` flex justify-between relative cards-dark `}
      >
        <CardBody className="p-5 flex flex-row items-start justify-between gap-5 ">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row items-start justify-between gap-5 w-full ">
              <div className="flex flex-row items-center justify-start gap-5 flex-wrap">
                <div className="relative">
                  <Image
                    src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
                    alt="WanaShip-logo"
                    width={65}
                    height={65}
                    className={` rounded-2xl`}
                  />
                  <div className="absolute -bottom-0 -right-0 border-2 border-white dark:border-[#191D30] inline-flex items-center justify-center px-[0.4rem] py-[0.4rem] text-xs font-semibold leading-none text-white dark:text-black bg-green-500 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-gray-700 text-lg font-bold">
                    Tony Reichert
                  </h3>
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={
                        Flag
                          ? "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/" +
                            Flag +
                            ".svg"
                          : "https://upload.wikimedia.org/wikipedia/he/8/88/Flag_of_unknown_country.svg"
                      }
                      alt="Country Flag"
                      width={20}
                      height={16}
                      className={` `}
                    />
                    <p className="text-gray-500">Morocco</p>
                  </div>
                </div>
              </div>
              <div>
                <Tooltip showArrow={true} content="Claim Reshipper" delay={700}>
                  <Button
                    isIconOnly
                    className="  bg-transparent border-2 dark:border-WaBorderDark"
                  >
                    <Bookmark
                      size={17}
                      // fill="#F8B024" text-WaGold
                      className=" text-gray-800"
                    />
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-2 items-center w-full">
                <span className="font-medium text-xs bg-gray-100 p-2 rounded-full">
                  <MonitorDot className="text-gray-400" size={15} />
                </span>
                <div className="flex flex-col w-full">
                  <span className="text-gray-500 font-medium text-xs">
                    STATUS
                  </span>
                  <p className="font-semibold text-base line-clamp-2">
                    Available
                    {/* Not Available */}
                    {/* Unavailable from
                      <br />
                      28/05/2024 → 28/06/2024 */}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center w-full">
                <span className="font-medium text-xs bg-gray-100 p-2 rounded-full">
                  <MapPin className="text-gray-400" size={15} />
                </span>
                <div className="flex flex-col w-full">
                  <span className="text-gray-500 font-medium text-xs">
                    ADDRESS
                  </span>
                  <p className="font-semibold text-base line-clamp-2">
                    123 Main Street, New York, NY 10012
                  </p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-4">
                <div className="flex flex-row gap-2 items-center ">
                  <span className="font-medium text-xs bg-gray-100 p-2 rounded-full">
                    <Building2 className="text-gray-400" size={15} />
                  </span>
                  <div className="flex flex-col w-full">
                    <span className="text-gray-500 font-medium text-xs">
                      CITY
                    </span>
                    <h2 className="font-semibold text-base ">Guelmim</h2>
                  </div>
                </div>
                <hr className="w-0 h-7 border border-solid border-l border-gray-300" />
                <div className="flex flex-row gap-2 items-center ">
                  <span className="font-medium text-xs bg-gray-100 p-2 rounded-full">
                    <Hash className="text-gray-400" size={15} />
                  </span>
                  <div className="flex flex-col w-full">
                    <span className="text-gray-500 font-medium text-xs">
                      POSTE CODE
                    </span>
                    <h2 className="font-semibold text-base ">11003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <ReshipperDetailsModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </Card>
    </>
  );
};

export default ReshipperBodyCard;
