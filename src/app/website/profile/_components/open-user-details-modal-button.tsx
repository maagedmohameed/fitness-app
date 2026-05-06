import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ChangeUserDetailsFormFields } from "@/lib/types/auth";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/hooks/language.context";
import { useAuth } from "@/hooks/auth-context";
import {
  ACTIVITY_LEVELS_TRANSLATION_KEYS,
  GOALS_TRANSLATION_KEYS,
} from "../_constants/profile.constant";
import { Field, FieldGroup, FieldSet, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { changeUserDetailsSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl } from "@/components/ui/form";
import { useEditUserProfile } from "../_hooks/use-edit-user-profile";
import { toast } from "sonner";
import { setItem } from "@/lib/utils/cookie";
import { HorizontalWheelPicker } from "@/components/shared/horizontal-wheel-picker";

export function OpenUserDetailsModalButton({
  detailName,
}: {
  detailName: "goal" | "activityLevel" | "weight";
}) {
  // Translation
  const t = useTranslations("profile.user-details");

  // Hooks
  const { locale, dir } = useLanguage();
  const { user, setUser } = useAuth();

  // Mutation
  const { mutate: editUserProfile } = useEditUserProfile();

  // States
  const [currentStep, setCurrentStep] = useState(0);
  const [open, setOpen] = useState(false);

  const form = useForm<ChangeUserDetailsFormFields>({
    resolver: zodResolver(changeUserDetailsSchema),
    defaultValues: {
      goal: user.goal ?? "lose weight",
      activityLevel: user.activityLevel ?? "level1",
      weight: user.weight ?? 60,
    },
  });

  // Variables
  const DETAILS_NAMES = ["goal", "activityLevel", "weight"] as const;
  const BackButtonIcon = locale === "ar" ? MoveRight : MoveLeft;

  const steps: {
    title: string;
    description: string;
    fields: (keyof ChangeUserDetailsFormFields)[];
  }[] = [
    {
      title: t("goal.label"),
      description: t("goal.description"),
      fields: ["goal"],
    },
    {
      title: t("activityLevel.label"),
      description: t("activityLevel.description"),
      fields: ["activityLevel"],
    },
    {
      title: t("weight.label"),
      description: t("weight.description"),
      fields: ["weight"],
    },
  ];

  const currentForm = steps[DETAILS_NAMES.indexOf(detailName)];

  const isLastStep = currentStep === steps.length - 1;

  //  Handlers
  const handleNextButton = async () => {
    const isValid = await form.trigger(currentForm.fields);

    if (!isValid) return;

    if (isLastStep) {
      form.handleSubmit(onSubmit)();
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handleBackButton = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  //  Functions
  const onSubmit: SubmitHandler<ChangeUserDetailsFormFields> = values => {
    editUserProfile(values, {
      onSuccess({ user }) {
        setUser(user);

        setItem("user", user);

        toast.success(t("validation.toast.success"));

        setOpen(false);
      },
      onError() {
        toast.error(t("validation.toast.error"));
      },
    });
  };

  const renderCurrentStepContent = () => {
    return (
      <>
        {/* Step 0: Goal */}
        <div style={{ display: currentStep === 0 ? "block" : "none" }}>
          <Controller
            name="goal"
            control={form.control}
            render={({ field, fieldState }) => {
              const isInvalid = fieldState.invalid;
              return (
                <FieldSet data-invalid={isInvalid}>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={value => {
                      form.setValue(
                        "goal",
                        value as ChangeUserDetailsFormFields["goal"],
                        { shouldValidate: true, shouldDirty: true }
                      );
                    }}
                    aria-invalid={isInvalid}
                    dir={dir}
                    className="gap-4 mx-auto w-[90%] font-baloothambi2 rtl:font-cairo"
                  >
                    {GOALS_TRANSLATION_KEYS.map(goal => (
                      <Field
                        key={goal}
                        className="bg-muted/20 px-4 py-2 border has-checked:border border-border-input has-checked:border-primary rounded-10xl h-12 text-primary-foreground has-checked:text-primary"
                      >
                        <Label
                          htmlFor={goal}
                          className="flex justify-between items-center font-bold text-base capitalize"
                        >
                          {t(`goal.${goal}`)}
                          <RadioGroupItem
                            value={goal}
                            id={goal}
                            dir={dir}
                            className="border border-border-input"
                          />
                        </Label>
                      </Field>
                    ))}
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              );
            }}
          />
        </div>

        {/* Step 1: Activity Level */}
        <div style={{ display: currentStep === 1 ? "block" : "none" }}>
          <Controller
            name="activityLevel"
            control={form.control}
            render={({ field, fieldState }) => {
              const isInvalid = fieldState.invalid;
              return (
                <FieldSet data-invalid={isInvalid}>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={isInvalid}
                    dir={dir}
                    className="gap-4 mx-auto w-[90%] font-baloothambi2 rtl:font-cairo"
                  >
                    {ACTIVITY_LEVELS_TRANSLATION_KEYS.map(level => (
                      <Field
                        key={level}
                        className="bg-muted/20 px-4 py-2 border has-checked:border border-border-input has-checked:border-primary rounded-10xl h-12 text-primary-foreground has-checked:text-primary"
                      >
                        <Label
                          htmlFor={level}
                          className="flex justify-between items-center font-bold text-base capitalize"
                        >
                          {t(`activityLevel.${level}`)}
                          <RadioGroupItem
                            value={level}
                            id={level}
                            dir={dir}
                            className="border border-border-input"
                          />
                        </Label>
                      </Field>
                    ))}
                  </RadioGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              );
            }}
          />
        </div>

        {/* Step 2: Weight */}
        <div style={{ display: currentStep === 2 ? "block" : "none" }}>
          <Controller
            name="weight"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <FormControl data-invalid={fieldState.invalid}>
                  <HorizontalWheelPicker
                    min={30}
                    max={250}
                    value={field.value}
                    onValueChange={val => field.onChange(val)}
                  />
                </FormControl>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </>
            )}
          />
        </div>
      </>
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={isOpen => {
        setOpen(isOpen);

        if (!isOpen) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <button
          className="rtl:font-cairo underline uppercase cursor-pointer"
          onClick={() => {
            setCurrentStep(DETAILS_NAMES.indexOf(detailName));
          }}
        >
          {t("change-button")}
        </button>
      </DialogTrigger>
      <DialogContent aria-describedby="" className="p-10 rounded-[2.5rem]">
        {/* Content  */}
        <section className="flex flex-col gap-10">
          {/* Back Container */}
          {currentStep > 0 && (
            <div className="flex flex-col gap-2.5">
              {/* Back button */}
              <button
                className="flex justify-center items-center gap-2.5 border-[0.09375rem] border-gray-200 rounded-[2.5rem] size-10"
                onClick={handleBackButton}
              >
                {/* lucide/move-left */}
                <BackButtonIcon
                  strokeWidth={1.5}
                  className="text-muted-foreground"
                  size={24}
                />
              </button>
            </div>
          )}

          {/* Form  */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
              {/* Header */}
              <header className="flex flex-col justify-center gap-2 rtl:gap-4 font-baloothambi2 rtl:font-cairo text-muted-foreground text-center capitalize">
                {/* Title text  */}
                <DialogTitle className="font-extrabold text-5xl leading-none">
                  {currentForm.title}
                </DialogTitle>

                {/* Description Text  */}
                <DialogDescription className="text-2xl">
                  {currentForm.description}
                </DialogDescription>
              </header>

              {/* Content */}
              <div className="space-y-6 mx-auto w-[70%]">
                <FieldGroup>{renderCurrentStepContent()}</FieldGroup>

                {/* Change Profile Details button */}
                <Button
                  className="w-full rtl:font-cairo font-extrabold text-base"
                  type="button"
                  onClick={handleNextButton}
                >
                  {isLastStep ? t("save-button") : t("next-button")}
                </Button>
              </div>
            </form>
          </Form>
        </section>
      </DialogContent>
    </Dialog>
  );
}
