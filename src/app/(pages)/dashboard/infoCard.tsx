import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface DashboardInfoCardProps {
  title: string;
  value: string;
  description: string;
  percentType: boolean;
  percentValue: string;
  clasName?: string;
}

const DashboardInfoCard = ({
  title,
  value,
  description,
  percentType,
  percentValue,
  clasName,
}: DashboardInfoCardProps) => {
  return (
    <Card
      shadow="sm"
      className={` flex justify-between relative cards-dark ${clasName}`}
    >
      <CardBody className="p-5 flex flex-row items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-medium text-lg min-w-[11rem]">{title}</h1>
          <h1 className="text-4xl font-medium ">{value}</h1>
        </div>
        {percentType && (
          <div className="bg-[#D1FADF] dark:bg-opacity-85 px-3 py-2 flex gap-2 rounded-lg items-center mt-2 ">
            <TrendingUp className="text-[#05841A] w-6 h-6" />
            <p className="text-[#05841A]">{percentValue}%</p>
          </div>
        )}
        {!percentType && (
          <div className="bg-[#FFF5F5] dark:bg-opacity-85 px-3 py-2 flex gap-2 rounded-lg items-center mt-2 ">
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

export default DashboardInfoCard;
