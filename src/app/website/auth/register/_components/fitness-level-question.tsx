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
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-6 w-full h-full text-white">
      <BackButton onClick={onBack} />

      <StepProgress current={7} max={7} />

      <div className="px-2 py-4 font-baloothambi2 text-center">
        <h1 className="font-black text-[clamp(2rem,4vw,3rem)] capitalize leading-none">
          {t("title")}
        </h1>
        <p className="mt-2 text-[clamp(1rem,2.8vw,1.25rem)] text-white/90">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col items-center px-0 py-6 sm:py-8 w-full max-w-[19.375rem]">
        <FormField
          control={control}
          name="fitnessLevel"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col items-center w-full">
              <FormLabel className="sr-only">Fitness Level</FormLabel>
              <FormControl>
                <div className="flex flex-col gap-3 w-full">
                  {fitnessOptions.map(option => {
                    const isSelected = field.value === option.value;
                    const label = t(`options.${option.key}`);

                    return (
                      <Button
                        key={option.value}
                        type="button"
                        variant="outline"
                        className={cn(
                          "relative flex justify-between items-center shadow-none px-4 py-2 border rounded-10xl w-full h-12 font-bold text-base transition-all",
                          isSelected
                            ? "border-primary bg-primary/20 text-white"
                            : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                        )}
                        onClick={() => field.onChange(option.value)}
                      >
                        <span className="pr-2 truncate">{label}</span>
                        <div
                          className={cn(
                            "flex justify-center items-center border rounded-full size-5 transition-all shrink-0",
                            isSelected
                              ? "border-primary bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                              : "border-white/40"
                          )}
                        >
                          {isSelected && (
                            <div className="bg-white rounded-full size-2" />
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
          className="shadow-lg mt-6 rounded-full w-full font-bold text-white text-lg"
          disabled={formState.isSubmitting || isPending}
        >
          {isPending ? <Loader2 className="size-5 animate-spin" /> : t("next")}
        </Button>
      </div>
    </section>
  );
}
