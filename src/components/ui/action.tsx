import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 disabled:pointer-events-none disabled:opacity-60 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-card hover:brightness-95",
        dark: "bg-foreground text-background hover:bg-foreground/90",
        outline: "border border-border bg-card text-foreground hover:border-accent hover:text-accent",
        onDark:
          "border border-surface-foreground/25 text-surface-foreground hover:border-surface-foreground/60 hover:bg-surface-foreground/10",
        ghost: "text-foreground hover:text-accent",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", block: false },
  },
);

type Variants = VariantProps<typeof actionVariants>;

export function ActionLink({
  className,
  variant,
  size,
  block,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(actionVariants({ variant, size, block }), className)} {...props} />;
}

export function ActionButton({
  className,
  variant,
  size,
  block,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(actionVariants({ variant, size, block }), className)} {...props} />;
}
