import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

const latestTranscitions = [
  {
    id: 1,
    title: "Dashboard",
    badge: "New",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    count: 12,
  },
  {
    id: 2,
    title: "Analytics",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    count: 8,
  },
  {
    id: 3,
    title: "Reports",
    badge: "Hot",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    count: 15,
  },
  {
    id: 4,
    title: "Users",
    badge: "Beta",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    count: 30,
  },
  {
    id: 5,
    title: "Projects",
    badge: "New",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    count: 7,
  },
  {
    id: 6,
    title: "Tasks",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    count: 25,
  },
  {
    id: 7,
    title: "Messages",
    badge: "Hot",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    count: 42,
  },
  {
    id: 8,
    title: "Notifications",
    badge: "New",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    count: 9,
  },
  {
    id: 9,
    title: "Settings",
    badge: "Beta",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    count: 4,
  },
  {
    id: 10,
    title: "Integrations",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    count: 6,
  },
  {
    id: 11,
    title: "Billing",
    badge: "New",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    count: 3,
  },
  {
    id: 12,
    title: "Support",
    badge: "Hot",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    count: 14,
  },
  {
    id: 13,
    title: "Community",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    count: 19,
  },
  {
    id: 14,
    title: "Files",
    badge: "New",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    count: 11,
  },
  {
    id: 15,
    title: "Archive",
    badge: "Beta",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    count: 5,
  },
];
const popularContent = [
  {
    id: 1,
    title: "Dashboard",
    badge: "New",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    count: 12,
  },
  {
    id: 2,
    title: "Analytics",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    count: 8,
  },
  {
    id: 3,
    title: "Reports",
    badge: "Hot",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    count: 15,
  },
  {
    id: 4,
    title: "Users",
    badge: "Beta",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    count: 30,
  },
  {
    id: 5,
    title: "Projects",
    badge: "New",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    count: 7,
  },
  {
    id: 6,
    title: "Tasks",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    count: 25,
  },
  {
    id: 7,
    title: "Messages",
    badge: "Hot",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    count: 42,
  },
  {
    id: 8,
    title: "Notifications",
    badge: "New",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    count: 9,
  },
  {
    id: 9,
    title: "Settings",
    badge: "Beta",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
    count: 4,
  },
  {
    id: 10,
    title: "Integrations",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    count: 6,
  },
  {
    id: 11,
    title: "Billing",
    badge: "New",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    count: 3,
  },
  {
    id: 12,
    title: "Support",
    badge: "Hot",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    count: 14,
  },
  {
    id: 13,
    title: "Community",
    badge: "Pro",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    count: 19,
  },
  {
    id: 14,
    title: "Files",
    badge: "New",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    count: 11,
  },
  {
    id: 15,
    title: "Archive",
    badge: "Beta",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    count: 5,
  },
];

export default function CardList({ title }: { title: string }) {
  const list = title === "popularContent" ? popularContent : latestTranscitions;

  return (
    <div className="h-full w-full">
      <h1 className="font-medium text-lg ">{title}</h1>
      <div className="flex flex-col gap-2 h-full w-full">
        {list.map((item) => (
          <Card
            key={item.id}
            className=" flex  justify-between items-center flex-row p-4  w-full "
          >
            <div className=" h-12 rounded-sm relative overflow-hidden  w-12">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm "> {item.title} </CardTitle>
              <Badge variant={"outline"} className="p-x-3">
                {item.badge}{" "}
              </Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count}k</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
