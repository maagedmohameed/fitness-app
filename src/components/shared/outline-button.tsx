import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Button } from "../ui/button";
import arrowBtnIcon from "../../../public/assets/icons/arrow-btn.svg";
import { useLocale } from "use-intl";

export default function OutlineButton({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const locale = useLocale();

  return (
    <div className="relative inline-flex items-center max-w-full overflow-hidden cursor-pointer">
      <Button variant="default" className={cn("bg-transparent text-primary px-5 py-5 border border-primary rounded-lg hover:bg-white", className)} {...props}>
        {children}
      </Button>
      <img
        src={arrowBtnIcon}
        alt="arrow"
        className={cn(
          "pointer-events-none h-12 w-12 -ms-4",
          locale === "ar" && "-rotate-90"
        )}
        aria-hidden
      />
    </div>
  );
}