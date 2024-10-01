import { Input } from "@nextui-org/react";
import { FC } from "react";

interface inputProps {
  startContent: React.ReactNode;
  value?: string;
  onClear?: () => void;
  onValueChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  palaceholder?: string;
  className?: string;
}

const WaSearchInput: FC<inputProps> = ({
  startContent,
  value,
  onClear,
  onValueChange,
  size,
  palaceholder,
  className,
}) => {
  return (
    <>
      <div className={`relative group w-full ${className}`}>
        <Input
          isClearable
          classNames={{
            base: "max-w-full ",
            mainWrapper: "h-full",
            input: "ml-3 text-small",
            inputWrapper:
              "rounded-lg h-full font-normal text-default-500 bg-white hover:bg-white focus:bg-white clickable-dark shadow-none",
            clearButton: "mr-1",
          }}
          placeholder={palaceholder}
          size={size}
          startContent={startContent}
          value={value}
          onClear={onClear}
          onValueChange={onValueChange}
        />
        <div className="absolute inset-0 rounded-lg border border-gray-300 bg-transparent group-focus-within:border-WaPurple transition-colors duration-200 pointer-events-none"></div>
      </div>
    </>
  );
};

export default WaSearchInput;
