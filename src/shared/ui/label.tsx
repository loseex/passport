"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/app/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "shadcnflex shadcnitems-center shadcngap-2 shadcntext-sm shadcnleading-none shadcnfont-medium shadcnselect-none group-data-[disabled=true]:shadcnpointer-events-none group-data-[disabled=true]:shadcnopacity-50 peer-disabled:shadcncursor-not-allowed peer-disabled:shadcnopacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
