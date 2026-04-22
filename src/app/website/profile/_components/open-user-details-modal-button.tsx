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
import { useForm, type SubmitHandler } from "react-hook-form";
import { changeUserDetailsSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/hooks/language.context";
import { useAuth } from "@/hooks/auth-context";
import {
  ACTIVITY_LEVELS_TRANSLATION_KEYS,
  GOALS_TRANSLATION_KEYS,
} from "../_constants/profile.constant";

const DETAILS_NAMES = ["goal", "activityLevel", "weight"];

export function OpenUserDetailsModalButton({
  detailName,
}: {
  detailName: string;
}) {
  // Translation
  const t = useTranslations("profile.user-details");

  // Hooks
  const { locale } = useLanguage();
  const { user } = useAuth();

  // Mutation
  // const {
  //   isPending: isForgotPending,
  //   error: forgotPasswordError,
  //   forgotPassword,
  // } = useEditProfile();
  // States
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<ChangeUserDetailsFormFields>({
    resolver: zodResolver(changeUserDetailsSchema),
    defaultValues: {
      goal: user.goal ?? "lose weight",
      activityLevel: user.activityLevel ?? "level1",
      weight: user.weight ?? 0,
    },
  });

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

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

  const currentForm = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  //  Handlers
  const handleNextButton = async () => {
    if (!isLastStep) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBackButton = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  //  Functions

  const onSubmit: SubmitHandler<ChangeUserDetailsFormFields> = async values => {
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    // toast.success("Form successfully submitted");

    console.log(values);
  };

  const renderCurrentStepContent = () => {
    switch (currentStep) {
      case 0: {
        return (
          <FormField
            control={form.control}
            name={"goal"}
            render={({ field }) => (
              <RadioGroup
                dir={dir}
                className="gap-4 mx-auto w-[90%] font-baloothambi2 rtl:font-cairo"
                onValueChange={field.onChange}
                value={field.value}
              >
                {GOALS_TRANSLATION_KEYS.map(goal => (
                  <FormItem
                    key={goal}
                    className="flex justify-between items-center bg-muted/20 px-4 py-2 border has-checked:border border-border-input has-checked:border-primary rounded-[1.25rem] h-12 text-primary-foreground has-checked:text-primary"
                  >
                    {/* Label */}
                    <Label
                      htmlFor={goal}
                      className="font-bold text-base capitalize"
                    >
                      {t(`goal.${goal}`)}
                    </Label>

                    {/* Input Field */}
                    <FormControl>
                      <RadioGroupItem
                        dir={dir}
                        value={goal}
                        id={goal}
                        className="border border-border-input"
                      />
                    </FormControl>
                  </FormItem>
                ))}
              </RadioGroup>
            )}
          />
        );
      }

      case 1: {
        return (
          <FormField
            control={form.control}
            name={"activityLevel"}
            render={({ field }) => (
              <RadioGroup
                dir={dir}
                className="gap-4 mx-auto w-[90%] font-baloothambi2 rtl:font-cairo"
                onValueChange={field.onChange}
                value={field.value}
              >
                {ACTIVITY_LEVELS_TRANSLATION_KEYS.map(level => (
                  <FormItem
                    key={level}
                    className="flex justify-between items-center bg-muted/20 px-4 py-2 border has-checked:border border-border-input has-checked:border-primary rounded-[1.25rem] h-12 text-primary-foreground has-checked:text-primary"
                  >
                    {/* Label */}
                    <Label
                      htmlFor={level}
                      className="font-bold text-base capitalize"
                    >
                      {t(`activityLevel.${level}`)}
                    </Label>

                    {/* Input Field */}
                    <FormControl>
                      <RadioGroupItem
                        dir={dir}
                        value={level}
                        id={level}
                        className="border border-border-input"
                      />
                    </FormControl>
                  </FormItem>
                ))}
              </RadioGroup>
            )}
          />
        );
      }

      case 2: {
        return (
          <>
            <FormField
              control={form.control}
              name="weight"
              render={() => (
                <FormItem className="rtl:font-cairo">
                  {/* Label */}
                  <FormLabel></FormLabel>

                  {/* Input Field */}
                  <FormControl></FormControl>
                </FormItem>
              )}
            />
          </>
        );
      }

      default: {
        return null;
      }
    }
  };

  // Effects

  return (
    <Dialog>
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
                <MoveLeft
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
                {renderCurrentStepContent()}

                {/* Footer  */}
                {/* Forgot password button */}
                <Button
                  className="w-full rtl:font-cairo font-extrabold text-base"
                  type={isLastStep ? "submit" : "button"}
                  onClick={isLastStep ? undefined : handleNextButton}
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
