"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/common/chart";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

export const description = "A multiple line chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 100 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 114, mobile: 180 },
  { month: "July", desktop: 199, mobile: 120 },
  { month: "August", desktop: 109, mobile: 190 },
  { month: "September", desktop: 164, mobile: 140 },
  { month: "October", desktop: 169, mobile: 120 },
  { month: "November", desktop: 159, mobile: 130 },
  { month: "December", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#A158EE",
  },
  mobile: {
    label: "Mobile",
    color: "#1B9FC8",
  },
} satisfies ChartConfig;
export function ChartCard() {
  return (
    <Card
      shadow="sm"
      className="h-full w-full flex justify-between relative cards-dark  "
    >
      <CardBody className="flex gap-10 ">
        <h1 className="font-medium text-lg min-w-[10.5rem] pl-5 pt-5">
          Transaction activity
        </h1>

        <ChartContainer className="sm:ml-0 ml-[-30px]" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -5,
              right: 12,
            }}
          >
            <CartesianGrid
              className="stroke-gray-200 stroke-1 dark:stroke-gray-200"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              className="sm:block hidden"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardBody>
    </Card>
  );
}
