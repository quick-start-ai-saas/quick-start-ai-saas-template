import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes, forwardRef } from "react"

const headingVariants = cva(
  "scroll-m-20 tracking-tight",
  {
    variants: {
      variant: {
        h1: "text-4xl font-extrabold lg:text-5xl",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-semibold",
        h4: "text-xl font-semibold",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  }
)

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  title?: string
  description?: string
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, title, description, ...props }, ref) => {
    const Comp = variant || "h1"
    return (
      <div className="space-y-0.5">
        <Comp
          ref={ref}
          className={cn(headingVariants({ variant, className }))}
          {...props}
        >
          {title}
        </Comp>
        {description && (
          <p className="text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    )
  }
)

Heading.displayName = "Heading"

export { Heading, headingVariants }
