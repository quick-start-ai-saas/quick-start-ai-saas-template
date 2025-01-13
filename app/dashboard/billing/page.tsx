import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <Heading title="Billing" description="Manage your billing and subscription" />
        <Separator className="my-6" />
      </div>
      <div className="container mx-auto py-10">
        {/* Billing content will go here */}
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-medium">Current Plan</h2>
          <p className="text-sm text-muted-foreground mt-2">
            You are currently on the free plan
          </p>
        </div>
      </div>
    </div>
  )
}
