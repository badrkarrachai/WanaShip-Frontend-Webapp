"use client";
import { Card } from "@nextui-org/card";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { FC } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/common/chart";
import { Area, XAxis, AreaChart } from "recharts";

interface SmallCard2Props {}
const SmallCard2: FC<SmallCard2Props> = ({}) => {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  const chartData = [
    { date: "2024-04-01", desktop: 222, mobile: 150 },
    { date: "2024-04-02", desktop: 97, mobile: 180 },
    { date: "2024-04-03", desktop: 167, mobile: 120 },
    { date: "2024-04-04", desktop: 242, mobile: 260 },
    { date: "2024-04-05", desktop: 373, mobile: 290 },
    { date: "2024-04-06", desktop: 301, mobile: 340 },
    { date: "2024-04-07", desktop: 245, mobile: 180 },
    { date: "2024-04-08", desktop: 409, mobile: 320 },
    { date: "2024-04-09", desktop: 59, mobile: 110 },
    { date: "2024-04-10", desktop: 261, mobile: 190 },
    { date: "2024-04-11", desktop: 327, mobile: 350 },
    { date: "2024-04-12", desktop: 292, mobile: 210 },
    { date: "2024-04-13", desktop: 342, mobile: 380 },
    { date: "2024-04-14", desktop: 137, mobile: 220 },
    { date: "2024-04-15", desktop: 120, mobile: 170 },
    { date: "2024-04-16", desktop: 138, mobile: 190 },
    { date: "2024-04-17", desktop: 446, mobile: 360 },
    { date: "2024-04-18", desktop: 364, mobile: 410 },
    { date: "2024-04-19", desktop: 243, mobile: 180 },
    { date: "2024-04-20", desktop: 89, mobile: 150 },
    { date: "2024-04-21", desktop: 137, mobile: 200 },
    { date: "2024-04-22", desktop: 224, mobile: 170 },
    { date: "2024-04-23", desktop: 138, mobile: 230 },
    { date: "2024-04-24", desktop: 387, mobile: 290 },
    { date: "2024-04-25", desktop: 215, mobile: 250 },
    { date: "2024-04-26", desktop: 75, mobile: 130 },
    { date: "2024-04-27", desktop: 383, mobile: 420 },
    { date: "2024-04-28", desktop: 122, mobile: 180 },
    { date: "2024-04-29", desktop: 315, mobile: 240 },
    { date: "2024-04-30", desktop: 454, mobile: 380 },
    { date: "2024-05-01", desktop: 165, mobile: 220 },
    { date: "2024-05-02", desktop: 293, mobile: 310 },
    { date: "2024-05-03", desktop: 247, mobile: 190 },
    { date: "2024-05-04", desktop: 385, mobile: 420 },
    { date: "2024-05-05", desktop: 481, mobile: 390 },
    { date: "2024-05-06", desktop: 498, mobile: 520 },
    { date: "2024-05-07", desktop: 388, mobile: 300 },
    { date: "2024-05-08", desktop: 149, mobile: 210 },
    { date: "2024-05-09", desktop: 227, mobile: 180 },
    { date: "2024-05-10", desktop: 293, mobile: 330 },
    { date: "2024-05-11", desktop: 335, mobile: 270 },
    { date: "2024-05-12", desktop: 197, mobile: 240 },
    { date: "2024-05-13", desktop: 197, mobile: 160 },
    { date: "2024-05-14", desktop: 448, mobile: 490 },
    { date: "2024-05-15", desktop: 473, mobile: 380 },
    { date: "2024-05-16", desktop: 338, mobile: 400 },
    { date: "2024-05-17", desktop: 499, mobile: 420 },
    { date: "2024-05-18", desktop: 315, mobile: 350 },
    { date: "2024-05-19", desktop: 235, mobile: 180 },
    { date: "2024-05-20", desktop: 177, mobile: 230 },
    { date: "2024-05-21", desktop: 82, mobile: 140 },
    { date: "2024-05-22", desktop: 81, mobile: 120 },
    { date: "2024-05-23", desktop: 252, mobile: 290 },
    { date: "2024-05-24", desktop: 294, mobile: 220 },
    { date: "2024-05-25", desktop: 201, mobile: 250 },
    { date: "2024-05-26", desktop: 213, mobile: 170 },
    { date: "2024-05-27", desktop: 420, mobile: 460 },
    { date: "2024-05-28", desktop: 233, mobile: 190 },
    { date: "2024-05-29", desktop: 78, mobile: 130 },
    { date: "2024-05-30", desktop: 340, mobile: 280 },
    { date: "2024-05-31", desktop: 178, mobile: 230 },
    { date: "2024-10-01", desktop: 178, mobile: 200 },
    { date: "2024-10-02", desktop: 470, mobile: 410 },
    { date: "2024-10-03", desktop: 103, mobile: 160 },
    { date: "2024-10-04", desktop: 439, mobile: 380 },
    { date: "2024-10-05", desktop: 88, mobile: 140 },
    { date: "2024-10-10", desktop: 294, mobile: 250 },
    { date: "2024-10-07", desktop: 323, mobile: 370 },
    { date: "2024-10-08", desktop: 385, mobile: 320 },
    { date: "2024-10-09", desktop: 438, mobile: 480 },
    { date: "2024-10-10", desktop: 155, mobile: 200 },
    { date: "2024-10-11", desktop: 92, mobile: 150 },
    { date: "2024-10-12", desktop: 492, mobile: 420 },
    { date: "2024-10-13", desktop: 81, mobile: 130 },
    { date: "2024-10-14", desktop: 426, mobile: 380 },
    { date: "2024-10-15", desktop: 307, mobile: 350 },
    { date: "2024-10-16", desktop: 371, mobile: 310 },
    { date: "2024-10-17", desktop: 475, mobile: 520 },
    { date: "2024-10-18", desktop: 107, mobile: 170 },
    { date: "2024-10-19", desktop: 341, mobile: 290 },
    { date: "2024-10-20", desktop: 408, mobile: 450 },
    { date: "2024-10-21", desktop: 169, mobile: 210 },
    { date: "2024-10-22", desktop: 317, mobile: 270 },
    { date: "2024-10-23", desktop: 480, mobile: 530 },
    { date: "2024-10-24", desktop: 132, mobile: 180 },
    { date: "2024-10-25", desktop: 141, mobile: 190 },
    { date: "2024-10-26", desktop: 434, mobile: 380 },
    { date: "2024-10-27", desktop: 448, mobile: 490 },
    { date: "2024-10-28", desktop: 149, mobile: 200 },
    { date: "2024-10-29", desktop: 103, mobile: 160 },
    { date: "2024-10-30", desktop: 446, mobile: 400 },
  ];

  const [timeRange, _] = React.useState("90d");
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full ">
        <Card
          shadow="sm"
          className="flex flex-row justify-between p-5 md:px-10 lg:px-16 items-center w-full inner-card-dark"
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
        <Card
          shadow="sm"
          className="flex p-5 items-center w-full inner-card-dark"
        >
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row justify-between items-start">
              <div>
                <span className="text-gray-500 font-medium text-xs">
                  TOTAL Online Sales
                </span>
                <h2 className="font-bold text-4xl">256k</h2>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="bg-[#D1FADF] dark:bg-opacity-85 rounded-full p-1">
                  <ArrowUp color="#05841A" size={16} />
                </div>
                <div className=" text-[#05841A] text-base">25%</div>
              </div>
            </div>
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[162px] w-full"
            >
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                      indicator="dot"
                    />
                  }
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="2" x2="1.3" y2="0.6">
                    <stop offset="0%" stopColor="transparent" stopOpacity={1} />
                    <stop
                      offset="50%"
                      stopColor="transparent"
                      stopOpacity={0.5}
                    />
                    <stop offset="100%" stopColor="#A158EE" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#gradient)"
                  stroke="#A158EE"
                  stackId="a"
                  strokeWidth={4.5}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </Card>
      </div>
    </>
  );
};
export default SmallCard2;
