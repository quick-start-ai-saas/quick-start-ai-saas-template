"use client";

import { LandingNavbar } from "@/components/landing/navbar";
import { LandingFooter } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Image, Code, FileText, Sparkles } from "lucide-react";

const templates = [
  {
    name: "AI 助手对话",
    description: "构建智能对话助手，支持上下文理解和个性化回答",
    icon: MessageSquare,
    category: "对话助手",
    difficulty: "入门",
    features: [
      "自然语言处理",
      "上下文记忆",
      "个性化设置",
      "多轮对话"
    ]
  },
  {
    name: "图像生成与处理",
    description: "利用AI创建、编辑和优化图像的完整解决方案",
    icon: Image,
    category: "图像处理",
    difficulty: "中级",
    features: [
      "图像生成",
      "风格迁移",
      "图像增强",
      "批量处理"
    ]
  },
  {
    name: "代码智能助手",
    description: "AI驱动的代码生成、优化和重构工具",
    icon: Code,
    category: "开发工具",
    difficulty: "高级",
    features: [
      "代码生成",
      "代码重构",
      "Bug修复",
      "性能优化"
    ]
  },
  {
    name: "文本分析与总结",
    description: "智能文本处理系统，支持多语言分析和摘要生成",
    icon: FileText,
    category: "文本处理",
    difficulty: "中级",
    features: [
      "文本摘要",
      "情感分析",
      "关键词提取",
      "多语言支持"
    ]
  },
  {
    name: "智能推荐系统",
    description: "基于用户行为的个性化推荐引擎",
    icon: Sparkles,
    category: "推荐系统",
    difficulty: "高级",
    features: [
      "个性化推荐",
      "行为分析",
      "实时更新",
      "A/B测试"
    ]
  },
  {
    name: "通用AI模型训练",
    description: "快速构建和训练自定义AI模型的模板",
    icon: Brain,
    category: "模型训练",
    difficulty: "高级",
    features: [
      "模型训练",
      "数据预处理",
      "性能评估",
      "模型部署"
    ]
  }
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            AI 项目模板
          </h1>
          <p className="text-xl text-muted-foreground">
            快速启动您的 AI 项目，选择最适合的模板开始构建
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card key={template.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.category}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {template.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">难度:</span>
                    <span className="text-sm text-muted-foreground">{template.difficulty}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm font-medium">主要功能:</span>
                    <ul className="grid grid-cols-2 gap-2">
                      {template.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full">
                    使用此模板
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            所有模板均包含详细文档和示例代码，助您快速上手
          </p>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
