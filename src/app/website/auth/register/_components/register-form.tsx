// Validation and form libraries
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

// Register schema source
import { RegisterSchema } from "@/lib/schemes/register.schema";
import { useState } from "react";
import InfoUser from "./info-user";
import GenderQuestion from "./gender-question";
import AgeQuestion from "./age-question";
import WeightQuestion from "./weight-question";
import HeightQuestion from "./height-question";
import GoalQuestion from "./goal-question";
import ActivityLevelQuestion from "./activity-level-question";
import FitnessLevelQuestion from "./fitness-level-question";
import { useRegister } from "../hooks/use-register";
import type { T_RegisterFormValues } from "@/lib/types/auth";

// Infer TypeScript type directly from zod schema

export default function RegisterForm() {
  const [step, setStep] = useState(1);

  // Initialize form with zod resolver and default values
  const form = useForm<T_RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: undefined,
      height: 0,
      weight: 0,
      age: 0,
      goal: "",
      activityLevel: "",
    },
  });

  const { mutate, isPending, error } = useRegister();
  // Handle successful form submission
  const onSubmit = (values: T_RegisterFormValues) => {
    mutate(values);
  };

  return (
    <FormProvider {...form}>
      <form
        className="mx-auto  h-full"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        {/* Main register fields */}
        {step == 1 && <InfoUser onNext={() => setStep(2)} />}
        {step == 2 && (
          <GenderQuestion onBack={() => setStep(1)} onNext={() => setStep(3)} />
        )}
        {step == 3 && (
          <AgeQuestion onBack={() => setStep(2)} onNext={() => setStep(4)} />
        )}
        {step == 4 && (
          <WeightQuestion onBack={() => setStep(3)} onNext={() => setStep(5)} />
        )}
        {step == 5 && (
          <HeightQuestion onBack={() => setStep(4)} onNext={() => setStep(6)} />
        )}
        {step == 6 && (
          <GoalQuestion onBack={() => setStep(5)} onNext={() => setStep(7)} />
        )}
        {step == 7 && (
          <ActivityLevelQuestion
            onBack={() => setStep(6)}
            onNext={() => setStep(8)}
          />
        )}
        {step == 8 && (
          <FitnessLevelQuestion
            isPending={isPending}
            error={error?.message}
            onBack={() => setStep(7)}
            onNext={form.handleSubmit(onSubmit)}
          />
        )}

        {/* quistion */}
      </form>
    </FormProvider>
  );
}
