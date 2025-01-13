"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingPlan } from "./pricing-data";

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export function PricingCard({ plan, isPopular }: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col",
      isPopular && "border-primary shadow-lg scale-105"
    )}>
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-4">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={isPopular ? "default" : "outline"}
        >
          {plan.buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}