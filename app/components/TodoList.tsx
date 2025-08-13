"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Calendar1Icon } from "lucide-react";
export default function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium "> Add Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="">
              <Calendar1Icon />
              {date ? format(date, "PPP") : <span>Pick a Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setOpen(false);
              }}
              className="rounded-lg border"
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* list */}
      <ScrollArea className="max-h-[500px] overflow-y-auto mt-5">
        <Card className="p-4 ">
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-muted-foreground">
                Done boss Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum illo, et aliquam, soluta recusandae, nisi laboriosam
                corporis obcaecati eaque est eligendi ipsam perspiciatis.{" "}
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item2" />
              <Label htmlFor="item2" className="text-muted-foreground">
                Done boss Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum illo, et aliquam, soluta recusandae, nisi laboriosam
                corporis obcaecati eaque est eligendi ipsam perspiciatis.{" "}
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item3" />
              <Label htmlFor="item3" className="text-muted-foreground">
                Done boss Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum illo, et aliquam, soluta recusandae, nisi laboriosam
                corporis obcaecati eaque est eligendi ipsam perspiciatis.{" "}
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <Label htmlFor="item4" className="text-muted-foreground">
                Done boss Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum illo, et aliquam, soluta recusandae, nisi laboriosam
                corporis obcaecati eaque est eligendi ipsam perspiciatis.{" "}
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <Label htmlFor="item5" className="text-muted-foreground">
                Done boss Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum illo, et aliquam, soluta recusandae, nisi laboriosam
                corporis obcaecati eaque est eligendi ipsam perspiciatis.{" "}
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item6" />
              <Label htmlFor="item6" className="text-muted-foreground">
                Done boss Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum illo, et aliquam, soluta recusandae, nisi laboriosam
                corporis obcaecati eaque est eligendi ipsam perspiciatis.{" "}
              </Label>
            </div>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
}
