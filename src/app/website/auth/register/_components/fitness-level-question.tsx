"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils/tailwind-merge";
import { Loader2 } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import StepProgress from "./step-progress";
import { useTranslations } from "use-intl";
import { fitnessOptions } from "@/lib/consts/register";
import BackButton from "../../../../../components/shared/back-button";
import { ErrorMessage } from "@/components/shared/error-message";

type FitnessLevelQuestionProps = {
  onNext: () => void;
  onBack: () => void;
  isPending?: boolean;
  error?: string | null;
};

export default function FitnessLevelQuestion({
  onNext,
  onBack,
  isPending,
  error,
}: FitnessLevelQuestionProps) {
  const t = useTranslations("register.fitness-level");
  const tv = useTranslations("register.validation");
  const { control, formState, trigger } = useFormContext();
  const selectedLevel = useWatch({ control, name: "fitnessLevel" });

  const goToNextQuestion = async () => {
    const valid = await trigger("fitnessLevel", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-4 text-white sm:px-6">
      <BackButton onClick={onBack} />

      <StepProgress current={7} max={7} />

      <div className="px-2 py-4 text-center font-baloothambi2">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-black capitalize leading-none">
          {t("title")}
        </h1>
        <p className="mt-2 text-[clamp(1rem,2.8vw,1.25rem)] text-white/90">
          {t("description")}
        </p>
      </div>

      <div className="flex w-full max-w-[19.375rem] flex-col items-center px-0 py-6 sm:py-8">
        <FormField
          control={control}
          name="fitnessLevel"
          render={({ field, fieldState }) => (
            <FormItem className="flex w-full flex-col items-center">
              <FormLabel className="sr-only">Fitness Level</FormLabel>
              <FormControl>
                <div className="flex w-full flex-col gap-3">
                  {fitnessOptions.map((option) => {
                    const isSelected = field.value === option.value;
                    const label = t(`options.${option.key}`);

                    return (
                      <Button
                        key={option.value}
                        type="button"
                        variant="outline"
                        className={cn(
                          "relative flex h-12 w-full items-center justify-between rounded-[1.25rem] border px-4 py-2 text-base font-bold shadow-none transition-all",
                          isSelected
                            ? "border-primary bg-primary/20 text-white"
                            : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
                        )}
                        onClick={() => field.onChange(option.value)}
                      >
                        <span className="truncate pr-2">{label}</span>
                        <div
                          className={cn(
                            "flex size-5 shrink-0 items-center justify-center rounded-full border transition-all",
                            isSelected
                              ? "border-primary bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                              : "border-white/40",
                          )}
                        >
                          {isSelected && (
                            <div className="size-2 rounded-full bg-white" />
                          )}
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </FormControl>

              <FormMessage className="mt-4 text-center" role="alert">
                {fieldState.error?.message && tv(fieldState.error.message)}
              </FormMessage>
            </FormItem>
          )}
        />

        {error && <ErrorMessage message={error} className="mt-5" />}

        <Button
          type="submit"
          variant={selectedLevel ? "default" : "destructive"}
          onClick={goToNextQuestion}
          className="mt-6 w-full rounded-full text-lg font-bold text-white shadow-lg"
          disabled={formState.isSubmitting || isPending}
        >
          {isPending ? <Loader2 className="size-5 animate-spin" /> : t("next")}
        </Button>
      </div>
    </section>
  );
}
