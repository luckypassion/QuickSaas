"use client";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonClassVariants =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "gray"
  | "ghost"
  | null
  | undefined;

const buttonVariantsClasses = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary dark:text-branding-green bg-transparent hover:bg-branding-green/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        gray: "bg-branding-gray-300 text-branding-gray-300-foreground hover:bg-branding-gray-300/80", // Looks same in both the themes
        ghost: "hover:bg-secondary-foreground/10",
        link: "dark:text-branding-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-11",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-11",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariantsClasses> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, fullWidth, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariantsClasses({ variant, fullWidth, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariantsClasses as buttonVariants };
