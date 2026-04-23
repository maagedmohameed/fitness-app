export type UserGoal =
  | "gain weight"
  | "lose weight"
  | "gain more flexible"
  | "learn the basic";
export type UserActivityLevel =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5";

declare type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  goal: UserGoal;
  activityLevel: UserActivityLevel;
  photo: string;
  createdAt: string;
  passwordChangedAt?: string;
};

export type UserDetails = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  goal: UserGoal;
  activityLevel: UserActivityLevel;
  photo: string;
};

export type UserProfileDetails = Pick<
  User,
  "goal" | "activityLevel" | "weight"
>;

export type UserDetailsNames = ["goal", "activityLevel", "weight"];

export type UserProfileDetail = {
  [K in keyof UserProfileDetails]: Pick<UserProfileDetails, K>;
}[keyof UserProfileDetails];
