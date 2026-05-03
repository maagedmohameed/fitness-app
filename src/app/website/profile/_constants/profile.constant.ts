import type { UserActivityLevel, UserGoal } from "@/lib/types/user";

/** Matches register `goalOptions` / API stored values (kebab-case). */
export const GOALS_TRANSLATION_KEYS: UserGoal[] = [
  "gain-weight",
  "lose-weight",
  "get-fitter",
  "gain-more-flexible",
  "learn-the-basic",
];

/** Older clients or cached user payloads used spaced phrases — map to API shape. */
const LEGACY_GOAL_TO_API: Record<string, UserGoal> = {
  "gain weight": "gain-weight",
  "lose weight": "lose-weight",
  "gain more flexible": "gain-more-flexible",
  "learn the basic": "learn-the-basic",
};

export function normalizeProfileGoal(goal: string | undefined): UserGoal {
  if (!goal) return "lose-weight";
  if ((GOALS_TRANSLATION_KEYS as readonly string[]).includes(goal)) {
    return goal as UserGoal;
  }
  return LEGACY_GOAL_TO_API[goal] ?? "lose-weight";
}

export const ACTIVITY_LEVELS_TRANSLATION_KEYS: UserActivityLevel[] = [
  "level1",
  "level2",
  "level3",
  "level4",
  "level5",
] as const;
