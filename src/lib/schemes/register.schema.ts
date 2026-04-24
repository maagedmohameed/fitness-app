import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(1, "firstNameRequired"),
  lastName: z.string().min(1, "lastNameRequired"),
  email: z.string().min(1, "emailRequired").email("emailInvalid"),
  password: z
    .string()
    .min(8, "passwordMin")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "passwordPattern",
    ),
  gender: z.enum(["male", "female"] as const, {
    message: "genderRequired",
  }),
  goal: z.string().min(1, "goalRequired"),
  height: z.number().min(1, "heightRequired"),
  weight: z.number().min(1, "weightRequired"),
  activityLevel: z.string().min(1, "activityLevelRequired"),
  fitnessLevel: z.string().min(1, "fitnessLevelRequired"),
  age: z.number().min(13, "ageMin"),
});
