declare type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
  createdAt: string;
};

export type UserProfileDetails = Pick<
  User,
  "goal" | "activityLevel" | "weight"
>;

export type UserProfileDetail = {
  [K in keyof UserProfileDetails]: Pick<UserProfileDetails, K>;
}[keyof UserProfileDetails];
