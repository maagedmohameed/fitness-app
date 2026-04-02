import { cn } from "@/lib/utils/tailwind-merge";
import { LogOut, RefreshCcw, type LucideProps } from "lucide-react";

type UserSettingCardProps = {
  // name?: string;
  children: React.ReactNode;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
export default function UserSettingCard({
  // name = "change password",
  children,
  Icon = RefreshCcw,
}: UserSettingCardProps) {
  return (
    <div
      className={cn(
        Icon === LogOut && "col-start-2",
        "flex flex-col justify-center items-center gap-4 p-8 border border-primary-foreground rounded-[1rem] w-52.75 h-40",
        "font-semibold text-foreground text-lg capitalize leading-none tracking-[0.26px]"
      )}
    >
      {/* Dynamic icon  */}
      <Icon className="text-primary" />

      {/* Dynamic content  */}
      {children}
    </div>
  );
}
