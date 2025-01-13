"use client";

import { LandingNavbar } from "@/components/landing/navbar";
import { LandingFooter } from "@/components/landing/footer";
import { Card } from "@/components/ui/card";
import { Building2, Users2, Target, Award } from "lucide-react";

const companyInfo = [
  {
    title: "我们的使命",
    description: "为企业提供最先进的AI解决方案，助力企业数字化转型。",
    icon: Target
  },
  {
    title: "我们的团队",
    description: "由行业专家组成的精英团队，拥有丰富的技术和业务经验。",
    icon: Users2
  },
  {
    title: "公司文化",
    description: "以创新为驱动，以客户为中心，追求卓越的服务品质。",
    icon: Building2
  },
  {
    title: "我们的成就",
    description: "获得多项行业认可和技术专利，服务上千家企业客户。",
    icon: Award
  }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight">关于我们</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              致力于为企业提供智能化解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {companyInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">联系我们</h2>
            <p className="text-muted-foreground">
              如果您有任何问题或建议，请随时与我们联系。<br />
              邮箱：contact@example.com
            </p>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
