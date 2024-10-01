"use client";
import WaSearchInput from "@/app/components/common/searchInput";
import WaSelect from "@/app/components/common/select";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { MapPin, NotepadText, PlusCircle, Search, Users } from "lucide-react";
import { FC } from "react";

interface AddressesHeaderCardProps {
  title: string;
}

const AddressesHeaderCard: FC<AddressesHeaderCardProps> = ({ title }) => {
  const countryOptions = [
    { key: "us", label: "United States" },
    { key: "ca", label: "Canada" },
    { key: "gb", label: "United Kingdom" },
    { key: "fr", label: "France" },
    { key: "de", label: "Germany" },
    { key: "es", label: "Spain" },
    { key: "it", label: "Italy" },
    { key: "ru", label: "Russia" },
    { key: "cn", label: "China" },
    { key: "in", label: "India" },
    { key: "au", label: "Australia" },
    { key: "br", label: "Brazil" },
    { key: "jp", label: "Japan" },
    { key: "kr", label: "South Korea" },
    { key: "ph", label: "Philippines" },
  ];
  return (
    <>
      <Card
        shadow="sm"
        className={` flex justify-between relative cards-dark `}
      >
        <CardHeader className="pt-8 pl-8 pr-4 flex justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <MapPin className="text-gray-700 sm:block hidden" size={20} />
            <h1 className="font-bold text-gray-700 text-2xl min-w-[11rem]">
              {title}
            </h1>
          </div>
          <Button className="py-6 sm:px-6 text-gray-50 dark:text-gray-900 bg-WaPurple font-medium  ">
            <PlusCircle size={20} className="" /> Add Address
          </Button>
        </CardHeader>
        <hr className="w-full h-0 dark:border-WaBorderDark my-4 " />
        <CardBody className="pb-8 pl-8 pr-4 flex flex-row flex-wrap gap-4">
          <WaSearchInput
            startContent={<Search className="text-gray-500" size={16} />}
            size="lg"
            palaceholder="Find Address"
            className="sm:max-w-md"
          />

          <WaSelect
            items={countryOptions}
            label="Country"
            placeholder="Select"
            defaultSelectedKeys={["15"]}
            className="sm:max-w-40 "
          />
        </CardBody>
      </Card>
    </>
  );
};

export default AddressesHeaderCard;
