"use client";

import { cn } from "@/lib/utils";
import { SidebarNav } from "./sidebar-nav";
import { SidebarFooter } from "./sidebar-footer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={cn(
      "border-r bg-muted/10 h-full transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="h-full flex flex-col">
        <div className="p-4 flex justify-between items-center">
          {!isCollapsed && <span className="font-bold">Dashboard</span>}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <SidebarNav isCollapsed={isCollapsed} />
        <SidebarFooter isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}