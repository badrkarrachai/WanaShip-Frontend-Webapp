import React, { useState } from "react";
import WaInput from "@/app/components/common/input";
import { Select, SelectItem } from "@nextui-org/react";
import { Phone } from "lucide-react";
import AnimatedCopyContent from "./copyButton";

interface CountryDataType {
  key: string;
  code: string;
  country: string;
}

interface PhoneNumberInputProps {
  label?: string;
  defaultValue?: string;
  isReadOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  endContent?: React.ReactNode;
}

const countrysData: CountryDataType[] = [
  { key: "us", code: "+1", country: "United States" },
  { key: "ca", code: "+144", country: "Canada" },
  { key: "gb", code: "+999", country: "United Kingdom" },
  { key: "fr", code: "+777", country: "France" },
  { key: "de", code: "+666", country: "Germany" },
  { key: "es", code: "+444", country: "Spain" },
  { key: "it", code: "+555", country: "Italy" },
  { key: "ru", code: "+7", country: "Russia" },
  { key: "cn", code: "+86", country: "China" },
  { key: "in", code: "+91", country: "India" },
  { key: "au", code: "+61", country: "Australia" },
  { key: "br", code: "+55", country: "Brazil" },
  { key: "jp", code: "+81", country: "Japan" },
  { key: "kr", code: "+82", country: "South Korea" },
  { key: "ph", code: "+63", country: "Philippines" },
];

const PhoneInputWithCountryCode = ({
  value,
  onChange,
  endContent,
}: PhoneNumberInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countrysData[0].key);

  return (
    <div className="flex items-center gap-2 h-full">
      <Select<CountryDataType>
        className=" w-[7.7rem] "
        size="lg"
        classNames={{
          trigger: "clickable-dark h-[49px]",
          value: "!text-gray-600 ",
          selectorIcon: "!text-gray-600",
          listbox: "!w-auto ",
          listboxWrapper: "!w-auto",
          popoverContent: "!w-auto",
        }}
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        selectedKeys={[selectedCountry]}
        defaultSelectedKeys={[countrysData[0].key]}
      >
        {countrysData.map((item) => (
          <SelectItem key={item.key} textValue={`${item.code}`}>
            <div className="flex items-center gap-2">
              <span>{item.code}</span>
              <span className="text-gray-500">{item.country}</span>
            </div>
          </SelectItem>
        ))}
      </Select>
      <WaInput
        type="tel"
        label="Phone Number"
        defaultValue="603872478"
        isReadOnly
        startContent={<Phone className=" text-gray-600" size={17} />}
        endContent={endContent}
      />
    </div>
  );
};

export default PhoneInputWithCountryCode;
