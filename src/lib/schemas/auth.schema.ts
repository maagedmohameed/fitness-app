import {
  ACTIVITY_LEVELS_TRANSLATION_KEYS,
  GOALS_TRANSLATION_KEYS,
} from "@/app/website/profile/_constants/profile.constant";
import * as z from "zod";

export const changeUserDetailsSchema = z.object({
  // Goal
  goal: z.enum(GOALS_TRANSLATION_KEYS),

  // ActivityLevel
  activityLevel: z.enum(ACTIVITY_LEVELS_TRANSLATION_KEYS),

  // Weight
  weight: z.number(),
});
