import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Button } from "../ui/button";
const arrowBtnIcon = "/assets/icons/arrow-btn.svg";

export default function SolidButton({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative inline-flex items-center max-w-full overflow-hidden cursor-pointer">
      <Button variant="default" className={cn("bg-primary text-white px-5 py-5 rounded-lg hover:bg-primary/80", className)} {...props}>
        {children}
      </Button>
      <img src={arrowBtnIcon} alt="arrow" className="pointer-events-none h-10 w-10 sm:h-12 sm:w-12 -ms-3 sm:-ms-4 shrink-0" aria-hidden />
    </div>
  );
}
