import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Button } from "../ui/button";
import arrowBtnIcon from "../../../public/assets/icons/arrow-btn.svg";
import { useLocale } from "use-intl";

export default function SolidButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const locale = useLocale();
  const isFullWidth = className?.includes("w-full");

  return (
    <div
      className={cn(
        "inline-flex relative items-center max-w-full cursor-pointer",
        isFullWidth && "w-full",
      )}
    >
      <Button
        variant="default"
        className={cn(
          "bg-primary hover:bg-primary/80 px-4 py-2 rounded-10xl font-rubik font-semibold text-[#f3f3f4]",
          className,
          isFullWidth && "w-auto min-w-0 flex-1",
        )}
        {...props}
      >
        {children}
      </Button>
      <img
        src={arrowBtnIcon}
        alt="arrow"
        className={cn(
          "-ms-4 w-12 h-12 pointer-events-none shrink-0",
          locale === "ar" && "-rotate-90",
        )}
        aria-hidden
      />
    </div>
  );
}
