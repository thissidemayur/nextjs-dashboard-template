import CardList from "@/app/components/CardList";
import { Badge } from "@/components/ui/badge";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, BadgeCheck, Shield, TrendingUp } from "lucide-react";
import React from "react";

import EditUser from "@/app/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LineChartComponent } from "@/app/components/charts/LineChartComponent";
import BreadcrubNav from "@/app/components/BreadcrubNav";

const breadcrubNavItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Users", href: "/users" },
  { label: "John Doe" }, // last item, no link
];

export default function UserPage() {
  return (
    <div>
      {/* BreadCrub */}
      <BreadcrubNav items={breadcrubNavItems} />

      {/* CONTAINER */}
      <div className=" ml-4 flex flex-col md:flex-row gap-3 mt-5 pr-5 pl-2">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* USER BADGE CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">User Badges</h1>
              <EditUser />
            </div>
            <div className="flex gap-4 mt-3">
              {/* badge1 */}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={50}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin{" "}
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* badge2 */}
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={50}
                    className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin User has access to all features and can manage users{" "}
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* badge3 */}
              <HoverCard>
                <HoverCardTrigger>
                  <Award
                    size={50}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awareded</h1>
                  <p className="text-sm text-muted-foreground">
                    These user is awarded for their contribution
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* badge4 */}
              <HoverCard>
                <HoverCardTrigger>
                  <TrendingUp
                    size={50}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is popular in the community
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Information</h1>
            <div className="flex flex-col gap-2 mb-0">
              <p className="text-muted-foreground">Profile completion</p>
              <Progress value={30} />
            </div>

            {/* user info */}
            <div className="mt-5 flex-col gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-3 ">
                <span className="font-bold">UserName</span>
                <span className="">Mayur Pal</span>
              </div>
              <div className="flex items-center gap-3 ">
                <span className="font-bold">Phone Number</span>
                <span className="">+91 1234567898</span>
              </div>
              <div className="flex items-center gap-3 ">
                <span className="font-bold">Email</span>
                <span className="">thissidemayur@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 ">
                <span className="font-bold">Role</span>
                <span className="">
                  <Badge>Admin</Badge>
                </span>
              </div>
              <p className="text-xs mt-3 ">Joined at 12July,2024</p>
            </div>
          </div>

          {/* CARD LIST CONTAINER */}
          <ScrollArea className="border h-[450px]  bg-primary-foreground p-4 rounded-lg">
            <CardList title="recentTransition" />
          </ScrollArea>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex-1 space-y-6">
          {/* USER INFO CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">About User</h1>
            <div className="flex items-center gap-2 space-y-2">
              <Avatar className="size-12">
                <AvatarImage src={"https://github.com/shadcn.png"} />
                <AvatarFallback>Fallback</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Mayur pal</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              tenetur porro enim quae eos blanditiis possimus magnam sint ipsum
              mollitia. Fugit commodi unde doloremque eligendi! Vero quas earum
              rerum aspernatur.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold mb-4">User Activity</h1>
            <LineChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
