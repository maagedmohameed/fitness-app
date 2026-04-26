import type z from "zod";
import type { RegisterSchema } from "../schemes/register.schema";
export type T_RegisterFormValues = z.infer<typeof RegisterSchema>;
import { z } from "zod";
import {
  changeUserDetailsSchema,
  changeUserPasswordSchema,
} from "../schemas/auth.schema";
import type { User } from "./user";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female";
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  _id: string;
  createdAt: string;
};

export type RegisterResponse = {
  message: string;
  user: User;
  token: string;
};

export type LogoutResponse = {
  message: string;
};
export type ForgotPasswordResponse = {
  token: string;
};
export type editProfileResponse = {
  user: User;
};

// Fields Types
export type ChangeUserDetailsFormFields = z.infer<
  typeof changeUserDetailsSchema
>;
export type ChangeUserPasswordFormFields = z.infer<
  ReturnType<typeof changeUserPasswordSchema>
>;
