import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function InfoUser({ onNext }: { onNext: () => void }) {
  const t = useTranslations("register.info");
  const tv = useTranslations("register.validation");
  const { control, formState, trigger } = useFormContext();

  // Social providers displayed below the form.
  const social = ["apple", "facebook", "Google"];

  // Validate current step fields before moving forward.
  const GoToFirstQuestion = async () => {
    const valid = await trigger(
      ["firstName", "lastName", "email", "password"],
      {
        shouldFocus: true,
      },
    );

    if (!valid) return;

    onNext();
  };

  return (
    <section className=" flex flex-col items-center">
      {/* Registration intro heading. */}
      <div className="px-2 py-4 text-center font-baloothambi2">
        <p className="text-[clamp(1rem,2vw,1.5rem)] leading-[clamp(1.5rem,3vw,2.5rem)]">
          {t("greeting")}
        </p>

        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">
          {t("create-account")}
        </h2>
      </div>
      <div className="w-full max-w-132 flex flex-col gap-4  bg-foreground/10 lg:border lg:border-muted rounded-[3.125rem] items-center  p-5 lg:p-10">
        <h1 className="font-extrabold text-2xl text-center ">
          {t("register-title")}
        </h1>
        <div className="max-w-101.5 w-full h-full   flex flex-col justify-between ">
          {/* First-step account fields. */}
          <div className="gap-4 flex flex-col justify-between">
            <FormField
              control={control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("first-name")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("first-name")}
                      variant="user"
                      autoComplete="given-name"
                      spellCheck={false}
                      aria-invalid={fieldState.invalid}
                      disabled={formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="px-2" role="alert">
                    {fieldState.error?.message && tv(fieldState.error.message)}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("last-name")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("last-name")}
                      variant="userRound"
                      autoComplete="family-name"
                      spellCheck={false}
                      aria-invalid={fieldState.invalid}
                      disabled={formState.isSubmitting}
                    />
                  </FormControl>

                  <FormMessage className="px-2" role="alert">
                    {fieldState.error?.message && tv(fieldState.error.message)}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
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
                      disabled={formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="px-2" role="alert">
                    {fieldState.error?.message && tv(fieldState.error.message)}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
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
                      autoComplete="new-password"
                      spellCheck={false}
                      aria-invalid={fieldState.invalid}
                      disabled={formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="px-2" role="alert">
                    {fieldState.error?.message && tv(fieldState.error.message)}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          {/* Recovery action shortcut. */}
          <Link
            to="/auth/forget-password"
            className="block ml-auto text-primary text-base font-semibold hover:underline"
          >
            {t("forget-password")}
          </Link>

          {/* Divider between form and social actions. */}
          <div className="mt-6 flex items-center gap-4 text-white/70">
            <span aria-hidden="true" className="h-px flex-1 bg-muted" />
            <span className="text-sm">{t("or")}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-muted" />
          </div>

          {/* Social registration buttons. */}
          <div
            className="mt-6 flex items-center justify-center gap-5"
            aria-label="Social sign up options"
          >
            {social.map((item) => (
              <button
                key={item}
                type="button"
                className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-foreground/30 text-white transition-colors hover:bg-foreground/50"
                disabled={formState.isSubmitting}
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

          {/* Main action for this step. */}
          <Button
            onClick={GoToFirstQuestion}
            type="button"
            className="py-2 mt-6 w-full rounded-full bg-primary text-base font-extrabold text-white"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? t("submitting") : t("submit")}
          </Button>

          {/* Link for users who already have an account. */}
          <p className="text-center text-white/80 text-base">
            {t("already-have-account")}{" "}
            <Link
              to={"/auth/login"}
              className="text-primary font-semibold hover:underline"
            >
              {t("login")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
