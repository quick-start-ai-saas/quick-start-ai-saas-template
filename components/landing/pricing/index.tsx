"use client";

import { PricingCard } from "./pricing-card";
import { PricingHeader } from "./pricing-header";
import { pricingPlans } from "./pricing-data";

export function LandingPricing() {
  return (
    <section className="container py-24 sm:py-32">
      <PricingHeader />
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-3 items-start">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            isPopular={index === 1}
          />
        ))}
      </div>
    </section>
  );
}