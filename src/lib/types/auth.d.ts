import { z } from "zod";
import {
  changeUserDetailsSchema,
  changeUserPasswordSchema,
} from "../schemas/auth.schema";

export type LogoutResponse = {
  message: string;
};
export type ForgotPasswordResponse = {
  token: string;
};

// Fields Types
export type ChangeUserDetailsFormFields = z.infer<
  typeof changeUserDetailsSchema
>;
export type ChangeUserPasswordFormFields = z.infer<
  ReturnType<typeof changeUserPasswordSchema>
>;
