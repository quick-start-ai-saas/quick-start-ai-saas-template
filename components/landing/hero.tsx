"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingHero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 pointer-events-none transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl animate-in fade-in slide-in-from-bottom-3 duration-1000"
            >
              Build AI-Powered Landing Pages in Minutes
            </h1>
            <p 
              className="mt-6 text-lg leading-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200"
            >
              Create stunning landing pages with integrated AI capabilities. No coding required.
              Deploy your AI SaaS project faster than ever.
            </p>
            <div 
              className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500"
            >
              <Button size="lg" asChild>
                <Link href="/register">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/templates">
                  View Templates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}