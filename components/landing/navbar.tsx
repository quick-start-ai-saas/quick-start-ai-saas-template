"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function LandingNavbar() {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">AI SaaS</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/features" className="text-muted-foreground hover:text-primary">
              功能特性
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-primary">
              价格方案
            </Link>
            <Link href="/templates" className="text-muted-foreground hover:text-primary">
              模板中心
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">切换主题</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                浅色模式
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                深色模式
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                跟随系统
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden md:flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">登录</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/dashboard">控制台</Link>
            </Button>
            <Button asChild>
              <Link href="/register">立即开始</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/features" className="text-muted-foreground hover:text-primary">
              功能特性
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-primary">
              价格方案
            </Link>
            <Link href="/templates" className="text-muted-foreground hover:text-primary">
              模板中心
            </Link>
            <hr className="my-2" />
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/login">登录</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/dashboard">控制台</Link>
            </Button>
            <Button asChild className="justify-start">
              <Link href="/register">立即开始</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}