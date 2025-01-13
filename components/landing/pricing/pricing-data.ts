export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for trying out our platform",
    buttonText: "Start Free",
    features: [
      "1 Landing Page",
      "Basic AI Integration",
      "Community Support",
      "Basic Analytics",
      "Standard Templates",
      "1GB Storage"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and teams",
    buttonText: "Get Started",
    features: [
      "Unlimited Landing Pages",
      "Advanced AI Integration",
      "Priority Support",
      "Advanced Analytics",
      "Custom Domain",
      "Team Collaboration",
      "Custom Templates",
      "10GB Storage"
    ]
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with custom needs",
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Custom AI Model Integration",
      "24/7 Premium Support",
      "Custom Analytics",
      "Multiple Custom Domains",
      "Advanced Team Controls",
      "Custom Branding",
      "Unlimited Storage"
    ]
  }
];