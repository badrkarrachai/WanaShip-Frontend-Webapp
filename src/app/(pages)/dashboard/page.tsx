import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { BellRing, CalendarFold, TrendingDown, TrendingUp } from "lucide-react";
import { AreaChartHero } from "./chart";
import DashboardAlert from "./dashboardAlert";
import MultiCardsInOne from "./multiCardsInOne";

const Dashboard = () => {
  function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return greeting;
  }
  return (
    <>
      <div className="space-y-8 ">
        <div className="flex sm:my-0 my-16 flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-medium text-center sm:text-start">
              {getGreeting()}, Badr
            </h1>
            <p className="text-gray-500 text-center sm:text-start">
              Welcome to your dashboard, keep track of your shipments and
              payments.
            </p>
          </div>
          <div className="flex sm:flex-row flex-row-reverse items-center gap-4 ">
            <p>16 May, 2024</p>
            <div className="bg-gray-200 p-3 rounded-full">
              <CalendarFold size={20} />
            </div>
          </div>
        </div>
        <hr className="w-full h-0  dark:border-WaBorderDark " />
        <DashboardAlert title="Parcels in Shipping" description="We have observed a decline on your shipments. Please check your shipments and contact us if you have any questions." iconAlert={BellRing}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 pb-4 ">
          <DashboardInfoCard
            title="Pending Shipments"
            value="16"
            description="From Jan 01, 2024 - March 30, 2024"
            percentType={true}
            percentValue="2,15"
          />
          <DashboardInfoCard
            title="Parcels in Shipping"
            value="10"
            description="From Jan 01, 2024 - March 30, 2024"
            percentType={true}
            percentValue="2,15"
          />
          <DashboardInfoCard
            title="Total Parcels"
            value="230"
            description="From Jan 01, 2024 - March 30, 2024"
            percentType={true}
            percentValue="2,15"
          />
          <DashboardInfoCard
            title="Total Parcles Prices"
            value="$2480.32"
            description="From Jan 01, 2024 - March 30, 2024"
            percentType={false}
            percentValue="2,15"
          />
          <div className="sm:col-span-2">
            <AreaChartHero />
          </div>
          <MultiCardsInOne title="Performance" name="Badr Karrachai." weeklyShippement="10 items" percent="2,15%" totalShippement="2,30K" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

interface DashboardInfoCardProps {
  title: string;
  value: string;
  description: string;
  percentType: boolean;
  percentValue: string;
}

const DashboardInfoCard = ({
  title,
  value,
  description,
  percentType,
  percentValue,
}: DashboardInfoCardProps) => {
  return (
    <Card className=" flex justify-between relative cards-dark ">
      <CardBody className="p-5 flex flex-row items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-base font-medium min-w-[10.5rem]">{title}</h1>
          <h1 className="text-4xl font-medium ">{value}</h1>
        </div>
        {percentType && (
          <div className="bg-[#D1FADF] px-3 py-2 flex gap-2 rounded-lg items-center mt-2 ">
            <TrendingUp className="text-[#05841A] w-6 h-6" />
            <p className="text-[#05841A]">{percentValue}%</p>
          </div>
        )}
        {!percentType && (
          <div className="bg-[#FFF5F5] px-3 py-2 flex gap-2 rounded-lg items-center mt-2 ">
            <TrendingDown className="text-[#B70000] w-6 h-6" />
            <p className="text-[#B70000]">{percentValue}%</p>
          </div>
        )}
      </CardBody>
      <CardFooter className="flex xl:mt-5 dark:bg-opacity-50 flex-col items-start gap-2 bg-gray-100 px-5 py-4">
        <p className="text-gray-500">{description}</p>
      </CardFooter>
    </Card>
  );
};
