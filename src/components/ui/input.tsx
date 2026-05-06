import * as React from "react";
import { Eye, EyeOff, Lock, Mail, Phone, User, UserRound } from "lucide-react";

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
          "flex items-center gap-3 bg-transparent p-4 border border-input rounded-10xl w-full text-white",
          className
        )}
      >
        {LeftIcon ? (
          <LeftIcon
            className="size-5 text-white/70 shrink-0"
            aria-hidden="true"
          />
        ) : null}

        <input
          ref={ref}
          type={resolvedType}
          data-slot="input"
          className="bg-transparent disabled:opacity-50 border-0 outline-none w-full min-w-0 text-white placeholder:text-white/60 md:text-sm text-base disabled:cursor-not-allowed disabled:pointer-events-none"
          {...props}
        />

        {password ? (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="inline-flex justify-center items-center text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
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
  }
);

Input.displayName = "Input";

export { Input };
export type { InputVariant, InputProps };
