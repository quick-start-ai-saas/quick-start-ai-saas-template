"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileCode,
  Key,
  BarChart
} from "lucide-react";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Templates",
    icon: FileCode,
    href: "/dashboard/templates",
  },
  {
    label: "API Keys",
    icon: Key,
    href: "/dashboard/api-keys",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/dashboard/analytics",
  },
  {
    label: "Users",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

interface SidebarNavProps {
  isCollapsed: boolean;
}

export function SidebarNav({ isCollapsed }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex-1 overflow-auto">
      <nav className="grid gap-1 px-2">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center"
            )}
            asChild
          >
            <Link href={route.href}>
              <route.icon className="h-4 w-4 mr-3" />
              {!isCollapsed && route.label}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
}