"use client";
import Link from "next/link";
import React from "react";
import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DarkModeToggleTheme } from "./DarkModeToggleTheme";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="flex items-center justify-between w-full p-4 sticky bg-background z-50">
      {/*     LEFT */}
      <SidebarTrigger />
      {/* <Button onClick={toggleSidebar}>Coustm Button</Button> */}
      {/* RIGHT */}
      <div className="flex items-center gap-2 md:gap-4">
        <Link href={"/"}>Dashboard</Link>

        {/* dark mode */}
        <DarkModeToggleTheme />

        {/* USER MENU DROPDOWN*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Fallbak</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuItem>
              <User className="mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2" />
              Setting
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* for scrren reader  */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              {" "}
              <SquareMenu /> <span className="sr-only">Open Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
