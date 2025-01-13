"use client";

import { LandingNavbar } from "@/components/landing/navbar";
import { LandingFooter } from "@/components/landing/footer";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Smartphone,
  Code,
  Palette,
  LineChart
} from "lucide-react";

const features = [
  {
    title: "快速响应",
    description: "基于最新的AI技术，提供毫秒级的响应速度，让您的业务永不停歇。",
    icon: Zap
  },
  {
    title: "安全可靠",
    description: "企业级安全保障，数据加密传输，确保您的信息安全。",
    icon: Shield
  },
  {
    title: "移动优先",
    description: "完美适配各种设备，随时随地处理业务。",
    icon: Smartphone
  },
  {
    title: "开发友好",
    description: "提供完整的API文档和SDK，快速集成到您的系统中。",
    icon: Code
  },
  {
    title: "界面美观",
    description: "精心设计的用户界面，提供极致的用户体验。",
    icon: Palette
  },
  {
    title: "数据分析",
    description: "强大的数据分析功能，助您做出明智的商业决策。",
    icon: LineChart
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            强大的功能特性
          </h1>
          <p className="text-xl text-muted-foreground">
            为您的业务提供全方位的解决方案
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
