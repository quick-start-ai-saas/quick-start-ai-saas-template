import { Brain, Cpu, Palette, Wand2, Zap, Shield, BarChart, Users } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
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
  },
  {
    title: "Real-time Updates",
    description: "Make changes to your landing pages and see them instantly.",
    icon: Zap
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security for your API keys and user data.",
    icon: Shield
  },
  {
    title: "Analytics",
    description: "Detailed insights into your landing page performance and AI usage.",
    icon: BarChart
  },
  {
    title: "Team Collaboration",
    description: "Work together with your team to create and manage landing pages.",
    icon: Users
  }
];