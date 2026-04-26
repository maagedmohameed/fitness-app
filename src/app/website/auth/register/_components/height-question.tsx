import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext, useWatch } from "react-hook-form";
import StepProgress from "./step-progress";
import { useTranslations } from "use-intl";
import { useEffect } from "react";
import { HorizontalWheelPicker } from "@/components/shared/horizontal-wheel-picker";
import BackButton from "../../../../../components/shared/back-button";

type HeightQuestionProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function HeightQuestion({
  onNext,
  onBack,
}: HeightQuestionProps) {
  const t = useTranslations("register.height");
  const tv = useTranslations("register.validation");
  const { control, formState, setValue, trigger } = useFormContext();
  const selectedHeight = useWatch({ control, name: "height" });

  // Seed the height field with a sensible starting value for the picker UI.
  useEffect(() => {
    if (!selectedHeight || selectedHeight <= 0) {
      setValue("height", 170, { shouldDirty: false, shouldValidate: false });
    }
  }, [selectedHeight, setValue]);

  // Validate the height step before moving forward.
  const goToNextQuestion = async () => {
    const valid = await trigger("height", { shouldFocus: true });
    if (!valid) return;
    onNext();
  };

  return (
    <section className="relative h-full flex w-full flex-col justify-center items-center px-4 text-white sm:px-6">
      <BackButton onClick={onBack} />

      {/* Step progress indicator. */}
      <div className="mb-8 flex w-full max-w-md items-center justify-center mx-auto">
        <StepProgress current={4} max={7} />
      </div>

      {/* Height step heading. */}
      <header className="text-center font-baloothambi2">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-extrabold capitalize ">
          {t("title")}
        </h2>
        <p className="text-[1.125rem] font-normal capitalize leading-[1.4] text-white/80">
          {t("description")}
        </p>
      </header>

      <div className=" flex w-full max-w-4xl flex-col items-center rounded-[2.5rem] px-4 py-6 sm:mt-12 sm:px-6 sm:py-8">
        {/* Height picker label. */}
        <p className=" text-xl font-semibold text-primary  sm:text-2xl">
          {t("label")}
        </p>

        {/* The interactive horizontal wheel picker. */}
        <FormField
          control={control}
          name="height"
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Height</FormLabel>
              <FormControl>
                <HorizontalWheelPicker
                  min={100}
                  max={250}
                  value={field.value}
                  onValueChange={(val) => field.onChange(val)}
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
