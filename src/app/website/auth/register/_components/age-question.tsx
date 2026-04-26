import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import StepProgress from "./step-progress";
import { HorizontalWheelPicker } from "@/components/shared/horizontal-wheel-picker";
import { useTranslations } from "use-intl";
import BackButton from "../../../../../components/shared/back-button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type AgeQuestionProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function AgeQuestion({ onNext, onBack }: AgeQuestionProps) {
  const t = useTranslations("register.age");
  const tv = useTranslations("register.validation");
  const { control, formState, setValue, trigger } = useFormContext();
  const selectedAge = useWatch({ control, name: "age" });

  // Seed the age field with a sensible starting value for the picker UI.
  useEffect(() => {
    if (!selectedAge || selectedAge <= 0) {
      setValue("age", 25, { shouldDirty: false, shouldValidate: false });
    }
  }, [selectedAge, setValue]);

  // Validate the age step before moving forward.
  const goToNextQuestion = async () => {
    const valid = await trigger("age", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative h-full flex w-full flex-col justify-center items-center px-4 text-white sm:px-6">
      <BackButton onClick={onBack} />

      {/* Step progress indicator. */}
      <div className="mb-8 flex w-full items-center justify-center max-w-md mx-auto ">
        <StepProgress current={2} max={7} />
      </div>

      {/* Age step heading. */}
      <header className="text-center font-baloothambi2">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-extrabold capitalize ">
          {t("title")}
        </h2>
        <p className="text-[1.125rem] font-normal capitalize leading-[1.4] text-white/80">
          {t("description")}
        </p>
      </header>

      <div className=" flex w-full max-w-4xl flex-col items-center rounded-[2.5rem] px-4 py-6 sm:mt-12 sm:px-6 sm:py-8">
        {/* Age picker label. */}
        <p className=" text-xl font-semibold text-primary  sm:text-2xl">
          {t("label")}
        </p>

        {/* The interactive horizontal wheel picker. */}
        <FormField
          control={control}
          name="age"
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Age</FormLabel>
              <FormControl>
                <HorizontalWheelPicker
                  min={13}
                  max={100}
                  value={field.value}
                  onValueChange={(val) => field.onChange(val)}
                  ariaLabelPrefix={t("select")}
                />
              </FormControl>
              <FormMessage className="mt-4 text-center">
                {fieldState.error?.message && tv(fieldState.error.message)}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Primary action for the current step. */}
        <Button
          type="button"
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
