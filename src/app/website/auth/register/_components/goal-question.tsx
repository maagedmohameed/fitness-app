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
import { goalOptions } from "@/lib/consts/register";
import BackButton from "../../../../../components/shared/back-button";

type GoalQuestionProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function GoalQuestion({ onNext, onBack }: GoalQuestionProps) {
  const t = useTranslations("register.goal");
  const tv = useTranslations("register.validation");
  const { control, formState, trigger } = useFormContext();
  const selectedGoal = useWatch({ control, name: "goal" });

  // Validate the goal step before moving to the next question.
  const goToNextQuestion = async () => {
    const valid = await trigger("goal", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-6 w-full h-full text-white">
      <BackButton onClick={onBack} />

      {/* Goal step heading. */}
      <StepProgress current={5} max={7} />
      <div className="px-2 py-4 font-baloothambi2 text-center">
        <h1 className="font-black text-[clamp(2rem,4vw,3rem)] capitalize leading-none">
          {t("title")}
        </h1>
        <p className="mt-2 text-[clamp(1rem,2.8vw,1.25rem)] text-white/90">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col items-center px-0 py-6 sm:py-8 w-full max-w-77.5">
        {/* Goal selection list. */}
        <FormField
          control={control}
          name="goal"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col items-center w-full">
              <FormLabel className="sr-only">Goal</FormLabel>
              <FormControl>
                <div className="flex flex-col gap-3 w-full">
                  {goalOptions.map(option => {
                    const isSelected = field.value === option.value;
                    const label = t(`options.${option.key}`);

                    return (
                      <Button
                        key={option.value}
                        type="button"
                        variant="outline"
                        aria-pressed={isSelected}
                        aria-label={`${t("select")} ${label}`}
                        className={cn(
                          "relative flex justify-between items-center shadow-none px-4 py-2 border rounded-[1.25rem] w-full h-12 font-bold text-base transition-all",
                          isSelected
                            ? "border-primary bg-primary/20 text-white"
                            : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                        )}
                        disabled={formState.isSubmitting}
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

              {/* Validation feedback for the goal field. */}
              <FormMessage className="mt-4 text-center" role="alert">
                {fieldState.error?.message && tv(fieldState.error.message)}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Primary action for the current step. */}
        <Button
          type="button"
          variant={selectedGoal ? "default" : "destructive"}
          onClick={goToNextQuestion}
          className="shadow-lg mt-8 rounded-full w-full font-bold text-white text-lg"
          disabled={formState.isSubmitting}
        >
          {t("next")}
        </Button>
      </div>
    </section>
  );
}
