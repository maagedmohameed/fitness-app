import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils/tailwind-merge";
import { Mars, Venus } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import StepProgress from "./step-progress";
import { useTranslations } from "use-intl";
import BackButton from "../../../../../components/shared/back-button";

type GenderQuestionProps = {
  onNext: () => void;
  onBack: () => void;
};

const genderOptions = [
  {
    key: "male",
    value: "male" as const,
    icon: Mars,
  },
  {
    key: "female",
    value: "female" as const,
    icon: Venus,
  },
];

export default function GenderQuestion({
  onNext,
  onBack,
}: GenderQuestionProps) {
  const t = useTranslations("register.gender");
  const tv = useTranslations("register.validation");
  const { control, formState, trigger } = useFormContext();
  const selectedGender = useWatch({ control, name: "gender" });

  // Validate the gender step before moving to the next question.
  const goToNextQuestion = async () => {
    const valid = await trigger("gender", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-4 text-white sm:px-6">
      <BackButton onClick={onBack} />

      <StepProgress current={1} max={7} />
      <div className="px-2 py-4 text-center font-baloothambi2">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-none">
          {t("title")}
        </h1>
        <p className="text-[clamp(1rem,2.8vw,1.75rem)] text-white/90">
          {t("description")}
        </p>
      </div>

      <div className=" flex w-full max-w-3xl flex-col items-center rounded-[2.5rem]   px-6 py-6  sm:px-8 sm:py-10">
        {/* Gender selection cards. */}
        <FormField
          control={control}
          name="gender"
          render={({ field, fieldState }) => (
            <FormItem className="flex w-full flex-col items-center">
              <FormLabel className="sr-only">{t("label")}</FormLabel>
              <FormControl>
                <div className="flex w-full flex-wrap items-center justify-center gap-5 sm:gap-8">
                  {genderOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = field.value === option.value;
                    const label = t(option.key as "male" | "female");

                    return (
                      <Button
                        key={option.value}
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        aria-pressed={isSelected}
                        aria-label={`${t("select")} ${label}`}
                        className={cn(
                          "flex h-24 w-24 flex-col rounded-full border-2 shadow-none transition-all ",
                          isSelected
                            ? "border-primary bg-primary text-white hover:bg-primary/90"
                            : "border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10",
                        )}
                        disabled={formState.isSubmitting}
                        onClick={() => field.onChange(option.value)}
                      >
                        <Icon className="size-12" />
                        <span className="text-sm font-bold">{label}</span>
                      </Button>
                    );
                  })}
                </div>
              </FormControl>

              {/* Validation feedback for the gender field. */}
              <FormMessage className="mt-4 text-center" role="alert">
                {fieldState.error?.message && tv(fieldState.error.message)}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Primary action for the current step. */}
        <Button
          type="button"
          variant={selectedGender ? "default" : "destructive"}
          onClick={goToNextQuestion}
          className="mt-6 w-full max-w-md rounded-full  text-lg font-extrabold   sm:text-xl"
          disabled={formState.isSubmitting}
        >
          {t("next")}
        </Button>
      </div>
    </section>
  );
}
