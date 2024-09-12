import React from "react";
import { BellRing } from "lucide-react";
import { ChartCard } from "./chartCard";
import DashboardAlert from "./dashboardAlert";
import MultiCardsInOne from "./manyCardsInOne";
import DashboardInfoCard from "./infoCard";
import DashboardTopSection from "./topSection";
import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import SmallCard1 from "./muniCardsInOne/SmallCard1";
import SmallCard2 from "./muniCardsInOne/SmallCard2";
import SmallCard3 from "./muniCardsInOne/SmallCard3";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <DashboardTopSection />
        <hr className="w-full h-0 dark:border-WaBorderDark " />
        <DashboardAlert
          title="Parcels in Shipping"
          description="We have observed a decline on your shipments. Please check your shipments and contact us if you have any questions."
          iconAlert={BellRing}
        />
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8  ">
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
            clasName="col-span-1 lg:col-span-3 xl:col-span-1"
          />
        </div>
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 pb-52 content-stretch ">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-2 h-full ">
            <MultiCardsInOne />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-2 h-full">
            <ChartCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
