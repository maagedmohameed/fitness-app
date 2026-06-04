import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Button } from "../ui/button";
import arrowBtnIcon from "../../../public/assets/icons/arrow-btn.svg";
import { useLocale } from "use-intl";

export default function SolidButton({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const locale = useLocale();
  const isFullWidth = className?.includes("w-full");

  return (
    <div
      className={cn(
        "relative inline-flex items-center max-w-full cursor-pointer",
        isFullWidth && "w-full"
      )}
    >
      <Button
        variant="default"
        className={cn(
          "bg-primary text-white px-5 py-5 rounded-lg hover:bg-primary/80",
          className,
          isFullWidth && "w-auto min-w-0 flex-1"
        )}
        {...props}
      >
        {children}
      </Button>
      <img
        src={arrowBtnIcon}
        alt="arrow"
        className={cn(
          "pointer-events-none shrink-0 h-12 w-12 -ms-4",
          locale === "ar" && "-rotate-90"
        )}
        aria-hidden
      />
    </div>
  );
}
