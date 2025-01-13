"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Palette, Wand2 } from "lucide-react";

const features = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate with popular AI models like OpenAI, Anthropic, and Google PaLM.",
    icon: Brain
  },
  {
    title: "Visual Builder",
    description: "Drag-and-drop interface for building landing pages without coding.",
    icon: Palette
  },
  {
    title: "API Management",
    description: "Easily manage and monitor your AI API usage and performance.",
    icon: Cpu
  },
  {
    title: "One-Click Deploy",
    description: "Deploy your AI-powered landing pages with a single click.",
    icon: Wand2
  }
];

export function LandingFeatures() {
  return (
    <section className="container mx-auto px-4 py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          强大的功能特性
        </h2>
        <p className="text-lg text-muted-foreground">
          为您的项目提供全方位的AI能力支持
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}