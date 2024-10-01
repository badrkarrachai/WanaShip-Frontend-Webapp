import { Select, SelectItem } from "@nextui-org/react";
import { FC } from "react";

interface SelectItemType {
  key: string;
  label: string;
}

interface SelectProps {
  items?: SelectItemType[];
  label?: string;
  placeholder?: string;
  className?: string;
  defaultSelectedKeys?: string[];
}

const WaSelect: FC<SelectProps> = ({
  items = [],
  label,
  placeholder,
  className,
  defaultSelectedKeys,
}) => {
  return (
    <Select
      items={items}
      label={label}
      placeholder={placeholder}
      className={className}
      size="sm"
      classNames={{
        trigger: "clickable-dark",
      }}
      defaultSelectedKeys={defaultSelectedKeys}
    >
      {(item: SelectItemType) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      )}
    </Select>
  );
};

export default WaSelect;
