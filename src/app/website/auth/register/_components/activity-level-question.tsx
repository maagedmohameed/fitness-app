import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils/tailwind-merge";

import { useFormContext, useWatch } from "react-hook-form";
import StepProgress from "./step-progress";
import { useTranslations } from "use-intl";
import { activityOptions } from "@/lib/consts/register";
import BackButton from "./back-button";


type ActivityLevelQuestionProps = {
  onNext: () => void;
  onBack: () => void;
  isPending?: boolean;
};

export default function ActivityLevelQuestion({
  onNext,
  onBack,
}: ActivityLevelQuestionProps) {
  const t = useTranslations("register.activity-level");
  const tv = useTranslations("register.validation");
  const { control, trigger } = useFormContext();
  const selectedLevel = useWatch({ control, name: "activityLevel" });

  // Validate the activity level step before moving forward.
  const goToNextQuestion = async () => {
    const valid = await trigger("activityLevel", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-4 text-white sm:px-6">
      <BackButton onClick={onBack} />

      <StepProgress current={6} max={7} />

      <div className="px-2 py-4 text-center font-baloothambi2">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-black capitalize leading-none">
          {t("title")}
        </h1>
        <p className="mt-2 text-[clamp(1rem,2.8vw,1.25rem)] text-white/90">
          {t("description")}
        </p>
      </div>

      <div className="flex w-full max-w-[19.375rem] flex-col items-center px-0 py-6 sm:py-8">
        {/* Activity level selection list. */}
        <FormField
          control={control}
          name="activityLevel"
          render={({ field, fieldState }) => (
            <FormItem className="flex w-full flex-col items-center">
              <FormLabel className="sr-only">Activity Level</FormLabel>
              <FormControl>
                <div className="flex w-full flex-col gap-3">
                  {activityOptions.map((option) => {
                    const isSelected = field.value === option.value;
                    const label = t(`options.${option.key}` as any);

                    return (
                      <Button
                        key={option.value}
                        type="button"
                        variant="outline"
                        aria-pressed={isSelected}
                        aria-label={`${t("select")} ${label}`}
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

              {/* Validation feedback for the field. */}
              <FormMessage className="mt-4 text-center" role="alert">
                {fieldState.error?.message && tv(fieldState.error.message)}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type="button"
          variant={selectedLevel ? "default" : "destructive"}
          onClick={goToNextQuestion}
          className="mt-6 w-full rounded-full text-lg font-bold text-white shadow-lg"
        >
          {t("next")}
        </Button>
      </div>
    </section>
  );
}
