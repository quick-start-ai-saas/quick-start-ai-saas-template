import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - AI SaaS",
  description: "Learn how to use our AI SaaS platform effectively",
};

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>Welcome to our comprehensive documentation. Here you'll find everything you need to know about using our AI SaaS platform effectively.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p className="text-muted-foreground">Detailed explanation of feature 1 and how to use it effectively.</p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p className="text-muted-foreground">Detailed explanation of feature 2 and how to use it effectively.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>Learn how to integrate our services with your applications using our REST API.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">How do I get started?</h3>
              <p className="text-muted-foreground">Step by step guide to getting started with our platform.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">What are the pricing options?</h3>
              <p className="text-muted-foreground">Information about our different pricing tiers and what they include.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
