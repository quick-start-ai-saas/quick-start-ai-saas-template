"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give time for the persisted state to be loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!user) {
        router.push("/login");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [user, router]);

  // Show nothing while checking the auth state
  if (isLoading) {
    return null;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}