"use client";

import { AreaChart } from "@/app/components/common/AreaChart";
import { Card, CardBody } from "@nextui-org/card";

const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

export const AreaChartHero = () => (
  <Card className=" flex justify-between relative cards-dark">
    <CardBody className="p-6 flex flex-row items-start justify-between gap-4 flex-wrap">
      <h1 className="text-base font-base min-w-[10.5rem]">
        Transaction activity
      </h1>

      <AreaChart
        className="h-[26.3rem]"
        data={chartdata}
        index="date"
        categories={["SolarPanels", "Inverters"]}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat("us").format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
        fill="gradient"
      />
    </CardBody>
  </Card>
);
