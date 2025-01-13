"use client";

import { UserNav } from "./user-nav";
import { ThemeToggle } from "./theme-toggle";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-6">
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}