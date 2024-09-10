"use client";
import { Card} from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import { FC } from "react";
import { Progress } from "@nextui-org/progress";

interface Country {
    CountrieName: string;
    PersentValue: number;
    flagUrl: string;
  }
  
  const countries: Country[] = [
    {
      CountrieName: "USA",
      PersentValue: 75,
      flagUrl: "https://flagcdn.com/us.svg",
    },
    {
      CountrieName: "Canada",
      PersentValue: 60,
      flagUrl: "https://flagcdn.com/ca.svg",
    },
    {
      CountrieName: "UK",
      PersentValue: 45,
      flagUrl: "https://flagcdn.com/gb.svg",
    },
    {
      CountrieName: "Germany",
      PersentValue: 80,
      flagUrl: "https://flagcdn.com/de.svg",
    },
    {
      CountrieName: "France",
      PersentValue: 55,
      flagUrl: "https://flagcdn.com/fr.svg",
    },
  ];
  
  interface SmallCard3Props {}
  
  const SmallCard3: FC<SmallCard3Props> = () => {
    return (
      <>
        <Card
          shadow="sm"
          className="flex items-center p-4 dark:border dark:border-WaBorderDark dark:bg-slate-200 dark:bg-opacity-10"
        >
          <div className="flex flex-col gap-5 w-full p-4">
            <span className="text-gray-500 text-lg font-semibold">
              Top Countries
            </span>
            <div className="flex flex-col w-full items-center gap-4">
              {countries.map((country, index) => (
                <div key={index} className="w-full flex items-center gap-4">
                    <Image
                      src={country.flagUrl}
                      alt={`${country.CountrieName}-flag`}
                      width={50}
                      height={50}
                      className="rounded-full w-10 h-10 object-cover flex-shrink-0"
                    />
                  <Progress
                    size="md"
                    radius="sm"
                    classNames={{
                      base: "",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-[#1B9FC8] to-[#A158EE]",
                      label: "text-gray-800 text-lg font-medium",
                      value: "text-gray-800 text-lg font-medium",
                    }}
                    label={country.CountrieName}
                    value={country.PersentValue}
                    showValueLabel={true}
                    valueLabel={country.PersentValue + "%"}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </>
    );
  };
  export default SmallCard3;