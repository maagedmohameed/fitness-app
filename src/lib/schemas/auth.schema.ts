import {
  ACTIVITY_LEVELS_TRANSLATION_KEYS,
  GOALS_TRANSLATION_KEYS,
} from "@/app/website/profile/_constants/profile.constant";
import * as z from "zod";
import type { Translation } from "../types/global";

export const changeUserDetailsSchema = z.object({
  // Goal
  goal: z.enum(GOALS_TRANSLATION_KEYS),

  // ActivityLevel
  activityLevel: z.enum(ACTIVITY_LEVELS_TRANSLATION_KEYS),

  // Weight
  weight: z.number(),
});
export const changeUserPasswordSchema = (t: Translation) =>
  z
    .object({
      password: z
        .string()
        .nonempty(t("password-required"))
        .regex(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
          `${t("strong-password")}`
        ),
      newPassword: z.string().nonempty(t("rePassword-required")),
    })
    .refine(data => data.password === data.newPassword, {
      message: t("password-confirmPassword"),
      path: ["newPassword"],
    });
