"use client";

import { FeatureCard } from "./feature-card";
import { FeatureSectionHeader } from "./feature-section-header";
import { features } from "./feature-data";

export function LandingFeatures() {
  return (
    <section className="container py-24 sm:py-32">
      <FeatureSectionHeader />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}