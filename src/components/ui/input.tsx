import * as React from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils/tailwind-merge";

const iconMap = {
  user: User,
  userRound: UserRound,
  email: Mail,
  lock: Lock,
  phone: Phone,
} as const;

type InputVariant = keyof typeof iconMap;

type InputProps = Omit<React.ComponentProps<"input">, "type"> & {
  password?: boolean;
  variant?: InputVariant;
  type?: React.HTMLInputTypeAttribute;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, password = false, variant, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const LeftIcon = variant ? iconMap[variant] : null;

    const resolvedType = password ? (showPassword ? "text" : "password") : type;

    return (
      <div
        className={cn(
          "flex  p-4 w-full items-center gap-3 rounded-[1.25rem] border border-input bg-transparent  text-white",
          className,
        )}
      >
        {LeftIcon ? (
          <LeftIcon className="size-5 shrink-0 text-white/70" aria-hidden="true" />
        ) : null}

        <input
          ref={ref}
          type={resolvedType}
          data-slot="input"
          className="w-full min-w-0 border-0 bg-transparent text-base text-white placeholder:text-white/60 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          {...props}
        />

        {password ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center text-white/70 transition-colors hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-5" aria-hidden="true" />
            ) : (
              <Eye className="size-5" aria-hidden="true" />
            )}
          </button>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
export type { InputVariant, InputProps };
