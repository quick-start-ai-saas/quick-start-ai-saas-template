"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "基础版",
    price: "¥79",
    interval: "/月",
    description: "适合个人开发者和初创团队",
    features: [
      "每月 15,000 次 API 调用",
      "基础 AI 模型访问",
      "10 个项目模板",
      "基础数据分析报告",
      "电子邮件支持",
      "API 文档访问"
    ],
    buttonText: "开始使用",
    buttonVariant: "outline" as const
  },
  {
    name: "专业版",
    price: "¥299",
    interval: "/月",
    description: "适合成长期企业和专业团队",
    features: [
      "每月 100,000 次 API 调用",
      "高级 AI 模型访问",
      "无限项目模板",
      "高级数据分析",
      "优先客户支持",
      "完整 API 访问",
      "自定义集成支持"
    ],
    buttonText: "免费试用",
    buttonVariant: "default" as const,
    featured: true
  }
];

export function LandingPricing() {
  return (
    <section className="container mx-auto px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">简单透明的价格方案</h2>
        <p className="text-lg text-muted-foreground">
          选择最适合您业务需求的方案，助力您的AI创新之旅
        </p>
      </div>
      
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`flex flex-col ${
              plan.featured 
                ? "border-primary shadow-lg scale-105" 
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.interval}</span>
              </div>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          所有方案均包含 14 天免费试用期。无需信用卡。
        </p>
      </div>
    </section>
  );
}