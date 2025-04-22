import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/lib/utils"

const buttonVariants = cva(
  "shadcninline-flex shadcnitems-center shadcnjustify-center shadcngap-2 shadcnwhitespace-nowrap shadcnrounded-md shadcntext-sm shadcnfont-medium shadcntransition-all disabled:shadcnpointer-events-none disabled:shadcnopacity-50 [&_svg]:shadcnpointer-events-none [&_svg:not([class*=size-])]:shadcnsize-4 shadcnshrink-0 [&_svg]:shadcnshrink-0 shadcnoutline-none focus-visible:shadcnborder-ring focus-visible:shadcnring-ring/50 focus-visible:shadcnring-[3px] aria-invalid:shadcnring-destructive/20 dark:aria-invalid:shadcnring-destructive/40 aria-invalid:shadcnborder-destructive",
  {
    variants: {
      variant: {
        default:
          "shadcnbg-primary shadcntext-primary-foreground shadcnshadow-xs hover:shadcnbg-primary/90",
        destructive:
          "shadcnbg-destructive shadcntext-white shadcnshadow-xs hover:shadcnbg-destructive/90 focus-visible:shadcnring-destructive/20 dark:focus-visible:shadcnring-destructive/40 dark:shadcnbg-destructive/60",
        outline:
          "shadcnborder shadcnbg-background shadcnshadow-xs hover:shadcnbg-accent hover:shadcntext-accent-foreground dark:shadcnbg-input/30 dark:shadcnborder-input dark:hover:shadcnbg-input/50",
        secondary:
          "shadcnbg-secondary shadcntext-secondary-foreground shadcnshadow-xs hover:shadcnbg-secondary/80",
        ghost:
          "hover:shadcnbg-accent hover:shadcntext-accent-foreground dark:hover:shadcnbg-accent/50",
        link: "shadcntext-primary shadcnunderline-offset-4 hover:shadcnunderline",
      },
      size: {
        default: "shadcnh-9 shadcnpx-4 shadcnpy-2 has-[>svg]:shadcnpx-3",
        sm: "shadcnh-8 shadcnrounded-md shadcngap-1.5 shadcnpx-3 has-[>svg]:shadcnpx-2.5",
        lg: "shadcnh-10 shadcnrounded-md shadcnpx-6 has-[>svg]:shadcnpx-4",
        icon: "shadcnsize-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
