import { Input } from "@nextui-org/react";
import { FC } from "react";

interface WaInputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "text" | "search" | "url" | "tel" | "email" | "password";
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  defaultValue?: string;
  isReadOnly?: boolean;
}

export const WaInput: FC<WaInputProps> = ({
  label,
  placeholder,
  className,
  size,
  type,
  endContent,
  startContent,
  defaultValue,
  isReadOnly,
}) => {
  return (
    <>
      <Input
        label={label}
        type={""}
        placeholder={placeholder}
        className={className}
        endContent={endContent}
        startContent={startContent}
        defaultValue={defaultValue}
        isReadOnly={isReadOnly}
        size={size}
        classNames={{
          inputWrapper: "clickable-dark",
        }}
      />
    </>
  );
};

export default WaInput;
