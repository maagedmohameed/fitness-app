import { z } from "zod";
import type { changeUserDetailsSchema } from "../schemas/auth.schema";

export type LogoutResponse = {
  message: string;
};

// Fields Types
export type ChangeUserDetailsFormFields = z.infer<
  typeof changeUserDetailsSchema
>;
