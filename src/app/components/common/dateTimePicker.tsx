"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { today, getLocalTimeZone } from "@internationalized/date";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  RangeCalendar,
} from "@nextui-org/react";

interface DatePickerProps {
  className?: string;
  triggetElement?: React.ReactNode;
}

export function DatePickerWithRange({
  className,
  triggetElement,
}: DatePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover placement="bottom">
        <PopoverTrigger>{triggetElement}</PopoverTrigger>
        <PopoverContent className=" p-0">
          <RangeCalendar
            aria-label="Date (Uncontrolled)"
            className="w-full"
            defaultValue={{
              start: today(getLocalTimeZone()),
              end: today(getLocalTimeZone()).add({ weeks: 1 }),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
