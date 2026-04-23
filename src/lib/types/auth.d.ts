import { z } from "zod";
import {
  changeUserDetailsSchema,
  changeUserPasswordSchema,
} from "../schemas/auth.schema";
import type { User } from "./user";

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
