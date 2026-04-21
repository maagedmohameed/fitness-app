import type { UserActivityLevel, UserGoal } from "@/lib/types/user";

export const GOALS_TRANSLATION_KEYS: UserGoal[] = [
  "gain weight",
  "lose weight",
  "gain more flexible",
  "learn the basic",
];

export const ACTIVITY_LEVELS_TRANSLATION_KEYS: UserActivityLevel[] = [
  "level1",
  "level2",
  "level3",
  "level4",
  "level5",
] as const;
