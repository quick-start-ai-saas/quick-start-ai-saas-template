"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden border-none shadow-none bg-transparent transition-all hover:bg-accent/50">
      <CardHeader>
        <div className="relative z-10">
          <div className="rounded-lg bg-primary/10 p-3 w-fit">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground relative z-10">{description}</p>
      </CardContent>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}