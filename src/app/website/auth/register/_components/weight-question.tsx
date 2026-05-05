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

type WeightQuestionProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function WeightQuestion({
  onNext,
  onBack,
}: WeightQuestionProps) {
  const t = useTranslations("register.weight");
  const tv = useTranslations("register.validation");
  const { control, formState, setValue, trigger } = useFormContext();
  const selectedWeight = useWatch({ control, name: "weight" });

  // Seed the weight field with a sensible starting value for the picker UI.
  useEffect(() => {
    if (!selectedWeight || selectedWeight <= 0) {
      setValue("weight", 70, { shouldDirty: false, shouldValidate: false });
    }
  }, [selectedWeight, setValue]);

  // Validate the weight step before moving forward.
  const goToNextQuestion = async () => {
    const valid = await trigger("weight", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-6 w-full h-full text-white">
      <BackButton onClick={onBack} />

      {/* Step progress indicator. */}
      <div className="flex justify-center items-center mx-auto mb-8 w-full max-w-md">
        <StepProgress current={3} max={7} />
      </div>

      {/* Weight step heading. */}
      <header className="font-baloothambi2 text-center">
        <h2 className="font-extrabold text-[clamp(2rem,6vw,3rem)] capitalize">
          {t("title")}
        </h2>
        <p className="font-normal text-[1.125rem] text-white/80 capitalize leading-[1.4]">
          {t("description")}
        </p>
      </header>

      <div className="flex flex-col items-center sm:mt-12 px-4 sm:px-6 py-6 sm:py-8 rounded-[2.5rem] w-full max-w-4xl">
        {/* Weight picker label. */}
        <p className="font-semibold text-primary text-xl sm:text-2xl">
          {t("label")}
        </p>

        {/* The interactive horizontal wheel picker. */}
        <FormField
          control={control}
          name="weight"
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Weight</FormLabel>
              <FormControl>
                <HorizontalWheelPicker
                  min={30}
                  max={250}
                  value={field.value}
                  onValueChange={val => field.onChange(val)}
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
          className="shadow-lg mt-6 rounded-full w-full max-w-md font-extrabold text-lg sm:text-xl"
          disabled={formState.isSubmitting}
        >
          {t("next")}
        </Button>
      </div>
    </section>
  );
}
