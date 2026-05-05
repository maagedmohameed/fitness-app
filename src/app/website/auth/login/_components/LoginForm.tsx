import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";
import {
  LoginSchema,
  type T_LoginFormValues,
} from "@/lib/schemas/login.schema";
import { useLogin } from "../_hooks/use-login";
import { ErrorMessage } from "@/components/shared/error-message";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const t = useTranslations("register.info");
  const tv = useTranslations("register.validation");
  const tForget = useTranslations("forget-password.common");

  // Social providers displayed below the form.
  const social = ["apple", "facebook", "Google"];

  const { mutate, isPending, error } = useLogin();

  const form = useForm<T_LoginFormValues>({
    resolver: zodResolver(LoginSchema(tv)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: T_LoginFormValues) => {
    mutate(values);
  };

  return (
    <div className="w-full max-w-132 flex flex-col gap-4 bg-foreground/10 lg:border lg:border-muted rounded-[3.125rem] items-center p-5 lg:p-10 mt-5">
      <h1 className="font-extrabold text-2xl text-center ">{t("login")}</h1>
      <div className="max-w-101.5 w-full h-full flex flex-col justify-between ">
        <FormProvider {...form}>
          <form
            className="gap-4 flex flex-col justify-between"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("email")}
                      type="email"
                      variant="email"
                      autoComplete="email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      aria-invalid={fieldState.invalid}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage className="px-2" role="alert">
                    {fieldState.error?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("password")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("password")}
                      password
                      variant="lock"
                      autoComplete="current-password"
                      spellCheck={false}
                      aria-invalid={fieldState.invalid}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage className="px-2" role="alert">
                    {fieldState.error?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Recovery action shortcut. */}
            <Link
              to="/auth/forget-password"
              className="block ml-auto text-primary text-base font-semibold hover:underline "
            >
              {t("forget-password")}
            </Link>

            {/* Divider between form and social actions. */}
            <div className="mt-6 flex items-center w-2/3 mx-auto gap-4 text-white/70">
              <span aria-hidden="true" className="h-px flex-1  bg-muted" />
              <span className="text-sm">{t("or")}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-muted" />
            </div>

            {/* Social registration buttons. */}
            <div
              className="mt-3 flex items-center justify-center gap-5"
              aria-label="Social login options"
            >
              {social.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-foreground/30 text-white transition-colors hover:bg-foreground/50"
                  disabled={isPending}
                  aria-label={t("social-continue", { name: item })}
                >
                  <img
                    src={`/assets/icons/${item}.svg`}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            {error && <ErrorMessage message={error.message} className="mt-5" />}

            {/* Main action for this step. */}
            <Button
              type="submit"
              className=" mt-3 w-full rounded-full bg-primary text-base font-extrabold text-white"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                t("login")
              )}
            </Button>

            {/* Link for users who don't have an account. */}
            <p className="text-center -mt-4 text-white/80 text-base ">
              {tForget("no-account")}{" "}
              <Link
                to="/auth/register"
                className="text-primary font-semibold hover:underline"
              >
                {tForget("create-yours")}
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
