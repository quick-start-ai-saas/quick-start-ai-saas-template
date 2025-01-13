"use client";

import { LandingNavbar } from "@/components/landing/navbar";
import { LandingFooter } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      "API 文档访问",
      "社区支持",
      "标准 SLA"
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
      "自定义集成支持",
      "优先漏洞修复",
      "专属账户经理",
      "团队协作功能"
    ],
    buttonText: "免费试用",
    buttonVariant: "default" as const,
    featured: true
  },
  {
    name: "企业版",
    price: "联系我们",
    interval: "",
    description: "适合大型企业和机构",
    features: [
      "无限 API 调用",
      "专属 AI 模型定制",
      "私有化部署选项",
      "定制化AI训练",
      "专属技术架构师",
      "24/7 企业级支持",
      "企业级 SLA",
      "季度业务评估",
      "多团队管理",
      "安全合规保障",
      "专属解决方案"
    ],
    buttonText: "联系销售",
    buttonVariant: "outline" as const
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            简单透明的价格方案
          </h1>
          <p className="text-xl text-muted-foreground">
            选择最适合您业务需求的方案，助力您的AI创新之旅
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`p-8 ${
                plan.featured 
                  ? "border-primary shadow-lg scale-105" 
                  : ""
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.interval}</span>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            所有方案均包含 14 天免费试用期。无需信用卡。
          </p>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
