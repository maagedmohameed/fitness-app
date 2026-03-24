import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { Dumbbell } from "lucide-react";

const headingVariants = cva(
  "bg-clip-text bg-linear-to-b from-[#242424]/70 dark:from-[#FFFFFF]/20 via-[#242424]/10 dark:via-[#FFFFFF]/10 to-transparent dark:to-transparent w-full font-bold text-transparent text-7xl uppercase leading-none tracking-wide",
  {
    variants: {
      variant: {
        start: "text-start",
        center: "text-center",
      },
    },
    defaultVariants: {
      variant: "start",
    },
  }
);

const subHeadingVariants = cva(
  "flex items-center gap-2.5 w-full font-semibold text-primary dark:text-primary text-sm",
  {
    variants: {
      variant: {
        start: "justify-start",
        center: "justify-center",
      },
    },
    defaultVariants: {
      variant: "start",
    },
  }
);

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(headingVariants({ variant, className }))}
      //   style={{
      //     WebkitTextStroke: "1px rgba(255,255,255,0.25)",
      //     color: "transparent",
      //   }}
      {...props}></h2>
  );
});
SectionTitle.displayName = "SectionTitle";

const SectionSubTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3"> & VariantProps<typeof subHeadingVariants>
>(({ className, variant, children, ...props }, ref) => {
  return (
    <h3 ref={ref} className={cn(subHeadingVariants({ variant, className }), "")} {...props}>
      <Dumbbell className="rotate-45" size={34} strokeWidth={1} />
      {children}
    </h3>
  );
});
SectionSubTitle.displayName = "SectionSubTitle";

export { SectionTitle, SectionSubTitle };
